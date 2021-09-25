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
        alert(`${currentMatch} is a Tie!`);
        return;
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
          alert(`${currentMatch} = You Won!`);
          pWon++;
        } else {
          alert(`${currentMatch} = Computer Won!`);
          cWon++;
        }
      }
    }

    function updateScore() {
      document.getElementById("plyr-won").textContent = pWon;
      document.getElementById("comp-won").textContent = cWon;
    }

    function checkWinner() {
      if (pWon === 5 || cWon === 5) {
        const winner =
          pWon === 5
            ? "You won against the Computer!! Viva la Humanity."
            : "The Computer won!! (Will AI rise up against us??)";
        alert(winner);
        return true;
      }
      return false;
    }