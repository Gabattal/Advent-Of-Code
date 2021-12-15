function run1(input: string[]) {
    let numberOfSteps = 100;
    let numberOfFlashes = 0;
    let stepOver = false;
    //console.log(input)
    type THeight = {
        value: number;
        isVisited: boolean;
    }
    const map = input.map((line) => line.split('').map((value): THeight => {
            return {
                value: parseInt(value),
                isVisited: false
            }
        }
    ))

    for (let k = 0; k < numberOfSteps; k++) {
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[0].length; j++) {
                map[i][j].value++;
            }
        }
        stepOver = false
        while (!stepOver) {
            stepOver = true;
            for (let i = 0; i < input.length; i++) {
                for (let j = 0; j < input[0].length; j++) {
                    if (map[i][j].value > 9 && !map[i][j].isVisited) {
                        addToLocation(i - 1, j - 1);
                        addToLocation(i - 1, j);
                        addToLocation(i, j - 1);
                        addToLocation(i + 1, j - 1);
                        addToLocation(i - 1, j + 1);
                        addToLocation(i + 1, j);
                        addToLocation(i, j + 1);
                        addToLocation(i + 1, j + 1);
                        map[i][j].isVisited = true;
                        map[i][j].value = 0
                        numberOfFlashes += 1
                        stepOver = false
                    }
                }
            }
        }
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[0].length; j++) {
                map[i][j].isVisited = false
            }
        }
    }

    function addToLocation(x: number, y: number) {
        if (map[x]?.[y]) {
            if (!map[x][y].isVisited) {
                map[x][y].value += 1
            }
        }
    }

    console.log(numberOfFlashes)
}


function run2(input: Array<string>) {
    let numberOfSteps = 0;
    let numberOfFlashes = 0;
    let stepOver = false;
    let allFlash = false;
    //console.log(input)
    type THeight = {
        value: number;
        isVisited: boolean;
    }
    const map = input.map((line) => line.split('').map((value): THeight => {
            return {
                value: parseInt(value),
                isVisited: false
            }
        }
    ))

   while(!allFlash) {
        numberOfSteps ++;
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[0].length; j++) {
                map[i][j].value++;
            }
        }
        stepOver = false
        while (!stepOver) {
            stepOver = true;
            for (let i = 0; i < input.length; i++) {
                for (let j = 0; j < input[0].length; j++) {
                    if (map[i][j].value > 9 && !map[i][j].isVisited) {
                        addToLocation(i - 1, j - 1);
                        addToLocation(i - 1, j);
                        addToLocation(i, j - 1);
                        addToLocation(i + 1, j - 1);
                        addToLocation(i - 1, j + 1);
                        addToLocation(i + 1, j);
                        addToLocation(i, j + 1);
                        addToLocation(i + 1, j + 1);
                        map[i][j].isVisited = true;
                        map[i][j].value = 0
                        numberOfFlashes += 1
                        stepOver = false
                    }
                }
            }
        }
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[0].length; j++) {
                map[i][j].isVisited = false
            }
        }
        if(numberOfFlashes===100){
            allFlash = true
        }
        numberOfFlashes = 0;
    }

    function addToLocation(x: number, y: number) {
        if (map[x]?.[y]) {
            if (!map[x][y].isVisited) {
                map[x][y].value += 1
            }
        }
    }

    console.log(numberOfSteps)
}

export {run1, run2}

