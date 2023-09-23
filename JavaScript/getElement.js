const getElements = () => {
    const elementsWithQuestionId = document.getElementById('question_id');
    const elementsWithQuestionText = document.getElementById('question_text');
    const elementsWithSelectionA = document.getElementById('selectionA');
    const elementsWithSelectionB = document.getElementById('selectionB');
    const elementsWithSelectionC = document.getElementById('selectionC');
    const elementsWithSelectionD = document.getElementById('selectionD');
    const elementsWithIsAnswer = document.getElementById('isAnswer');
    const elementsWithAnswer = document.getElementById('answer');
    const elementsWithDescription = document.getElementById('description');
    const elementsWithNextButton = document.getElementById('next_btn');
    const elementsWithBackButton = document.getElementById('back_btn');
    const elementsWithQuestionCount = document.getElementById('question_count');
    
    return {
        elementsWithQuestionId,
        elementsWithQuestionText,
        elementsWithSelectionA,
        elementsWithSelectionB,
        elementsWithSelectionC,
        elementsWithSelectionD,
        elementsWithIsAnswer,
        elementsWithAnswer,
        elementsWithDescription,
        elementsWithNextButton,
        elementsWithBackButton,
        elementsWithQuestionCount,
    };
};

export default getElements;
