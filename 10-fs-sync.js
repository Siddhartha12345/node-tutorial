const { readFileSync, writeFileSync } = require('fs');  // I only want these two methods from the entire 'fs' module.

console.log("Start...");
// read from file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// write to file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }    // for appending content to the existing file
);

console.log("Done with this task...");
console.log("Starting the next one...");