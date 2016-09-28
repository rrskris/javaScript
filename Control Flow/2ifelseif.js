var isEven = function(number) {
  // Your code goes here!
  if ( number % 2 == 0) {
  //    console.log("Even number");
      return true;
  }
 
  else if (isNaN(number))
  {
 //     console.log("Odd number");
      return "The entered data is not a number";
  }
 
  else
  {
 //     console.log("Odd number");
      return false;
  }
};

isEven("abd");
