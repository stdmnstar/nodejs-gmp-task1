import { createInterface } from 'readline';

const readLine = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

readLine.on('line', line => {
    const reverseString = line.split('').reverse().join('')
    readLine.output.write(reverseString + '\n');
});
