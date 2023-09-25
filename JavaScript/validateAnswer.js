import changeStyleVisibility from './visibility.js';
import scroll from './scroll.js';


const validateAnswer = () => {
    // 答えと解答を確認して正誤を判定する
    const elementsWithAnswer = document.getElementById('answer');
    
    // ラジオボタンの要素を取得
    const radioButtons = document.querySelectorAll('input[type="radio"][name="answer-selection"]');
    
    // 選択されたラジオボタンの値を格納する変数を初期化
    let selectedValue = '';
    
    // ラジオボタンをループして選択された値を取得
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
        }
    });

    if (selectedValue === "") {
        alert('解答を選択してください')
    } else {
        // 選択された値を評価して結果を出力する
        const answerValid = document.getElementById('answer-valid');
        
        if (selectedValue === elementsWithAnswer.textContent) {
            answerValid.innerHTML = 'Correct!!';
        } else {
            answerValid.innerHTML = 'Wrong...';
        }

        changeStyleVisibility('visible');
        scroll('isAnswer');
    }
};

export default validateAnswer;
