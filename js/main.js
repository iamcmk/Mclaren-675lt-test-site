var loadingScreen = document.getElementById('loading-screen');
var displayNone = 'display-none';
// setTimeout(removeLoadingScreen, 5000);
//  Checking that 'removeLoadingScreen' is working by using a setTimeout to immitate the page loading

// window.onload = removeLoadingScreen () {
//   loadingScreen.classList.add(displayNone);
// };


function removeLoadingScreen () {
  var topTitle = document.getElementById('title').innerHTML;
  var loadedTitle = 'your page is now loaded';

  loadingScreen.classList.add(displayNone);
  topTitle = 'Your page is loaded';



}

window.onload = removeLoadingScreen;
