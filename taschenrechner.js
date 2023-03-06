$(document).ready(function() {
    var input = $('#input');

    $('button').click(function() {
        var buttonVal = $(this).html();
        var inputVal = input.val();

        if (buttonVal == 'Clear') {
            input.val('');
        } else if (buttonVal == 'back') {
            input.val(inputVal.slice(0, -1));
        } else if (buttonVal == '=') {
            input.val(eval(inputVal));
        } else if (buttonVal == 'root') {
            input.val(Math.sqrt(parseFloat(inputVal)));
        } else if (buttonVal == 'x2') {
            input.val(Math.pow(parseFloat(inputVal), 2));    
        } else {
            input.val(inputVal + buttonVal);
        }
    });
});