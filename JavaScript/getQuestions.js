import getApiData from './api.js';

// getQuestions 関数を questionPreference 関数の前に定義
const getQuestions = async () => {
    try {
        // getApiData関数を非同期で呼び出す
        const questions = await getApiData();
        // データを取得した後に他の処理を行う
        console.log('questions:', questions);
        // 他の処理を記述
        return questions; // 取得したデータを返す
    } catch (error) {
        console.error(error);
    }
};

export default getQuestions;
