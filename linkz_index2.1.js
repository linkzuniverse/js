/*  Skript Daftar A-Z dan Genre */
var numposts = 9999;
var standardstyling = true;

function startpost(json){
  for (var i = 0; i < numposts; i++){
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    
    if (i == json.feed.entry.length) break;
    
    for (var k = 0; k < entry.link.length; k++){
      if (entry.link[k].rel == 'alternate'){
        posturl = entry.link[k].href;break;
      }
    }
        
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    
    document.write(posttitle);
  }
  
  if (standardstyling) document.write('</li>');
}

function finished(){
  document.write('<br /><br /><a href="" style="font-size: 10 px; text-decoration:none; color: #616469;" target="_blank">Sitemap</a>');
}

/*  Skript Grid Daftar Gambar INDEX */
function linkz_daftar_buku1(a){for(var t=a.feed.entry||[],e=['<div class="linkz_daftar_buku_class1">'],i=0;i<t.length;++i){for(var l=t[i],r=l.title.$t,n=l.media$thumbnail?l.media$thumbnail.url:"http://2.bp.blogspot.com/-4fCf53FqYKM/Vccsy7apoZI/AAAAAAAAK4o/XJkv3RkC0pw/s1600/default%2Bimage.png",s=n.replace("s72-c","s"+linkz_ikon+""),h=l.link||[],c=0;c<h.length&&"alternate"!=h[c].rel;++c);var d=h[c].href,m='<img class="" src="'+s+'" />',p=linkz_judul?'<span class="judul1">'+r+"</span>":"",g='<a rel="nofollow" rel="noreferrer"href="'+d+'" target="_blank" title="'+r+'">'+m+p+"</a>";e.push('<div class="kotak1">',g,"</div>")}e.push("</div>"),document.write(e.join(""))}

var linkz_ikon = 200; 
var linkz_judul = true;

/* Script Ongoing Tamat Ikon */
function judulgambar(w){document.write('<ul>');for(var v=0;v<numposts;v++){var f=w.feed.entry[v];var g=f.title.$t;var z;if(v==w.feed.entry.length){break}for(var r=0;r<f.link.length;r++){if(f.link[r].rel=="replies"&&f.link[r].type=="text/html"){var n=f.link[r].title;var o=f.link[r].href}if(f.link[r].rel=="alternate"){z=f.link[r].href;break}}var j;try{j=f.media$thumbnail.url}catch(q){s=f.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){j=d}else{j="http://3.bp.blogspot.com/-DiSuxig0X9k/TZYzqpks56I/AAAAAAAAAWM/sN1GbkQvDUI/s1600/no_image.jpg"}}var x=f.published.$t;var m=x.substring(0,4);var l=x.substring(5,7);var t=x.substring(8,10);var h=new Array();h[1]="Jan";h[2]="Feb";h[3]="Mar";h[4]="Apr";h[5]="May";h[6]="Jun";h[7]="Jul";h[8]="Aug";h[9]="Sep";h[10]="Oct";h[11]="Nov";h[12]="Dec";document.write('<li>');if(showpostthumbnails==true){document.write('<a href="'+z+'" target ="_top"><img class="label_thumb" src="'+j+'"/></a>')}document.write('<strong><a href="'+z+'" target ="_top">'+g+"</a></strong><br>");if("content" in f){var y=f.content.$t}else{if("summary" in f){var y=f.summary.$t}else{var y=""}}var p=/<\S[^>]*>/g;y=y.replace(p,"");if(showpostsummary==true){if(y.length<numchars){document.write("");document.write(y);document.write("")}else{document.write("");y=y.substring(0,numchars);var e=y.lastIndexOf(" ");y=y.substring(0,e);document.write(y+"...");document.write("")}}var A="";var u=0;document.write("<br>");if(showpostdate==true){A=A+h[parseInt(l,10)]+"-"+t+" - "+m;u=1}if(showcommentnum==true){if(u==1){A=A+" | "}if(n=="1 Comments"){n="1 Comment"}if(n=="0 Comments"){n="No Comments"}n='<a href="'+o+'" target ="_top">'+n+"</a>";A=A+n;u=1}if(displaymore==true){if(u==1){A=A+" | "}A=A+'<a href="'+z+'" class="url" target ="_top">More »</a>';u=1}document.write(A);document.write("</li>");if(displayseparator==true){if(v!=(numposts-1)){document.write("")}}}document.write("</ul>")};

$(document).ready(function() {$('img').attr('src', function(i, src) 
{return src.replace( 's72-c', 's150' );});});

var numposts = 9999;var showpostthumbnails = true;var displaymore = false;var displayseparator = false;var showcommentnum = false;var showpostdate = false;var showpostsummary = false;var numchars = 70;

//Script Redirect CTRL + U
//function redirectCU(e) {
//  if (e.ctrlKey && e.which == 85) {
//    window.location.replace("http://www.linkzuniverse.byethost32.com/error-page");
//    return false;
//  }
//}
//document.onkeydown = redirectCU;