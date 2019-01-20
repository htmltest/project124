$(document).ready(function() {

    $('body').on('click', '.top-close', function(e) {
        $('.top').slideUp(function() {
            $('.top').remove();
        });
        e.preventDefault();
    });

    $('body').on('click', '.mobile-menu-link', function(e) {
        $('html').toggleClass('mobile-menu-open');
        e.preventDefault();
    });

    $('.footer-menu-group').each(function() {
        var curGroup = $(this);
        if (curGroup.find('.footer-menu-group-list li').length > 0) {
            curGroup.addClass('with-submenu');
        }
    });

    $('body').on('click', '.footer-menu-group-title a', function(e) {
        if ($(window).width() < 1200) {
            var curGroup = $(this).parents().filter('.footer-menu-group')
            if (curGroup.hasClass('with-submenu')) {
                curGroup.toggleClass('open');
                e.preventDefault();
            }
        }
    });

    $('.mobile-menu-group').each(function() {
        var curGroup = $(this);
        if (curGroup.find('.mobile-menu-group-list li').length > 0) {
            curGroup.addClass('with-submenu');
        }
    });

    $('body').on('click', '.mobile-menu-group-title a', function(e) {
        var curGroup = $(this).parents().filter('.mobile-menu-group')
        if (curGroup.hasClass('with-submenu')) {
            curGroup.toggleClass('open');
            e.preventDefault();
        }
    });

    $('form').each(function() {
        initForm($(this));
    });

    $('body').on('click', '.window-link', function(e) {
        windowOpen($(this).attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $('body').on('click', '.window-close', function(e) {
        windowClose();
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $(window).resize(function() {
        windowPosition();
    });

    $('.main-results-list').slick({
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear'
    });

    $('.main-interviews-list').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="28px" height="51px" viewBox="0 0 28 51"><path d="M27.035,49.100 L25.131,50.994 L0.001,25.996 L0.504,25.495 L0.001,24.994 L25.131,-0.002 L27.035,1.892 L3.307,25.495 L27.035,49.100 Z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="28px" height="51px" viewBox="0 0 28 51"><path d="M27.998,25.996 L2.868,50.994 L0.964,49.100 L24.692,25.495 L0.964,1.892 L2.868,-0.002 L27.998,24.994 L27.495,25.495 L27.998,25.996 Z"/></svg></button>',
        dots: false
    });

    $('.main-rating-menu-current').click(function() {
        var curSelect = $(this).parents().filter('.main-rating-menu');
        if (curSelect.hasClass('open')) {
            curSelect.removeClass('open');
        } else {
            curSelect.addClass('open');
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.main-rating-menu').length == 0) {
            $('.main-rating-menu.open').removeClass('open');
        }
    });

    $('.main-rating-menu ul li a').click(function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            $('.main-rating-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = $('.main-rating-menu ul li').index(curLi);
            $('.main-rating-tab.active').removeClass('active');
            $('.main-rating-tab').eq(curIndex).addClass('active');
            $('.main-rating-menu-current span').html($(this).html());
            $('.main-rating-menu.open').removeClass('open');
        }
        e.preventDefault();
    });

    $('.main-other-item-value').click(function() {
        var curSelect = $(this).parents().filter('.main-other-item-select');
        if (curSelect.hasClass('open')) {
            curSelect.removeClass('open');
        } else {
            $('.main-other-item-select.open').removeClass('open');
            curSelect.addClass('open');
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.main-other-item-select').length == 0) {
            $('.main-other-item-select.open').removeClass('open');
        }
    });

    $('.main-media-gallery').slick({
        infinite: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="40px"><path d="M20.998,38.510 L19.520,39.996 L0.001,20.390 L0.392,19.997 L0.001,19.604 L19.520,-0.002 L20.998,1.485 L2.568,19.997 L20.998,38.510 Z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="40px"><path d="M20.998,20.390 L1.480,39.995 L0.001,38.510 L18.431,19.997 L0.001,1.484 L1.480,-0.002 L20.998,19.604 L20.607,19.997 L20.998,20.390 Z"/></svg></button>',
        dots: false
    });

    $('.main-stat-menu-current').click(function() {
        var curSelect = $(this).parents().filter('.main-stat-menu');
        if (curSelect.hasClass('open')) {
            curSelect.removeClass('open');
        } else {
            curSelect.addClass('open');
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.main-stat-menu').length == 0) {
            $('.main-stat-menu.open').removeClass('open');
        }
    });

    $('.main-stat-menu ul li a').click(function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            $('.main-stat-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = $('.main-stat-menu ul li').index(curLi);
            $('.main-stat-group.active').removeClass('active');
            $('.main-stat-group').eq(curIndex).addClass('active');
            $('.main-stat-menu-current span').html($(this).html());
            $('.main-stat-menu.open').removeClass('open');
        }
        e.preventDefault();
    });

    $('body').on('click', '.main-stat-group-list a', function(e) {
        if ($(window).width() > 767 && $(window).width() < 1200) {
            if (!$(this).hasClass('active')) {
                $('.main-stat-group-list a.active').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            }
        }
    });

    $(window).on('click', function(e) {
        if ($(e.target).parents().filter('.main-stat-group-list').length == 0) {
            $('.main-stat-group-list a.active').removeClass('active');
        }
    });

});

function initForm(curForm) {
    curForm.find('input.phoneRU').mask('+70000000000');

    curForm.validate({
        ignore: '',
        submitHandler: function(form) {
            if ($(form).hasClass('ajax-form')) {
                windowOpen($(form).attr('action'), $(form).serialize());
            } else {
                form.submit();
            }
        }
    });
}

function windowOpen(linkWindow, dataWindow) {
    var curPadding = $('.wrapper').width();
    $('html').addClass('window-open');
    curPadding = $('.wrapper').width() - curPadding;
    $('body').css({'margin-right': curPadding + 'px'});

    if ($('.window').length == 0) {
        $('body').append('<div class="window"><div class="window-loading"></div></div>')
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        $('.window').html('<div class="window-container"><div class="window-content">' + html + '<a href="#" class="window-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M18.492,17.543 L17.547,18.490 L11.000,11.943 L4.453,18.490 L3.508,17.543 L10.054,10.997 L3.508,4.450 L4.453,3.505 L11.000,10.051 L17.547,3.505 L18.492,4.450 L11.946,10.997 L18.492,17.543 Z"/></svg></a></div></div>')

        windowPosition();

        $('.window form').each(function() {
            initForm($(this));
        });
    });
}

function windowPosition() {
    if ($('.window').length > 0) {
        $('.window .window-container').css({'left': '50%', 'margin-left': -$('.window .window-container').width() / 2});

        $('.window .window-container').css({'top': '50%', 'margin-top': -$('.window .window-container').height() / 2});
        if ($('.window .window-container').height() > $('.window').height()) {
            $('.window .window-container').css({'top': '0', 'margin-top': 0});
        }
    }
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        if ($('.window').length == 0) {
            $('html').removeClass('window-open');
            $('body').css({'margin-right': 0});
        }
    }
}

$(window).on('load resize', function() {
    $('.main-news-item a').css({'min-height': '0px'});

    $('.main-news-item a').each(function() {
        var curBlock = $(this);
        var curHeight = curBlock.height();
        var curTop = curBlock.offset().top;

        $('.main-news-item a').each(function() {
            var otherBlock = $(this);
            if (otherBlock.offset().top == curTop) {
                var newHeight = otherBlock.height();
                if (newHeight > curHeight) {
                    curBlock.css({'min-height': newHeight + 'px'});
                } else {
                    otherBlock.css({'min-height': curHeight + 'px'});
                }
            }
        });
    });
});