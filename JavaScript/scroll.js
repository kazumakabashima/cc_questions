const scroll = (elementId) => {
    // スクロール対象の要素を取得
    const targetElement = document.getElementById(elementId);
    
    if (targetElement) {
        // スクロール対象要素の座標を取得
        const elementRect = targetElement.getBoundingClientRect();
        
        // スクロール位置を設定（ページ上端からの距離）
        const scrollPosition = elementRect.top + window.scrollY;
        
        // スクロールアニメーションを使いたい場合
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        // アニメーションを使用しない場合
        // window.scrollTo(0, scrollPosition);
    } else {
        console.log('要素が見つかりません');
    }
};

export default scroll;
