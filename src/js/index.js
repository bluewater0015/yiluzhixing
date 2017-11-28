/**
 * Created by mapbar_front on 2017/11/19.
 */
$(function(){
    'use strict';
    gotoActive();
    //banner();

    /**
     * ----------跳转活动页----------
     */
    function gotoActive() {
        $('#active').click(function () {
            window.location.href = './pages/active.html'
        })
    }
    function banner() {
        var len = $('.slide').length;
        var width = $('.swiper').width();
        $('.wrapper').css('width',width * len + 'px');
        var index = 0;
        setInterval(function () {

            $('.wrapper').animate({left: -width * index + 'px'});
            index ++;
            if(index == 4){
                index = 0;
                $('.wrapper').css('left','0px');
            }
        },2000)
    }
});
