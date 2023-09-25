// heroのフォーム要素を取得して返す
const getHeroElements = () => {
    const elementsWithSeatNumber = document.getElementById('seat-num');
    const elementsWithQuestionCount = document.getElementById('question_count');
    const elementsWithStartButton = document.getElementById('stat-btn');
    return {
        elementsWithSeatNumber,
        elementsWithQuestionCount,
        elementsWithStartButton,
    };
};

// スタートボタンがclickされたときに実行する関数
const startButtonClick = (elements) => {    
    const questionCount = elements.elementsWithQuestionCount.value;

    if (questionCount === "") {
        alert("出題数を選択してください。");
    } else {
        const seatNumber = elements.elementsWithSeatNumber.value;
        const heroData = {seatNumber: seatNumber, questionCount: questionCount };
        // JSONを文字列に変換してURLパラメータに追加
        const heroDataString = JSON.stringify(heroData);
        // encodeURIComponentを使用して特殊文字をエンコード
        const encodedHeroData = encodeURIComponent(heroDataString);
        // 新しいURLを生成して遷移
        location.href = `https://kazumakabashima.github.io/cc_questions/work.html?heroData=${encodedHeroData}`;
    };
};


// ページの読み込みが完了したときに実行する関数
window.addEventListener('DOMContentLoaded', function() {
    const heroElements = getHeroElements();
    heroElements.elementsWithStartButton.addEventListener('click', function() {
        startButtonClick(heroElements);
    });
});
