var loadingScreen = document.getElementById('loading-screen');
var displayNone = 'display-none';


// setTimeout(removeLoadingScreen, 5000);
//  Checking that 'removeLoadingScreen' is working by using a setTimeout to immitate the page loading

window.onload = removeLoadingScreen();

function removeLoadingScreen () {
  loadingScreen.classList.add(displayNone);
}
