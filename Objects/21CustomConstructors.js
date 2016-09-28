function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);


/*Custom Constructors
But this approach of adding in properties one at a time for every object is tedious! Instead of always using the boring Object constructor, we can make our own constructors.

This way we can set the properties for an object right when it is created. So instead of using the Object constructor which is empty and has no properties, we can make our own constructors which have properties.

To see how this works, look at our Person constructor in lines 1–4. This constructor is used to make Person objects. Notice it uses the keyword this to define the name and age properties and set them equal to the parameters given.

Now we can use this constructor to make our good friends bob and susan in only one line each! Look at lines 7–8: once we have the constructor, it's way easier to make people because we can include their name and age as arguments to their respective constructors.
*/
