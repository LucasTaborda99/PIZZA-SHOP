// Constantes
let modalQt = 1;
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

    /* Saber qual pizza foi clicada e suas respectivas informações, 
    fazendo um set dando um número de id para cada pizza */
    pizzaItem.setAttribute('data-key', index);

    // Modal

    // Evento de clicar na pizza, prevenindo que não atualize a tela ao clicar
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        // Pega a pizza clicada com suas respectivas informações
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
    
        // Declarando a constante modalQt para inicar em 1 a quantidade de pizza
        modalQt = 1;

        // Preenche as informações da pizza no modal
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        
        // Remove a seleção do item do tamanho da pizza 
        c('.pizzaInfo--size.selected').classList.remove('selected');

        
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{

            // Resetando o modal para deixar já selecionado no item tamanho da pizza em grande
            if(sizeIndex == 2){
                size.classList.add('selected');
            }

            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        // Resetando o modal para deixar já selecionado no item quantidade de pizza em 1
        c('.pizzaInfo--qt').innerHTML = modalQt;

        // Timer para abrir o modal
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200);
        
    });

    c('.pizza-area').append( pizzaItem );
});

// Eventos do modal

// Timer para fechar o modal
function closeModal() {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none';
    }, 500);
}

// Evento de clique no botão cancelar ou voltar, para fechar o modal
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});

// Evento de botão + e - de quantidade de pizzas
c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQt > 1){
        modalQt--;
        c('.pizzaInfo--qt').innerHTML = modalQt;
    }
});

c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;

});

// Evento dos botões de tamanho das pizzas
cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=>{
         // Remove a seleção do item do tamanho da pizza 
         c('.pizzaInfo--size.selected').classList.remove('selected');
         size.classList.add('selected');
    });
});


