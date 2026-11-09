// api.js
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/experiencias"
    : "https://mosaik-v-1.onrender.com/api/experiencias"; // Para producción en Vercel

async function fetchExperiencies() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener las experiencias");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
