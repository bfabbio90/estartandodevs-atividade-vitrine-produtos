# Minha Loja React

Este é um projeto simples de uma **vitrine de produtos** desenvolvido com **React + TypeScript + Vite**.  
O objetivo é praticar componentes, props, renderização de listas, lógica condicional, filtro e ordenação de produtos.

---

## 🛠 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- CSS puro

---

## 💡 Funcionalidades

1. **Exibição de produtos**
   - Cada produto é exibido em um card (`CardProduto`) mostrando:
     - Imagem
     - Nome
     - Categoria
     - Preço
     - Promoção (se houver)
     - Botão de compra com estado “Produto Esgotado” se fora de estoque

2. **Renderização dinâmica**
   - A lista de produtos é renderizada a partir de um array usando `.map()`.
   - Cada item recebe uma prop `key` para otimização do React.

3. **Lógica de promoção**
   - Produtos com `precoPromocional` exibem:
     - Selo “Promoção!”
     - Preço antigo riscado
     - Preço novo destacado

4. **Lógica de estoque**
   - Produtos fora de estoque adicionam a classe `.esgotado`.
   - Botão de compra fica desabilitado e mostra “Produto Esgotado”.

5. **Filtro por categoria**
   - Botões de categoria permitem filtrar os produtos exibidos na vitrine.
   - Botão “Todas” exibe todos os produtos.

6. **Ordenação de preços**
   - Botão “Ordenar por Preço” organiza os produtos do mais barato para o mais caro.
   - Clicando novamente, retorna à ordem original.

---

## 📂 Estrutura do Projeto
```
src/
┃ ┣ components/
┃ ┗ CardProduto.tsx
┣ dados_produtos.ts
┣ App.tsx
┣ App.css
┗ main.tsx
```


- **CardProduto.tsx** – Componente funcional que exibe os detalhes de cada produto.
- **dados_produtos.ts** – Array de produtos com informações como nome, categoria, preço, promoção e estoque.
- **App.tsx** – Componente principal que renderiza a vitrine, filtros e ordenação.
- **App.css** – Estilização dos cards, vitrine e botões.
- **main.tsx** – Ponto de entrada do React com Vite.

---

## 🚀 Como Executar o Projeto

1. **Instale as dependências:**

```bash
npm install
```

1. **Execute o projeto:**
```bash
npm run dev
```