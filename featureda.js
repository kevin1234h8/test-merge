console.log("featured a");
const originalString = "Hello, World! This is an example string.";

const encodedString = encodeURIComponent(originalString);
const decodedString = decodeURIComponent(encodedString);
console.log("Original String:", originalString);
console.log("Encoded String:", encodedString);
console.log("Decoded String:", decodedString);
