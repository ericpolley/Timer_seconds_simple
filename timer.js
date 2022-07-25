//create a count variable to count with
let count = 0;
//add one to the count
function updateCount() {
    count = count + 1;
    //grab the info from document element id number, 
    //from the innerHTML to equal count
    document.getElementById("number").innerHTML = count;
    //set a timer to tell when this should repeat by millasecond
    setTimeout(updateCount, 1000);
}
//call the function into action!
updateCount();