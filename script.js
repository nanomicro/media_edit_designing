// 画像の要素を取得
//const clickableImage = document.getElementById('clickableImage');

// 画像をクリックしたときのイベントリスナーを追加
//clickableImage.addEventListener('click', function() {
    // 30秒後に遷移する関数を呼び出す
    //setTimeout(navigateToNewPage, 30000);});

// 30秒後に新しいページに遷移する関数
//function navigateToNewPage() {
    // 任意のURLに遷移する場合
    //window.location.href = 'input.html';}

// DOMからimg要素を取得
const imageElement = document.getElementById('clickableImage');

// シングルクリックの処理
let singleClickTimer = null; // タイマーを保持する変数

imageElement.addEventListener('click', function() {
  if (singleClickTimer === null) {
    // 200ミリ秒後にシングルクリックの処理を実行
    singleClickTimer = setTimeout(function() {
      console.log('Single click executed.');
      singleClickTimer = null; // タイマーをリセット
    }, 500);
  } else {
    // タイマーが設定されている場合、ダブルクリックとして扱う
    clearTimeout(singleClickTimer); // タイマーをクリア
    singleClickTimer = null; // タイマーをリセット
    console.log('Double click executed.');
  }
});

// ダブルクリックの処理（ダブルクリックをシミュレートする場合）
imageElement.addEventListener('dblclick', function() {
  console.log('Double click executed.');
});


import { useCallback, useRef, MouseEventHandler } from "react";

export default function App() {
  const setTimeoutRef = useRef<number | null>(null);

  const onSingleClick = useCallback<MouseEventHandler<HTMLButtonElement>>((event) => {
    event.preventDefault();

    if (setTimeoutRef.current !== null) return;

    setTimeoutRef.current = setTimeout(() => {
      setTimeoutRef.current = null;

      // シングルクリック時に実行したい処理
      console.log("single click");
    }, 500);
  }, []);

  const onDoubleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      event.preventDefault();

      if (setTimeoutRef.current) {
        clearTimeout(setTimeoutRef.current);

        setTimeoutRef.current = null;
      }

      // ダブルクリック時に実行したい処理
      console.log("double click");
    },
    []
  );

  return (
    <div className="App">
      <button onClick={onSingleClick} onDoubleClick={onDoubleClick}>
        ホゲ
      </button>
    </div>
  );
}
