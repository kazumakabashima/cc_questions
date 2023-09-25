const changeStyleVisibility = (style) => {
    // 要素を取得する
    const hiddenElements = document.querySelectorAll('.hidden');
    // 要素のvisibilityプロパティをvisibleに設定
    hiddenElements.forEach((element) => {
        element.style.visibility = style;
    });
};

export default changeStyleVisibility;
