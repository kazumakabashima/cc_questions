import getHeroData from './JavaScript/getHeroData.js';
import getQuestions from './JavaScript/getQuestions.js';
import getElements from './JavaScript/getElement.js';
import changeElements from './JavaScript/changeElement.js';
import validateAnswer from './JavaScript/validateAnswer.js';


// getQuestions 関数を questionPreference 関数内に移動
const questionPreference = async () => {

    try {
        // index.htmlからのデータを取得する
        const heroData = getHeroData(); 
        const questionCount = heroData.questionCount

        // getApiData関数を非同期で呼び出し変数にスプシのデータを取り込む
        const questions = await getQuestions(); 

        // 問題表示に必要な要素を取得する
        const elements = getElements();
        
        // インデックスを初期化し、要素に初期問題を設定する
        let i = 0;
        changeElements(i, questionCount, questions[i], elements);
        
        // 解答ボタンが押された時の処理
        elements.elementsWithIsAnswer.addEventListener('click', function() {
            validateAnswer();
        });


        // 戻るボタンの処理
        elements.elementsWithBackButton.addEventListener('click', function() {
            // インデックスが最初の問題に達した場合は最初の問題に戻る
            if (i === 0) {
                alert("現在の問題が、最初の問題です！");
            } else {
                i--;
                const question = questions[i];
                changeElements(i, questionCount, question, elements);
            };
        });

        
        // 次へボタンの処理
        elements.elementsWithNextButton.addEventListener('click', function() {
            // インデックスが最後の問題に達した場合は最初の問題に戻る
            if (i === questionCount - 1) {
                window.location.href = "index.html";
            } else if (i === questionCount - 2) {
                i++;
                elements.elementsWithNextButton.innerHTML = "トップに戻る";
            } else {
                i++; // 次の問題へ進む
            };
        
            const question = questions[i];
            changeElements(i, questionCount, question, elements);
        });

    } catch (error) {
        console.error(error);
    }
};

window.addEventListener('DOMContentLoaded', questionPreference);


