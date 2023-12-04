const form = document.getElementById('form');
let num;
const randomNumber = setInterval(function () {
  num = Math.floor(Math.random() * 100);
}, 1000);
let arr = [];
let ent = 9;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('message');
  const userInput = document.getElementById('userInput').value;
  const previousEntries = document.getElementById('previousEntries');
  const retries = document.getElementById('retries');
  message.innerHTML = '';
  if (userInput == '' || isNaN(userInput) || userInput > 100) {
    alert('you have enterd wrong number try again');
    console.log(userInput);
  } else {
    if (userInput == num) {
      document.getElementById('userInput').value = '';
      message.innerHTML += `
<h3 style=" color:green; transition:1s ease-all; scale:1; ">
 Wow, you are correct!
</h3>
  generated randomNumber =<b style='color:cayan'> ${num}</b>
  generated randomNumber =<b style='color:greenyellow'> ${userInput}</b>
  `;
    } else {
      document.getElementById('userInput').value = '';

      message.innerHTML += ` <h3 style="color:red;transition:1s ease-all; scale:1; "> Oops, you are wrong!</h3>
   generated Number = <b style='color:red;'>${num}</b> <br/>
   Your Number = <b style='color:blue;'>${userInput}</b>
   `;
    }
  }
  arr.push(userInput);
  if (arr.length === 10) {
    arr.pop();
    ent = 10;
  } else {
    retries.innerHTML = `
    Entries left:<b style='color:purple'> ${ent--} </b>
    `;
    previousEntries.innerHTML = `
    Previous Entries:<b style='color:orange'>  ${arr.toString()} </b>
    `;
  }
});
