// ======================================================
// TRANSICIÓN ENTRE SECCIONES
// ======================================================

function irConTransicion(destino) {

    const overlay =
        document.getElementById("transicionPantalla");

    if (!destino) {
        return;
    }


    if (overlay) {
        overlay.classList.add("visible");
    }


    setTimeout(() => {

        destino.scrollIntoView({
            behavior: "auto",
            block: "start"
        });

    }, 550);


    setTimeout(() => {

        if (overlay) {
            overlay.classList.remove("visible");
        }

    }, 1050);
}


// ======================================================
// PORTADA
// ======================================================

const btnComenzar =
    document.getElementById("btnComenzar");

const historia =
    document.getElementById("historia");


if (
    btnComenzar &&
    historia
) {

    btnComenzar.addEventListener(
        "click",
        () => {

            irConTransicion(historia);

        }
    );
}


// ======================================================
// PRIMERA NOCHE
// ======================================================

const botonesRecuerdo =
    document.querySelectorAll(".recuerdo-btn");

const recuerdosAbiertos =
    new Set();

const fraseFinal =
    document.getElementById("fraseFinal");

const btnCumple =
    document.getElementById("btnCumple");


botonesRecuerdo.forEach((boton) => {

    boton.addEventListener(
        "click",
        () => {

            const numero =
                boton.dataset.recuerdo;

            const panel =
                document.getElementById(
                    "recuerdo" + numero
                );


            if (!panel) {
                return;
            }


            boton.classList.toggle("activo");

            panel.classList.toggle("activo");


            if (
                panel.classList.contains("activo")
            ) {
                recuerdosAbiertos.add(numero);
            }


            if (
                recuerdosAbiertos.size === 3
            ) {

                if (fraseFinal) {
                    fraseFinal.classList.add(
                        "visible"
                    );
                }


                if (btnCumple) {
                    btnCumple.classList.add(
                        "visible"
                    );
                }
            }

        }
    );
});


const cumpleRecuerdo =
    document.getElementById("cumpleRecuerdo");


if (
    btnCumple &&
    cumpleRecuerdo
) {

    btnCumple.addEventListener(
        "click",
        () => {

            irConTransicion(
                cumpleRecuerdo
            );

        }
    );
}


// ======================================================
// CUMPLEAÑOS
// ======================================================

const regaloCard =
    document.getElementById("regaloCard");

const regaloCerrado =
    document.getElementById("regaloCerrado");

const regaloAbierto =
    document.getElementById("regaloAbierto");

const btnBariloche =
    document.getElementById("btnBariloche");


if (
    regaloCard &&
    regaloCerrado &&
    regaloAbierto
) {

    regaloCard.addEventListener(
        "click",
        () => {

            if (
                regaloAbierto.classList.contains(
                    "activo"
                )
            ) {
                return;
            }


            regaloCerrado.style.display =
                "none";


            regaloAbierto.classList.add(
                "activo"
            );


            if (btnBariloche) {

                setTimeout(() => {

                    btnBariloche.classList.add(
                        "visible"
                    );

                }, 450);

            }

        }
    );
}


const bariloche =
    document.getElementById("bariloche");


if (
    btnBariloche &&
    bariloche
) {

    btnBariloche.addEventListener(
        "click",
        () => {

            irConTransicion(
                bariloche
            );

        }
    );
}


// ======================================================
// BARILOCHE
// ======================================================

const btnEncontrarnos =
    document.getElementById(
        "btnEncontrarnos"
    );

const barilochePersonas =
    document.getElementById(
        "barilochePersonas"
    );

const corazonesEncuentro =
    document.getElementById(
        "corazonesEncuentro"
    );

const barilocheRecuerdo =
    document.getElementById(
        "barilocheRecuerdo"
    );

const btnIrParque =
    document.getElementById(
        "btnIrParque"
    );


if (
    btnEncontrarnos &&
    barilochePersonas &&
    corazonesEncuentro &&
    barilocheRecuerdo
) {

    btnEncontrarnos.addEventListener(
        "click",
        () => {

            barilochePersonas.classList.add(
                "juntos"
            );


            corazonesEncuentro.classList.add(
                "visible"
            );


            btnEncontrarnos.style.opacity =
                "0";

            btnEncontrarnos.style.pointerEvents =
                "none";


            setTimeout(() => {

                barilocheRecuerdo.classList.add(
                    "visible"
                );

            }, 600);


            if (btnIrParque) {

                setTimeout(() => {

                    btnIrParque.classList.add(
                        "visible"
                    );

                }, 1000);

            }

        }
    );
}


// ======================================================
// BARILOCHE -> PARQUE
// ======================================================

const parque =
    document.getElementById("parque");


if (
    btnIrParque &&
    parque
) {

    btnIrParque.addEventListener(
        "click",
        () => {

            irConTransicion(
                parque
            );

        }
    );
}


// ======================================================
// PARQUE / POLOLEO
// ======================================================

const btnAbrirParque =
    document.getElementById(
        "btnAbrirParque"
    );

const papelitos =
    document.getElementById(
        "papelitos"
    );

