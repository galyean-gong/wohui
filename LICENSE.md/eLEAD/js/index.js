$(function() {


    // 首页js
    (function() {
        // 引用的插件
        // 手风琴效果
        function bannerHover() {
            var bannerBox1 = document.getElementById('bannerBox1');
            var bannerBox2 = document.getElementById('bannerBox2');
            var bannerBox3 = document.getElementById('bannerBox3');
            var bannerBox4 = document.getElementById('bannerBox4');
            window.onresize = function() {
                $('.carousel').fsBanner({
                    'trigger': 'mouse'
                });
                setTime();


            }
            $('.carousel').fsBanner({
                'trigger': 'mouse'
            });

            function setTime() {
                setTimeout(function() {
                    bannerBox1.style.width = $('.carousel').width() / 4 + 'px';
                    bannerBox2.style.width = $('.carousel').width() / 4 + 'px';
                    bannerBox3.style.width = $('.carousel').width() / 4 + 'px';
                    bannerBox4.style.width = $('.carousel').width() / 4 + 'px';

                }, 10);
            }
            setTime();
        }
        bannerHover();
        // 点击图片跳转
        function jumpPath(path) {
            location.href = path;
        }
        $('#banner1').click(function() {
            jumpPath('index.html');
        });
        $('#banner2').click(function() {
            jumpPath('inde.html');
        });
        $('#banner3').click(function() {
            jumpPath('inde.html');
        });
        $('#banner4').click(function() {
            jumpPath('template/company_profile.html');
        });
    })();
 


})