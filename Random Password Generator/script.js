// Random password genearator

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// Option 1
    // let password1 = document.getElementById("password1");
    // let password2 = document.getElementById("password2");

    // function generatePassword() {
    //     password1.textContent = "";
    //     password2.textContent = "";

    //     for (i = 0; i < 15; i++) {
    //         let random1 = Math.floor(Math.random() * characters.length);
    //         let random2 = Math.floor(Math.random() * characters.length);
    //         password1.textContent += characters[random1];
    //         password2.textContent += characters[random2];
    //     }
    // }


// Option 2
// - Grabs the two password containers from your HTML so you can inject content directly.
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

// - Generates a single password by randomly picking characters from your full set.
// - Uses a default length of 15, but can be reused with any length later.
// - Keeps logic isolated for reuse and clarity.

function randomPassword(length = 15) {
  let pass = ""; // start with empty string
  for (let i = 0; i < length; i++) {
    // pick a random index from characters array
    let randomIndex = Math.floor(Math.random() * characters.length);
    // add that character to the password
    pass += characters[randomIndex];
  }
  return pass; // return the full password
}

// Generates two passwords and injects them into the page
    // - Calls your generator twice and injects the results into the page.
    // - Keeps DOM logic separate from password logic—clean separation of concerns.

function generatePassword() {
  password1.textContent = randomPassword(); // first password
  password2.textContent = randomPassword(); // second password
}

// Why Option 2 is better than Option 1
// - Easier to reuse and extend (e.g., for custom length or toggles later)
// - Cleaner structure with no duplicate logic
// - More readable and maintainable


