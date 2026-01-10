//guestbook
const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('guestList');

guestForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    const guestCard = document.createElement('div');
    guestCard.classList.add('guest-card');
    guestCard.innerHTML = `
                <h2>${name}</h2>
                <p><strong>Comment:</strong> ${address}</p>`;

    guestList.appendChild(guestCard);

    guestForm.reset();})

//Random number gen
dice1 = document.getElementById("dice1")
dice2 = document.getElementById("dice2")
dice3 = document.getElementById("dice3")
    
    
rollit.onclick = function(){
    const min = 1;
    const max = 100;
    
    let randomvalue1 =Math.floor(Math.random() * (max-min)) +min;
    let randomvalue2 =Math.floor(Math.random() * (max-min)) +min;
    let randomvalue3 =Math.floor(Math.random() * (max-min)) +min;
    dice1.textContent = randomvalue1;
    dice2.textContent = randomvalue2;
    dice3.textContent = randomvalue3;
}

//Tic Tac Toe Minigame

const TicTac = {
    cPlayer: "X", // Tracks current player (X or O)
    state: Array(9).fill(null), // Board state (null for empty cells)
    gameOver: false, // Indicates if the game is over

    // Initialize the game
    init() {
        this.cBoard();
        document
            .getElementById("reset")
            .addEventListener("click", () => this.reset());
    },

    // Create the game board dynamically
    cBoard() {
        const board = document.getElementById("board");
        board.innerHTML = ""; // Clear previous board
        this.state.forEach((_, i) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            board.appendChild(cell);
        });
        board.addEventListener("click", (e) => this.handleClick(e)); // Handle clicks on the board
        this.uMessage(`Player ${this.cPlayer}'s turn`);
    },

    // Handle a cell click
    handleClick(e) {
        const cell = e.target;
        const i = cell.dataset.index;

        // Ignore clicks if game is over or cell is taken
        if (this.gameOver || !cell.classList.contains("cell") || this.state[i])
            return;

        // Update board state and UI
        this.state[i] = this.cPlayer;
        cell.textContent = this.cPlayer;
        cell.classList.add("taken");

        // Check for winner or tie
        const winCombo = this.checkWin();
        if (winCombo) {
            this.highlight(winCombo);
            this.uMessage(`Player ${this.cPlayer} wins!`);
            this.gameOver = true;
        } else if (this.state.every((cell) => cell)) {
            this.uMessage("It's a tie!");
            this.gameOver = true;
        } else {
            // Switch players
            this.cPlayer = this.cPlayer === "X" ? "O" : "X";
            this.uMessage(`Player ${this.cPlayer}'s turn`);
        }
    },

    // Check if there's a winning combination
    checkWin() {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], // Rows
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], // Columns
            [0, 4, 8],
            [2, 4, 6], // Diagonals
        ];
        return wins.find((combo) =>
            combo.every((i) => this.state[i] === this.cPlayer)
        );
    },

    // Highlight winning cells
    highlight(combo) {
        combo.forEach((i) => {
            document.getElementById("board").children[i].style.color = "red";
        });
    },

    // Reset the game
    reset() {
        this.state = Array(9).fill(null);
        this.cPlayer = "X";
        this.gameOver = false;
        this.cBoard();
    },

    // Update the game status message
    uMessage(msg) {
        document.getElementById("message").textContent = msg;
    },
};

// Start the game
TicTac.init();


//Counter Program 
const decreasebtn = document.getElementById("lowerit");
const increasebtn = document.getElementById("higherit");
const resetbtn = document.getElementById("resetbtn");
const countlabel = document.getElementById("countnumber");
let count = 0;

