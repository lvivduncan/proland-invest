

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