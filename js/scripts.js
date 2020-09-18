$(document).ready(function(){
            $('#mycarousel').carousel({interval:2000});
            $('button').click(function(){
                if ($('#carouselButton').children('span').hasClass('fa-pause')){
                    $('#mycarousel').carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause');
                   $('#carouselButton').children('span').addClass('fa-play');
                }
                else if ($('#carouselButton').children('span').hasClass('fa-play')){
                    $('#mycarousel').carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play');
                   $('#carouselButton').children('span').addClass('fa-pause');
                }
            });
  ///////////modal dismiss function///////////
            $('button').click(function(){
            if($('button').is("#close")){
                $('.modal').modal('hide');
            }
            });
  //////////modal show function//////////////
            $('a').click(function(){
                var $aWithId = this.id;
                if($aWithId == 'reserve-show'){
                $('#reservemodal').modal('show');
                }
                else if($aWithId == 'login-show'){
                $('#loginmodal').modal('show');
                }
            });
        });