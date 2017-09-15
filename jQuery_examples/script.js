$(document).ready(function() {
  var $para = $("p.heading");
  console.log($para.length);
  $para.hide().eq(0).show();
  var totalPara = $para.length;
  var curPos = 0;
  setInterval(RotateLinks, 2000);

  function RotateLinks() {
    $para.eq(curPos).fadeOut("slow", function() {
      curPos++;
      if (curPos == totalPara) {
        curPos = 0;
      }
      $para.eq(curPos).fadeIn("slow")
    });
  }
});
// http://cdn.wallpapersafari.com/97/5/9e732d.jpg
