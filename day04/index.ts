function run1(input: Array<string>) {
    let numbersToDraw = input[0].split(",")
    let entries = []
    let stringToPush = "";
    let splitString;
    let result = 0;
    let winner = false;
    let numberCalled = 0;
    let bingoNumber = 0;

    for (let i = 2; i < input.length; i++) {
        if (input[i] !== '') {
            stringToPush += ' ' + input[i]
        } else {
            entries.push(stringToPush)
            stringToPush = '';
        }
    }

    let entriesArray = new Array(entries.length)

    for (let i = 0; i < entries.length; i++) {
        entriesArray[i] = new Array(25);
        splitString = entries[i].trim().split(/\s+/);
        for (let j = 0; j < 25; j++) {
            entriesArray[i][j] = splitString[j];
        }
    }

    for (let indexDraw = 0; indexDraw < numbersToDraw.length; indexDraw++) {
        for (let i = 0; i < entries.length; i++) {
            if(winner)
            {
                break;
            }
            if (entriesArray[i].includes(numbersToDraw[indexDraw])) {
                for (let k = 0; k < 25; k++) {
                    if (entriesArray[i][k] === numbersToDraw[indexDraw]) {
                        entriesArray[i][k] = 'X'
                    }
                }
            }
            for (let x = 0; x < 5; x++) {
                if ((entriesArray[i][(x * 5)].includes('X') && entriesArray[i][1 + (x * 5)].includes('X') && entriesArray[i][2 + (x * 5)].includes('X')
                    && entriesArray[i][3 + (x * 5)].includes('X') && entriesArray[i][4 + (x * 5)].includes('X'))) {
                    numberCalled = parseInt(numbersToDraw[indexDraw])
                    bingoNumber = i;
                    winner = true;
                }
                if (entriesArray[i][x].includes('X') && entriesArray[i][x + 5].includes('X') && entriesArray[i][x + 10].includes('X')
                    && entriesArray[i][x + 15].includes('X') && entriesArray[i][x + 20].includes('X')) {
                    numberCalled = parseInt(numbersToDraw[indexDraw])
                    bingoNumber = i;
                    winner = true;
                }
            }
        }
    }
    for(let i=0; i<25; i++)
    {
        if(entriesArray[bingoNumber][i]!=='X')
        {
            result+=parseInt(entriesArray[bingoNumber][i]);
        }
    }
    console.log(result*numberCalled)
}


function run2(input: Array<string>) {
    let numbersToDraw = input[0].split(",")
    let entries = []
    let stringToPush = "";
    let splitString;
    let result = 0;
    let winner = false;
    let numberCalled = 0;
    let bingoNumber = 0;
    let counterWin = 0;

    for (let i = 2; i < input.length; i++) {
        if (input[i] !== '') {
            stringToPush += ' ' + input[i]
        } else {
            entries.push(stringToPush)
            stringToPush = '';
        }
    }

    let entriesArray = new Array(entries.length)
    let idOfWonEntries = new Array(entries.length)

    for (let i = 0; i < entries.length; i++) {
        entriesArray[i] = new Array(25);
        splitString = entries[i].trim().split(/\s+/);
        for (let j = 0; j < 25; j++) {
            entriesArray[i][j] = splitString[j];
        }
    }

    for (let indexDraw = 0; indexDraw < numbersToDraw.length; indexDraw++) {
        for (let i = 0; i < entries.length; i++) {
            if(winner)
            {
                break;
            }
            if (entriesArray[i].includes(numbersToDraw[indexDraw])) {
                for (let k = 0; k < 25; k++) {
                    if (entriesArray[i][k] === numbersToDraw[indexDraw]) {
                        entriesArray[i][k] = 'X'
                    }
                }
            }
            for (let x = 0; x < 5; x++) {
                if (entriesArray[i][(x * 5)].includes('X') && entriesArray[i][1 + (x * 5)].includes('X') && entriesArray[i][2 + (x * 5)].includes('X')
                    && entriesArray[i][3 + (x * 5)].includes('X') && entriesArray[i][4 + (x * 5)].includes('X') && !idOfWonEntries.includes(i)) {
                    numberCalled = parseInt(numbersToDraw[indexDraw])
                    bingoNumber = i;
                    counterWin ++;
                    idOfWonEntries.push(i);
                    if(counterWin ===entries.length)
                    {
                        winner = true;
                    }
                }
                if (entriesArray[i][x].includes('X') && entriesArray[i][x + 5].includes('X') && entriesArray[i][x + 10].includes('X')
                    && entriesArray[i][x + 15].includes('X') && entriesArray[i][x + 20].includes('X') && !idOfWonEntries.includes(i)) {
                    numberCalled = parseInt(numbersToDraw[indexDraw])
                    bingoNumber = i;
                    counterWin ++;
                    idOfWonEntries.push(i);
                    if(counterWin ===entries.length)
                    {
                        winner = true;
                    }
                }
            }
        }
    }
    for(let i=0; i<25; i++)
    {
        if(entriesArray[bingoNumber][i]!=='X')
        {
            result+=parseInt(entriesArray[bingoNumber][i]);
        }
    }
    console.log(result*numberCalled)
}

export {run1, run2}

