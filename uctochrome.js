var noUC = navigator.userAgent;
var redirect = noUC.search("UCBrowser");
if(redirect>1) {
var axefo = window.location.assign("googlechrome://navigate?url="+ window.location.href);
var activity = axefo;document.getElementsByTagName('head')[0].appendChild(activity);}