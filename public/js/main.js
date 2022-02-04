var x = document.querySelectorAll('.refercence_ct');

Array.from(x).forEach(b => {
    b.style.backgroundImage  = `url('${b.dataset.img}')`
    b.style.backgroundPosition  = `center`;
    b.style.backgroundSize  = `cover`;
    

    // b.addEventListener('click', function () {
    //     window.open(b.dataset.link);
    // });
});

// document.getElementById('back').addEventListener('click', () => {
//     window.close();
// });