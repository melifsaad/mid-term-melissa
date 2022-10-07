const getInfo1 = async () =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/8').then((response) => response.json().then(res => res))
    document.querySelector (".item1 h5").innerHTML = data.title
    document.querySelector (".item1 p").innerHTML = data.body
}
getInfo1();

const getInfo2 = async () =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/5').then((response) => response.json().then(res => res))
    document.querySelector (".item2 h5").innerHTML = data.title
    document.querySelector (".item2 p").innerHTML = data.body
}
getInfo2();

const getInfo3 = async () =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/7').then((response) => response.json().then(res => res))
    document.querySelector (".item3 h5").innerHTML = data.title
    document.querySelector (".item3 p").innerHTML = data.body
}
getInfo3();

const getInfoBanner = async () =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/16').then((response) => response.json().then(res => res))
    document.querySelector (".info1 p").innerHTML = data.body
}
getInfoBanner();


document.querySelector("#btnHamburguesa").addEventListener('click', ()=>{
    document.querySelector("#menuHamburguesa").classList.toggle('is-active')
    document.querySelector("#btnHamburguesa").classList.toggle('is-active')
})
