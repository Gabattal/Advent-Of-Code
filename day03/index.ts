function run1(input: Array<string>) {
    let splitArray: Array<string> = new Array<string>(input[0].length);
    let arrayCounter: Array<number> = new Array<number>(input[0].length);
    let gammaResult = 0;
    let epsilonResult = 0;
    let power = splitArray.length - 1;
    let powerConsumption;

    for (let i = 0; i < input.length; i++) {
        arrayCounter[i] = 0;
    }

    for (let i = 0; i < input.length; i++) {
        splitArray = input[i].split("");
        for (let j = 0; j < splitArray.length; j++) {
            if (splitArray[j] === '1') {
                arrayCounter[j] += 1;
            }
        }
    }
    for (let j = 0; j < splitArray.length; j++) {
        if (arrayCounter[j] > (input.length / 2)) {
            gammaResult += Math.pow(2, (power))
        } else {
            epsilonResult += Math.pow(2, (power))
        }
        power--;
    }
    powerConsumption = gammaResult * epsilonResult;
    console.log(powerConsumption)
}

function calculateRating(input: Array<string>, value1: string, value2: string) {
    let splitArray: Array<string> = new Array<string>(input[0].length);
    let arrayCounter: Array<number> = new Array<number>(input[0].length);
    let rating: Array<string> = input;
    let index = 0;
    let valueToRemove;
    let lengthRating;
    let power = splitArray.length - 1;
    let totalRate = 0;

    for (let i = 0; i < input.length; i++) {
        arrayCounter[i] = 0;
    }

    do {
        for (let i = 0; i < rating.length; i++) {
            splitArray = rating[i].split("");
            if (splitArray[index] === '1') {
                arrayCounter[index] += 1;
            }
        }

        lengthRating = rating.length;

        for (let i = 0; i < rating.length; i++) {
            splitArray = rating[i].split("");


            if (arrayCounter[index] >= lengthRating / 2) {
                if (splitArray[index] !== value1) {
                    valueToRemove = rating.indexOf(rating[i]);
                    rating.splice(valueToRemove, 1);
                    i--;
                }
            } else {
                if (splitArray[index] !== value2) {
                    valueToRemove = rating.indexOf(rating[i]);
                    rating.splice(valueToRemove, 1);
                    i--;
                }
            }

        }
        index++;
    } while (rating.length > 1)

    for (let j = 0; j < splitArray.length; j++) {
        if (splitArray[j]==='1') {
            totalRate += Math.pow(2, (power))
        }
        power--;
    }
    console.log(totalRate)
}


function run2(input: Array<string>) {

    //calculateRating(input, '1', '0')
    calculateRating(input, '0', '1')
}


export {run1, run2}
