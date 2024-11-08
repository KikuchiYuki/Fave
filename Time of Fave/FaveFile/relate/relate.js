// アコーディオンのボタンをすべて取得
const accordionButtons = document.querySelectorAll('.accordion-button');

// 各ボタンにクリックイベントを設定
accordionButtons.forEach(button => {
  button.addEventListener('click', function() {
    // 最も近い親の .accordion-item 内の .accordion-content を取得
    const content = this.closest('.accordion-item').querySelector('.accordion-content');

    // .accordion-content要素が存在するか確認
    if (content) {
      // すべてのコンテンツを閉じる
      document.querySelectorAll('.accordion-content').forEach(item => {
        if (item !== content) {
          item.classList.remove('show');  // 他のセクションを閉じる
        }
      });

      // 現在のセクションを表示・非表示に切り替える
      content.classList.toggle('show');
    }
  });
});
