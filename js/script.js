document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope");

    if (envelope) {
        // Al hacer clic en la carta, se abre o se cierra
        envelope.addEventListener("click", () => {
            envelope.classList.toggle("open");
        });
    }

    // Crear rosas flotantes
    for (let i = 0; i < 20; i++) {
        let rosa = document.createElement("img");
        rosa.src = "img/rosa.png";
        rosa.classList.add("rosa");
        rosa.style.position = "absolute";
        rosa.style.top = Math.random() * 80 + "vh";
        rosa.style.left = Math.random() * 90 + "vw";
        rosa.style.width = "50px";
        rosa.style.animation = `floatRoses ${Math.random() * 3 + 3}s infinite ease-in-out`;
        document.body.appendChild(rosa);
    }
});

