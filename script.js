//criacao das variaveis 
const adviceId = document.querySelector("#adviceId");
const adviceText = document.querySelector("#adviceText");
const button = document.querySelector("#button");

// Quando a pagina carrega ele ja exibe um conselho novo
window.onload = () => {  
   getAdvice();
};

function getAdvice() {

   //requisição da Api com fetch
   fetch("https://api.adviceslip.com/advice").then(response => {
      return response.json();
   }).then(adviceData => {
      const adviceNum = adviceData.slip.id;
      const advice = adviceData.slip.advice;

      adviceId.textContent = adviceNum;
      adviceText.innerHTML = `<p>${advice}</p>`


   }).catch(error => {
      console.log(error);
   })

}

// criando um evento para button
button.addEventListener('click', function () {
   getAdvice();
})