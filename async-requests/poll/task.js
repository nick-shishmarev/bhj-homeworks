const title = document.querySelector('.poll__title');
const answers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();
const xhrReply = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/poll';

xhr.open('GET', url);

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);

        title.insertAdjacentHTML('afterbegin',
            ` <div class="poll__title"> ${data.data.title} </div> `
        );

        data.data.answers.forEach(answer => {
            answers.insertAdjacentHTML('beforeend', 
                ` <button class="poll__answer"> ${answer} </button>`
            );
        })

        const btns = answers.querySelectorAll('.poll__answer');

        btns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                
                const params = `vote=${data.id}&answer=${index}`;
                xhrReply.open('POST',url);
                xhrReply.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrReply.addEventListener('readystatechange', function() {
                    if (xhrReply.readyState === xhrReply.DONE && xhrReply.status == 201) {
                        const result = JSON.parse(xhrReply.responseText).stat;

                        answers.classList.remove('poll__answers_active');

                        const format = {style: "percent", maximumFractionDigits: 2,};
                        
                        let sum = result.reduce((summa, current) => summa + current.votes, 0);
                        
                        for (item of result) {
                            const perccent = new Intl.NumberFormat("en", format).format(item.votes / sum);
                            title.insertAdjacentHTML('afterend',
                                `<p style="font-weight: bold"> ${item.answer} ${perccent}</p>`
                            );
                        }
                    }
                })
                
                xhrReply.send(params);
            })
        })
    }
})

xhr.send();


