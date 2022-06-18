// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const error = document.getElementById("modal")
error.className+="hidden"

const like = document.querySelectorAll(".like-glyph")

function heartLiker(e) {
  const liker = e.target;
  mimicServerCall()
    .then(function(){
      if ( liker.innerText === EMPTY_HEART) {
        liker.innerText = FULL_HEART;
        liker.className = "activated-heart";
      } else {
        liker.innerText = EMPTY_HEART;
        liker.className = "";
      }
    })
    .catch(function(error) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
}

for (const likers in like) {
  likers.addEventListener("click", heartLiker);
}
// like.addEventListener("click", mimicServerCall)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
