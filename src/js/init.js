$( function() { 

    

    /* TRANSLATION */

    var arrLang = {
        'en': {
            'header-title': 'International Educational Platform',
            'about': 'About Us',
            'contact': 'Contact Us'
        },
        'ru': {
            'header-title': 'Образовательная платформа',
            'about': 'О компании',
            'contact': 'Контакты'
        }
    };
    $(function() {
        $('.translate').click(function() {
            var lang = $(this).attr('id');
            $('.lang').each(function(index, element) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            });
        });
    });





});


