const {JSDOM } = require("jsdom"); 
function getURLsFromHTML(htmlBody, baseURL){
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");
  for(const linkElement of linkElements){
    urls.push(linkElement.href);
  }
  return urls;
}
function normalizeUrl(urlString){
   const urlObj = new URL(urlString);
   // extracting protocol from URL
   const hostPath = `${urlObj.hostname}${urlObj.pathname}`
   if(hostPath.length > 0 && hostPath.slice(-1) === "/"){
        return hostPath.slice(0, -1);
   } else{
      return hostPath;
   }
}

module.exports = {
   normalizeUrl,
   getURLsFromHTML
}