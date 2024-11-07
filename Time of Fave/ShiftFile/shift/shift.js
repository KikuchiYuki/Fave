// モーダル要素の取得
const bulkAddModal = document.getElementById('easyModal');
const deleteConfirmModal = document.getElementById('easyModal2');

// ボタン要素の取得
const bulkAddButton = document.getElementById('modalOpen'); // 「一括追加」ボタン
const deleteButton = document.getElementById('deleteButton'); // 「削除確認」ボタン

// モーダル内の各ボタン要素の取得
const bulkAddConfirmButton = document.getElementById('confirmDelete'); // 「登録」ボタン（追加モーダル内）
const bulkAddCancelButton = document.getElementById('cancelDelete'); // 「キャンセル」ボタン（追加モーダル内）
const deleteConfirmButton = document.getElementById('confirmDelete2'); // 「削除」ボタン（削除モーダル内）
const deleteCancelButton = document.getElementById('cancelDelete'); // 「キャンセル」ボタン（削除モーダル内）

// モーダルを開く関数
function openModal(modal) {
    modal.style.display = 'block';
}

// モーダルを閉じる関数
function closeModal(modal) {
    modal.style.display = 'none';
}

// 「一括追加」モーダルを開く
bulkAddButton.addEventListener('click', function() {
    openModal(bulkAddModal);
});

// 「削除確認」モーダルを開く
deleteButton.addEventListener('click', function(event) {
    event.preventDefault(); // デフォルトのリンク動作を防止
    openModal(deleteConfirmModal);
});

// 「登録」ボタンがクリックされたら「一括追加」モーダルを閉じる
bulkAddConfirmButton.addEventListener('click', function() {
    closeModal(bulkAddModal);
    // 必要に応じて一括追加処理を実行するコードを追加できます
});

// 「削除」ボタンがクリックされたら「削除確認」モーダルを閉じる
deleteConfirmButton.addEventListener('click', function() {
    closeModal(deleteConfirmModal);
    // 必要に応じて削除処理を実行するコードを追加できます
});

// 「キャンセル」ボタンがクリックされたら「一括追加」モーダルを閉じる
bulkAddCancelButton.addEventListener('click', function() {
    closeModal(bulkAddModal);
});

// 「キャンセル」ボタンがクリックされたら「削除確認」モーダルを閉じる
deleteCancelButton.addEventListener('click', function() {
    closeModal(deleteConfirmModal);
});

// モーダル外をクリックしたときにモーダルを閉じる
window.addEventListener('click', function(event) {
    if (event.target === bulkAddModal) {
        closeModal(bulkAddModal);
    }
    if (event.target === deleteConfirmModal) {
        closeModal(deleteConfirmModal);
    }
});

// ファイル選択後にファイル名を表示する関数
function updateFileName() {
    const fileInput = document.getElementById('fileInput');
    const fileLabel = document.getElementById('fileLabel');

    // ファイルが選択されている場合
    if (fileInput.files.length > 0) {
        fileLabel.textContent = fileInput.files[0].name; // ファイル名を表示
    } else {
        fileLabel.textContent = "ファイルを選択してください"; // 初期プレースホルダー
    }
}
