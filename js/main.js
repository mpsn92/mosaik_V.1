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
// main.js (cambia todo el archivo por este)
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Cargar Experiencias
  const expContainer = document.getElementById("cards-container");
  expContainer.innerHTML = "<p>Carregant experiències...</p>";
  const experiencies = await fetchExperiencies();

  if (experiencies && experiencies.length > 0) {
    expContainer.innerHTML = experiencies
      .map(
        (exp) => `
      <article class="card">
        <h3>${exp.nombre}</h3>
        <p>${exp.descripcion}</p>
        <span><strong>${exp.precio} €</strong></span>
        <br><br><small><em>${exp.categoria}</em></small>
      </article>
    `,
      )
      .join("");
  } else {
    expContainer.innerHTML = "<p>No hi ha experiències disponibles.</p>";
  }

  // 2. Cargar Productes (Añadido nuevo)
  const prodContainer = document.getElementById("products-container");
  const productes = await fetchProductes();

  if (productes && productes.length > 0) {
    prodContainer.innerHTML = productes
      .map(
        (prod) => `
      <article class="card">
        <h3>${prod.nombre}</h3>
        <p>${prod.descripcion}</p>
        <span><strong>${prod.precio} €</strong></span>
        <br><br><small><em>${prod.categoria}</em></small>
      </article>
    `,
      )
      .join("");
  } else {
    prodContainer.innerHTML = "<p>Properament: nous productes culturals.</p>";
  }
});
