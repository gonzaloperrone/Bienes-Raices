document.addEventListener('DOMContentLoaded', function () {
    eventListeners();

    darkMode();
});

function darkMode(){
 
    let lStorage = window.localStorage; 
    let darkModeDefault = window.matchMedia('(prefers-color-scheme: dark)'); 
    
    if (lStorage.getItem('dark')==null) { 
        if (darkModeDefault.matches) { 
            lStorage.setItem('dark',1); 
            document.body.classList.add('darkMode');
        }else{ 
            lStorage.setItem('dark',0); 
            document.body.classList.remove('darkMode');
        }
    }
    else{ 
        if (lStorage.getItem('dark')==1) { 
            document.body.classList.add('darkMode'); 
        }else{ 
            document.body.classList.remove('darkMode'); 
        }
    }
 
    darkModeDefault.addEventListener('change',function(){ 
        if (darkModeDefault.matches) {
            lStorage.setItem('dark',1); 
            document.body.classList.add('darkMode');
        }else{ 
            lStorage.setItem('dark',0);
            document.body.classList.remove('darkMode');
        }
    })
 
    const botonDarkMode=document.querySelector('.darkModeBtn'); 
    botonDarkMode.addEventListener('click',function(){ 
        if (document.body.classList.contains('darkMode')) {
            lStorage.setItem('dark',0); 
            document.body.classList.remove('darkMode'); //
        }else{
            lStorage.setItem('dark',1); 
            document.body.classList.add('darkMode');
        }
    })
}
function eventListeners() {
    const mobileMenu = document.querySelector('.mobileMenu');

    mobileMenu.addEventListener('click', responsiveNav);
}

function responsiveNav() {
    const nav = document.querySelector('.nav');

    nav.classList.toggle('show');
}