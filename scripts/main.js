
const app = {};

app.answers = {
    very: {
        result: "Very likely to survive!",
        twitterResult: "I am very likely to survive a horror movie scenario!",
        description: "Congratulations! You've survived the life shattering experience of being the sole survivor in a horror movie.  Enjoy your years of therapy!"
    },
    somewhat: {
        result: "Somewhat likely to suvive!",
        twitterResult: "I might survive a horror movie scenario!",
        description: "You almost made it! You saw the second half of the movie at least. You might have died trying to be the hero or in some twist of dramatic irony, either way your luck eventually ran out"
    },
    notVery: {
        result: "Not very likely to survive!",
        twitterResult:"I would likely not survive a horror movie scenario",
        description: "You weren't the first to die! But you also weren't far behind. You were probably moved by the disturbing death of your friend right before you and it clouded your judgement. Try to be a little more callous next time if you want to live"
    },
    unlikely: {
        result: "Super unlikely to survive!",
        twitterResult: "It is super unlikely that I would survive a horror movie scenario",
        description: "You were the first to die! We're not sure you were even trying honestly. Take a long hard look at your choices and maybe take the quiz again"
    },
    killer: {
        result: "Extremely likely to survive...because you are the killer!!",
        twitterResult: "I would survive a horror movie because I'd likely be the killer!",
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
    app.largestNumber();
    
}

//this turns the newly tallied app.tally into an array 
app.largestNumber = function() {
    const tallyEntries = Object.entries(app.tally);
    tallyEntries.sort((a,b) => {
        return b[1] - a[1]
    });
    const final = tallyEntries[0][0];
    app.displayAnswer(final);
}

app.displayAnswer = (answer) => {
    console.log('called twice')
    const finalResult = app.answers[answer].result;
    const finalResultDescription = app.answers[answer].description;
    const finalTwitterBlurb = app.answers[answer].twitterResult;
    console.log(`${finalResult}, ${finalResultDescription}`)
    //print on page 
    $('.question5').hide();
    $('.results').empty()
        .css('display', 'flex')
        .append(`
        <h2>${finalResult}</h2>
        <h3>${finalResultDescription}</h3>
        <button class="retake">Take the quiz again!</button>
        <div class="social">
            <p>Share Your Results!</p>
            <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=%20${finalTwitterBlurb} %20Discover%20your%20odds%20at%20http://naomiceppetelli.com/horrorMovieHoedown"
            ><i class="fab fa-twitter"></i></a>
        </div>
        `)
        .show();
    $('.retake').on('click', function () {
        location.reload(true);
    }); 
}

app.events = function (result, twitterBlurb, description) {
    $('input[type=submit]').on('click', function (e){
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


    //button functionality 
    $('.takeQuiz').on('click', function(){
        $('.headerContainer').hide()
        $('.question1').fadeIn()
    });

    //previous/next bundle question 1
    $('.previous1').on('click', function(e){
        e.preventDefault();
        $('.question1').hide()
        $('.headerContainer').fadeIn()

    })
    $('.next1').on('click', function (e) {
        e.preventDefault();
        $('.question1').hide()
        $('.question2').fadeIn()

    })

    //previous/next bundle question 2
    $('.previous2').on('click', function (e) {
        e.preventDefault();
        $('.question2').hide()
        $('.question1').fadeIn()

    })
    $('.next2').on('click', function (e) {
        e.preventDefault();
        $('.question2').hide()
        $('.question3').fadeIn()
    })

    //previous/next bundle question 3
    $('.previous3').on('click', function (e) {
        e.preventDefault();
        $('.question3').hide()
        $('.question2').fadeIn()

    })
    $('.next3').on('click', function (e) {
        e.preventDefault();
        $('.question3').hide()
        $('.question4').fadeIn()
    })

    //previous/next bundle question 4
    $('.previous4').on('click', function (e) {
        e.preventDefault();
        $('.question4').hide()
        $('.question3').fadeIn()

    })
    $('.next4').on('click', function (e) {
        e.preventDefault();
        $('.question4').hide()
        $('.question5').fadeIn()
    })

    //previous/next bundle question 5
    $('.previous5').on('click', function (e) {
        e.preventDefault();
        $('.question5').hide()
        $('.question4').fadeIn()
    })
}

app.init = function(){
    app.events();
}

$(function(){
    app.init();
});

//adding twitter 
window.twttr = (function (d, s, id) {

    var js, fjs = d.getElementsByTagName(s)[0],

        t = window.twttr || {};

    if (d.getElementById(id)) return t;

    js = d.createElement(s);

    js.id = id;

    js.src = "https://platform.twitter.com/widgets.js";

    fjs.parentNode.insertBefore(js, fjs);



    t._e = [];

    t.ready = function (f) {

        t._e.push(f);

    };

    return t;

}(document, "script", "twitter-wjs"));