// データをシャッフルするロジック（ChatGPT）
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 定数questionsにシャッフルされたデータを格納する
const getApiData = () => {
    return new Promise((resolve, reject) => {
        // APIのURLを指定
        const apiUrl = "https://script.google.com/macros/s/AKfycbyRZXg_HXAHvpK-Uv3B9lh1aZNReAuXZ2GLd8LVYcV_2zjH1ZN863tfGHfBc1thrm7P/exec";

        const questions = [];

        // コールバック関数名を指定（任意の名前）
        const callbackName = 'handleData';

        // JSONPリクエストを送信
        const script = document.createElement('script');
        script.src = `${apiUrl}?callback=${callbackName}`;
        
        // コールバック関数を定義
        window[callbackName] = function(data) {
            // データをシャッフル
            shuffleArray(data);
            // シャッフルされたデータをquestionsに格納
            questions.push(...data);
            // ここで他の処理を行うこともできます
            resolve(questions); // データの取得が完了したらresolveする
        };

        // エラーハンドリング
        script.onerror = function(error) {
            reject(error);
        };

        // スクリプトをDOMに追加してAPIリクエストを発行
        document.body.appendChild(script);
    });
};

export default getApiData;