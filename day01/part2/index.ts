function run2(input: Array<string>) {
    let comptor = 0;
    let result = 0;
    let arrayOfNumber: Array<number> = [];

    for(let i=0; i<input.length-2; i++)
    {
        result = parseInt(input[i]) + parseInt(input[i+1]) + parseInt(input[i+2])
        arrayOfNumber.push(result)
    }

    for(let i=0; i<arrayOfNumber.length; i++)
    {
        if(arrayOfNumber[i]>arrayOfNumber[i-1])
        {
            comptor ++;
        }
    }
    console.log(comptor)
}

export {run2}
