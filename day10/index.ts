function run1(input: string[]) {

    let scoreSyntax = 0;
    let checkChunk = [];
    let gotFirstError;

    const map = input.map((line) => line.split(''))


    for (let i = 0; i < input.length; i++) {
        gotFirstError = false;
        checkChunk = [];
        for (let j = 0; j <= input[0].length; j++) {
            if (map[i][j] === '(' || map[i][j] === '[' || map[i][j] === '{' || map[i][j] === '<') {
                checkChunk.push(map[i][j])
            } else {
                if (gotFirstError === true) {
                    continue;
                }
                switch (map[i][j]) {
                    case ')':
                        if (checkChunk.slice(-1).pop() === '(') {
                            checkChunk.pop();
                        } else {
                            scoreSyntax += 3;
                            gotFirstError = true;
                        }
                        break;
                    case ']':
                        if (checkChunk.slice(-1).pop() === '[') {
                            checkChunk.pop();
                        } else {
                            scoreSyntax += 57;
                            gotFirstError = true;
                        }
                        break;
                    case '}':
                        if (checkChunk.slice(-1).pop() === '{') {
                            checkChunk.pop();
                        } else {
                            scoreSyntax += 1197;
                            gotFirstError = true;
                        }
                        break;
                    case '>':
                        if (checkChunk.slice(-1).pop() === '<') {
                            checkChunk.pop();
                        } else {
                            scoreSyntax += 25137;
                            gotFirstError = true;
                        }
                        break;
                }
            }
        }
    }

    console.log(scoreSyntax);
}


function run2(input: Array<string>) {
    let scoreSyntax = 0;
    let checkChunk = [];
    let scoreMissingChunk = []
    let gotFirstError;

    const map = input.map((line) => line.split(''))


    for (let i = 0; i < input.length; i++) {
        gotFirstError = false;
        checkChunk = [];
        scoreSyntax = 0;
        for (let j = 0; j <= input[0].length; j++) {
            if (map[i][j] === '(' || map[i][j] === '[' || map[i][j] === '{' || map[i][j] === '<') {
                checkChunk.push(map[i][j])
            } else {
                if (gotFirstError === true) {
                    continue;
                }
                switch (map[i][j]) {
                    case ')':
                        if (checkChunk.slice(-1).pop() === '(') {
                            checkChunk.pop();
                        } else {
                            gotFirstError = true;
                        }
                        break;
                    case ']':
                        if (checkChunk.slice(-1).pop() === '[') {
                            checkChunk.pop();
                        } else {
                            gotFirstError = true;
                        }
                        break;
                    case '}':
                        if (checkChunk.slice(-1).pop() === '{') {
                            checkChunk.pop();
                        } else {
                            gotFirstError = true;
                        }
                        break;
                    case '>':
                        if (checkChunk.slice(-1).pop() === '<') {
                            checkChunk.pop();
                        } else {
                            gotFirstError = true;
                        }
                        break;
                }
            }
        }
        //console.log(checkChunk)
        if(gotFirstError !== true)
        {
            for (let j=checkChunk.length; j>=0; j--)
            {
                switch (checkChunk[j]){
                    case '(':
                        scoreSyntax *= 5;
                        scoreSyntax += 1;
                        break;
                    case '[':
                        scoreSyntax *= 5;
                        scoreSyntax += 2;
                        break;
                    case '{':
                        scoreSyntax *= 5;
                        scoreSyntax += 3;
                        break;
                    case '<':
                        scoreSyntax *= 5;
                        scoreSyntax += 4;
                        break;
                }
            }
            scoreMissingChunk.push(scoreSyntax)
        }
    }

    scoreMissingChunk.sort((a,b)=> a-b)

    console.log(scoreMissingChunk[Math.floor(scoreMissingChunk.length/2)]);
}

export {run1, run2}

