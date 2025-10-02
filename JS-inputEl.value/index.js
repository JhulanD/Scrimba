let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    const inputValue = inputEl.value
    // inputEl.value: Inside the event listener, this accesses the value property of the inputEl element. This property contains the text that the user has typed into the input field.
    myLeads.push(inputValue)
    console.log(inputValue)
})


