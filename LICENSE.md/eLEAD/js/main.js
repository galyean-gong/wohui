 
   $(function() {
          //侧边栏导航js
       var moveNav = document.getElementById('moveNav'),
           timer = null;
       var openMenu = document.getElementById('openMenu');
       var closeMenu = document.getElementById('closeMenu')
       openMenu.onclick = function(e) {
           　e.stopPropagation();
           startMove(0,10);
       }
       closeMenu.onclick = function(){
            startMove(-210,-10);
       }
       function startMove(target, speed) {
           clearInterval(timer);
           timer = setInterval(function() {
               if (moveNav.offsetLeft == target) {
                   clearInterval(timer);
               } else {
                   moveNav.style.left = moveNav.offsetLeft + speed + 'px';
               }
           }, 15);
       }
       // 购物车
       $('.public-shop-btn').hover(function(e){
     
             $('.hover-open-box').stop(true,true).slideDown(500);

       },function(e){
        
        $('.hover-open-box').stop(true,true).slideUp(500);

       });
   
       //产品列表
       // $('.product-list-box img').hover(function(e){
       //  　e.stopPropagation();
       //      $('.product-mark').fadeIn(500);  
       // },function(){
       //    $('.product-mark').fadeOut(500); 
       // })
    
   })