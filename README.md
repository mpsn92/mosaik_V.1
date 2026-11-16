# npm installMosaik - Marketplace Cultural

Mosaik és una plataforma digital que connecta creadors i professionals culturals amb una comunitat global. El projecte està dissenyat sota el lema "Cultura en totes les seues peces".

## 🚀 Enllaços del Projecte

- **Web en producció (Vercel):** [https://mosaik-fawn.vercel.app](https://mosaik-fawn.vercel.app)
- **API Backend (Render):** [https://mosaik-v-1.onrender.com](https://mosaik-v-1.onrender.com)
- **Repositori GitHub:** [https://github.com/mpsn92/mosaik_V.1](https://github.com/mpsn92/mosaik_V.1)

## 🛠️ Tecnologies Utilitzades

**Frontend:** HTML5, CSS3, JavaScript (Fetch API)

**Backend:** Node.js, Express.js

**Base de Dades:** MongoDB (mitjançant Mongoose i MongoDB Atlas)

**Desplegament:** Vercel (Frontend) i Render (Backend)

## 📦 Instal·lació en Local

Per executar aquest projecte al teu ordinador:

- Clona el repositori:
  ```bash
  git clone https://github.com/mpsn92/mosaik_V.1.git
  ```
- Instal·la les dependències:

```bash
npm install
```

<<<<<<< HEAD
3. Crea un arxiu .env a l'arrel del projecte amb les següents variables:
=======
- Crea un arxiu .env a l'arrel del projecte amb les següents variables:
>>>>>>> e71b486 (Añadimos datos reales, sección de productes y botón de profesionales)

```env
PORT=3000
MONGO_URI=la_teua_cadena_de_conexio_mongodb
```

<<<<<<< HEAD
4. Inicia el servidor:
=======
- Inicia el servidor:
>>>>>>> e71b486 (Añadimos datos reales, sección de productes y botón de profesionales)

```bash
npm start
```

<<<<<<< HEAD
5. Obri el navegador:
=======
- Obri el navegador a:

```http://localhost:3000
>>>>>>> e71b486 (Añadimos datos reales, sección de productes y botón de profesionales)

```

## Endpoints de l'API

- `GET /api/experiencias` - Retorna un llistat de totes les experiències culturals.
- `POST /api/experiencias` - Crea una nova experiència (Requereix JSON amb `nombre`, `descripcion`, `precio`).

## Docker

El projecte inclou un `Dockerfile` i `docker-compose.yml` per aixecar l'entorn local (incloent MongoDB) amb:

```
docker-compose up --build
```
