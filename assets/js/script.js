//Variables
let userChoice;
let rivalChoice;
let pokemons = ['bulbasaur', 'charmander', 'squirtle'];
let pokemonBattleUser = ['assets/img/bulbasaurBattle.gif', 'assets/img/charmanderBattleUser.gif', 'assets/img/squirtleBattleUser.gif'];
let pokemonBattleRival = ['assets/img/bulbasaurBattle.gif', 'assets/img/charmanderBattleRival.gif', 'assets/img/squirtleBattleRival.gif'];
let pokemonDefeats = ['assets/img/bulbasaurLose.gif', 'assets/img/charmanderLose.gif', 'assets/img/squirtleLose.gif'];
let pokemonWins = ['assets/img/bulbasaurWin.gif', 'assets/img/charmanderWin.gif', 'assets/img/squirtleWin.gif']
let userCount = 0;
let rivalCount = 0;

/*
* Fonction principale qui prend en paramètre le pokémon choisi par l'utilisateur ainsi que son numéro :
* Elle permet :
*   - De choisir un nombre entre 0 et 2 et le pokémon qui lui est associé
*   - De comparer le pokémon de l'utilisateur avec celui de l'ordinateur
*   - De lancer le combat est d'afficher son résultat
*   - De lancer la fin du match 
*/

function pokemon(userChoice, userNumber) {
    let rivalNumber = Math.floor(Math.random() * 3);
    rivalChoice = pokemons[rivalNumber];
    rivalPokemonChoice.src = pokemonBattleRival[rivalNumber];
    userPokemonChoice.src = pokemonBattleUser[userNumber];
    pokemonChoice.style.display = "none";
    pokemonBattle.style.display = "block";
    setTimeout(function () {
        if (userChoice == rivalChoice) {
            titleText.innerText = "Match nul !"
            resultBattle.src = 'assets/img/magikarp.gif';
        } else if ((userChoice == 'bulbasaur' && rivalChoice == 'squirtle') ||
            (userChoice == 'squirtle' && rivalChoice == 'charmander') ||
            (userChoice == 'charmander' && rivalChoice == 'bulbasaur')) {
            userCount += 1;
            titleText.innerText = "Combat gagné !"
            resultBattle.src = pokemonWins[userNumber];
            points(userCount, winUser1, winUser2, winUser3)
            // winUser.innerText = userCount;
        } else {
            rivalCount += 1;
            titleText.innerText = "Combat perdu !"
            resultBattle.src = pokemonDefeats[userNumber];
            points(rivalCount, winRival1, winRival2, winRival3);
            // winRival.innerText = rivalCount;
        }
        pokemonBattle.style.display = "none";
        result.style.display = "block";
    }, 1500);

    setTimeout(function () {
        if (userCount == 3 || rivalCount == 3) {
            if (userCount == 3) {
                resultText.innerText = 'Tu as gagné !';
                finalResultBattle.src = 'assets/img/win.gif';
            } else if (rivalCount == 3) {
                resultText.innerText = 'Tu as perdu !';
                finalResultBattle.src = 'assets/img/lose.gif';
            }
            result.style.display = "none";
            pokemonBattle.style.display = "none";
            final.style.display = "block";
        }
    }, 1501);
}

function points(count, win1, win2, win3) {
    if (count == 1) {
        win1.classList.add('winPoint');
        win1.classList.remove('neutral');
    } else if (count == 2) {
        win2.classList.add('winPoint');
        win2.classList.remove('neutral')
    } else if (count == 3) {
        win3.classList.add('winPoint');
        win3.classList.remove('neutral')
    }
}

/*
* Fonction fin du jeu : si l'utilisateur ou l'ordinateur atteint 3 victoires, la partie s'arrête
*/

bulbasaur.onclick = () => {
    pokemon('bulbasaur', 0);
}

charmander.onclick = () => {
    pokemon('charmander', 1);
}

squirtle.onclick = () => {
    pokemon('squirtle', 2);
}

/* 
* Fonctions qui permettent d'initialiser ou de réinitialiser le jeu
*/
function restart(startScreenVar, pokemonChoiceVar, battleScreenVar, resultVar, finalVar) {
    startScreen.style.display = startScreenVar;
    pokemonChoice.style.display = pokemonChoiceVar;
    battleScreen.style.display = battleScreenVar;
    result.style.display = resultVar;
    final.style.display = finalVar;
    userPokemonChoice.src ="";
    rivalPokemonChoice.src = "";
    resultBattle.src = "";
}
startBattle.onclick = () => {
    restart("none", "block", "block", "none", "none");
}
restartBattle.onclick = () => {
    restart("none", "block", "block", "none", "none");
}
restartGame.onclick = () => {
    window.location.reload();
}