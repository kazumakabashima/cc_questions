import shuffleArray from "./shuffle.js";
import getAnswersObject from "./getAnswersObject.js";
import changeStyleVisibility from "./visibility.js";
import scroll from "./scroll.js";

const changeElements = (i, questionCount, question, elements) => {
    //解答選択肢をランダムに並べ替えて解答を取得する。
    const answer = question.answer;
    const answersObject = getAnswersObject(question);
    shuffleArray(answersObject);

    const questionNumber = `Q ${i + 1}/${questionCount}`;

    elements.elementsWithQuestionNumber.innerHTML = questionNumber;
    elements.elementsWithQuestionText.innerHTML = question.question;

    elements.elementsWithAnswerLabel01.textContent = answersObject[0];
    elements.elementsWithAnswerLabel02.textContent = answersObject[1];
    elements.elementsWithAnswerLabel03.textContent = answersObject[2];
    elements.elementsWithAnswerLabel04.textContent = answersObject[3];

    elements.elementsWithAnswer01.value = answersObject[0];
    elements.elementsWithAnswer02.value = answersObject[1];
    elements.elementsWithAnswer03.value = answersObject[2];
    elements.elementsWithAnswer04.value = answersObject[3];

    elements.elementsWithAnswer.innerHTML = answer;
    elements.elementsWithDescription.innerHTML = question.description;
    elements.elementsWithQuestionId.innerHTML = `ID: ${question.id}`;

    // ラジオボタングループ内のすべてのラジオボタン要素を取得
    const radioButtons = document.querySelectorAll('input[type="radio"][name="answer-selection"]');

    // ラジオボタンを非選択状態にする
    radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
    });

    changeStyleVisibility('hidden');
    scroll('work-container');
};

export default changeElements;


