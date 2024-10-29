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
  window.location.href = 'shift.html';
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


document.getElementById("fileInput").addEventListener("change", updateFileName);

function updateFileName() {
    const fileInput = document.getElementById('fileInput');
    const fileLabel = document.getElementById('fileLabel');

    if (fileInput.files.length > 0) {
        // 選択されたファイルの名前をlabelに表示
        fileLabel.textContent = fileInput.files[0].name;
    } else {
        // ファイルが選択されていない場合はデフォルトメッセージを表示
        fileLabel.textContent = "ファイルを選択してください";
    }
}

// 時間データの例 (実際はバックエンドから取得)
const date1 = new Date('2024-09-18T09:00:00');  // 午前9時
const date2 = new Date('2024-09-18T15:00:00');  // 午後3時

// 時間だけをゼロなしで取得
const time1 = date1.getHours() + ':' + String(date1.getMinutes()).padStart(2, '0');
const time2 = date2.getHours() + ':' + String(date2.getMinutes()).padStart(2, '0');

// HTMLに時間を挿入
document.querySelector('.time-container .time:nth-child(1)').textContent = time1;
document.querySelector('.time-container .time:nth-child(2)').textContent = time2;

