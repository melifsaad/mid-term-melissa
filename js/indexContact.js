const enviarPost = async (event) => {
  event.preventDefault();
  const infoName = document.querySelector("#input1").value;
  const infoEmail = document.querySelector("#input2").value;
  const infoPhone = document.querySelector("#input3").value;
  const infoMessage = document.querySelector("#input4").value;
  const data = {
    name: infoName,
    email: infoEmail,
    phone: infoPhone,
    message: infoMessage,
  };


  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  document.querySelector("#input1").value = "";
};

document.querySelector("form").addEventListener("submit", enviarPost);



document.querySelector("#btnHamburguesa").addEventListener('click', ()=>{
    document.querySelector("#menuHamburguesa").classList.toggle('is-active')
    document.querySelector("#btnHamburguesa").classList.toggle('is-active')
})
