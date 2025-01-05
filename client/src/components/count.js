const buy1 = document.getElementById('buy1');
const buy2 = document.getElementById('buy2');
const buy3 = document.getElementById('buy3');
const buy4 = document.getElementById('buy4');
const contain = document.getElementById('count-container');
const text1 = document.getElementById('final-count-text');

let final = 0;
let price_1_count = 0;
let price_2_count = 0;
let price_3_count = 0;
let price_4_count = 0;
let price_1 = 800;
let price_2 = 500;
let price_3 = 600;
let price_4 = 10000

const update_count = () => {
    final = price_1_count * price_1 + price_2_count * price_2 + price_3_count * price_3 + price_4*price_4_count;
    text1.textContent = 'Цена: ' + final;
};

// Добавляем билеты и их обработку
buy1.addEventListener('click', () => {
    contain.innerHTML += `<div class="container-row" data-type="1">
        <p> Взрослый ${price_1} руб</p>
        <button class="delete">Удалить</button>
    </div>`;
    price_1_count += 1;
    update_count();
});

buy2.addEventListener('click', () => {
    contain.innerHTML += `<div class="container-row" data-type="2">
        <p> Детский ${price_2} руб</p>
        <button class="delete">Удалить</button>
    </div>`;
    price_2_count += 1;
    update_count();
});

buy3.addEventListener('click', () => {
    contain.innerHTML += `<div class="container-row" data-type="3">
        <p> Студенческий ${price_3} руб</p>
        <button class="delete">Удалить</button>
    </div>`;
    price_3_count += 1;
    update_count();
});
buy4.addEventListener('click', () => {
    contain.innerHTML += `<div class="container-row" data-type="4">
        <p> VIP zone ${price_4} руб</p>
        <button class="delete">Удалить</button>
    </div>`;
    price_4_count += 1;
    update_count();
});

contain.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const row = e.target.closest('.container-row');
        const type = row.dataset.type;
        if (type === '1') price_1_count -= 1;
        else if (type === '2') price_2_count -= 1;
        else if (type === '3') price_3_count -= 1;
        else if (type === '4') price_4_count -= 1;
        row.remove();
        update_count();
    }
});
