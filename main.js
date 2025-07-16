
// El contenido original se mantiene hasta la parte del array "cursos"

const cursosGrid = document.getElementById("cursos-grid");
const lang = localStorage.getItem('idioma') || 'es';
const textoBoton = lang === 'en' ? 'Add to cart' : 'Agregar al carrito';

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "border rounded-xl shadow p-4";
  div.innerHTML = `
    <img src="https://via.placeholder.com/300x200" alt="${curso.nombre}" class="rounded mb-2">
    <h3 class="text-lg font-semibold">${curso.nombre}</h3>
    <p class="text-sm">Duración: ${curso.duracion}</p>
    <p class="text-sm mb-2">Precio: €${curso.precio.toFixed(2)}</p>
    <button onclick="addToCart('${curso.nombre}', ${curso.precio})" class="bg-orange-500 text-white py-1 px-4 rounded hover:bg-orange-600">\${textoBoton}</button>
  `;
  cursosGrid.appendChild(div);
});

// Agregar artículo SEO al final del contenido principal

const textoSeo = {
  es: `...`, // abreviado para simplificar
  en: `...`
};

const main = document.querySelector('main');
const article = document.createElement('article');
article.className = "max-w-3xl mx-auto my-10 p-6 bg-white border rounded-xl shadow";
article.innerHTML = textoSeo[lang] || textoSeo["es"];
main.appendChild(article);
