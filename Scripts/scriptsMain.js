
function start() {
    var inf_button = document.getElementById("button-resume");
    inf_button.onclick = function () {
        // window.scrollBy(0,700);
        function scroller(object) {
            window.scroll({
                left: 0,
                top: object.offsetTop,
                behavior: 'smooth'
            })
        }
        var resume = document.querySelector('div[id="scrollhere"]');
        scroller(resume);
    };

    var contact_me_button = document.getElementById("button-contactme");
    contact_me_button.onclick = function () {
        location.href = "form.html";
    };
}

start();