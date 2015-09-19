//// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Google for Selected Text";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(tab) {
  var url = "https://www.google.com";
  window.open(url, '_blank');
};
//
//// Set up context menu at install time.
//chrome.runtime.onInstalled.addListener(function() {
//  var context = "selection";
//  var title = "Google for Selected Text";
//  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
//                                         "id": "context" + context});
//});
//
//// add click event
//chrome.contextMenus.onClicked.addListener(onClickHandler);
//
//// The onClicked callback function.
//function onClickHandler(info, tab) {
//  var sText = info.selectionText;
//  var url = "https://www.google.com";
//  window.open(url, '_blank');
//};
//
//var root = chrome.contextMenus.create({
//    title: 'MyExtension',
//    contexts: ['page']
//}, function () {
//    var subMenu = chrome.contextMenus.create({
//        title: 'Duplicate Tab'
//        contexts: ['page'],
//        parentId: root,
//        onclick: function (evt) {
//            chrome.tabs.create({ url: evt.pageUrl })
//        }
//    });
//});