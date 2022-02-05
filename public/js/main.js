var x = document.querySelectorAll('.refercence_ct');

Array.from(x).forEach(b => {
    b.style.backgroundImage  = `url('${b.dataset.img}')`
    b.style.backgroundPosition  = `center`;
    b.style.backgroundSize  = `cover`;
});

document.getElementById('copy_dcname').addEventListener('click', () => {
    const dc_name = "Mittelblut9#1974"
    navigator.clipboard.writeText(dc_name).then(() => {
        alert('Discord username copied');
    }).catch(err => {return;})
});