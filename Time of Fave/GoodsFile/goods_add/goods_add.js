const checkbox = document.getElementById('switch');
const title = document.querySelector('.title');
const goodsForm = document.getElementById('goods');
const eventsForm = document.getElementById('events');

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        title.textContent = 'イベント';
        goodsForm.style.display = 'none';  // グッズフォームを非表示
        eventsForm.style.display = 'block'; // イベントフォームを表示
    } else {
        title.textContent = 'グッズ';
        goodsForm.style.display = 'block';  // グッズフォームを表示
        eventsForm.style.display = 'none';   // イベントフォームを非表示
    }
});

// ページ読み込み時に初期状態を設定
window.onload = () => {
    eventsForm.style.display = 'none'; // 初期状態でイベントフォームを非表示
};
