const {normalizeUrl} = require("./crawl.js");
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




