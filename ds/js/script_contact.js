/* Выделение активной страницы */
$(document).ready(function(){

  $('.menu li').each(function (){
    if(this.getElementsByTagName("a")[0].href == location.href+'#anchor_home')
      this.className = "selected";
    else if (this.getElementsByTagName("a")[0].href == location.href && this.className != 'dropdown' )
      this.className = "selected";
    else
      this.className = "none";
  });
//--------клік на відправити форму з контактами ----//
  $('#submitContact').click(function(){
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    var l = 20;
    var errCount = 0;
    if($('#name').val()==0){
      errCount++;
      $('#name').addClass('error');     
      for( var i = 0; i < 10; i++ )   
       $("#name").animate( { 'margin-left': "+=" + ( l = -l ) + 'px' }, 50); 
    }
    if(!pattern.test($('#email').val())){
      errCount++;
      $('#email').addClass('error');
      for( var i = 0; i < 10; i++ )   
        $("#email").animate( { 'margin-left': "+=" + ( l = -l ) + 'px' }, 50); 
    }
    if(errCount==0){
      sendMail();
      $('#submitContact').val('THANK YOU!');
      setTimeout(function(){ $('#submitContact').val('SUBMIT NOW') }, 2000);
      $('#email').val('');
      $('#name').val('');
      $('#message').val('');
      // $('#sendContact').submit();
    }
  });

function sendMail() {
  var multiStr = [
  "Client name: "+$('#name').val(),
  '',
  '',
  "Descriptions: "+$('#message').val(),
  '',
  '',
  "Contact mail: "+$('#email').val()].join("\n");
  var link = "mailto:morozoff.pm@gmail.com"
           + "?cc=morozoff.pm@gmail.com"
           + "&subject=" + escape("CONTACT US")
           + "&body=" + escape(multiStr);
  window.location.href = link;
}

  $("#name").focus(function() {
    if($("#name").hasClass('error'))
      $("#name").removeClass('error');
  });

  $('#email').focus(function() {
    if($('#email').hasClass('error'))
      $('#email').removeClass('error');
  });

  $('#upBtn').change(function(){
    checkFile();
  });

    $( window ).resize(function() {
        if($(window).scrollTop() <= $('#about').offset().top-50)
            $(".navbar").attr('style', 'background-color'); 
    });
    
  $(window).scroll( function(){    
    if($(window).scrollTop() >= $('#about').offset().top - 110){
        $(".navbar").attr('style', 'background-color: rgba(55, 55, 55, 0.8) !important');
        $(".fr_bg").addClass('fr_bg_small');
        $(".navbar").addClass('navbar_small');
        $(".navbar-nav").addClass('navbar-nav_small');
        $(".menu ul li a").addClass('font_size_small');
        $("#hideDr").css('visibility', 'hidden');
    }else{
        if($('.navbar-toggle').css('display') == 'none')
            $(".navbar").attr('style', 'background-color: transparent !important');
        $(".fr_bg").removeClass('fr_bg_small');
        $(".navbar").removeClass('navbar_small');
        $(".navbar-nav").removeClass('navbar-nav_small');
        $(".menu ul li a").removeClass('font_size_small');
        $("#hideDr").css('visibility', 'visible');
    }
  })
});
