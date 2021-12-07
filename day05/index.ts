function run1(input: string[]) {
    let splitEntries: number[][];
    let size = 1000;
    let map = new Array(size)
    let counter = 0;

    for (let i = 0; i < size; i++) {
        map[i] = new Array((size));
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            map[i][j] = 0;
        }
    }
    for (let i = 0; i < size/2; i++) {
        let moveDiag = 0;
        splitEntries = input[i].trim().split(' -> ')
            .map(value => value.split(',')
                .map(value => parseInt(value)))

        let x1 = splitEntries[0][0];
        let y1 = splitEntries[0][1];
        let x2 = splitEntries[1][0];
        let y2 = splitEntries[1][1];
        if (x1 === x2) {
            let index = x1;
            let min = Math.min(y1, y2)
            let max = Math.max(y1, y2)
            for (let j = min; j <= max; j++) {
                map[j][index] += 1;
            }
        } else if (y1 === y2) {
            let index = splitEntries[1][1];
            let min = Math.min(x1, x2)
            let max = Math.max(x1, x2)
            for (let j = min; j <= max; j++) {
                map[index][j] += 1;
            }
        } else {
            if (Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
                let minX = Math.min(x1, x2)
                let maxX = Math.max(x1, x2)
                let minY = Math.min(y1, y2)
                let maxY = Math.max(y1, y2)
                for (let j = minX; j <= maxX; j++) {
                    if ((y1 > y2 && x1 > x2) || (y1 < y2 && x1 < x2)) {
                        map[minY + moveDiag][minX + moveDiag] += 1;
                    } else if (x1 === y2 && x2 === y1) {
                        map[maxX -moveDiag][minX + moveDiag] += 1;
                    } else if (x1 === x2 && y1 === y2) {
                        map[minX + moveDiag][minX + moveDiag] += 1;
                    } else {
                        map[maxY - moveDiag][minX + moveDiag] += 1;
                    }
                    moveDiag++
                }
            }
        }
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (map[i][j] >= 2) {
                counter++;
            }
        }
    }
    console.log(counter)
}


function run2(input: Array<string>) {
    console.log(input);
}

export {run1, run2}

