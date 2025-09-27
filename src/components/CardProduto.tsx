interface Produto {
  id: number;
  nome: string;
  categoria: string;
  imagemUrl: string;
  preco: number;
  precoPromocional?: number | null; 
  emEstoque: boolean;
}

export function CardProduto(props: { produto: Produto }) {
  const produto = props.produto;

  const classeCard = produto.emEstoque ? "card-produto" : "card-produto esgotado";

  return (
    <div className={classeCard}>

      {produto.precoPromocional ? (
        <span className="selo-promocao">Promoção!</span>
      ) : null}

      <img src={produto.imagemUrl} alt={produto.nome} />
      <p className="categoria">{produto.categoria}</p>
      <h2>{produto.nome}</h2>

      <div className="precos">
        {produto.precoPromocional ? (
          <>
            <span className="preco-antigo">R$ {produto.preco.toFixed(2)}</span>
            <span className="preco-novo">R$ {produto.precoPromocional.toFixed(2)}</span>
          </>
        ) : (
          <span className="preco-novo">R$ {produto.preco.toFixed(2)}</span>
        )}
      </div>

      <button disabled={!produto.emEstoque}>
        {produto.emEstoque ? "Adicionar ao Carrinho" : "Produto Esgotado"}
      </button>
    </div>
  );
}