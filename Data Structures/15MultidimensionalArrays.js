var me ={
    name: 'Vamshi',
};

var newArray = [[1,2,3,4], ["a" ,"b"]]

newArray[2] =[me]

console.log(newArray)

/* Output
One of the row element in the array is an object called "me"
 
 [ [ 1, 2, 3, 4 ], [ 'a', 'b' ], [ { name: 'Vamshi' } ] ]
 

 */
