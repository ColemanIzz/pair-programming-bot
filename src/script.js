var programmers = ["This Guy", "That Guy", "The Other Guy", "The 4th Guy", "The 5th Guy", "The Big Guy", "The Lone Guy"];
var pairProgrammers = function (programmers) {
    var shuffledProgrammers = programmers.sort(function (a, b) { return 0.5 - Math.random(); });
    var pairedGroups = [];
    for (var i = 0; i < shuffledProgrammers.length; i++) {
        if (i % 2 === 0 && shuffledProgrammers[i + 1]) {
            var group = [];
            group.push(shuffledProgrammers[i]);
            group.push(shuffledProgrammers[i + 1]);
            pairedGroups.push(group);
        }
        if ((i + 1) % 2 !== 0 && i === shuffledProgrammers.length - 1) {
            pairedGroups[pairedGroups.length - 1].push(shuffledProgrammers[i]);
        }
    }
    return pairedGroups;
};
console.log(pairProgrammers(programmers));
