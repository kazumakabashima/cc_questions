import getApiData from './JavaScript/api.js';
import getElements from './JavaScript/getElement.js';
import changeElements from './JavaScript/changeElement.js';
import answerInput from './JavaScript/answerInput.js';

// getQuestions 関数を questionPreference 関数内に移動
const questionPreference = async () => {
    try {
        // getApiData関数を非同期で呼び出す
        const questions = await getQuestions();
        // 必要な要素を取得する
        const elements = getElements();

        let i = 0;

        // 要素に初期問題を設定する
        changeElements(questions[i], elements);
        elements.elementsWithQuestionCount.innerHTML = `${i + 1}/${questions.length}`;

        elements.elementsWithIsAnswer.addEventListener('click', function() {
            answerInput(questions[i],elements);
        });

        elements.elementsWithBackButton.addEventListener('click', function() {
            // インデックスが最初の問題に達した場合は最初の問題に戻る
            if (i === 0) {
                alert("現在の問題が、最初の問題です！");
            } else {
                elements.elementsWithNextButton.innerHTML = "次へ"
                i--;
                const question = questions[i];
                changeElements(question, elements);
                elements.elementsWithQuestionCount.innerHTML = `${i+ 1}/${questions.length}`;
            };
        });

        elements.elementsWithNextButton.addEventListener('click', function() {
            // インデックスが最後の問題に達した場合は最初の問題に戻る
            if (i === questions.length - 2) {
                elements.elementsWithNextButton.innerHTML = "トップに戻る";
            };

            if(i < questions.length - 1) {
                i++;
                const question = questions[i];
                changeElements(question, elements);
                elements.elementsWithQuestionCount.innerHTML = `${i + 1}/${questions.length}`;
            } else {
                window.location.href = "index.html";
            }
        });
    } catch (error) {
        console.error(error);
    }
};

// getQuestions 関数を questionPreference 関数の前に定義
const getQuestions = async () => {
    try {
        // getApiData関数を非同期で呼び出す
        const questions = await getApiData();
        // データを取得した後に他の処理を行う
        console.log(questions);
        // 他の処理を記述
        return questions; // 取得したデータを返す
    } catch (error) {
        console.error(error);
    }
};

window.addEventListener('load', questionPreference);
