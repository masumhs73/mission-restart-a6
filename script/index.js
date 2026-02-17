// console.log("index is connected")

function loadCategories () {
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>console.log(data));

}

loadCategories();