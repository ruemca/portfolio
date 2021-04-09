$(document).ready(function() {
    // image slider
    $('#slider').cycle({
        fx:'scrollHorz',
        timeout:5000,
        pause:1,
    });
    
    // smooth scroll
    $('.scroll').click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1300);
    });

    // hide menu bar
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if(scroll == 0) {
            $('header').show();
        } else {
            $('header').hide();
        }
    });

    // toggle nav via https://codepen.io/Kirbaba/pen/YyJJxZ
    $('.menubtn').on('click',function(event){
        event.preventDefault();
        $('nav').toggleClass('nav-show');
    });

    // snap scroll via https://projects.lukehaas.me/scrollify/#overview
    $.scrollify({
        section: "section",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function() {},
        after: function() {},
        afterResize: function() {},
        afterRender: function() {}
    });

    // resume lightbox
    $(".view-web-resume").click(function(){
        $("body").append('<div id="curtain"></div>');
        $("body").append('<object data="attachments/web-resume.pdf" id="light">');
        $("body").append('<i class="far fa-times-circle" id="close"></i>');
        $("#light").animate({'opacity':'1'},1000);
        $("#curtain,#close").click(function(){
            $("#light").remove();
            $("#curtain").remove();
            $("#close").remove();
        });
    });
    $(".view-writing-resume").click(function(){
        //var pdf = $(this).attr("data");
        $("body").append('<div id="curtain"></div>');
        $("body").append('<object data="attachments/eng-resume.pdf" id="light">');
        $("body").append('<i class="far fa-times-circle" id="close"></i>');
        $("#light").animate({'opacity':'1'},1000);
        $("#curtain,#close").click(function(){
            $("#light").remove();
            $("#curtain").remove();
            $("#close").remove();
        });
    });
    $(".view-writing-portfolio").click(function(){
        //var pdf = $(this).attr("data");
        $("body").append('<div id="curtain"></div>');
        $("body").append('<object data="attachments/writing-portfolio.pdf" id="light">');
        $("body").append('<i class="far fa-times-circle" id="close"></i>');
        $("#light").animate({'opacity':'1'},1000);
        $("#curtain,#close").click(function(){
            $("#light").remove();
            $("#curtain").remove();
            $("#close").remove();
        });
    });
});

// snap scroll function
$(function() {
	$.scrollify({
		section:".panel",
		scrollSpeed:1000,
		after:function(i) {
		}
	});
});

// form validation function
function validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var category = document.getElementById('category').value;
    var message = document.getElementById('message').value;
    if(name == '') {
        alert('Please enter your name!');
        document.getElementById('name').style.borderColor = 'red';
        return false;
    } else if(email == '') {
        alert('Please enter your email!');
        document.getElementById('email').style.borderColor = 'red';
        return false;
    } else if(category == '') {
        alert('Please select a category!');
        document.getElementById('category').style.borderColor = 'red';
        return false;
    } else if(message == '') {
        alert('Please enter a message!');
        document.getElementById('message').style.borderColor = 'red';
        return false;
    }
}