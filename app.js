//olx token - WfDdwgiDQwfRx3GByO1B8rNUgJ1VP99DFJGMlzAeFVt13PFc

const data = document.getElementById('product_input');
const url = 'https://rozetka.com.ua/promo/newyear/?gclid=Cj0KCQiA-oqdBhDfARIsAO0TrGGLGdEhTk-pK0tfEMtQHEqARKxlfJZgsd_D3QHTRO2jRgszzeBnE_kaAs-iEALw_wcB'

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
