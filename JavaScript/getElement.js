const getElements = () => {
    const elementsWithQuestionNumber = document.getElementById('question-number');
    const elementsWithQuestionText = document.getElementById('question-text');
    const elementsWithAnswerLabel01 = document.getElementById('answer-label01');
    const elementsWithAnswerLabel02 = document.getElementById('answer-label02');
    const elementsWithAnswerLabel03 = document.getElementById('answer-label03');
    const elementsWithAnswerLabel04 = document.getElementById('answer-label04');
    const elementsWithAnswer01 = document.getElementById('answer01');
    const elementsWithAnswer02 = document.getElementById('answer02');
    const elementsWithAnswer03= document.getElementById('answer03');
    const elementsWithAnswer04 = document.getElementById('answer04');
    const elementsWithIsAnswer = document.getElementById('isAnswer');
    const elementsWithAnswerValid = document.getElementById('answer-valid')
    const elementsWithAnswer = document.getElementById('answer');
    const elementsWithDescription = document.getElementById('description');
    const elementsWithNextButton = document.getElementById('next_btn');
    const elementsWithBackButton = document.getElementById('back_btn');
    const elementsWithQuestionId = document.getElementById('question_id');
    
    return {
        elementsWithQuestionNumber,
        elementsWithQuestionText,
        elementsWithAnswerLabel01,
        elementsWithAnswerLabel02,
        elementsWithAnswerLabel03,
        elementsWithAnswerLabel04,
        elementsWithAnswer01,
        elementsWithAnswer02,
        elementsWithAnswer03,
        elementsWithAnswer04,
        elementsWithIsAnswer,
        elementsWithAnswerValid,
        elementsWithAnswer,
        elementsWithDescription,
        elementsWithNextButton,
        elementsWithBackButton,
        elementsWithQuestionId,
    };
};

export default getElements;
