const getAnswersObject = (question) => {
    
    const dataObject = {
        answer01: question.answer,
        answer02: question.selectionA,
        answer03: question.selectionB,
        answer04: question.selectionC,
    };

    const dataArray = Object.values(dataObject);
    return dataArray;
};

export default getAnswersObject;
