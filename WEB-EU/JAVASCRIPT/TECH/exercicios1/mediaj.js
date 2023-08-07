document.body.style.textAlign = "center";

        let btnVerificar = document.getElementById("verificar");
        btnVerificar.addEventListener("click", validarClique);

        function validarClique() {
            let notaUm = parseFloat(document.getElementById("notaUm").value);
            let notaDois = parseFloat(document.getElementById("notaDois").value);
            let fMediaFinal = document.getElementById("media");

            let mediaFinal = (notaUm + notaDois) / 2;
            fMediaFinal.value = mediaFinal;

            alert(`A sua média é ${mediaFinal}.`)
            window.print();
        }