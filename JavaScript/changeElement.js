const changeElements = (question, elements) => {
    elements.elementsWithQuestionId.innerHTML = question.id;
    elements.elementsWithQuestionText.innerHTML = question.question;
    elements.elementsWithSelectionA.innerHTML = question.selectionA;
    elements.elementsWithSelectionB.innerHTML = question.selectionB;
    elements.elementsWithSelectionC.innerHTML = question.selectionC;
    elements.elementsWithSelectionD.innerHTML = question.selectionD;
    elements.elementsWithAnswer.innerHTML = "";
    elements.elementsWithDescription.innerHTML = "";
} 

export default changeElements;
