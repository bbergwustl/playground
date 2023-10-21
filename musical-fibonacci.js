"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
*
* PROJECT ID: B3B4N6K
* Author: Blake Berg
* Description: Prompting user for n, summing digits
* and finding cooresponding music note.
*
*/
const readline = require('readline');
function promptUser() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const promptInterface = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            promptInterface.question('What would you like to use as n: ', (n) => {
                resolve(n);
                promptInterface.close();
            });
        });
    });
}
function parse(n) {
    const digits = [];
    let num = n;
    while (num > 0) {
        digits.unshift(num % 10); // Extract the last digit and add it to the beginning of the array
        num = Math.floor(num / 10); // Remove the last digit
    }
    return digits;
}
function summation(digits) {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += digits[i];
    }
    return sum;
}
promptUser();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const n = yield promptUser();
        const digitalRoot = parse(n);
        const sum = summation(digitalRoot);
        console.log(`You entered: ${n}`);
        console.log(`Sum of digits: ${sum}`);
    });
}

const player = require('play-sound')();

// Specify the path to your MP3 file
const mp3FilePath = '/Macintosh HD/Users/blakeberg/Music/Music/Media/Unknown Artist/Unknown Album/nadie-te-puede-salvar-172254.mp3';

// Play the MP3 file
player.play(mp3FilePath, (err) => {
    if (err) {
        console.error('Error occurred:', err);
    } else {
        console.log('MP3 file is playing.');
    }
});


main();

// this is also a test