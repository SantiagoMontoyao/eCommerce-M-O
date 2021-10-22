import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const baseDeDatos = [
  {
      id: 1,
      nombre: 'Living Things',
      precio: 2500,
      imagen: 'linkin_living_things.jpg'
  },
  {
      id: 2,
      nombre: 'Doom Days',
      precio: 1500,
      imagen: 'bastille_doom_days.png'
  },
  {
      id: 3,
      nombre: 'I Trust',
      precio: 1400,
      imagen: 'gidle_i_trust.jpg'
  },
  {
      id: 4,
      nombre: 'Rivival',
      precio: 1200,
      imagen: 'eminem_revival.jpg'
  },
  {
      id: 5,
      nombre: 'Evolve',
      precio: 1650,
      imagen: 'imagine_evolve.jpg'
  },
  {
      id: 6,
      nombre: 'Tim',
      precio: 1350,
      imagen: 'avicii_tim.png'
  }];

  function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = info.precio + '$';
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Agregar al Carrito';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
