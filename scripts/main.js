
const app = {};

app.answers = {
    very: {
        result: "very likely to survive",
        description: "Congratulations! You've survived the life shattering experience of being the sole survivor in a horror movie.  Enjoy your years of therapy!"
    },
    somewhat: {
        result: "somewhat likely to suvive",
        description: "You almost made it! You saw the second half of the movie at least. You might have died trying to be the hero or in some twist of dramatic irony, either way your luck eventually ran out"
    },
    notVery: {
        result: "not very likely to survive",
        description: "You weren't the first to die! But you also weren't far behind. You were probably moved by the disturbing death of your friend right before you and it clouded your judgement. Try to be a little more callous next time if you want to live"
    },
    unlikely: {
        result: "super unlikely to survive",
        description: "You were the first to die! We're not sure you were even trying honestly. Take a long hard look at your choices and maybe take the quiz again"
    },
    killer: {
        result: "extremely likely to survive...because you are the killer",
        description: "Plot twist! You're sick enough to be the killer, congratulations!! Go home, sharpen your knives, and wait for another group of teens to wander near your cabin in the woods"
    }
};

app.tally = {
    very: 0,
    somewhat: 0,
    notVery: 0,
    unlikely: 0,
    killer: 0
}

//check the answer array with the answer object and tally up the results
app.checkScore = function(array) {
    for(let i = 0; i < array.length; i++) {
        // console.log(array[i])
        app.tally[array[i]] = app.tally[array[i]] + 1;
    }
    console.log(app.tally);
    app.largestNumber();
    
}

app.largestNumber = function() {
    const tallyEntries = Object.entries(app.tally);
    console.log(tallyEntries);
    tallyEntries.sort((a,b) => {
        return b[1] - a[1]
    });
    const final = tallyEntries[0][0];
    console.log(final)
    app.displayAnswer(final);
}

app.displayAnswer = (answer) => {
    const finalResult = app.answers[answer].result;
    const finalResultDescription = app.answers[answer].description;
    console.log(`${finalResult}, ${finalResultDescription}`)
    //print on page 
    app.printResultsOnPage(finalResult, finalResultDescription);
}

app.events = function() {
    $('form').on('submit', function(e){
        //prevent the page from refreshing
        e.preventDefault();
        //want to save each answer as a variable 
        const answer1 = $('input[name=question1]:checked').val();
        const answer2 = $('input[name=question2]:checked').val();
        const answer3 = $('input[name=question3]:checked').val();
        const answer4 = $('input[name=question4]:checked').val();
        const answer5 = $('input[name=question2]:checked').val();
        //putting answers into an array so that can work with the data 
        const answerArray = [answer1, answer2, answer3, answer4, answer5]
        //enter answerArray into the tallying function
        app.checkScore(answerArray);  
    });
}

app.printResultsOnPage = function(result, description) {
    $('input[type=submit]').hide();
    $('.results').append(`
    <h2>${result}</h2>
    <h2>${description}</h2>
    <button>Take the quiz again!</button>
    `);
    $('button').on('click', function(){
        location.reload(true);
    });
};

app.init = function(){
    app.events();
}

$(function(){
    app.init();
});