//olx token - WfDdwgiDQwfRx3GByO1B8rNUgJ1VP99DFJGMlzAeFVt13PFc

const data = document.getElementById('product_input');
const url = 'https://rozetka.com.ua/promo/newyear/?gclid=Cj0KCQiA-oqdBhDfARIsAO0TrGGLGdEhTk-pK0tfEMtQHEqARKxlfJZgsd_D3QHTRO2jRgszzeBnE_kaAs-iEALw_wcB'

const elastic = document.querySelector('#elastic')

            elastic.addEventListener('product_input', (ev) => {
                const value = ev.target.value.trim()
                const elasticItems = document.querySelectorAll('.product-list')
                const searchRegExp = new RegExp(value, 'gi')

                if (value === '') {
                    elasticItems.forEach((el) => {
                        el.classList.remove('hide')
                    })
                    return
                }

                elasticItems.forEach((el) => {
                    const innerCard = el.querySelector('.catalog-item__title es-name')
                    const elementText = innerCard.textContent
                    const isContainsSearchRequest = searchRegExp.test(elementText)
                    if (!isContainsSearchRequest) {
                        el.classList.add('hide')
                    } else {
                        el.classList.remove('hide')
                    }
                })
            })

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
