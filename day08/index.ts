function run1(input: string[]) {
    let splitEntries: string[]
    let signalPatterns: string[] = new Array()
    let outputValue: string[] = new Array()
    let delimiter = false;
    let counter = 0;

    for (let j = 0; j < input.length; j++) {
        splitEntries = input[j].trim().split(' ')
        for (let i = 0; i < splitEntries.length; i++) {
            if (delimiter === true) {
                outputValue.push(splitEntries[i])
            } else if (splitEntries[i] === '|') {
                delimiter = true
            } else {
                signalPatterns.push(splitEntries[i])
            }
        }
        for (let k = 0; k < outputValue.length; k++) {
            if (outputValue[k].length === 2 || outputValue[k].length === 3 || outputValue[k].length === 4 || outputValue[k].length === 7) {
                counter++;
            }
        }
        delimiter = false;
        outputValue = []
        signalPatterns = []
    }

    console.log(counter)
}


function run2(input: Array<string>) {
    let splitEntries: string[]
    let signalPatterns: string[] = new Array()
    let outputValue: string[] = new Array()
    let delimiter = false;
    let digit: string[] = new Array(10);
    let upperOne = '';
    let number = '';
    let finalResult = 0;

    for (let j = 0; j < input.length; j++) {
        splitEntries = input[j].trim().split(' ')
        for (let i = 0; i < splitEntries.length; i++) {
            if (delimiter === true) {
                outputValue.push(splitEntries[i])
            } else if (splitEntries[i] === '|') {
                delimiter = true
            } else {
                signalPatterns.push(splitEntries[i])
            }
        }
        signalPatterns.sort(function (a, b) {
            return a.length - b.length;
        })
        digit[1] = signalPatterns[0];
        digit[7] = signalPatterns[1];
        digit[4] = signalPatterns[2];
        digit[8] = signalPatterns[9];
        for (let k = 3; k < 6; k++) { // trouver le 3
            if (signalPatterns[k].includes(digit[1][0]) && signalPatterns[k].includes(digit[1][1])) {
                digit[3] = signalPatterns[k];
            }
        }
        for (let k = 6; k < 9; k++) { // trouver le 9
            if (signalPatterns[k].includes(digit[3][0]) && signalPatterns[k].includes(digit[3][1])
                && signalPatterns[k].includes(digit[3][2]) && signalPatterns[k].includes(digit[3][3])
                && signalPatterns[k].includes(digit[3][4])) {
                digit[9] = signalPatterns[k];
            }
        }
        for (let k = 6; k < 9; k++) { // trouver le 0 et le 6
            if (signalPatterns[k] !== digit[9] && signalPatterns[k].includes(digit[1][0])
                && signalPatterns[k].includes(digit[1][1])) {
                digit[0] = signalPatterns[k];
            } else if (signalPatterns[k] !== digit[9]) {
                if (signalPatterns[k].includes(digit[1][0])) {
                    upperOne = digit[1][1];
                } else {
                    upperOne = digit[1][0];
                }
                digit[6] = signalPatterns[k];
            }
        }
        for (let k = 3; k < 6; k++) { // trouver le 2 et le 5
            if (signalPatterns[k] !== digit[3]) {
                if (signalPatterns[k].includes(upperOne)) {
                    digit[2] = signalPatterns[k];
                } else {
                    digit[5] = signalPatterns[k];
                }
            }
        }

        for (let l = 0; l < digit.length; l++) {
            digit[l] = digit[l].split("").sort().join("")
        }
        for (let k = 0; k < outputValue.length; k++) {
            outputValue[k] = outputValue[k].split("").sort().join("")
            for (let l = 0; l < digit.length; l++) {
                if (outputValue[k] === digit[l]) {
                    number += l;
                }
            }
        }
        finalResult += parseInt(number);
        number ='';
        delimiter = false;
        outputValue = []
        signalPatterns = []
    }
    console.log(finalResult)
}

export {run1, run2}

