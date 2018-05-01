$(function(){
    //going to need to save each answer as a variable 

    const answers = {
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
            description: "Plot twist! You're twisted enough to be the killer, congratulations!! Go home, sharpen your knives, and wait for another group of teens to wander near your cabin in the woods"
        }
    }
});