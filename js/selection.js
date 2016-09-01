$(".scrolltotop").click(function(e)
{
    $("html, body").animate(
	{
		scrollTop: 0
	}, 1000);
});

var MenuButtonContainer = false;

$(".menu_button_container").css('background-color', 'rgba(0, 0, 0, 0.08)');
$(".menu_button_container").css('font-size', '400%');

$(document).scroll(function(event) {
    if($(document).scrollTop() > $(".menu_button_container").height())
    {
        if(MenuButtonContainer == false)
        {
            MenuButtonContainer = true;
            $(".menu_button_container").css('display', 'none');
            $(".menu_button_container").css('background-color', '#ffffff');
            $(".menu_button_container").css('position', 'fixed');
            $(".menu_button_container").css('top', '-5%');
            $(".menu_button_container").velocity({top: "0%", fontSize:"300%"}, {duration: 700, queue: false});
            $(".menu_button_container").fadeIn('500');
            $(".menu_button_container").css("box-shadow", "0px 9px 20px -10px rgba(0,0,0,0.75)");
        }
    }
    else
    {
        if(MenuButtonContainer == true)
        {
            MenuButtonContainer = false;
            $(".menu_button_container").css('position', 'static');
            $(".menu_button_container").css('background-color', 'rgba(0, 0, 0, 0.08)');
            $(".menu_button_container").css('font-size', '400%');
            $(".menu_button_container").css("box-shadow", "none");
        }
    }
});

var MenuShown = false;

$(".menu_button").click(function(event) {
    if(MenuShown == false)
    {
        MenuShown = true;
        $(".menu").show();
        $(".actual_menu").css('left', '-3%');
        $(".actual_menu").velocity({left: "0%"}, {duration: 300, queue: false});
        $(".actual_menu").fadeIn('500');
    }
});

$(".close_menu_button").click(function(event) {
    if(MenuShown == true)
    {
        $(".actual_menu").velocity({left: "-3%"}, {duration: 300, queue: false});
        $(".actual_menu").fadeOut('500', function (){
            MenuShown = false;
            $(".menu").hide();
        });
    }
});

$(".menu_space").click(function(event) {
    if(MenuShown == true)
    {
        $(".actual_menu").velocity({left: "-3%"}, {duration: 300, queue: false});
        $(".actual_menu").fadeOut('500', function (){
            MenuShown = false;
            $(".menu").hide();
        });
    }
});
