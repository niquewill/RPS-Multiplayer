
  // ON CLICK 
// LOGIN
// ON CLICK  
// START
//TWO PLAYERS APEAR
    var userChoice = prompt("Do you choose rock, paper,  or scissors");
    var computerChoice = Math.random();
//    console.log(computerChoice);
    if(computerChoice<0.33){
        computerChoice = "rock";
    } else if(0.34<=computerChoice<=0.66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
 
    choice1 = userChoice;
    choice2 = computerChoice;
    function compare(choice1, choice2)
		{
        if(choice1===choice2){
            return("Dang Man!!!! It's a tie");
            }
        if(choice1==="rock"){
            if(choice2==="scissors"){
                return('The Rock Wins!');
            }else{
                return('Paper Wins!');
            }
        }
            if(choice1==="paper"){
            if(choice2==="rock"){
                return('The Paper Wins!');
            }else{
                return('Scissors Wins!');
            }
        }
               if(choice1==="scissors"){
            if(choice2==="rock"){
                return('The Rock Wins!');
            }else{
                return('Scissors Wins!');
            }
                 
         }  
      }
 // VARIABLES
    // --------------------------------------------------------------------------------

    // Get a reference to the database service
    var database = firebase.database();

    // Setting initial value of our click counter variable to 0
    var clickCounter = 0;

    // FUNCTIONS + EVENTS
    // --------------------------------------------------------------------------------

    // On Click of Button
    $("#click-button").on("click", function() {

      // Add to clickCounter
      clickCounter++;

      //  Store Click Data to Firebase in a JSON property called clickCount
      // Note how we are using the Firebase .set() method
      database.ref().set({
        clickCount: clickCounter
      });
    });

    // MAIN PROCESS + INITIAL CODE
    // --------------------------------------------------------------------------------

    // Using .on("value", function(snapshot)) syntax will retrieve the data
    // from the database (both initially and every time something changes)
    // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
    database.ref().on("value", function(snapshot) {

      // Then we console.log the value of snapshot
//      console.log(snapshot.val());

      // Then we change the html associated with the number.
      $("#click-value").html(snapshot.val().clickCount);

      // Then update the clickCounter variable with data from the database.
      clickCounter = snapshot.val().clickCount;

    // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
    // Again we could have named errorObject anything we wanted.
    }, function(errorObject){
        
    });
  