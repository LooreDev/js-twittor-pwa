//validando si la página se está desplegando desde produccion o desarrollo

var url = window.location.href;
var swLocation = '/twittor/sw.js'

if (navigator.serviceWorker) {
    if (url.includes('localhost')) { 
        swLocation = '/sw.js'; }
    navigator.serviceWorker.register(swLocation);
}

