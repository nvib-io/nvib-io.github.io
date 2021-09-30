// new prototype defintion
document.include = function (url) {
 if ('undefined' == typeof(url)) return false;
 var p,rnd;
 if (document.all){
   // For IE, create an ActiveX Object instance
   p = new ActiveXObject("Microsoft.XMLHTTP");
 }
 else {
   // For mozilla, create an instance of XMLHttpRequest.
   p = new XMLHttpRequest();
 }
 // Prevent browsers from caching the included page
 // by appending a random  number (optional)
 rnd = Math.random().toString().substring(2);
 url = url.indexOf('?')>-1 ? url+'&rnd='+rnd : url+'?rnd='+rnd;
 // Open the url and write out the response
 p.open("GET",url,false);
 p.send(null);
 document.write( p.responseText );
}
