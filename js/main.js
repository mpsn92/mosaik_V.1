document.addEventListener("DOMContentLoaded", async () => {
  // 1. EXPERIENCIAS
  const expContainer = document.getElementById("cards-container");
  if (expContainer) {
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
  }

  // 2. PRODUCTES
  const prodContainer = document.getElementById("products-container");
  if (prodContainer) {
    prodContainer.innerHTML = "<p>Carregant productes...</p>";
    const productes = await fetchProductes();

    // ESTO NOS DIRÁ EN LA CONSOLA QUÉ ESTÁ LLEGANDO
    console.log("Datos recibidos de productos:", productes);

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
  } else {
    console.error(
      "ERROR: No existe el div con id 'products-container' en el HTML",
    );
  }
});
