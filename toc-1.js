function isOnScreen(elem){if(elem.length==0){return}
var $window=jQuery(window)
var viewport_top=$window.scrollTop()
var viewport_height=$window.height()
var viewport_bottom=viewport_top+viewport_height
var $elem=jQuery(elem)
var top=$elem.offset().top
var height=$elem.height()
var bottom=top+height
return(top>=viewport_top&&top<viewport_bottom)||(bottom>viewport_top&&bottom<=viewport_bottom)||(height>viewport_height&&top<=viewport_top&&bottom>=viewport_bottom)}
jQuery(document).ready(function(){var navSelector=".toc";Toc.init({$nav:jQuery('.toc'),$scope:jQuery('.content-area')});jQuery('a[href^="#"]').on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;jQuery('html, body').animate({scrollTop:jQuery(hash).offset().top},1000,function(){window.location.hash=hash})}});window.addEventListener('scroll',function(e){if(isOnScreen(jQuery('.content-area'))){jQuery('.toc').show();jQuery('.toc-head').show();jQuery('.sidebar-footer').hide()}else{jQuery('.toc').hide();jQuery('.toc-head').hide();jQuery('.sidebar-footer').show()}});jQuery("body").scrollspy({target:navSelector,offset:200,smoothScrolling:!0,});})



