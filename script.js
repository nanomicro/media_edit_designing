 // Google Sheets API
const CLIENT_ID = '10.nano.9.kojima@gmail.com';
const API_KEY = 'AKfycbyIy0R56EGrUtLudU3XkVDjWsDc6JMhY1UfwzDfI0lAsbKtuhBRPxtUiCPhaqvcx9Xv';
// Read Google Sheets
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPE
  }).then(() => {
    // Google Sheets API
    getDataFromSheet(); // function
  }, (error) => {
    console.error('Google Sheets API failed', error);
});
}

function getDataFromSheet() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: ' 1amj9uZCU7mj2FM2fK-ZLTmoueMW8bHckAJJxEzE2o-s',
    range: 'Sheet1!A1:A10' // your sheet
  }).then((response) => {
    const values = response.result.values;
    if (values.length > 0) {
      const websites = values.map(row => row[0]);
      //console.log('list:', websites);
      window.websites = websites; //use this to read this list
    } else {
      console.error('not found');
    }
  }, (error) => {
    console.error('error:', error);
  });
}
document.addEventListener('DOMContentLoaded', handleClientLoad); 

console.log('list:', window.websites);

function loadRandomWebsite() {
    var userInput = document.getElementById('userInput').value.toLowerCase();
    var websites = window.websites || [];
    
    var index = Math.floor(Math.random() * websites.length);
    var randomWebsite = websites[index];
    var resultDiv = document.getElementById('dataDisplay');
    resultDiv.textContent = randomWebsite;
  }