const programmers: Array<string> = ["This Guy", "That Guy", "The Other Guy", "The 4th Guy", "The 5th Guy", "The Big Guy", "The Lone Guy"]

const pairProgrammers = (programmers: Array<string>): Array<Array<string>> => {
    const shuffledProgrammers = programmers.sort((a, b) => 0.5 - Math.random())
    const pairedGroups = []

    for (let i = 0; i < shuffledProgrammers.length; i++) {
        if (i % 2 === 0 && shuffledProgrammers[i + 1]) {
            const group = []
            group.push(shuffledProgrammers[i])
            group.push(shuffledProgrammers[i + 1])
            pairedGroups.push(group)
        }
        if ((i + 1) % 2 !== 0 && i === shuffledProgrammers.length - 1) {
            pairedGroups[pairedGroups.length - 1].push(shuffledProgrammers[i])
        }
    }
    return pairedGroups
}

console.log(pairProgrammers(programmers))