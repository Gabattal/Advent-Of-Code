function run1(input: Array<string>) {
    let horizontalPosition = 0;
    let depth = 0;
    let result ;
    let separateInput;

    for(let i=0; i<input.length; i++)
    {
        separateInput = input[i].split(" ");
        switch (separateInput[0])
        {
            case "forward":
                horizontalPosition += parseInt(separateInput[1]);
                break;
            case "down":
                depth+= parseInt(separateInput[1]);
                break;
            case "up":
                depth-= parseInt(separateInput[1]);
        }
    }
    result = horizontalPosition * depth;
    console.log(result);
}

function run2(input: Array<string>) {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;
    let result ;
    let separateInput;

    for(let i=0; i<input.length; i++)
    {
        separateInput = input[i].split(" ");
        switch (separateInput[0])
        {
            case "forward":
                horizontalPosition += parseInt(separateInput[1]);
                depth += aim * parseInt(separateInput[1])
                break;
            case "down":
                aim+= parseInt(separateInput[1]);
                break;
            case "up":
                aim-= parseInt(separateInput[1]);
        }
    }
    result = horizontalPosition * depth;
    console.log(result);
}

export {run1, run2}
