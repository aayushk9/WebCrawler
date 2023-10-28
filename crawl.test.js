const {normalizeUrl, getURLsFromHTML} = require("./crawl.js");
const {test, expect} = require("@jest/globals");

test("normalizeUrl strip protocol", () => {
    const input = "https://blog.boot.dev/path/";
    const actual = normalizeUrl(input);
    const expected = "blog.boot.dev/path";
    // actual url matches the expected url
    expect(actual).toEqual(expected);
});

test("normalizeUrl strip trailing slash", () => {
    const input = "https://blog.boot.dev/path/";
    const actual = normalizeUrl(input);
    const expected = "blog.boot.dev/path";
    // actual url matches the expected url
    expect(actual).toEqual(expected);
});

test("normalizeUrl capital", () => {
    const input = "https://blog.boot.dev/path/";
    const actual = normalizeUrl(input);
    const expected = "blog.boot.dev/path";
    // actual url matches the expected url
    expect(actual).toEqual(expected);
});

test("getURLsFromHTML", () => {
    const inputHTMLBody =
     `
      <html>
         <body>
           <a href="https://blog.boot.dev/">
              Boot.dev 
           </a>
        </body>
     </html>
    `
    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://blog.boot.dev/"];
    // actual url matches the expected url
    expect(actual).toEqual(expected);
});




