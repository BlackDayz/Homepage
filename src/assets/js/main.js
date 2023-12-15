const dc_note_cookie = 'dc_note';

window.addEventListener('load', function () {
    if (getCookie(dc_note_cookie)) {
        try {
            document.getElementById('dc_profile_note').innerHTML = getCookie(dc_note_cookie);
        } catch (e) {
            //eslint-disable-next-line no-console
            console.error(e);
        }
    }

    const x = document.querySelectorAll('.refercence_ct');

    Array.from(x).forEach((b) => {
        b.style.backgroundImage = `url('${b.dataset.img}')`;
        b.style.backgroundPosition = 'center';
        b.style.backgroundSize = 'cover';
    });

    try {
        document.getElementById('dc_profile_note').addEventListener('focusout', function () {
            return setCookie(dc_note_cookie, this.value, 356);
        });
    } catch (e) {
        //eslint-disable-next-line no-console
        console.error(e);
    }
});

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/;samesite=strict;secure';
}

function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}
