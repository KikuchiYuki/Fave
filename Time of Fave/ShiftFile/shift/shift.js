// ボタンとモーダルの取得
const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonCancel = document.getElementById('cancelDelete');
const buttonConfirmDelete = document.getElementById('confirmDelete');

// モーダルを開くイベントリスナー
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

// モーダルを閉じるイベントリスナー
buttonCancel.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// 削除確定イベントリスナー
buttonConfirmDelete.addEventListener('click', confirmDelete);
function confirmDelete() {
  // ページ遷移する
  modal.style.display = 'none';
}

// キャンセルボタンをクリックしたらマイページに遷移する処理
document.getElementById('cancelDeletePage').addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:5500/Time%20of%20Fave/MypageFile/mypage/mypage.html';
});

// モーダル外をクリックしたときにモーダルを閉じる
document.addEventListener('click', function(e) {
  if (e.target === modal) {
    modalClose();
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