const parqueReveal =
    document.getElementById(
        "parqueReveal"
    );

const btnIrCueca =
    document.getElementById(
        "btnIrCueca"
    );


if (
    btnAbrirParque &&
    parqueReveal
) {

    btnAbrirParque.addEventListener(
        "click",
        () => {

            if (papelitos) {
                papelitos.classList.add(
                    "visible"
                );
            }


            btnAbrirParque.innerHTML =
                "Mira bien... ❤️";

            btnAbrirParque.style.pointerEvents =
                "none";


            setTimeout(() => {

                parqueReveal.classList.add(
                    "visible"
                );

            }, 850);


            if (btnIrCueca) {

                setTimeout(() => {

                    btnIrCueca.classList.add(
                        "visible"
                    );

                }, 1250);

            }

        }
    );
}


// ======================================================
// PARQUE -> CUECA
// ======================================================

const cueca =
    document.getElementById("cueca");


if (
    btnIrCueca &&
    cueca
) {

    btnIrCueca.addEventListener(
        "click",
        () => {

            irConTransicion(
                cueca
            );

        }
    );
}


// ======================================================
// CUECA
// ======================================================

const btnCueca =
    document.getElementById("btnCueca");

const cuecaReveal =
    document.getElementById(
        "cuecaReveal"
    );

const cuecaFoto =
    document.getElementById(
        "cuecaFoto"
    );

const btnIrAmo =
    document.getElementById(
        "btnIrAmo"
    );


if (
    btnCueca &&
    cuecaReveal &&
    cuecaFoto
) {

    btnCueca.addEventListener(
        "click",
        () => {

            cuecaFoto.classList.add(
                "activa"
            );


            btnCueca.innerHTML =
                "Ese momento ♥";

            btnCueca.style.pointerEvents =
                "none";

            btnCueca.style.opacity =
                ".45";


            setTimeout(() => {

                cuecaReveal.classList.add(
                    "visible"
                );

            }, 400);


            if (btnIrAmo) {

                setTimeout(() => {

                    btnIrAmo.classList.add(
                        "visible"
                    );

                }, 850);

            }

        }
    );
}


// ======================================================
// CUECA -> LO QUE AMO
// ======================================================

const amo =
    document.getElementById("amo");


if (
    btnIrAmo &&
    amo
) {

    btnIrAmo.addEventListener(
        "click",
        () => {

            irConTransicion(
                amo
            );

        }
    );
}


// ======================================================
// LO QUE AMO
// ======================================================

const amorCards =
    document.querySelectorAll(
        ".amor-card"
    );

const amoFinal =
    document.getElementById(
        "amoFinal"
    );

const btnFinal =
    document.getElementById(
        "btnFinal"
    );

let amoresAbiertos = 0;


amorCards.forEach((card) => {

    card.addEventListener(
        "click",
        () => {

            if (
                card.classList.contains(
                    "abierto"
                )
            ) {
                return;
            }


            const texto =
                card.dataset.amor;

            const revelado =
                card.querySelector(
                    ".amor-revelado"
                );


            if (revelado) {
                revelado.textContent =
                    texto;
            }


            card.classList.add(
                "abierto"
            );


            amoresAbiertos++;


            if (
                amoresAbiertos ===
                amorCards.length
            ) {

                setTimeout(() => {

                    if (amoFinal) {
                        amoFinal.classList.add(
                            "visible"
                        );
                    }


                    if (btnFinal) {
                        btnFinal.classList.add(
                            "visible"
                        );
                    }

                }, 550);


                setTimeout(() => {

                    if (amoFinal) {

                        amoFinal.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }

                }, 900);

            }

        }
    );

});


// ======================================================
// LO QUE AMO -> GALERÍA
// ======================================================

const galeriaRecuerdos =
    document.getElementById(
        "galeriaRecuerdos"
    );


if (
    btnFinal &&
    galeriaRecuerdos
) {

    btnFinal.addEventListener(
        "click",
        () => {

            irConTransicion(
                galeriaRecuerdos
            );

        }
    );
}


// ======================================================
// GALERÍA -> FINAL
// ======================================================

const btnIrFinal =
    document.getElementById(
        "btnIrFinal"
    );

const finalWeb =
    document.getElementById(
        "finalWeb"
    );


if (
    btnIrFinal &&
    finalWeb
) {

    btnIrFinal.addEventListener(
        "click",
        () => {

            irConTransicion(
                finalWeb
            );

        }
    );
}


// ======================================================
// REVELACIÓN FINAL
// ======================================================

const btnUltima =
    document.getElementById(
        "btnUltima"
    );

const finalReveal =
    document.getElementById(
        "finalReveal"
    );


if (
    btnUltima &&
    finalReveal
) {

    btnUltima.addEventListener(
        "click",
        () => {

            btnUltima.style.opacity =
                "0";

            btnUltima.style.pointerEvents =
                "none";


            setTimeout(() => {

                finalReveal.classList.add(
                    "visible"
                );

            }, 300);


            setTimeout(() => {

                finalReveal.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 650);

        }
    );
}