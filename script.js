document.getElementById("answerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const correctAnswer = "14 décembre 1988"; // Réponse correcte prédéfinie
    const userAnswer = document.getElementById("answer").value.trim();
    const resultDiv = document.getElementById("result");

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        // Si la réponse est correcte, rediriger vers la page suivante
        window.location.href = "success.html";
    } else {
        resultDiv.innerText = "Faux, réessayez.";
        resultDiv.style.color = "red";
    }

    // Effacer le champ de réponse après soumission
    document.getElementById("answer").value = "";
});
