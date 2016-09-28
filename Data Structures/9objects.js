var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.call = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.call();

/* Output

Calling Oxnard Montalvo at (555) 555-5555...

*/

/*var me ={
    name :"Vamshi",
    age: 27,
};
    
*/

