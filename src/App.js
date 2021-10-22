import './App.css';

function App() {
  return (
    <div className="App" >
    <div class="container">
        <div class="row">
            <main id="items" class="col-sm-8 row"></main>
            <aside class="col-sm-4">
                <h2>Carrito</h2>
                <ul id="carrito" class="list-group"></ul>
                <p class="text-right">Total: <span id="total"></span>&dollar;</p>
                <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
                <button id="boton-comprar" class="btn btn-danger">Comprar</button>
            </aside>
        </div>
    </div>
    </div>
  );
}

export default App;
