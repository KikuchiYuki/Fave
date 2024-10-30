const buttonOpen = document.getElementById('modalOpen');
const buttonOpenzikyu = document.getElementById('modalOpenzikyu');
const modal = document.getElementById('easyModal');
const modal2 = document.getElementById('easyModal2');
const buttonCancel = document.getElementById('cancelRe');
const buttonCancel2 = document.getElementById('cancelRe2'); // 修正
const buttonConfirmRe = document.getElementById('confirmRe');
const buttonConfirmRe2 = document.getElementById('confirmRe2'); // 修正

// モーダルを開く（登録）
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
    modal.style.display = 'block';
}

// モーダルを開く（時給変更）
buttonOpenzikyu.addEventListener('click', modalOpenzikyu);
function modalOpenzikyu() {
    modal2.style.display = 'block'; // モーダル2を開く
}

// モーダルを閉じる（キャンセルボタン）
buttonCancel.addEventListener('click', modalClose);
buttonCancel2.addEventListener('click', modalClose); // 修正
function modalClose() {
    modal.style.display = 'none'; // モーダル1を閉じる
    modal2.style.display = 'none'; // モーダル2を閉じる
}

// モーダルの「登録」ボタンを押したときの処理
buttonConfirmRe.addEventListener('click', confirmRe);
buttonConfirmRe2.addEventListener('click', confirmRe); // 修正
function confirmRe() {
    window.location.href = '../shift_add/shift_add.html'; // 遷移先
}

// モーダルの外をクリックして閉じる
window.addEventListener('click', outsideClose);
function outsideClose(e) {
    if (e.target === modal) {
        modalClose();
    } else if (e.target === modal2) {
        modalClose(); // モーダル2を閉じる
    }
}
