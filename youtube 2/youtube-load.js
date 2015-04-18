
function addVideo(videos) {
  var title = videos.snippet.title;
  var thumb = videos.snippet.thumbnails.default.url;
  var desc = videos.snippet.description;
  
  var $div = $("<div>").addClass("video");
  var $title = $("<h4>").text(title);
  var $thumb = $("<img>").attr("src",thumb);
  
  $div.append($title).append($thumb);
  
  $div.on("click",function() {
  showModal(video); })

	$(".container").append($div);

}




function showModal(videos) {
	$(".modal").empty();
	
	var title = videos.snippet.title;
	var desc = videos.snippet.description;
	var vidID = video.id.videoId;
   
	var $div  = $("<div>");
	
   // All your code to add stuff in 
   var $vidtitle = $("<h2>").text(title);
   var $descript = $("<p>").text(desc);
   
   var $iframe = $("<iframe>").attr("src", "https://www.youtube.com/embed/" + vidId)
   
   $div.append($vidtitle).append($descript).append($iframe);
   
   $(".modal").append($div);
   
   $(".overlay").show();
   $(".modal").show();
}






function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}


function loadYoutube(videoData) {
  for(var i = 0; i <videoData.items.length; i++) {
    addVideo(videoData.items[i]);
  }
  showModal(videoData.items[0]);
}