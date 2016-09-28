// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

console.log(bob.age);
  
// change bob's age to 50 here
bob.setAge(50)

/*It turns out we can make a method work for many objects using a new keyword, 
 * this. The keyword this acts as a placeholder, and will refer to whichever object
 * called that method when the method is actually used.
*/
