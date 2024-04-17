let body = document.querySelector("body");
let nav = document.querySelector("nav");
let main = document.querySelector("main");
let span = document.querySelector("aside");

if (nav !== null && span !== null) {
    let hijos = nav.children;
    let hijosSpan = span.children;
    hijos[0].addEventListener("click", () => {
        if (nav !== null && main !== null) {
            nav.classList.add("rotate");
            main.classList.add("rotate");

            if (span instanceof HTMLElement) {
                for (let i = 0; i < hijosSpan.length; i++) {
                    hijosSpan[i].classList.add("translate");

                };
            } else {
                console.log("span is not an HTMLElement");
            };
        }
    });
    hijos[1].addEventListener("click", () => {
        if (nav !== null && main !== null && span !== null) {
            nav.classList.remove("rotate");
            main.classList.remove("rotate");

            if (span instanceof HTMLElement) {
                for (let i = 0; i < hijosSpan.length; i++) {
                    hijosSpan[i].classList.remove("translate");
                };
            } else {
                console.log("span is not an HTMLElement");
            };
        }
    });
} else {
    console.log("nav or span is null");
}
