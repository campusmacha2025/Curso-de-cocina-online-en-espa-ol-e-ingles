const cursos = [
  { nombre: "Cocina italiana desde cero", duracion: "6 semanas", precio: 49.99 },
  { nombre: "Pastelería profesional", duracion: "8 semanas", precio: 59.99 },
  { nombre: "Cocina vegana práctica", duracion: "5 semanas", precio: 39.99 },
  { nombre: "Panadería artesanal", duracion: "6 semanas", precio: 44.99 },
  { nombre: "Sushi avanzado", duracion: "6 semanas", precio: 59.99 }
];

const cursosGrid = document.getElementById("cursos-grid") || document.querySelector("main");
const lang = localStorage.getItem('idioma') || 'es';
const textoBoton = lang === 'en' ? 'Add to cart' : 'Agregar al carrito';

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "border rounded-xl shadow p-4 m-4";
  div.innerHTML = `
    <img src="https://via.placeholder.com/300x200" alt="${curso.nombre}" class="rounded mb-2">
    <h3 class="text-lg font-semibold">${curso.nombre}</h3>
    <p class="text-sm">Duración: ${curso.duracion}</p>
    <p class="text-sm mb-2">Precio: €${curso.precio.toFixed(2)}</p>
    <button onclick="alert('Curso agregado al carrito: ${curso.nombre}')" class="bg-orange-500 text-white py-1 px-4 rounded hover:bg-orange-600">\${textoBoton}</button>
  `;
  cursosGrid.appendChild(div);
});
