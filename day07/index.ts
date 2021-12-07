function run1(input: string[]) {
    let splitEntries: number[]
    let result = 0;
    splitEntries = input[0].trim()
        .split(',')
        .map(value => parseInt(value))

    splitEntries.sort(function(a, b) {
        return a - b;
    })
    let median = Math.round(splitEntries.length/2)
    let postion = splitEntries[median]
    for (let i=0; i<splitEntries.length; i++)
    {
        result+= Math.abs(postion-splitEntries[i])
    }
    console.log(result)
}


function run2(input: Array<string>) {
    let splitEntries: number[]
    let result = 0;
    let moyenne = 0;
    splitEntries = input[0].trim()
        .split(',')
        .map(value => parseInt(value))
    for(let i=0; i<splitEntries.length; i++)
    {
        moyenne += splitEntries[i]
    }
    moyenne = moyenne/splitEntries.length
    let postion = Math.floor(moyenne)
    for (let i=0; i<splitEntries.length; i++)
    {
        let nbSteps=Math.abs(postion-splitEntries[i])
        for (let j=1; j<=nbSteps; j++)
        {
            result +=j
        }
    }
    console.log(result)
}

export {run1, run2}

