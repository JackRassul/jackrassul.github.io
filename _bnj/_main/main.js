let main = document.getElementById('bnjMain');
let openApp = document.getElementById('btnStart');
let closeApp = document.getElementById('btnClose');
let phoneBody = document.getElementById('mockup');

// open app

openApp.addEventListener('click', ()=> {
    main.classList.remove('fadeOut');
    main.style.display = 'block';
    closeApp.style.display = 'block';
    phoneBody.style = `z-index: 1`;
})

// close app

closeApp.addEventListener('click', ()=> {
    main.classList.add('fadeOut');
    closeApp.style.display = 'none';
})

main.addEventListener('transitionend', () => {
    main.style.display = 'none';
    phoneBody.style = `z-index: -1`;
})

//close button