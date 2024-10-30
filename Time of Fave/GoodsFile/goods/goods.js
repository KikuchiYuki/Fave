// モーダルを開く関数
function openModal(itemId, title, price) {
    const modal = document.getElementById('modal');
    const modalContentText = document.getElementById('modal-content-text');
    
    // モーダルに表示する内容を設定
    modalContentText.innerHTML = `
        <strong>${title}</strong><br>
        価格: ${price}
    `;

    modal.style.display = "flex"; // モーダルを表示
}

// モーダルを閉じる関数
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = "none"; // モーダルを非表示
    }
}

// モーダルを閉じるボタンの取得とイベントリスナーの追加
const buttonCancel = document.getElementById('modalClose');
if (buttonCancel) {
    buttonCancel.addEventListener('click', closeModal);
} else {
    console.error("閉じるボタンが見つかりません。modalClose IDを確認してください。");
}

// モーダル外をクリックしたときにモーダルを閉じる
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        closeModal();
    }
});

// アイコン画像をクリックして右側に移動させる関数
function moveToPurchased(event, itemId) {
    event.stopPropagation(); // 親要素のクリックイベントをキャンセル

    const item = document.getElementById(itemId);
    const itemClone = item.cloneNode(true); // アイテムを複製

    // 必要に応じて、右側に移動したアイテムのスタイルや内容を更新
    const price = itemClone.querySelector('.price');
    price.innerHTML = '¥2,600'; // 値段を調整

    const app = itemClone.querySelector('.app');
    app.innerHTML = 'Complete！'; // ステータスの更新

    // 右側のリストに追加
    const rightSide = document.querySelector('.right-side');
    rightSide.appendChild(itemClone);

    // 左側からアイテムを削除
    item.remove();
}