var body = document.querySelector("body");
var nav = document.querySelector("nav");
var main = document.querySelector("main");
var span = document.querySelector("aside");
if (nav !== null && span !== null) {
    var hijos = nav.children;
    var hijosSpan_1 = span.children;
    hijos[0].addEventListener("click", function () {
        if (nav !== null && main !== null) {
            nav.classList.add("rotate");
            main.classList.add("rotate");
            if (span instanceof HTMLElement) {
                for (var i = 0; i < hijosSpan_1.length; i++) {
                    hijosSpan_1[i].classList.add("translate");
                }
                ;
            }
            else {
                console.log("span is not an HTMLElement");
            }
            ;
        }
    });
    hijos[1].addEventListener("click", function () {
        if (nav !== null && main !== null && span !== null) {
            nav.classList.remove("rotate");
            main.classList.remove("rotate");
            if (span instanceof HTMLElement) {
                for (var i = 0; i < hijosSpan_1.length; i++) {
                    hijosSpan_1[i].classList.remove("translate");
                }
                ;
            }
            else {
                console.log("span is not an HTMLElement");
            }
            ;
        }
    });
}
else {
    console.log("nav or span is null");
}
