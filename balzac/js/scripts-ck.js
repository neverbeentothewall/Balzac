$(document).ready(function(){$("a.menu").click(function(){$(".site-header nav").slideToggle(100);return!1});$(window).resize(function(){var e=$(window).width(),t=$(".site-header nav");e>680&&t.is(":hidden")&&t.removeAttr("style")});$("article.post iframe").wrap('<div class="video-container" />')});$(document).ready(function(){var e=$(window).height(),t=e-350;$(".overlay").css("height",t);$(".featured-image").css("height",t)});$(function(){$("<img>").attr("src",function(){var e=$("div.featured-image").css("background-image");e=e.substring(4,e.length-1);return e}).load(function(){$("img.loading").fadeOut(500);$("div.overlay").fadeTo("slow",.6)})});$(function(){$(".post-list li").each(function(e){var t=$(this);setTimeout(function(){t.addClass("slider")},(e+1)*330)})});$(function(){$("#arrow").localScroll({duration:600});$("#hire-me").localScroll({duration:1e3})});