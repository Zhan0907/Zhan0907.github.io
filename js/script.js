$(document).ready(function(){
	$('.karusel_liner').slick({
		speed: 1200,
		adaptiveHeight:true,
		autoplay:true,
		autoplaySpeed:2000,
		prevArrow:'<button type="button" class="slick-prev"><img src="https://img.icons8.com/nolan/64/right--v1.png"/></button>',
		nextArrow:'<button type="button" class="slick-next"><img src="https://img.icons8.com/nolan/64/left.png"/></button>'
	});

	$('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
    	$(this)
      		.addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
      		.closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
  	});

	function toggleSlide(item){
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
				$('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
			});
		});
	};

	toggleSlide('.catalog-item_link');
	toggleSlide('.catalog-item_back');

	//modal
	$('[data-modal=consultion]').on('click',function(){
		$('.overlay, #consultion').fadeIn('slow');
	});
	
	$('.modal_close').on('click', function(){
		$('.overlay, #consultion').fadeOut('slow');
	});

	//script for verh
	$(window).scroll(function(){
		if($(this).scrollTop()>1200){
			$('.verh').fadeIn();
		}else{
			$('.verh').fadeOut();
		}
	});

	 $("a[href^='#up']").click(function(){
                 const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});