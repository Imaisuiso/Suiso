function checkFortune() {
    var 色 = document.getElementById('colour-select').value;
    var 数字 = parseInt(document.getElementById('number-input').value, 10);
    var 運勢 = "凶"; // デフォルトの運勢

    // 色と数字による運勢の判定
    switch (色) {
        case "黒":
            switch (数字) {
                case 0:
                    運勢 = "小吉";
                    break;
                case 1:
                    運勢 = "中吉";
                    break;
                case 2:
                    運勢 = "凶";
                    break;
            }
            break;
        case "白":
            switch (数字) {
                case 0:
                case 1:
                    運勢 = "中吉";
                    break;
                case 2:
                    運勢 = "最悪";
                    break;
            }
            break;
        case "オレンジ":
            switch (数字) {
                case 0:
                    運勢 = "凶";
                    break;
                case 1:
                    運勢 = "ラッキー";
                    break;
                case 2:
                    運勢 = "中吉";
                    break;
            }
            break;
        default:
            運勢 = "不明";
            break;
    }

    // 結果を表示
    document.getElementById('result-output').innerText = `あなたの今週の運勢は【${運勢}】です`;
    // 結果のスタイルを変える（オシャレに見せる）
    document.getElementById('result-output').style.fontSize = "1.5em";
    document.getElementById('result-output').style.fontWeight = "bold";
    document.getElementById('result-output').style.color = "#4CAF50";  // 明るい緑色
    document.getElementById('result-output').style.textAlign = "center";
}
