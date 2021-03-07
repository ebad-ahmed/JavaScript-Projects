//Get Dom Elements
const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');


//Add Event Listners
//Toggle the nav
toggle.addEventListener('click', () =>
    document.body.classList.toggle('show-nav')
);

//show the modal
open.addEventListener('click', () =>
    modal.classList.add('show-modal')
);

//close the modal
close.addEventListener('click', () =>
    modal.classList.remove('show-modal')
);

//close the modal on clicking outside the modal
window.addEventListener('click', e =>
    e.target === modal ? modal.classList.remove('show-modal') : false
);