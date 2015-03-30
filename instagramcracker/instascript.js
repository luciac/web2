

function addImage(link, image, likes, comment){
	var $div = $("<div>");
	var $link = $("<a>").attr("href", link);
	var $img = $("<img>").attr("src", image);
	var $likes = $("<p>").text(likes);
	var $comment = $("<h6>").text(comment);
	
	$div.append($link).append($img).append($likes).append($comment);
	}
	


addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055772_1558157594448054_879696703_n.jpg", "https://instagram.com/p/0lOFZ0g8gA/", 720, "منشن الي تبيه يشوف المقطع");
        
addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055442_1387234548264057_209258360_n.jpg", "https://instagram.com/p/0lS-LWTbw9/", 432, "RCF x VFS2 - pic via @kdot_vossen #FreeBuju #Vossen #CarsWithoutLimits");
        
addImage("http://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e15/10919675_944043618953681_1961747465_n.jpg", "https://instagram.com/p/0lTX-pqkcC/", 543, "Сегодня была на прекрасном мероприятии #soundkids");
        
addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055616_1568588500090432_546823562_n.jpg", "https://instagram.com/p/0lNgG4st5V/", 344, "Are your tubes in good shape?");

