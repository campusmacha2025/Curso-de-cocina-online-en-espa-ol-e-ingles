const cursos = [
  {
    nombre: "Curso de Cocina #1",
    duracion: "4 semanas",
    precio: 49.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=0"
  },
  {
    nombre: "Curso de Cocina #2",
    duracion: "5 semanas",
    precio: 51.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=1"
  },
  {
    nombre: "Curso de Cocina #3",
    duracion: "6 semanas",
    precio: 53.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=2"
  },
  {
    nombre: "Curso de Cocina #4",
    duracion: "4 semanas",
    precio: 55.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=3"
  },
  {
    nombre: "Curso de Cocina #5",
    duracion: "5 semanas",
    precio: 57.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=4"
  },
  {
    nombre: "Curso de Cocina #6",
    duracion: "6 semanas",
    precio: 59.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=5"
  },
  {
    nombre: "Curso de Cocina #7",
    duracion: "4 semanas",
    precio: 61.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=6"
  },
  {
    nombre: "Curso de Cocina #8",
    duracion: "5 semanas",
    precio: 63.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=7"
  },
  {
    nombre: "Curso de Cocina #9",
    duracion: "6 semanas",
    precio: 65.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=8"
  },
  {
    nombre: "Curso de Cocina #10",
    duracion: "4 semanas",
    precio: 67.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=9"
  },
  {
    nombre: "Curso de Cocina #11",
    duracion: "5 semanas",
    precio: 69.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=10"
  },
  {
    nombre: "Curso de Cocina #12",
    duracion: "6 semanas",
    precio: 71.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=11"
  },
  {
    nombre: "Curso de Cocina #13",
    duracion: "4 semanas",
    precio: 73.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=12"
  },
  {
    nombre: "Curso de Cocina #14",
    duracion: "5 semanas",
    precio: 75.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=13"
  },
  {
    nombre: "Curso de Cocina #15",
    duracion: "6 semanas",
    precio: 77.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=14"
  },
  {
    nombre: "Curso de Cocina #16",
    duracion: "4 semanas",
    precio: 79.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=15"
  },
  {
    nombre: "Curso de Cocina #17",
    duracion: "5 semanas",
    precio: 81.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=16"
  },
  {
    nombre: "Curso de Cocina #18",
    duracion: "6 semanas",
    precio: 83.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=17"
  },
  {
    nombre: "Curso de Cocina #19",
    duracion: "4 semanas",
    precio: 85.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=18"
  },
  {
    nombre: "Curso de Cocina #20",
    duracion: "5 semanas",
    precio: 87.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=19"
  },
  {
    nombre: "Curso de Cocina #21",
    duracion: "6 semanas",
    precio: 89.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=20"
  },
  {
    nombre: "Curso de Cocina #22",
    duracion: "4 semanas",
    precio: 91.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=21"
  },
  {
    nombre: "Curso de Cocina #23",
    duracion: "5 semanas",
    precio: 93.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=22"
  },
  {
    nombre: "Curso de Cocina #24",
    duracion: "6 semanas",
    precio: 95.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=23"
  },
  {
    nombre: "Curso de Cocina #25",
    duracion: "4 semanas",
    precio: 97.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=24"
  },
  {
    nombre: "Curso de Cocina #26",
    duracion: "5 semanas",
    precio: 99.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=25"
  },
  {
    nombre: "Curso de Cocina #27",
    duracion: "6 semanas",
    precio: 101.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=26"
  },
  {
    nombre: "Curso de Cocina #28",
    duracion: "4 semanas",
    precio: 103.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=27"
  },
  {
    nombre: "Curso de Cocina #29",
    duracion: "5 semanas",
    precio: 105.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=28"
  },
  {
    nombre: "Curso de Cocina #30",
    duracion: "6 semanas",
    precio: 107.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=29"
  },
  {
    nombre: "Curso de Cocina #31",
    duracion: "4 semanas",
    precio: 109.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=30"
  },
  {
    nombre: "Curso de Cocina #32",
    duracion: "5 semanas",
    precio: 111.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=31"
  },
  {
    nombre: "Curso de Cocina #33",
    duracion: "6 semanas",
    precio: 113.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=32"
  },
  {
    nombre: "Curso de Cocina #34",
    duracion: "4 semanas",
    precio: 115.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=33"
  },
  {
    nombre: "Curso de Cocina #35",
    duracion: "5 semanas",
    precio: 117.99,
    imagen: "https://images.unsplash.com/photo-1589308078050-aa0d04a6a928?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80&sig=34"
  },
];

const cursosGrid = document.getElementById("cursos-grid");
const textoBoton = "Comprar ahora";

cursos.forEach((curso, index) => {
  const div = document.createElement("div");
  div.className = "bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden";
  div.innerHTML = `
    <img src="${curso.imagen}" alt="${curso.nombre}" referrerpolicy="no-referrer" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-bold text-orange-600 mb-1">${curso.nombre}</h3>
      <p class="text-sm mb-1 text-gray-700">Duración: ${curso.duracion}</p>
      <p class="text-sm mb-3 text-gray-700">Precio: €${curso.precio}</p>
      <button onclick="iniciarPago(${index})" class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">${textoBoton}</button>
    </div>
  `;
  cursosGrid.appendChild(div);
});

function iniciarPago(index) {
  const curso = cursos[index];
  document.getElementById("paypal-container").classList.remove("hidden");
  document.getElementById("paypal-course-name").textContent = curso.nombre;
  document.getElementById("paypal-button-container").innerHTML = "";

  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: { value: curso.precio },
          payee: { email_address: "guner_charly@hotmail.com" }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('¡Gracias por tu compra, ' + details.payer.name.given_name + '!');
        cerrarPaypal();
      });
    }
  }).render('#paypal-button-container');
}

function cerrarPaypal() {
  document.getElementById("paypal-container").classList.add("hidden");
}
