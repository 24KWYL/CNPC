// JavaScript Document

var copyrightVisible = false;
var arrow_down = "<span class=\"icon_arrow_down\"></span>";

$(document).ready(function(e) {
	if($(document).scrollTop() + $(window).height() < $(document).height()-57) {
		$(".copyright").hide();
	}
	$("div.dropdown_list span.selected").click(function(e) {
        $(this).parent().children("ul").stop();
        $(this).parent().children("ul").slideDown(200);
    });
	$(".dropdown_list ul").hide();
	$(".dropdown_list").mouseleave(function(e) {
        $(this).children("ul").stop();
        $(this).children("ul").slideUp(200);
    });
	$(".dropdown_list ul li").click(function(e) {
        $(this).parent().parent().children("span.selected").html($(this).text() + arrow_down);
        $(this).parent().parent().children("input").val($(this).text());
        $(this).parent().stop();
        $(this).parent().slideUp(200);
    });
});

window.onscroll = function(){
    if($(document).scrollTop() + $(window).height() >= $(document).height()-57) {
		if(!copyrightVisible) {
			$(".copyright").fadeIn(300);
			copyrightVisible = !copyrightVisible;
		}
	} else {
		if(copyrightVisible) {
			$(".copyright").fadeOut(300);
			copyrightVisible = !copyrightVisible;
		}
	}
};

function dropdownList(selectMenu) {
	var optionCount = $(selectMenu).children("option").length;
	var list = "<ul>\n";
	var selected = "";
	if(optionCount > 0) {
		selected = $(selectMenu).children("option:selected").eq(0).text();
	}
	var input = "<input type=\"hidden\" name=\"" + $(selectMenu).attr("name") + "\" value=\"" + selected + "\" />";
	selected = "<span class=\"selected\">" + selected + arrow_down + "</span>\n";
	for(var i = 0; i < optionCount; i++) {
		var option = $(selectMenu).children("option").eq(i);
		list += "<li>" + $(option).text() + "</li>\n";
	}
	list += "</ul>\n";
	var html = "<div class=\"dropdown_list\" style=\"" + $(selectMenu).attr("style") + "\">\n" + selected + input + list + "</ul>\n</div>";
	$(selectMenu).hide();
	html = $(selectMenu).parent().html() + html;
	$(selectMenu).parent().html(html);
}