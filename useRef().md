# useRef() - é um gancho React que permite referenciar um valor que não é necessário para renderização.

O `useRef` é como uma etiqueta que você coloca em um elemento HTML ou em uma variável para que você
possa se referir a esse elemento ou variável de forma persistente ao longo do ciclo de vida do seu
componente, mesmo quando ele é re-renderizado.

Você usa o `useRef` para criar uma referência a um elemento ou variável que precisa ser acessada de
forma consistente.

Por exemplo, para criar uma referência a um elemento HTML:

```js
const meuElementoRef = useRef();
```

- Você pode associar essa referência a um elemento no JSX usando a propriedade `ref`:

```js
<button ref={meuElementoRef}>Clique aqui</button>
```

- Depois de criar a referência, você pode acessar o elemento diretamente através de
  `meuElementoRef.current`. Você pode fazer isso para interagir com o elemento, alterar seu
  conteúdo, aplicar estilos, adicionar ou remover classes, etc. Para criar uma referência a uma
  variável, você pode fazer o seguinte:

```js
const minhaVariavelRef = useRef(valorInicial);
```

- A referência `minhaVariavelRef` agora possui uma propriedade `.current` que você pode usar para
  acessar e atualizar o valor da variável.

Em resumo, o `useRef` é uma ferramenta útil para criar referências persistentes a elementos HTML e
variáveis em componentes do React. Isso é útil quando você precisa acessar ou modificar esses
elementos ou variáveis, especialmente em casos em que o controle direto é necessário, como
interações com o DOM ou animações. Use o `useRef` em vez de `document.querySelector` no React
