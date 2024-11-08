function toggleModal(modalId, displayStyle) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = displayStyle; // 指定された表示スタイルを適用
    }
}

// モーダルを開く関数
function toggleModal(modalId, displayStyle) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = displayStyle; // 指定された表示スタイルを適用
    }
}

// モーダルを開く関数
function openModal() {
    toggleModal('openModal', 'flex'); // モーダルを表示
}

// モーダルを閉じる関数
function closeModal() {
    toggleModal('openModal', 'none'); // モーダルを非表示
}

// 削除用モーダルを開く関数
function openDeleteModal() {
    toggleModal('deleteModal', 'flex'); // 削除モーダルを表示
}

// 削除用モーダルを閉じる関数
function closeDeleteModal() {
    toggleModal('deleteModal', 'none'); // 削除モーダルを非表示
}

function confirmDelete() {
    // ここに削除処理を追加する場合は記述
    // 例: アイテムの削除処理を行う

    // goods.htmlをリロード
    window.location.href = 'goods.html';
}

// 閉じるボタンにイベントリスナーを設定
document.getElementById("mClose").addEventListener("click", closeModal);

// モーダルの外側をクリックした場合も閉じる
window.onclick = function(event) {
    const openModal = document.getElementById("openModal");
    const deleteModal = document.getElementById("deleteModal");
    if (event.target === openModal) {
        closeModal();
    } else if (event.target === deleteModal) {
        closeDeleteModal();
    }
};

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

// 左から右に移動する関数
function moveToPurchasedLeftToRight(event, itemId) {
    const item = document.getElementById(itemId);
    const rightSide = document.querySelector('.right-side');
    
    // 左側からアイテムを削除し、右側に移動
    document.querySelector('.left-side').removeChild(item);
    rightSide.appendChild(item);
}

// 右から左に移動する新しい関数
function moveToLeftRightToLeft(event, itemId) {
    const item = document.getElementById(itemId);
    const leftSide = document.querySelector('.left-side');
    
    // 右側からアイテムを削除し、左側に移動
    document.querySelector('.right-side').removeChild(item);
    leftSide.appendChild(item);
}

    












