// ローディングアニメーションの設定
function loadingAnimation() {
	const setAnimation = lottie.loadAnimation({
		container: document.querySelector(".loading-wrapper"), //アニメーションを描画したいDOM要素を指定
		renderer: "svg", //svgとして描画する
		loop: true, //一度のみ実行なのでfalse(ループさせたい場合はtrue)
		autoplay: true, //自動再生させる
		path: "./loading-animation.json", //jsonファイルのパスを記述
	});

	// アニメーション終了時に実行
	setAnimation.addEventListener("complete", function () {
		const loadingElement = document.querySelector(".loading");
		// loadingElement.classList.add("isLoaded"); //isLoadedクラスを付与
	});
}

// 初回訪問時のみアニメーションを実行
if (!sessionStorage.getItem("visited")) {
	// 初回訪問時
	sessionStorage.setItem("visited", "first");
	loadingAnimation();
} else {
	// 2回目以降の訪問時
	// const loadingElement = document.querySelector(".loading");
	// loadingElement.classList.add("isLoaded");
	loadingAnimation();
}
