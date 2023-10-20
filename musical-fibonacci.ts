/** 
* 
* PROJECT ID: B3B4N6K
* Author: Blake Berg
* Description: Prompting user for n, summing digits
* and finding cooresponding music note.
*
*/
const readline = require('readline');

async function promptUser(): Promise<number> {
    return new Promise((resolve) => {
        const promptInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        promptInterface.question('What would you like to use as n: ', (n: number) => {
            resolve(n);
            promptInterface.close();
        });
    });
}



function parse(n: number): number[] {
    const digits: number[] = [];
    let num: number = n;
    while (num > 0) {
        digits.unshift(num % 10); // Extract the last digit and add it to the beginning of the array
        num = Math.floor(num / 10); // Remove the last digit
    }
    return digits;
}

function summation(digits: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += digits[i];
    }
    return sum;
}




promptUser();
async function main() {
    const n: number = await promptUser();
    console.log(`You entered: ${n}`);
    const digitalRoot = parse(n);
    const sum = summation(digitalRoot);
    console.log(`Sum of digits: ${sum}`);
}
main();

