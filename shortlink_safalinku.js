/* Safelinku.net end */ 
    var go_url = 'https://idsly.bid/';
    var api = '133cd312ecba642c2c7067f7e4dc92bb640e635c';
    var shorten_includ = ['drive.google.com', 'userscloud.com', 'www.mirrorcreator.com','zippyshare.com'];
	
/* <script src="//safelinku.net/fullpage/script.js"></script> */
function go_get_url(url) {
    var l = document.createElement("a");
    l.href = url;
    return l
};

function go_get_host_name(url) {
    var domain;
    if (typeof url === 'undefined' || url === null || url === '' || url.match(/^\#/)) {
        return ""
    }
    url = go_get_url(url);
    if (url.href.search(/^http[s]?:\/\//) !== -1) {
        domain = url.href.split('/')[2]
    } else {
        return ""
    }
    domain = domain.split(':')[0];
    return domain.toLowerCase()
}
document.addEventListener("DOMContentLoaded", function(event) {
    if (typeof go_url === 'undefined') {
        return
    }
    if (typeof api === 'undefined') {
        return
    }
    var advert_type = 2;

    var anchors = document.getElementsByTagName("a");
    if (typeof shorten_includ !== 'undefined') {
        for (var i = 0; i < anchors.length; i++) {
            var hostname = go_get_host_name(anchors[i].getAttribute("href"));
            if (hostname.length > 0 && shorten_includ.indexOf(hostname) > -1) {
                anchors[i].href = go_url + "full/?api=" + encodeURIComponent(api) + "&url=" + encodeURIComponent(anchors[i].href) + "&type=" + encodeURIComponent(advert_type)
            } else {
                if (anchors[i].protocol === "magnet:") {
                    anchors[i].href = go_url + "full/?api=" + encodeURIComponent(api) + "&url=" + encodeURIComponent(anchors[i].href) + "&type=" + encodeURIComponent(advert_type)
                }
            }
        }
        return
    }
    if (typeof shorten_exclude !== 'undefined') {
        for (var i = 0; i < anchors.length; i++) {
            var hostname = go_get_host_name(anchors[i].getAttribute("href"));
            if (hostname.length > 0 && shorten_exclude.indexOf(hostname) === -1) {
                anchors[i].href = go_url + "full/?api=" + encodeURIComponent(api) + "&url=" + encodeURIComponent(anchors[i].href) + "&type=" + encodeURIComponent(advert_type)
            } else {
                if (anchors[i].protocol === "magnet:") {
                    anchors[i].href = go_url + "full/?api=" + encodeURIComponent(api) + "&url=" + encodeURIComponent(anchors[i].href) + "&type=" + encodeURIComponent(advert_type)
                }
            }
        }
        return
    }
})

