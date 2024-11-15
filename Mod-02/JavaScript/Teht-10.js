// Module 2.10 JS codes

function runVotingProgram() {
    // Prompt function to simulate user inputs
    function prompt(message) {
        const response = window.prompt(message);
        return response ? response.trim() : "";
    }

    // Ask for the number of candidates
    const candidateCount = parseInt(prompt("Enter the number of candidates:"), 10);
    if (isNaN(candidateCount) || candidateCount <= 0) {
        console.log("Invalid number of candidates. Exiting program.");
        return;
    }

    // Get candidate names and initialize vote counts
    const candidates = [];
    for (let i = 1; i <= candidateCount; i++) {
        const candidateName = prompt(`Name for candidate ${i}:`);
        if (candidateName) {
            candidates.push({ name: candidateName, votes: 0 });
        } else {
            console.log(`Candidate ${i} skipped due to empty name.`);
        }
    }

    if (candidates.length === 0) {
        console.log("No valid candidates. Exiting program.");
        return;
    }

    // Ask for the number of voters
    const voterCount = parseInt(prompt("Enter the number of voters:"), 10);
    if (isNaN(voterCount) || voterCount <= 0) {
        console.log("Invalid number of voters. Exiting program.");
        return;
    }

    // Voting process
    for (let i = 1; i <= voterCount; i++) {
        const vote = prompt(`Voter ${i}, enter the candidate's name (leave empty for no vote):`);
        if (vote) {
            const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
            if (candidate) {
                candidate.votes++;
            } else {
                console.log(`Invalid vote for "${vote}".`);
            }
        } else {
            console.log(`Voter ${i} abstained.`);
        }
    }

    // Sort candidates by votes in descending order
    candidates.sort((a, b) => b.votes - a.votes);

    // Determine the winner (handling ties if necessary)
    const winner = candidates[0];
    const highestVotes = winner.votes;
    const winners = candidates.filter(c => c.votes === highestVotes);

    if (winners.length > 1) {
        console.log(`It's a tie! Winners: ${winners.map(w => w.name).join(", ")} with ${highestVotes} votes each.`);
    } else {
        console.log(`The winner is ${winner.name} with ${highestVotes} votes.`);
    }

    // Print the results
    console.log("Results:");
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

// Run the voting program
runVotingProgram();
