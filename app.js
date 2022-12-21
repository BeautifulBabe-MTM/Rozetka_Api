
const data = document.getElementById('product');
const url = 'https://api-seller.rozetka.com.ua/items/search'

async function postData(){
    const response = await fetch(url, 
        { 
            method: "GET", 
            mode: 'cors', 
            headers: { 'Content-Type': 'application/json'}
        })
        .then(data => data.json()).then(data => console.log(data));
}

window.onload = async ()=> {
    await postData();
}