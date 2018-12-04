/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height = 0; // DO NOT MODIFY
  ////////////// DO NOT MODIFY
  let p = document.getElementById("mario-easy-output");
  height = prompt("Enter an integer between 1 and 23.");
  height = parseInt(height);
  let pyramid = '';
  while(height<1 || height>23) {
    height = prompt("Enter an integer between 1 and 23 PLEASE!");
  }
  for(let i=height-1; i > -1; i--) {
    for(let k=i; k > 0; k --) {
      pyramid = pyramid + '&nbsp;';
    }
    for(let l=(height+1)-i; l > 0; l--) {
      pyramid = pyramid + '#';
    }
      pyramid = pyramid + '<br/>';
  }
  p.innerHTML = "<code>" + pyramid + "</code>";
  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY
  let p = document.getElementById("mario-hard-output");
  height = prompt("Enter an integer between 1 and 23.");
  height = parseInt(height);
  let pyramid = '';
  while(height<1 || height>23) {
    height = prompt("Enter an integer between 1 and 23 PLEASE!");
  }
  for(let i=height-1; i > -1; i--) {
    for(let k=i; k > 0; k --) {
      pyramid = pyramid + '&nbsp';
    }
    for(let l=(height+1)-i; l > 0; l--) {
      pyramid = pyramid + '#';
    }
    pyramid = pyramid + '&nbsp' + '&nbsp';
    for(let t=(height+1)-i; t > 0; t--) {
      pyramid = pyramid + '#';
    }
    pyramid = pyramid + '<br/>';
  }
  p.innerHTML = "<code>" + pyramid + "</code>";

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  let p = document.getElementById("credit-output");
  let evenTotal = 0;
  let oddTotal = 0;

  while (typeof(card) != "number") {
    card = Number(prompt("Give us your credit card number!"));
  }

  let digits = [];
  for (let i = 0; card/(10**(i))>1; i++) {
    holdDigit = Math.floor(card/(10**i))%10;
    digits.push(holdDigit);
    console.log(digits[i]);
  }
  for (let i = 1; i <= digits.length-1; i = i + 2) {
    holdDigit = 2*digits[i]
    if (holdDigit >= 10) {
      holdDigit = holdDigit%10 + Math.floor(holdDigit/10);
    }
    evenTotal = evenTotal + holdDigit;
    console.log("even Total: " + evenTotal);
  }
  for (let i = 0; i <= digits.length-1; i = i + 2) {
    oddTotal = oddTotal + digits[i];
    console.log("odd total: " + oddTotal);
  }
  console.log((oddTotal + evenTotal));
  if ((oddTotal + evenTotal)%10 == 0) {
    console.log((oddTotal + evenTotal)%10);
    if (digits.length == 15 && digits[14] == 3 && (digits[13] == 7 || digits[13] == 4)) {
      p.innerHTML = "American Express.";
    } else if (digits.length == 13 && digits[13] == 4) {
      p.innerHTML = "Visa.";
    } else if (digits.length == 16) {
      if (digits[15] == 4) {
        p.innerHTML = "Visa.";
      } else if (digits[15] == 5 && (digits[14] == 1 || digits[14] == 2 || digits[14] == 3 || digits[14] == 4 || digits[14] == 5)) {
        p.innerHTML = "Mastercard.";
      } else {
        p.innerHTML = "Invalid.";
      }
    } else {
      p.innerHTML = "Invalid.";
    }
  }
  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  let mysteryNum = Math.round(Math.random()*1000);
  let playerGuess;
  let p = document.getElementById("guess-output");
  let attempts = 0;
  while (true) {
    playerGuess = Number(prompt("Enter Your Guess:"));
    while (typeof(playerGuess) != "number" || playerGuess > 1000 || playerGuess < 1) {
      playerGuess = Number(prompt("Enter Your Guess:"));
      console.log("invalid input");
    }
    attempts++;
    if (playerGuess > mysteryNum) {
      p.innerHTML = "Try Lower";
      console.log("try Lower");
    } else if (playerGuess < mysteryNum) {
      p.innerHTML = "Try Higher";
      console.log("try Higher");
    } else {
      p.innerHTML = "Correct!<br>The Answer was " + mysteryNum + " and you got the it in a whoping " + attempts + " tries!";
      break;
    }
  }
  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  let p = document.getElementById("hurricane-output");
  while (windspeed < 0 || typeof(windspeed) != "number") {
    windspeed = Number(prompt("Enter the windspeed of the storm:"));
  }
  if (windspeed >= 157) {
    p.innerHTML = "Category 5 Hurricane.";
  } else if (windspeed >= 130) {
    p.innerHTML = "Category 4 Hurricane.";
  } else if (windspeed >= 111) {
    p.innerHTML = "Category 3 Hurricane.";
  }  else if (windspeed >= 96) {
    p.innerHTML = "Category 2 Hurricane.";
  }  else if (windspeed >= 74) {
    p.innerHTML = "Category 1 Hurricane.";
  }  else if (windspeed >= 39) {
    p.innerHTML = "Tropical Storm.";
  } else {
    p.innerHTML = "The skies are calm...";
  }
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY 
  let scoreCard;
  let p = document.getElementById("gymnastics-output");
  for (i = 0; i < 6; i++) {
    scoreCard = Number(prompt("Enter the score for round " + (i + 1) + ":"));
    while (scoreCard < 0 || scoreCard > 10 || typeof(scoreCard) != "number") {
      scoreCard = Number(prompt("Enter the score for this round:"));
    }
    scores.push(scoreCard);
  }
  let average = ((scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5] - Math.min(...scores) -Math.max(...scores))/4).toFixed(2);
  p.innerHTML = "Discarded: " + Math.min(...scores) + ", " + Math.max(...scores) + "<br>Score: " + average;

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY
  let currentVal;
  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

   while (true) {
     currentVal = Number(prompt("Enter a test Grade:"));
     if (currentVal == -1) {
       break;
     } else {
       while (currentVal > 100 || currentVal < 0 || typeof(currentVal) != "number") {
        currentVal = Number(prompt("Enter a VALID test Grade:"));
       }
     }
     testTotal = testTotal + currentVal;
     tests++;
   }
   while (true) {
    currentVal = Number(prompt("Enter a quiz Grade:"));
    if (currentVal == -1) {
      break;
    } else {
      while (currentVal > 100 || currentVal < 0 || typeof(currentVal) != "number") {
       currentVal = Number(prompt("Enter a VALID quiz Grade:"));
      }
    }
    quizTotal = quizTotal + currentVal;
    quizzes++;
  }
  while (true) {
    currentVal = Number(prompt("Enter a homework Grade:"));
    if (currentVal == -1) {
      break;
    } else {
      while (currentVal > 100 || currentVal < 0 || typeof(currentVal) != "number") {
       currentVal = Number(prompt("Enter a VALID homework Grade:"));
      }
    }
    homeworkTotal = homeworkTotal + currentVal;
    homeworks++;
  }
  let testAverage = (testTotal/tests).toFixed(2);
  let quizAverage = (quizTotal/quizzes).toFixed(2);
  let homeworkAverage = (homeworkTotal/homeworks).toFixed(2);
  let reportCard = (testAverage*.6 + quizAverage*.3 + homeworkAverage*.1).toFixed(2);
  let p = document.getElementById("report-card-output");
  p.innerHTML = "Tests: " + testAverage + "<br>Quizzes: " + quizAverage + "<br>Homework: " + homeworkAverage + "<br>Grade: " + reportCard;
  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
