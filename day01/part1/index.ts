function run1(input: Array<string>) {
    let comptor = 0;

    for(let i=0; i<input.length; i++)
    {
        if(parseInt(input[i])>parseInt(input[i-1]))
        {
            comptor ++;
        }
    }
    console.log(comptor);
}

export {run1}
