$(document).ready(function(){
  selectActiveClass();
});

var selectActiveClass = function(){
  if(document.URL.match('/contact-us')){
    $("#bs-example-navbar-collapse-1").find('li:nth-child(5)').addClass('active');
  }else if(document.URL.match('/about')){
    $("#bs-example-navbar-collapse-1").find('li:nth-child(2)').addClass('active');
  }else if(document.URL.match('/products')){
    $("#bs-example-navbar-collapse-1").find('li:nth-child(3)').addClass('active');
  }else if(document.URL.match('/blog')){
    $("#bs-example-navbar-collapse-1").find('li:nth-child(4)').addClass('active');
  }else{
    $("#bs-example-navbar-collapse-1").find('li:nth-child(1)').addClass('active');
  }
};
