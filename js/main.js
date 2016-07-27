$(".logo").fadeIn(2000);

$(".StartLearningButton").click(function(e)
{
	$("html, body").animate(
	{
		scrollTop: $(".section_learning").offset().top
	});
});

var banner_title_ct = 0;

function ChangeBannerTitle()
{
    switch(banner_title_ct)
    {
        case 0:
        {
            $(".banner_title").html("An online school is definitely easier to access");
            break;
        }
        case 1:
        {
            $(".banner_title").html("Your way to success in Thanawia Amma");
            break;
        }
        case 2:
        {
            $(".banner_title").html("Learning has never been easier");
            break;
        }
        case 3:
        {
            $(".banner_title").html("Innovative methods to master Thanawia Amma");
            break;
        }
		case 4:
        {
            $(".banner_title").html("Qualifiied yet free education and always will be");
			banner_title_ct = -1;
            break;
        }
    }
    banner_title_ct ++;
}

$(".banner_title").ready(function () {
    setInterval(function ()
    {
        $(".banner_title").fadeOut(500, function() {
            ChangeBannerTitle();
            $(".banner_title").fadeIn(500);
        });
    }, 3000);
});

$(".section_learning, .section_features, .section_singlefeature").hover(function() {
	$(this).animate({fontSize: "+=3%"}, {duration: 500, queue: false});
}, function() {
	$(this).animate({fontSize: "100%"}, {duration: 500, queue: false});
});
