function run1(input: string[]) {
    let splitEntries: number[]
    let nbDay = 18;
    console.log(input[0]);
    splitEntries = input[0].trim()
        .split(',')
        .map(value => parseInt(value))
    for (let i = 0; i < nbDay; i++) {
        //console.log(splitEntries)
        let variableLength = splitEntries.length
        for (let j = 0; j < variableLength; j++) {
            if (splitEntries[j] === 0) {
                splitEntries[j] = 6
                splitEntries.push(8)
            }
            else
            {
                splitEntries[j]--;
            }
        }
    }
    console.log(splitEntries.length)
}


function run2(input: Array<string>) {
    let splitEntries: number[]
    let nbFish: number[] = new Array(8)
    let nbDay = 256;
    let result = 0;

    splitEntries = input[0].trim()
        .split(',')
        .map(value => parseInt(value))
        .sort()
    for (let i = 0; i <=8; i++) {
        nbFish[i] = 0;
    }
    for (let i = 0; i <splitEntries.length ; i++) {
        nbFish[splitEntries[i]] ++ ;
    }
    for (let i = 0; i < nbDay; i++) {
        //console.log(nbFish)
        let nbResetFish = nbFish[0]
        for(let j=1; j<=8; j++)
        {
            nbFish[j-1]=nbFish[j];
        }
        nbFish[6]+=nbResetFish;
        nbFish[8]=nbResetFish;
    }
    for (let i = 0; i <=8; i++) {
        result +=nbFish[i];
    }
    console.log(result)
}

export {run1, run2}

