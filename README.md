# <p style="text-align: center;"><b>TIC TAC TOE</b></p>

Challenge your intellect by competing in a game of <b>Tic Tac Toe</b> with the never-defeated, the champions of the champions, the one above all...

## <p style="text-align: center;"><b>THE AI BOT</b></p>

Test the bot here: https://nimeshnischal.github.io/tic-tac-toe-ai-bot/

The bot works in two ways (can be switched to either via UI):

1. Using **pre-computed** steps:

    Writing conditional checks for all possible scenarios of winning & losing the game manually.
    |  Pros |  Cons  |
    |---|---|
    | Fast execution time, with complexity at O(b)  | Dev + test time more than 8 hours |
    | Basic programming knowledge required to code | Risk of some edge cases being ignored|
2. Using **minimax** algorithm:

    Using a type of adversarial search to get the next move by going through all the possible moves & predicting opponents moves.
    |  Pros |  Cons  |
    |---|---|
    | Faster Dev + test time (around 2-3 hours) + 1 hour for learning minimax | Slow execution in intitial part of the game, with complexity at O(b^m) |
    | No need to check if all edge cases are covered | Knowledge of concepts like Adversarial search & minimax algorithm is needed |

Note: In above complexities, b denotes number of legal moves & m denotes maximum depth of the computation tree.

## How to run
### Dependency:
 - npm v^6.14.7

Clone the project to your local machine. Go to the root of the project and run:

```npm start```

Browser should be opened automatically with the web application. if not, go to:

```localhost:3000```

Have fun trying to defeat the bot!

## Tools used
 - React JS v16.13.1
 - material-ui/core v4.11.0
 - font-awesome v4.7.0


## References & Acknowledgements
 - https://orangeqa.in/bot001 for turning my interest towards tic-tac-toe bot
 - edx's<a href="https://courses.edx.org/courses/course-v1:HarvardX+CS50AI+1T2020/course/"> CS50's Introduction to Artificial Intelligence with Python</a> course