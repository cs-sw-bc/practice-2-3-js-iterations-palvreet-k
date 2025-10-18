/*
  =============================================
  🧩 JavaScript Loop Practice Assignment
  =============================================
  Goal: Get comfortable writing for, while, and do...while loops in real-life scenarios.
  Each section has 3 short exercises.
  Write your code below each section comment.
  ---------------------------------------------
  */

  // 🔹 PART A – FOR LOOPS
  // 1. Counting Up:
  //    Print numbers from 1 to 20 using a for loop.
  console.log("Numbers 1-20");
  for(i=1; i<=20; i++){
    console.log(i);
  }
  //
  // 2. Multiples of 5:
  //    Print all multiples of 5 from 5 to 50.
  //    Hint: use i += 5 instead of i++.
  console.log("Multiples of 5 until 50");
  for(a=5; a<=50; a +=5){
    console.log(a);
  }

  //
  // 3. Sum of First 10 Numbers:
  //    Use a for loop to calculate the sum of numbers from 1 to 10 and display the total.
  console.log("Sum of Numbers 1-10");
  sum =0;
  for(b=1; b<=10; b ++){
      sum+=b;
    }
    console.log(sum);

  // 🔹 PART B – WHILE LOOPS
  // 1. Password Checker (simulated):
  //    Keep checking a variable `input` until it matches "open".
  //    You can simulate this with an array like ["wrong", "nope", "open"].
  //

  //Using Prompt
  let input = "hi"; 
  while(input!="open"){
    console.log("record input")
    input = prompt("Enter open to stop:")
  }

  //using Array
  const passwd = ["wrong", "nope", "open", "hello"]; 
  let p = 0
  while(p < passwd.length){
    if (passwd[p]=="open"){
    console.log(`Input ${passwd[p]} Found, stopping loop`);
    break;
    }
    console.log(`Invalid input ${passwd[p]}`);
    p++;
  }
  

  // 2. Add Until Finish:
  //    Keep adding numbers in an array until the word "Finish" appears.
  //
  console.log("Add until Finish");
  const numbers = [1, 12, "Finish", 4, 3, 6];
  let total= 0;
  let r = 0;
  while(r < numbers.length){
    if(numbers[r]== "Finish"){
      break;
    }
    total+=numbers[r];
    r++;
  }
  console.log(`Sum of array until Finish is ${total}`);

  // 3. Countdown:
  //    Start from 10 and keep counting down until you reach 0.
  //    Print each number on a new line.
  console.log("Reverse Numbers 1-10");
  let counting = 10;
  while(counting > 0){
    console.log(counting);
    counting--;
  }



  // 🔹 PART C – DO...WHILE LOOPS
  // 1. Guessing Game (simulation):
  //    Generate a random number between 1–10 using:
  //       Math.floor(Math.random() * 10) + 1
  //    Keep “guessing” until you get 5. The loop should run at least once.
  //
  do{
   num = Math.floor(Math.random() * 10) + 1
   console.log(`Random number this time is ${num}`);
  }while(num!=5)

  
  // 2. Menu Simulation:
  //    Show a fake menu at least once (like “1. Play  2. Exit”) and exit when option = 2.
  //

  do{
    console.log("Select an option");
    option = prompt("Select an option: 1. Play 2. Exit");
  }while(option!=2)
  // 3. Number Input Validation:
  //    Ask for a number greater than 10.
  //    Keep re-checking until it’s valid (simulate input with variables).
  do{
    z= prompt("Enter a number greater than 10 only:")
  }while(z<=10)



  // 🔹 PART D – BONUS: LOOP CONTROL
  // 1. Break Example:
  //    Loop numbers 1–10. Stop completely when the number is 7.
  //
  console.log("Numbers 1-10 stop at 7");
  for(j=1;j<=10;j++){
    if(j==7){
      break;
    }
    console.log(j);
  }
  // 2. Continue Example:
  //    Loop numbers 1–10. Skip printing when the number is 5.
  //
  console.log("Numbers 1-10 skip 5");
      for(k=1;k<=10;k++){
        if(k==5){
          continue;
        }
      console.log(k);
      }
  // 3. Combined:
  //    Print numbers 1–20, skip even numbers, but stop entirely when you hit 17.
  console.log("Skip even numbers, stop at 17");
  for(l=0;l<=20;l++){
    if(l%2==0){
      continue;
    }
    else if(l==17){
    break;
    }
    console.log(l)
  }



  // ✅ Submission
  // - Submit a single .html file containing your solutions.
  // - Include comments describing which loop type you used.
  // - Use console.log() or document.write() to display results.
