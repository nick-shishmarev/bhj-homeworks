const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

const loader = document.querySelector('#loader');
const items = document.querySelector('#items');

const xhr = new XMLHttpRequest();

xhr.open('GET', url);

xhr.addEventListener('readystatechange', function() {
    if (this.readyState == xhr.DONE && this.status == 200) {
        loader.classList.remove('loader_active');

        const data = JSON.parse(this.responseText);
        const valutes = data.response.Valute;

        for (key in valutes) {
            console.log(key, valutes[key].Nominal, valutes[key].Value);
            items.insertAdjacentHTML('beforeend',
                ` <div class="item">
                    <div class="item__code"> ${key} за ${valutes[key].Nominal} </div>
                    <div class="item__value"> ${valutes[key].Value} </div>
                    <div class="item__currency"> руб. </div>
                </div> `);
        }
    }
})

xhr.send();
