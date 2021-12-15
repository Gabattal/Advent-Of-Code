function run1(input: string[]) {
    let map = new Array(input.length + 2)
    let splitEntries: string[]
    let riskLevel = 0;

    for (let i = 0; i < input.length + 2; i++) {
        map[i] = new Array(input[0].length + 2)
    }

    for (let i = 0; i < input.length + 2; i++) {
        if (i === 0 || i === input.length + 1) {
            for (let j = 0; j < input[0].length + 2; j++) {
                map[i][j] = 9;
            }
        } else {
            map[i][0] = 9;
            map[i][input[0].length + 1] = 9
            splitEntries = input[i - 1].split('')
            for (let j = 0; j < splitEntries.length; j++) {
                map[i][j + 1] = parseInt(splitEntries[j])
            }
        }

    }

    for (let i = 1; i < input.length + 1; i++) {
        for (let j = 1; j < input[0].length + 1; j++) {
            if (map[i][j] < map[i][j + 1] && map[i][j] < map[i][j - 1]
                && map[i][j] < map[i + 1][j] && map[i][j] < map[i - 1][j]) {
                riskLevel += (map[i][j] + 1)
            }
        }
    }


    console.log(riskLevel)
}


function run2(input: Array<string>) {
    type TVector = {
        x: number;
        y: number;
    }

    type THeight = {
        value: number;
        isVisited: boolean;
    }

    const basinSizes = []

    const map = input.map(
        (line) => line.split('').map(
            (char): THeight => {
                return {
                    value: parseInt(char),
                    isVisited: false
                }
            }
        )
    )

    const mapSize: TVector = {
        y: map.length,
        x: map[0].length
    }

    for (let x = 0; x < mapSize.x; x++) {
        for (let y = 0; y < mapSize.y; y++) {
            if (isMinimumLocal({x, y})) {
                basinSizes.push(getBasinSize({x, y}))
            }
        }
    }

    function isMinimumLocal(location: TVector) {
        const currentHeightValue = getHeight(location).value;

        return !(currentHeightValue > getHeight({x: location.x, y: location.y + 1}).value
            || currentHeightValue > getHeight({x: location.x, y: location.y - 1}).value
            || currentHeightValue > getHeight({x: location.x + 1, y: location.y}).value
            || currentHeightValue > getHeight({x: location.x - 1, y: location.y}).value);
    }

    function getHeight(location: TVector): THeight {
        return map[location.y]?.[location.x] ? map[location.y][location.x] : {value: 9, isVisited: true};
    }

    function getBasinSize(location: TVector) {
        const locationsToCheck = [location];
        let size = 0;
        while (locationsToCheck.length) {
            const currentLocation = locationsToCheck.pop() as TVector;
            const currentHeight = getHeight(currentLocation)
            if (currentHeight.isVisited) {
                continue;
            }
            currentHeight.isVisited = true;
            if (currentHeight.value === 9) {
                continue;
            }
            locationsToCheck.push({x: currentLocation.x, y: currentLocation.y + 1})
            locationsToCheck.push({x: currentLocation.x, y: currentLocation.y - 1})
            locationsToCheck.push({x: currentLocation.x + 1, y: currentLocation.y})
            locationsToCheck.push({x: currentLocation.x - 1, y: currentLocation.y})
            size++;

        }
        return size;
    }

    basinSizes.sort((a, b) => b - a)
    console.log(basinSizes[0]*basinSizes[1]*basinSizes[2])
}

export {run1, run2}

