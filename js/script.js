
{
    // табс
    const tabs = document.querySelectorAll('#tabs .tabs ul li');
    const panes = document.querySelectorAll('#tabs .tabs .tabs-content .pane');

    for(let i = 0, length = tabs.length; i < length; i++){

        tabs[i].addEventListener('click', () => {
            
            for(let k = 0; k < length; k++){
                
                tabs[k].classList.remove('active');
                panes[k].classList.remove('active');
            }

            tabs[i].classList.add('active');        
            panes[i].classList.add('active');
        });

    }
}

{
    // slider
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('picture');
    const left = slider.querySelector('.slider-left');
    const right = slider.querySelector('.slider-right');
    const numbers = slider.querySelector('.slider-numbers');
    const length = slides.length;

    let counter = 0;

    // set primary data
    numbers.innerHTML = `<strong>${length}</strong><span>${counter+1}</span>`;

    left.addEventListener('click', toLeft);

    right.addEventListener('click', toRight);

    document.addEventListener('keydown', event => {
        if(event.key == 'ArrowLeft' || event.code == 'ArrowLeft'){
            toLeft();
        }

        if(event.key == 'ArrowRight' || event.code == 'ArrowRight'){
            toRight();
        }
    });

    function toLeft(){
        if(counter != length-1){
            counter++;
        } else {
            counter = 0;
        }

        for(let i = 0; i < length; i++){
            slides[i].classList.remove('active');
        }

        slides[counter].classList.add('active');

        numbers.innerHTML = `<strong>${length}</strong><span>${counter+1}</span>`;
    }

    function toRight(){
        if(counter === 0){
            counter = length-1;
        } else {
            counter--;
        }

        for(let i = 0; i < length; i++){
            slides[i].classList.remove('active');
        }

        slides[counter].classList.add('active');

        numbers.innerHTML = `<strong>${length}</strong><span>${counter+1}</span>`;
    }
}


let mymap = L.map('map-place').setView([49.899444, 23.943889], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(mymap);

let marker1 = L.marker([49.899444, 23.943889]).addTo(mymap);
let marker2 = L.marker([49.898427, 23.950218]).addTo(mymap);
