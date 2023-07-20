// for of
// for in
// while

let images = [
    {
        owner: "Patricia",
        imageUrl: "./github.png",
        price: 700
        
    },
    {
        owner: "John",
        imageUrl: "./github.png",
        price: 500
        
    },
    {
        owner: "Jane",
        imageUrl:"./github.png" ,
        price: 600
        
    },

]
for(let x of images){
    console.log(x);
    const newDiv = document.createElement("div")
    newDiv.className = "card"
    newDiv.innerHTML = `
    <img src=${x.imageUrl} alt="art from my callery">
    <h4> ${x.owner}</h4>
    ` 
    document.getElementById("imageContainer").appendChild(newDiv)
    // document.body.append(newDiv);
    
}
let form = document.querySelector("#submitForm");
let name1 = document.getElementById("owner");
let image = document.getElementById("imageUrl");
let price = document.getElementById("price");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newObject = {
        owner : name1.value,
        imageUrl : image.value,
        price: price.value
    }
    const formDiv = document.createElement("div")
    formDiv.className = "card"
    formDiv.innerHTML = `
    <img src=${newObject.imageUrl} alt="art from my gallery">
    <h4> ${newObject.owner}</h4>
    <p> ${newObject.price}</h4>
`
document.getElementById("imageContainer").appendChild(formDiv)

})