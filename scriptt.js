var arr = [];
  
//get data from google sheet
fetch("https://script.google.com/macros/s/AKfycbztp1fAxeRUbhQH5K3ptdVjz0AGx1iWAIiydftGCZtB7v_HgNTLUR_k9CsXXIPNiEGP/exec",{
  method: "GET"
}).then(res => res.json()).then(datas => {
  datas.myalldata.map((data,index) => {
    let id = data[0];
    let topic = data[1];
    let content = data[2];
    arr.push(topic + ": " + content)
  })
})

console.log(arr);


function loadRandomWebsite() {
  var userInput = document.getElementById('userInput').value.toLowerCase(); 
  var error = document.getElementById('error');
  var resultDiv = document.getElementById('result');
  var websites = arr;

  if (userInput === '') {
    error.textContent = '入力くらいは自分でしてよ';
    resultDiv.textContent = '';
  }else {
   error.textContent = '';
   var index = Math.floor(Math.random() * websites.length);var randomWebsite = websites[index];
   resultDiv.textContent = randomWebsite;

  }
    //iframe.setAttribute('src', randomWebsite);
    //iframe.style.display = 'block';
}
