// En tu main.js, mejora la función de renderizado
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("cards-container");

  // Muestra un mensaje de carga
  container.innerHTML = "<p>Carregant experiències...</p>";

  const experiencies = await fetchExperiencies();

  if (!experiencies || experiencies.length === 0) {
    container.innerHTML = "<p>No s'han pogut carregar les experiències.</p>";
    return;
  }

  container.innerHTML = experiencies
    .map(
      (exp) => `
    <article class="card">
      <h3>${exp.name || "Sense títol"}</h3>
      <p>${exp.description || "Sense descripció"}</p>
      <span><strong>${exp.price || "0"} €</strong></span>
    </article>
  `,
    )
    .join("");
});
