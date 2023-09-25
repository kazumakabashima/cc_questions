const getHeroData = () => {
    // URLから heroData パラメータを取得
    const urlParams = new URLSearchParams(window.location.search);
    const heroDataParam = urlParams.get('heroData');

    if (heroDataParam) {
        try {
            // URLパラメータから取得した文字列をデコード
            const decodedHeroData = decodeURIComponent(heroDataParam);

            // JSON文字列をJavaScriptオブジェクトにパース
            const heroData = JSON.parse(decodedHeroData);

            // パースしたデータをコンソールに出力
            console.log('heroData:', heroData);

            // heroData の各プロパティにアクセス
            const seatNumber = heroData.seatNumber;
            const questionCount = heroData.questionCount;

            return {
                seatNumber,
                questionCount,
            };

            // ここで seatNumber と questionCount を使って何かを行うことができます
        } catch (error) {
            console.error('JSON パースエラー:', error);
        }
    } else {
        console.log('heroData パラメータが存在しません。');
    }
};

export default getHeroData;