//remember to use textContent, not textcontent
increasebtn.onclick = function(){
    count+=1;
    countlabel.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetbtn.onclick = function(){
    var count = 0;
    countlabel.textContent = count;
}

//Lesson 17: Logical Operators

const temp = -22;

if (temp >= 0 && temp <= 37) {
    console.log("The Temperature is too cold!");
}

else if (temp < 0 || temp > 37) {
    console.log("WTF?");
}

//Candlewick's Corner
 let CandlewickSent = document.getElementById("Candlewick_button");
 let CandlewickAnswer = document.getElementById("Candlewick's answer");

CandlewickSent.onclick = function() {
    let CandlewickQuestion = document.getElementById("Question_for_Candlewick").value;
    let SpaceChecker = CandlewickQuestion.includes(' ');
    Candlewickchance = Math.random();
    if (CandlewickQuestion.length > 0 && SpaceChecker){
        if (Candlewickchance > 0.5 && Candlewickchance >= 0.75) {
            CandlewickAnswer.textContent = "The Enlightened one said it is absolutely yes.";
            console.log(Candlewickchance);
            console.log(SpaceChecker);
        }
        else if (Candlewickchance > 0.5 && Candlewickchance < 0.75) {
            CandlewickAnswer.textContent = "The candle burns bright with a nod on your favor";
            console.log(Candlewickchance);
            console.log(SpaceChecker);
        }
        else if (Candlewickchance < 0.5 && Candlewickchance < 0.25) {
            CandlewickAnswer.textContent = "The tides of bad omens are high; disapproval it is";
            console.log(Candlewickchance);
            console.log(SpaceChecker);
        }
        else {
            CandlewickAnswer.textContent = "The winds blew off my flame to a heartsounding no.";
            console.log(Candlewickchance);
            console.log(SpaceChecker);
        }
    }

    else if(SpaceChecker == false && CandlewickQuestion.length > 0){
        CandlewickAnswer.textContent = "Your mouth is full of dirty water. To speak to the church of Candlewick, cleanse your teeth, read a dictionary, and exfoliate the demon on nonsense."
        console.log(Candlewickchance);
        console.log(SpaceChecker);
        console.log(CandlewickQuestion.length);
    }

    else if (CandlewickQuestion.length == 0){
        CandlewickAnswer.textContent = "You are very silent, my child. Speak louder so the prophet can hear you."
        console.log(Candlewickchance);
        console.log(CandlewickQuestion.length);
    }


}

//Dewey's Rock, Paper, Scissors Game

const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document. getElementById("Scissors");
const RPS_button = document.getElementById("RPS Button");
const Your_RPS_Points = document.getElementById("Your Points");
const Dewey_RPS_Points = document.getElementById("Dewey's Points");
const RPS_Results = document.getElementById("RPS Results");
const Dewey_Choice = document.getElementById("Dewey's Choice");
const Dewey_comment = document.getElementById("Dewey's Comment");
let Dewey_RPS_Score = 0
let My_RPS_Score = 0


RPS_button.onclick = function(){
    let Dewey_opponent_choice = Math.random();
//Reset Clause
if (RPS_button.textContent==="RESET"){
    if(Rock.checked || Paper.checked || Scissors.checked){
        Dewey_Choice.textContent = "I choose..."
        Dewey_comment.textContent = ""
        RPS_Results.textContent = ""
        Dewey_RPS_Score = 0
        My_RPS_Score = 0
        Dewey_RPS_Points.textContent = "Dewey's Points: 0"
        Your_RPS_Points.textContent = "Your Points: 0"
        RPS_button.textContent = "FIGHT!"}
}
else {
    //Dewey's Choice
    if(Dewey_opponent_choice<= 0.33){
        Dewey_Choice.textContent = "Rock!";
        console.log(Dewey_opponent_choice);
    }
    else if(Dewey_opponent_choice>= 0.66){
        Dewey_Choice.textContent = "Paper!";
        console.log(Dewey_opponent_choice);
    }
    else {
        Dewey_Choice.textContent = "Scissors!";
        console.log(Dewey_opponent_choice);
    }
    //rock outcomes
    if(Rock.checked){
        if(Dewey_Choice.textContent === "Rock!"){
            Dewey_comment.textContent = "It's a tie!";
        
        }
        else if(Dewey_Choice.textContent === "Paper!"){
            Dewey_RPS_Score += 1
            if(Dewey_RPS_Score == 3){
                Dewey_comment.textContent = "Winner, Winner, Chicken Dinner!"
                Dewey_RPS_Points.textContent = "Dewey's Points: " + Dewey_RPS_Score;
                RPS_Results.textContent = "You lost to a baby! Play again?"
                RPS_button.textContent = "RESET"
            }
            else{
                Dewey_comment.textContent = "You lost, stupid!";
                Dewey_RPS_Points.textContent = "Dewey's Points: " + Dewey_RPS_Score;
            }
        
        }
        else if(Dewey_Choice.textContent === "Scissors!"){
            My_RPS_Score += 1
             if (My_RPS_Score == 3){
                Dewey_comment.textContent = "WHAT? You cheated, bully! This game sucks!"
                Your_RPS_Points.textContent = "Your Points: " + My_RPS_Score;
                RPS_Results.textContent = "Congrats! You won a game against a preschooler. Are you happy now?"
                RPS_button.textContent = "RESET"
            }
            else{
                Dewey_comment.textContent = "Huh? You won?";
                Your_RPS_Points.textContent = "Your Points: " + My_RPS_Score;
            }
        }
    }
    //Paper outcomes
    else if(Paper.checked){
        if(Dewey_Choice.textContent === "Paper!"){
            Dewey_comment.textContent = "It's a tie!";
        
        }
        else if(Dewey_Choice.textContent === "Scissors!"){
            Dewey_RPS_Score += 1
            if(Dewey_RPS_Score == 3){
                Dewey_comment.textContent = "Winner, Winner, Chicken Dinner!"
                Dewey_RPS_Points.textContent = "Dewey's Points: " + Dewey_RPS_Score;
                RPS_Results.textContent = "You lost to a baby! Play again?"
                RPS_button.textContent = "RESET"
            }
            else{
                Dewey_comment.textContent = "You lost, stupid!";
                Dewey_RPS_Points.textContent = "Dewey's Points: " + Dewey_RPS_Score;
            }
        }
        else if(Dewey_Choice.textContent === "Rock!"){
            My_RPS_Score += 1
            if (My_RPS_Score == 3){
               Dewey_comment.textContent = "WHAT? You cheated, bully! This game sucks!"
               Your_RPS_Points.textContent = "Your Points: " + My_RPS_Score;
               RPS_Results.textContent = "Congrats! You won a game against a preschooler. Are you happy now?"
               RPS_button.textContent = "RESET"
           }
           else{
               Dewey_comment.textContent = "Huh? You won?";
               Your_RPS_Points.textContent = "Your Points: " + My_RPS_Score;
           }
        }
    }

    //Scissors Outcomes 
    else if(Scissors.checked){
        if(Dewey_Choice.textContent === "Scissors!"){
            Dewey_comment.textContent = "It's a tie!";
        
        }
        else if(Dewey_Choice.textContent === "Rock!"){
            Dewey_RPS_Score += 1
            if(Dewey_RPS_Score == 3){
                Dewey_comment.textContent = "Winner, Winner, Chicken Dinner!"
                Dewey_RPS_Points.textContent = "Dewey's Points: " + Dewey_RPS_Score;
                RPS_Results.textContent = "You lost to a baby! Play again?"
                RPS_button.textContent = "RESET"
            }
            else{
                Dewey_comment.textContent = "You lost, stupid!";
                Dewey_RPS_Points.textContent = "Dewey's Points: " + Dewey_RPS_Score;
            }
        
        }
        else if(Dewey_Choice.textContent === "Paper!"){
            My_RPS_Score += 1
             if (My_RPS_Score == 3){
                Dewey_comment.textContent = "WHAT? You cheated, bully! This game sucks!"
                Your_RPS_Points.textContent = "Your Points: " + My_RPS_Score;
                RPS_Results.textContent = "Congrats! You won a game against a preschooler. Are you happy now?"
                RPS_button.textContent = "RESET"
            }
            else{
                Dewey_comment.textContent = "Huh? You won?";
                Your_RPS_Points.textContent = "Your Points: " + My_RPS_Score;
            }
        }
    }
    else{
        Dewey_comment.textContent = "Wait? You didn't choose? I'm taking a point! lol";
        Dewey_RPS_Score += 1
        Dewey_RPS_Points.textContent = "Dewey's Points: " + Dewey_RPS_Score;
    }

}
}

//Random Number Guessing Game

const minNum = Math.round(Math.random()*10);
const maxNum = minNum + Math.round(Math.random()*10);
const answer = Math.floor(Math.random()* (maxNum - minNum + 1) + minNum)

let attempts = 3;
let guess;
let number_guessing_label = document.getElementById(`number_guessing_label`);
number_guessing_button = document.getElementById(`number_guessing_button`);
number_guessing_comment = document.getElementById(`number_guessing_comment`);

number_guessing_label.textContent = `Pick a number between ${minNum} and ${maxNum}`
number_guessing_button.onclick = function(){
        guess = Number (document.getElementById(`number_guessing_answer`).value);
        if(attempts > 0){
            if(guess === answer){
                number_guessing_comment.textContent = `Congratulations! You are correct!`
            }
            else if(isNaN(guess)){
                number_guessing_comment.textContent = `That is not a number!`;
                attempts-=1
            }
            else if(guess < minNum || guess > maxNum){
                number_guessing_comment.textContent = `You answered beyond the given range!`;
                attempts-=1
            }
            else if (guess < answer){
                number_guessing_comment.textContent = `That is too low of a number! Try again! Attempts: ${attempts}`;
                attempts-=1
            }
            else if (guess > answer){
                number_guessing_comment.textContent = `That is too high of a number! Try again! Attempts: ${attempts}`;
                attempts-=1
            }
        }
        else{
            number_guessing_comment.textContent = `You lose! Attempts: ${attempts}`
        }
        }
        console.log(answer);




console.log(answer);

chattable.initialize({
                            theme: "moderno" // set the value to the name of the theme
                        });
