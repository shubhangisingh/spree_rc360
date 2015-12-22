$(document).ready(function(){
  $("#navbarCollapseButton").on("click",function(){
    if ($(this).hasClass("collapsed")){
      $(this).removeClass("collapsed");
      $("#bs-example-navbar-collapse-1").addClass("collapse");
      $("#bs-example-navbar-collapse-1").addClass("in");
    }else{
      $(this).addClass("collapsed");
      $("#bs-example-navbar-collapse-1").addClass("collapsing");
      $("#bs-example-navbar-collapse-1").removeClass("collapse");
      $("#bs-example-navbar-collapse-1").removeClass("in");
    }
  });
});
