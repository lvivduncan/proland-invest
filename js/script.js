
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
    const length = slides.length;

    let counter = 0;

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
    }
}
