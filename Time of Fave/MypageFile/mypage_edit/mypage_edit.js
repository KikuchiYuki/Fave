function syncInput(inputId, rangeId) {
    // スライダーの値をテキスト入力に反映させる
    document.getElementById(inputId).value = document.getElementById(rangeId).value;
}

function adjustAmount(step, inputId, rangeId) {
    // テキスト入力とスライダーの値を取得して更新
    const input = document.getElementById(inputId);
    const range = document.getElementById(rangeId);
    let value = parseInt(input.value) + step;

    // 0から999999の範囲内で値を設定
    value = Math.max(0, Math.min(value, 999999));

    // テキスト入力とスライダーの値を更新
    input.value = value;
    range.value = value;
}

function syncInput(inputId, rangeId) {
    // スライダーの値をテキスト入力に反映させる
    document.getElementById(inputId).value = document.getElementById(rangeId).value;
}

function adjustAmount(step, inputId, rangeId) {
    // テキスト入力とスライダーの値を取得して更新
    const input = document.getElementById(inputId);
    const range = document.getElementById(rangeId);
    let value = parseInt(input.value) + step;

    // 0から999999の範囲内で値を設定
    value = Math.max(0, Math.min(value, 999999));

    // テキスト入力とスライダーの値を更新
    input.value = value;
    range.value = value;
}

function syncRange(inputId, rangeId) {
    // テキスト入力の値をスライダーに反映させる
    const input = document.getElementById(inputId);
    const range = document.getElementById(rangeId);
    let value = parseInt(input.value);

    // 0から999999の範囲内で値を設定
    if (!isNaN(value)) {
        value = Math.max(0, Math.min(value, 999999));
        input.value = value;
        range.value = value;
    }
}