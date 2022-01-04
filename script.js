// Constantes
const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

// Lista as pizzas
pizzaJson.map((item, index)=>{

    // Modelo das pizzas
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    
    // Informações das pizzas
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    // Saber qual pizza foi clicada e suas respectivas informações
    pizzaItem.setAttribute('data-key', index);

    // Evento de clicar na pizza, prevenindo que não atualize a tela ao clicar
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();


        
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200);
        
    });

    c('.pizza-area').append( pizzaItem );
});