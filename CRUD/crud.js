$(document).ready(function() {
//((((((((((((((((((((((((((((((((((((((((((((((((((CREATE-READ))))))))))))))))))))))))))))))))))))))))))))))))))
    //Cache la liste
    $('.liste').hide();
    //Permet de lancer la fonction lorsqu'on 'submit' le formulaire
    $('form').submit(function () {
        console.log('form submitted !');  
        //Affiche la liste apres avoir soumis le formulaire
        $('.liste').show();
        getData();
        //A bien mettre apres la fonction Get Data sinon efface.
        //Effacer le formulaire
        $('input').val('');
    });
});
    // Envoi les données
    function getData(){
        var prenom = $('#prenom').val();
        var nom = $('#nom').val();
        var email = $('#email').val();
        // Lance la fonction pour bloquer les doublons d'email
        if(verifMail(email) == false){
            $('#error').html('Le mail existe deja');
            $('#error').removeClass('d-none'); // Enleve le D-none de #error
        }else{
            //Appel notre fonction  
            insertStudent(prenom,nom,email)
            $('#error').addClass('d-none');
        };
    };
    //Permet de creer une ligne pour chaque entrée dans le 'form'
    //Attention si on creer une var en jquery. Si ma nouvelle var la reutilise cela doit etre en jquery aussi. 
    function insertStudent(firstname,lastname,email){
        var table = document.querySelector('.table');
        var newLine = table.insertRow();
        var compteur = table.rows.length-1;
        newLine.insertCell(0).innerHTML = compteur; //Probleme quand Update ou Delete
        newLine.insertCell(1).innerHTML = firstname;
        newLine.insertCell(2).innerHTML = lastname;
        newLine.insertCell(3).innerHTML = email;
        newLine.insertCell(4).innerHTML = "<i class='bi bi-pencil-fill' id='"+compteur+"' onclick='modif(this);'></i>";
        newLine.insertCell(5).innerHTML = "<i class='bi bi-trash' id='"+compteur+"' onclick='suppr(this);'></i>";
    };
    //Verification si le mail existe deja
    function verifMail(email){
        var table = document.querySelector(".table");
        //Variable qui parcoure chaque ligne de la table
        var nberLine = table.rows.length;
        //Commence par 1 car sinon il va commencer par le TH
        for(let index = 1; index < nberLine; index++) {
            var email_list = table.getElementsByTagName('tr')[index].cells[3].innerHTML
            if (email_list == email){
                return false;
            };
        };
    };
//((((((((((((((((((((((((((((((((((((((((((((((((((((UPDATE))))))))))))))))))))))))))))))))))))))))))))))))))))

function modif(params){ // On peut creer un changement de la value du bouton 'ajouter' en 'modifier' pour pas remove.
    var table = $('.table tr')[params.id];
    // Permet de remplir les champs dans les input. 
    $('#prenom').val(table.cells[1].innerHTML);
    $('#nom').val(table.cells[2].innerHTML);
    $('#email').val(table.cells[3].innerHTML);
    //Efface la ligne pour permettre de modifier car si le mail est doublons ca va pas marcher. 
    table.remove();
};
//(((((((((((((((((((((((((((((((((((((((((((((((((((((((DELETE)))))))))))))))))))))))))))))))))))))))))))))))))))))))
function suppr(params){
    var table = $('.table tr')[params.id];
    table.remove();
};