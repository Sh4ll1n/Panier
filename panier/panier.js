$(document).ready(function(){
    

    $('#qtym').on('input',function(){
        $('#totalm').val($('#qtym').val() * $('#pricem').val())
    });
    $('#qtyt').on('input',function(){
        $('#totalt').val($('#qtyt').val() * $('#pricet').val())
    });
    $('#qtymu').on('input',function(){
        $('#totalmu').val($('#qtymu').val() * $('#pricemu').val())
    });
    $('#qtya').on('input',function(){
        $('#totala').val($('#qtya').val() * $('#pricea').val())
    });
    
    $('#toto').on('input', function(){
        
    });
    
    
});