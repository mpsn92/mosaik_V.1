// api.js
const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api"
    : "https://mosaik-v-1.onrender.com/api";

async function fetchExperiencies() {
  try {
    const response = await fetch(`${BASE_URL}/experiencias`);
    if (!response.ok) throw new Error("Error al obtener las experiencias");
    return await response.json();
  } catch (error) {
    console.error("Fetch error experiencias:", error);
    return [];
  }
}

async function fetchProductes() {
  try {
    const response = await fetch(`${BASE_URL}/productes`);
    if (!response.ok) throw new Error("Error al obtener los productos");
    return await response.json();
  } catch (error) {
    console.error("Fetch error productes:", error);
    return [];
  }
}
