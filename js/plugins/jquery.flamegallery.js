define([
	/**
	 * -----------------------------------------------------------------
	 * flame-gallery 클래스가 발견되면 자동 실행
	 * 1. 썸네일에 있는 이미지에 원하는 이벤트가 발생할때 메인에 이미지 삽입
	 * 2. 자식노드에 바로 img 인 경우 체크
	 * 3. 키보드 접근시 이벤트 발생 - 이 이벤트는 사용자가 지정한 이벤트와 별개로 움직여야 할것.
	 *  1) 탭을 눌러서 이동과 동시에 이미지 변경 하게 할것.
	 *  2) 커서는 이동 했지만 사용자가 엔터를 눌렀을 경우에 이미지가 변경 되게 할것.
	 * 좌우 버튼
	 * 캡션 달기 num / toal
	 * 캡션 제목 달기
	 * 반응형으로 만들기
	 * animaite 체크
	 * visual 나타나는 현상 수정 하기
	 * $(selector)['fade' + (a==b ? "In" : "Out")]();
	 * 옵션 값을 입력 하는 것이 아니라. 태그 삽입 된것을 찾아서 자동 실행 되게 할것. Cycle 2 참조
	 * -----------------------------------------------------------------
	 */
], function(){
	'use strict';

	if(!$.fn.flameGallery){
		$.fn.flameGallery = function(options){

			var settings = $.extend({}, $.fn.flameGallery.defaults, options);

			var self = this;

			return $.each(self, function(){

				var	$main = self.find('.' + settings.flameMainSelector),
					$thum = self.find('.'+ settings.flameThumSelector),
					el_width = $thum.find('img').attr('width'),
					el_height = $thum.find('img').attr('height');

				// settings.flameslides 값이 참이면 && 뒤에 코드 실행 거짓이면 실행 X
				// settings.flameslides && $thum.attr('data-flame-slide', settings.flameslides);
				// Child Node Class Add
				settings.flameImgClass && $thum.find(settings.flameslides).addClass(settings.flameImgClass);
				// flame-image-active Class Add
				settings.flameImgAcitveClass && $thum.find(settings.flameslides).eq(0).addClass(settings.flameImgAcitveClass);

				$main.css({
					'width': 	settings.flameVisualWidth,
					'height': 	settings.flameVisualHeight
				})
				// img 영역만큼 사이즈 추가
				$thum.find(settings.flameslides).css({
					'width': el_width,
					'height': el_height
				});

				if (settings.flameslides === '> img') {
					$main.append('<img src="' + $('.'+settings.flameImgAcitveClass).attr('src') +'" width="'+ settings.flameVisualWidth +'" height="'+ settings.flameVisualHeight+'"/>');
				}else{
					$main.append('<img src="' + $('.'+settings.flameImgAcitveClass).find('img').attr('src') +'" width="'+ settings.flameVisualWidth +'" height="'+ settings.flameVisualHeight+'"/>');
				}

				var ev_path ='';
				settings.flameEvent && $thum.on(settings.flameEvent, '.'+settings.flameImgClass, function(e){
					var	_el = $(this);
					if( settings.flameslides === '> img'){
						ev_path = _el.attr('src');
					}else{
						ev_path = _el.find('img').attr('src');
					}
					_el.addClass(settings.flameImgAcitveClass).focus().siblings().removeClass(settings.flameImgAcitveClass);
					$main.find('img').attr('src', ev_path);
					e.preventDefault();

				});
				// 키보드 접근 tabIndex 추가
				for(var i=0;i<$thum.find(settings.flameslides).length;i++){
					$thum.find(settings.flameslides).eq(i).attr('tabindex', i);
				}
				// 키보드 엔터키를 눌렀을 경우 이벤트 발생
				$thum.on('keydown', '.'+settings.flameImgClass, function(e){
					if( settings.flameslides === '> img'){
						ev_path = $(this).attr('src');
					}else{
						ev_path = $(this).find('img').attr('src');
					}
					if(e.keyCode == 13) {
						$(this).addClass(settings.flameImgAcitveClass).focus().siblings().removeClass(settings.flameImgAcitveClass);
						$main.find('img').attr('src', ev_path);
					}
				});
			});

		};

		$.fn.flameGallery.defaults = {
			flameslides: 				'> img',
			flameImgAcitveClass: 		'flame-image-active',
			flameImgClass: 			'flame-image',
			flameMainSelector: 		'flame-main',
			flameThumSelector: 		'flame-thum',
			flameEvent: 				'mouseenter',
			flameVisualWidth: 			500,
			flameVisualHeight: 		500,
			flameCaption: 				false,
			flameCaptionTemp: 		false
		}
	}

});