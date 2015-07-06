#Flame Gallery 연습


## 사용방법
```
$.fn.flameGallery.defaults = {
	flameslides: 				'> img',
	flameImgAcitveClass: 		'flame-image-active',
	flameImgClass: 				'flame-image',
	flameMainSelector: 			'flame-main',
	flameThumSelector: 			'flame-thum',
	flameVisualWidth: 			500,
	flameVisualHeight:		 	500,
	flameEvent: 				'mouseenter',
	flameBtn: 					 false,
	flamePrev: 					'flame-btn-prev',
	flameNext: 					'flame-btn-next',
	flameCaption: 				false
}
```

- `flameslides` 는 바로 적용할 자식  선택 할 수 있다.  예를 들어서 `<div>` 영역 다음으로 `<img />` 태그가 오는 것이 아니라 `<ul><li>`태그를 사용하여 `<li>` 태그 다음으로 `<img>` 사용 가능하게 옵션을 바꿀 수가 있다.
- `flame-image-active`는  섬네일에서 활성화 된 `flameslides` 영역에 클래스가 추가 된다.  이 클래스는 수정이 가능하다.
- `flame-image`는 `flameslides` 에 클래스가 삽입된다.
- `flameVisualWidth`는 큰 이미지의 넓이 값이다.
- `flameVisualHeight`는 큰 이미지의 높이 값이다.
- `flameEvent`는 섬네일에서 이벤트 발생할 때  언제 발생하게 할지 설정할 수 있다.
- `flameBtn, flamePrev, flameNext, flameCaption` 는 추가 옵션 사항이다.
- `flameBtn` 버튼 활성화 유무
- `falmePrev` 이전버튼 클래스
- `flameNext` 다음버튼 클래스
- `flameCaption` 비주얼 이미지에 캡션 추가

### 사용예시
스크립트
```
	$('.flame-gallery').flameGallery({
		flameslides: '> li'
		flameVisualWidth: 700
	});
```
마크업
```
<div class="flame-gallery">
	<div class="flame-main"></div>
	<div id="flameGallery">
		<ul class="flame-thum">
			<li><img src="/images/sample/scenery/001.jpg" width="80" height="80" /></li>
			<li><img src="/images/sample/scenery/002.jpg" width="80" height="80" /></li>
			<li><img src="/images/sample/scenery/003.jpg" width="80" height="80" /></li>
			<li><img src="/images/sample/scenery/004.jpg" width="80" height="80" /></li>
			<li><img src="/images/sample/scenery/005.jpg" width="80" height="80" /></li>
			<li><img src="/images/sample/scenery/006.jpg" width="80" height="80" /></li>
			<li><img src="/images/sample/scenery/007.jpg" width="80" height="80" /></li>
			<li><img src="/images/sample/scenery/008.jpg" width="80" height="80" /></li>
			<li><img src="/images/sample/scenery/009.jpg" width="80" height="80" /></li>
			<li><img src="/images/sample/scenery/010.jpg" width="80" height="80" /></li>
		</ul>
	</div>
</div>
```
