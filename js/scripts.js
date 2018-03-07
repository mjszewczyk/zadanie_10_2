$(function () {
    // var spans =
    $('span').each(function (index, elem) {
        if (index % 2 == 0) {
            $(elem).css('color', 'red');
        }
    });
    $('p').each(function (index, elem) {
        $(elem).append('<button class="btn" data-tmp="' + index + '">Click me</button>');
    });
    $('button').each(function (index, elem) {
        var e = $(elem);
        e.click(function () {
            alert('Wartość atrybutu: ' + e.attr('data-tmp'));
        });
    });
});