const form = document.getElementById('form');
const file = document.getElementById('file');
const url = 'https://students.netoservices.ru/nestjs-backend/upload';
const timeout = 300000;

const progress = document.getElementById( 'progress' );
progress.value = 0.0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.timeout = timeout;

    xhr.upload.addEventListener("loadstart", (e) => {
        progress.value = 0.0;
    });

    xhr.upload.addEventListener("progress", (e) => {
        progress.value = event.loaded / event.total;
    });

    xhr.upload.addEventListener("load", (e) => {
        alert(`Файл загружен. Время загрузки: ${(Number(e.timeStamp / 1000)).toFixed(3)} секунд`);
    });

    xhr.upload.addEventListener("timeout", (e) => {
        alert('Файл не загружен: ' + e.type);
    });

    xhr.upload.addEventListener("error", (e) => {
        alert('Файл не загружен: ' + e.type);
    });

    xhr.send(formData);
})














// Each time a progress event is received we update the progress bar
// and the progress message
