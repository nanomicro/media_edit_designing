// ボタンの要素を取得
const fetchButton = document.getElementById('fetchButton');

// ボタンにクリックイベントリスナーを追加
fetchButton.addEventListener('click', async function() {
  try {
    // APIからデータを取得
    const response = await fetch('https://your-web-api-endpoint/data');
    const dataArray = await response.json();
    
    // データの中からランダムなものを選択
    const randomIndex = Math.floor(Math.random() * dataArray.length);
    const randomData = dataArray[randomIndex];
    
    // データをHTMLに表示
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = `<h2>ランダムなデータ:</h2><pre>${JSON.stringify(randomData, null, 2)}</pre>`;
    
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
  }
});