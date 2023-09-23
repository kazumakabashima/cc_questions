
function getData() {
    // 問題集シートを取得する
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const questionsSheet = spreadsheet.getSheetByName('問題集');

    // 最終行を取得しデータ範囲を設定する
    const dataRange = questionsSheet.getDataRange();
    const lastRowNumber = dataRange.getLastRow();
    const targetRange = questionsSheet.getRange(`A2:H${lastRowNumber}`);
    const values = targetRange.getValues();
    const data = values.map(row => {
    let col = 0;
        return {
            id:         row[col++],
            question:   row[col++],
            selectionA: row[col++],
            selectionB: row[col++],
            selectionC: row[col++],
            selectionD: row[col++],
            answer:     row[col++],
            description: row[col++],
        }
    });
    console.log(data);
    return data;
}

function doGet(e) {
    const data = getData();

    // コールバック関数名をクエリパラメータから取得
    const callback = e.parameter.callback;

    // JSONPレスポンスを作成
    const jsonp = `${callback}(${JSON.stringify(data)})`;

    // レスポンスを作成
    const response = ContentService.createTextOutput(jsonp)
        .setMimeType(ContentService.MimeType.JAVASCRIPT);

    return response;
}

