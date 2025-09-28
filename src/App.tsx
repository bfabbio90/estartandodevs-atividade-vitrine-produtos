import { useState } from "react";
import { CardProduto } from "./components/CardProduto";
import { produtos } from "./dados_produtos";
import './App.css';

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
  const [ordenarPorPreco, setOrdenarPorPreco] = useState(false);

  let produtosFiltrados = categoriaSelecionada
    ? produtos.filter((p) => p.categoria === categoriaSelecionada)
    : [...produtos]; 

  if (ordenarPorPreco) {
    produtosFiltrados.sort((a, b) => (a.precoPromocional ?? a.preco) - (b.precoPromocional ?? b.preco));
  }

 const categorias = Array.from(new Set(produtos.map((p) => p.categoria)));

  return (
    <div className="app">
      <header>
        <h1>Minha Loja</h1>
      </header>

      <div className="filtros">
        <button onClick={() => setCategoriaSelecionada(null)}>Todas</button>
        {categorias.map((categoria) => (
          <button key={categoria} onClick={() => setCategoriaSelecionada(categoria)}>
            {categoria}
          </button>
        ))}
        <button onClick={() => setOrdenarPorPreco(!ordenarPorPreco)}>
          {ordenarPorPreco ? "Ordem Normal" : "Ordenar por Preço"}
        </button>
      </div>

      <main className="vitrine">
        {produtosFiltrados.map((item) => (
          <CardProduto key={item.id} {...item} />
        ))}
      </main>
    </div>
  );
}

export default App;
