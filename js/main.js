$(document).ready(function () {    
      $("button").click(function (e) {
        $(this).addClass('hvr-float-shadow');
        var self = this;
        setTimeout(function(){ $(self).removeClass('hvr-float-shadow'); }, 600)
      });
      
    });