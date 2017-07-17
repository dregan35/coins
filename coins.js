// declared the variables and added an event listner to button
let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");
button.addEventListener("click", result);

//defined the function coinCounter that expects change (from line 19,22,25 "change")
function coinCounter(change) {
    // console.log("button");
    // declares the variable coinPurse with four items
    var coinPurse = {
        quarterVal: 0,
        nickelVal: 0,
        dimeVal: 0,
        pennyVal: 0,
    };
    // calculates how many times .25 can go into whatever the user inputs
    coinPurse.quarterVal = Math.floor(change / .25);
    change = (change % .25);
    // calculates how many times .10 can go into whatever is left over 
    coinPurse.dimeVal = Math.floor(change / .10);
    change = (change % .10);
    // calculates how many times .05 can go into whatever is left over
    coinPurse.nickelVal = Math.floor(change / .05);
    change = (change % .05);
    // calculates how many times .01 can go into whatever is left over
    coinPurse.pennyVal = Math.floor(change / .01);

    return coinPurse;

}
// defined fuction result    
function result() {
    // declared result to equal the function coinCounter with input,value passed into it
    
    let result = coinCounter(input.value);
    console.log("result", result);
    // set the element output to display the content of the string template literal to the DOM
    output.innerHTML = `<p>Quarters:${result.quarterVal}</p>
        <p>Dimes:${result.dimeVal}</p>  
        <p>Nickels:${result.nickelVal}</p>
        <p>Pennies:${result.pennyVal}</p>`;
        // called the function clearInput
        clearInput();
}
// defined the function clearInput
function clearInput() {
    // set the value of input to equal a empty string
    input.value = "";
}