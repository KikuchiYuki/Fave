document.addEventListener("DOMContentLoaded", () => {
    // フォームの表示切替
    const checkbox = document.getElementById('switch'); 
    const title = document.querySelector('.title');
    const goodsForm = document.getElementById('goods');
    const eventsForm = document.getElementById('events');

    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            title.textContent = 'イベント';
            goodsForm.style.display = 'none';
            eventsForm.style.display = 'block';
        } else {
            title.textContent = 'グッズ';
            goodsForm.style.display = 'block';
            eventsForm.style.display = 'none';
        }
    });

    // 初期状態でイベントフォームを非表示
    eventsForm.style.display = 'none';

    // モーダルに関連する要素
    const modalGoods = document.getElementById('easyModalGoods');
    const easyModalEvents = document.getElementById('easyModalEvents'); // 変数名を変更
    const buttonCancelGoods = document.getElementById('cancelReGoods'); 
    const buttonConfirmGoods = document.getElementById('confirmReGoods'); 
    const buttonCancelEvents = document.getElementById('cancelReEvents'); 
    const buttonConfirmEvents = document.getElementById('confirmReEvents'); 

    // モーダルの表示/非表示
    document.getElementById('modalOpenGoods').addEventListener('click', () => {
        modalGoods.style.display = 'block';
    });
    document.getElementById('modalOpenEvents').addEventListener('click', () => {
        easyModalEvents.style.display = 'block'; // 変数名を変更
    });
    buttonCancelGoods.addEventListener('click', () => modalGoods.style.display = 'none');
    buttonCancelEvents.addEventListener('click', () => easyModalEvents.style.display = 'none'); // 変数名を変更

    buttonConfirmGoods.addEventListener('click', () => {
        window.location.href = '../goods/goods.html';
    });
    buttonConfirmEvents.addEventListener('click', () => {
        window.location.href = '../goods/goods.html';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modalGoods) modalGoods.style.display = 'none';
        if (e.target == easyModalEvents) easyModalEvents.style.display = 'none'; // 変数名を変更
    });



// モーダルを表示する関数
function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// モーダルを非表示にする関数
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// ボタンのクリックイベントリスナーを追加
document.getElementById("plusButtonEvents").addEventListener("click", function() {
    showModal("modalEvents"); // イベントモーダルを表示
});

document.getElementById("plusButtonGoods").addEventListener("click", function() {
    showModal("modal"); // 一般モーダルを表示
});

// 閉じるボタンにイベントリスナーを追加
document.getElementById("closeModal").addEventListener("click", function() {
    closeModal("modal");
});

document.getElementById("closeModalEvents").addEventListener("click", function() {
    closeModal("modalEvents");
});

// ウィンドウの外をクリックしたらモーダルを閉じる
window.onclick = function(event) {
    if (event.target.className === "modal") {
        closeModal("modal");
        closeModal("modalEvents");
    }
};
});
