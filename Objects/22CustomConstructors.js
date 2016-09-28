function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(age,color) {
    this.age =age;
    this.color = color;
}



/*Why is this Cat constructor so cool? It means if we have many cats and wanted to create an object for each cat, we could just use this 
 * constructor with the properties already defined.

This is much better than using the Object constructor which just gives us an empty object and needs us to define every property and value 
* for each cat object we would create.*/
