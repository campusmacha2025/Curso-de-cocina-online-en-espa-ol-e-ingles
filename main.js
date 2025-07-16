
const cursos = Array.from({ length: 35 }, (_, i) => ({
  nombre: `Curso de Cocina #${i + 1}`,
  duracion: `${4 + (i % 5)} semanas`,
  precio: (29.99 + (i % 7) * 5).toFixed(2),
  imagen: `https://source.unsplash.com/600x400/?food,course,${i + 1}`
}));

const cursosGrid = document.getElementById("cursos-grid");
const textoBoton = "Comprar ahora";

cursos.forEach((curso, index) => {
  const div = document.createElement("div");
  div.className = "bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden";
  div.innerHTML = `
    <img src="${curso.imagen}" alt="${curso.nombre}" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-semibold text-orange-600 mb-1">${curso.nombre}</h3>
      <p class="text-sm text-gray-700">Duración: ${curso.duracion}</p>
      <p class="text-sm text-gray-700 mb-2">Precio: €${curso.precio}</p>
      <button onclick="iniciarPago(${index})" class="bg-orange-500 text-white py-1 px-4 rounded hover:bg-orange-600">${textoBoton}</button>
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
