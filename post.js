$.ajax({
  type: "get",
  url: "https://xyz1024.top/search.json",
  dataType: "json",
  success: function (result) {
    for (var i=0; i<10; i++) {
      $("#post").append('<p><a>'+result[i].title+'</a></p>');
      $("#post a").attr("href","https://xyz1024.top/"+result[i].url);
    }
  }
});