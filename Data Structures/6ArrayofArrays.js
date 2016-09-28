var newArray = [[0,1,2], [3,4,5], [6,7,8]];
newArray


//3 Rows and 3 Columns.

var jagged = [ [1,2,3 ] , [ "a","b","c","d" ]]

// jagged Array, A mix of multidimensional arrays

root@dev-cm-2:/home/vamshi/javascript# cat jaggedArray.js
var jagged = [ [1,2,3 ] , [ "a","b", ["c","d" ]]]
console.log(jagged)
root@dev-cm-2:/home/vamshi/javascript# nodejs jaggedArray.js
[ [ 1, 2, 3 ], [ 'a', 'b', [ 'c', 'd' ] ] ]

