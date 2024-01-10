// 画像の要素を取得
const clickableImage = document.getElementById('clickableImage');

// 画像をクリックしたときのイベントリスナーを追加
clickableImage.addEventListener('click', function() {
    // 30秒後に遷移する関数を呼び出す
    setTimeout(navigateToNewPage, 30000);
});

// 30秒後に新しいページに遷移する関数
function navigateToNewPage() {
    // 任意のURLに遷移する場合
    window.location.href = 'input.html';
}

