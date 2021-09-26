const options = document.querySelectorAll(".options");
   let pWon = 0;
   let cWon = 0;
 
   options.forEach((option) => {
     option.addEventListener("click", function () {
       const pInput = this.textContent;
 
       const cOptions = ["Rock", "Paper", "Scissors"];
       const cInput = cOptions[Math.floor(Math.random() * 3)];
 
       compareInputs(pInput, cInput);
       updateScore();
       if (checkWinner()) {
         pWon = cWon = 0;
         updateScore();
       }
     });
   });
 
   // Check for a tie:
   function compareInputs(pInput, cInput) {
     const currentMatch = `${pInput} vs ${cInput}`;
     if (pInput === cInput) {
       checkTie(`${currentMatch} is a Tie!`);
       return;
     }
 
   function checkTie(result) {
    let ti = document.getElementById("result");
 
    ti.innerHTML = "<h2>" + result + "</h2>";
   }
 
   // Player chooses Rock:
     if (pInput === "Rock") {
       if (cInput === "Scissors") {
         alert(`${currentMatch} = You Won!`);
         pWon++;
       } else {
         alert(`${currentMatch} = Computer Won!`);
         cWon++;
       }
     }
     //Player chooses Paper:
     else if (pInput === "Paper") {
       if (cInput === "Rock") {
         alert(`${currentMatch} = You Won!`);
         pWon++;
       } else {
         alert(`${currentMatch} = Computer Won!`);
         cWon++;
       }
     }
     //Player chooses Scissors:
     else if (pInput === "Scissors") {
       if (cInput === "Paper") {
         aler(`${currentMatch} = You Won!`);
         pWon++;
       } else {
         alert(`${currentMatch} = Computer Won!`);
         cWon++;
       }
     }
   }
 
   function updateScore() {
     document.getElementById("p-won").textContent = pWon;
     document.getElementById("c-won").textContent = cWon;
   }
 
   function checkWinner() {
     if (pWon === 5 || cWon === 5) {
       const winner =
         pWon === 5
           ? "You won against the Computer!! Viva la Humanity!"
           : "The Computer won!! (Is this how the AI Uprising begins??)";
       showResult(winner);
       return true;
     }
     return false;
   }
 
   function showResult(result) {
 
     let rs = document.getElementById("result");
 
     rs.innerHTML = "<h2>" + result + "</h2>";
   }

