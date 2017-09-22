 translateVocApp = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "http://localhost:8081?text=" + query});
 };

chrome.contextMenus.create({
 title: "Translate in VocabularyApp",
 contexts:["selection"],  
 onclick: translateVocApp 
});