const options = document.querySelectorAll(".options");
   let pWon = 0;
   let cWon = 0;
 
   options.forEach((option) => {
     option.addEventListener("click", function () {
       const pInput = this.value;
 
       const cOptions = ["Rock", "Paper", "Scissors"];
       const cInput = cOptions[Math.floor(Math.random() * 3)];

       updateMoves(pInput, cInput);
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
       checkTie(`${currentMatch} is a tie!`);
       return;
     }
 
   function checkTie(result) {
    let ti = document.getElementById("result");
 
    ti.innerHTML = "<h2>" + result + "</h2>";
   }
 
   // Player chooses Rock:
     if (pInput === "Rock") {
       if (cInput === "Scissors") {
         checkRock(`${currentMatch} = You won!`);
         pWon++;
       } else {
         checkRock(`${currentMatch} = Computer won`);
         cWon++;
       }
     }
     //Player chooses Paper:
     else if (pInput === "Paper") {
       if (cInput === "Rock") {
         checkPaper(`${currentMatch} = You won!`);
         pWon++;
       } else {
         checkPaper(`${currentMatch} = Computer won`);
         cWon++;
       }
     }
     //Player chooses Scissors:
     else if (pInput === "Scissors") {
       if (cInput === "Paper") {
         checkScissors(`${currentMatch} = You won!`);
         pWon++;
       } else {
         checkScissors(`${currentMatch} = Computer won`);
         cWon++;
       }
     }
   }

  function checkRock(result) {
    let rk = document.getElementById("result");

    rk.innerHTML = "<h2>" + result + "</h2>";
  }

  function checkPaper(result) {
    let pp = document.getElementById("result");

    pp.innerHTML = "<h2>" + result + "</h2>";
  }

  function checkScissors(result) {
    let sc = document.getElementById("result");

    sc.innerHTML = "<h2>" + result + "</h2>";
  }
 
   function updateScore() {
     document.getElementById("p-won").textContent = pWon;
     document.getElementById("c-won").textContent = cWon;
   }
 
   function checkWinner() {
     if (pWon === 5 || cWon === 5) {
       const winner =
         pWon === 5
           ? "You won against the Computer!!"
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

   
function updateMoves(pInput, cInput) {
  document.getElementById("pWon").src=`./assets/images/${pInput}.svg`;
  document.getElementById("cWon").src=`./assets/images/${cInput}.svg`;
}
