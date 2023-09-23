const answerInput = (question,elements) => {
    elements.elementsWithAnswer.innerHTML = question.answer;
    elements.elementsWithDescription.innerHTML = question.description;
};

export default answerInput;