
function addVideo(videos) {
  var title = videos.snippet.title;
  var thumb = videos.snippet.thumbnails.default.url;
  
  var $div = $("<div>").addClass("video");
  var $title = $("<h4>").text(title);
  var $thumb = $("<img>").attr("src",thumb);
  
  $div.append($title).append($thumb);
  $(".container").append($div);
}



function loadYoutube(videoData) {
  for(var i = 0; i <videoData.items.length; i++) {
    addVideo(videoData.items[i]);
  }
}



