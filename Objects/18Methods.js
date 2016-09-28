var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function(newWidth) {
    this.width=newWidth;
};
  

// here change the width to 8 and height to 6 using our new methods
//var rectangle1 = new Object();
rectangle.setHeight(6);
rectangle.setWidth(8);
