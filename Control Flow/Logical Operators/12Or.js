var tired = true;
var bored = false;

var nap = function () {
    if ( tired == true || bored == true  ) {
        return true;
    }else{
        return false;
    }
}
nap();
