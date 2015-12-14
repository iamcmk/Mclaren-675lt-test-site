var loadingScreen = document.getElementById('loading-screen');
var displayNone = 'display-none';

function removeLoadingScreen () {
  loadingScreen.classList.add(displayNone);
}

window.onload = removeLoadingScreen, addLoadedNotification;

//still working on this ... 
// function addLoadedNotification () {
//   var loadedNotifcation = document.createElement("loaded-notification")
//
//   var topDiv = document.getElementById('image-one');
//   document.body.insertBefore(loadedNotifcation, topDiv);
// }
