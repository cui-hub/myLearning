$(function () {
    var $li = $('.slider li');
    //alert($li.length);
    var $len = $li.length;
    var $point = $('.point');
    var timer = null;
    var $isMove = false; //设置开关防止用户暴力操作，结合动画函数的回调函数，确保一个动画完成后才能点击下一个动画

    //动态放入小圆点
    for (var i=0;i<$len;i++){
        var $newli = $('<li>');
        if (i==0){
            $newli.addClass('active');
        }
        $newli.appendTo($point);
    }
    //除了第一张，其余放到右边
    $li.not(':first').css({'left':760});

    //给小圆点添加功能：
    var $prevli = $('.active').index();
    var $points = $('.point li');
    var $nowli = 0;

    var $prev = $('.prev');
    var $next = $('.next');
    //圆点切换：
    $points.click(function () {
       $nowli = $(this).index();
        //修复重复点击的bug
        if ($nowli==$prevli){
            return;
        }
        $(this).addClass('active').siblings().removeClass('active');
        fnMove();
    });
    //左右按钮：
    $prev.click(function () {
        if ($isMove){
            return;
        }
        $isMove = true;
        $nowli--;
        fnMove();
        $points.eq($nowli).addClass('active').siblings().removeClass('active');
        });
    $next.click(function () {
        if ($isMove){
            return;
        }
        $isMove = true;
        $nowli++;
        fnMove();
        $points.eq($nowli).addClass('active').siblings().removeClass('active');
        });
    //添加自动播放：
    timer = setInterval(function () {
        $nowli++;
        fnMove();
        $points.eq($nowli).addClass('active').siblings().removeClass('active');
    },2000);
    $('.slider,.point,.prev,.next').mouseenter(function () {
        clearInterval(timer);

    });
    $('.slider,.point,.prev,.next').mouseleave(function () {
        timer = setInterval(function () {
        $nowli++;
        fnMove();
        $points.eq($nowli).addClass('active').siblings().removeClass('active');
    },2000);
    });

    //幻灯片运动函数：
    function fnMove() {
        if ($nowli<0){
            $nowli = $len-1;
            $prevli = 0;
            //吧要过来的幻灯片放左边：
            $li.eq($nowli).css({'left':-760});
            //从左边动画淡入：
            $li.eq($nowli).animate({'left':0});
            //之前的放到右边：
            $li.eq($prevli).animate({'left':760},function () {
                $isMove = false; //保证动画结束后才能点击
            });
            $prevli = $nowli;
            return;//特例：点击左三角，理应是从左边划入，但过了第一张后，按下面运动函数是从右边进入，所以将左近函数搬上来，执行完return结束函数，不再执行下面两个if
        }
        if ($nowli> $len-1){
            $nowli = 0;
            $prevli = $len-1;
            //吧要过来的幻灯片放到右边：
            $li.eq($nowli).css({'left':760});
            //从右边动画淡入：
            $li.eq($nowli).animate({'left':0});
            //之前的放到左边：
            $li.eq($prevli).animate({'left':-760},function () {
                $isMove = false;
            });
            $prevli = $nowli;
            return;
        }
        if ($nowli>$prevli) {
            //吧要过来的幻灯片放到右边：
            $li.eq($nowli).css({'left': 760});
            //从右边动画淡入：
            $li.eq($nowli).animate({'left': 0});
            //之前的放到左边：
            $li.eq($prevli).animate({'left':-760},function () {
                $isMove = false;
            });
            $prevli = $nowli;
        }
        if ($nowli<$prevli){
            //吧要过来的幻灯片放左边：
            $li.eq($nowli).css({'left':-760});
            //从左边动画淡入：
            $li.eq($nowli).animate({'left':0});
            //之前的放到右边：
             $li.eq($prevli).animate({'left':760},function () {
                $isMove = false; //保证动画结束后才能点击
            });
            $prevli = $nowli;
        }
    }

});
