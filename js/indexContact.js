document.querySelector("#submit").addEventListener("click", (event) => {
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
  console.log(data);
});
