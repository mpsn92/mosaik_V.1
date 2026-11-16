# npm installMosaik - Marketplace Cultural

Mosaik és una plataforma digital que connecta creadors i professionals culturals amb una comunitat global. El projecte està dissenyat sota el lema "Cultura en totes les seues peces".

## 🚀 Enllaços del Projecte

- **Web en producció (Vercel):** [https://mosaik-fawn.vercel.app](https://mosaik-fawn.vercel.app)
- **API Backend (Render):** [https://mosaik-v-1.onrender.com](https://mosaik-v-1.onrender.com)
- **Repositori GitHub:** [https://github.com/mpsn92/mosaik_V.1](https://github.com/mpsn92/mosaik_V.1)

## ✨ Funcionalitats Principals

- **Experiències Culturals:** Visualització dinàmica d'excursions, visites guiades i escape rooms a València, Granada i Còrdova.
- **Productes Culturals:** Catàleg d'artesania (fang, cuir, tèxtil, brodat) i entrades de teatre.
- **Secció de Professionals:** Àrea de captació de talents amb un botó d'acció per unir-se a la xarxa de Mosaik.

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

- Crea un arxiu .env a l'arrel del projecte amb les següents variables:

```env
PORT=3000
MONGO_URI=la_teua_cadena_de_conexio_mongodb
```

- Inicia el servidor:

```bash
npm start
```

- Obri el navegador a:

```http://localhost:3000

```

## Endpoints de l'API

### Experiències

- `GET /api/experiencias` - Retorna un llistat de totes les experiències culturals.
- `POST /api/experiencias` - Crea una nova experiència (Requereix JSON amb `nombre`, `descripcion`, `precio`).

### Productes

- `GET /api/productes` - Retorna un llistat de tots els productes culturals i artesania.
- `POST /api/productes` - Crea un nou producte (Requereix JSON amb `nombre`, `descripcion`, `precio`, `categoria`).

## Docker

El projecte inclou un `Dockerfile` i `docker-compose.yml` per aixecar l'entorn local (incloent MongoDB) amb:

```
docker-compose up --build
```
