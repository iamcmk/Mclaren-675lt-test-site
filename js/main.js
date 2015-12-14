var loadingScreen = document.getElementById('loading-screen');
var displayNone = 'display-none';

function removeLoadingScreen () {
  loadingScreen.classList.add(displayNone);
}

window.onload = removeLoadingScreen;
