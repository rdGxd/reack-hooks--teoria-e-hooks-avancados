# useEffect() - é um gancho React que permite sincronizar um componente com um sistema externo.

o `useEffect` é uma função usada para realizar ações secundárias em resposta a mudanças em um
componente ou quando algo acontece no ciclo de vida do componente. Aqui está como funciona:

`Declaração do useEffect`: Você usa o `useEffect`em um componente funcional do React para realizar
ações quando algo específico acontece. Para fazer isso, você passa duas coisas para o`useEffect`:
uma função e um array de dependências (ou nada, se você quiser que o efeito seja executado toda vez
que o componente for renderizado).

```js
useEffect(() => {
  // Código a ser executado quando ocorrer algum evento
}, [dependencia1, dependencia2]);
```

`Ação a ser Realizada`: Dentro da função do `useEffect`, você coloca o código que deseja executar
quando a ação ocorre. Por exemplo, você pode querer buscar dados de um servidor, atualizar o DOM, ou
realizar qualquer ação assíncrona.

`Dependências`: O array de dependências é uma lista das variáveis ou valores que o `useEffect` deve
observar. Se algum desses valores mudar, o código dentro do `useEffect` será executado novamente. Se
você não fornecer um array de dependências, o `useEffect` será executado sempre que o componente for
renderizado.

Aqui estão alguns exemplos de como o `useEffect` pode ser usado:

`Efeito Sem Dependências:` Se você passar um array vazio como dependência, o `useEffect` será
executado uma vez, logo após o componente ser montado. Isso é útil para realizar tarefas de
inicialização.

```js
useEffect(() => {
  // Código a ser executado após a montagem do componente
}, []);
```

`Efeito com Dependências:` Se você passar variáveis no array de dependências, o `useEffect` será
executado toda vez que uma dessas variáveis mudar. Isso é útil para reagir a mudanças específicas.

```js
useEffect(() => {
  // Código a ser executado quando dependencia1 ou dependencia2 mudarem
}, [dependencia1, dependencia2]);
```

O `useEffect` é uma ferramenta poderosa para controlar ações secundárias em componentes do React e
garantir que seu aplicativo responda às mudanças de maneira apropriada.

Antes do React Hooks, o gerenciamento do ciclo de vida do componente era feito usando componentes de
classe, e havia vários métodos do ciclo de vida, como `componentDidMount`, `componentDidUpdate` e
`componentWillUnmount`. Agora, com os React Hooks, você pode usar o `useEffect` para replicar o
comportamento desses métodos em componentes funcionais. Vou explicar como você pode usar o
`useEffect` para emular os ciclos de vida do componente:

1- `componentDidMount`: Este método era chamado quando um componente de classe era montado no DOM.
Você pode replicar esse comportamento usando o `useEffect` com um array de dependência vazio. O
código dentro do `useEffect` será executado após o primeiro render.

```js
useEffect(() => {
  // Código a ser executado após a montagem do componente (equivalente ao componentDidMount) -> executa 1x
}, []);
```

2- `componentDidUpdate`: Esse método era chamado sempre que as props ou o estado do componente de
classe eram atualizados. Você pode replicar esse comportamento usando o `useEffect` com uma lista de
dependências que inclui as variáveis que você deseja observar.

```js
useEffect(() => {
  // Código a ser executado após cada atualização do componente (equivalente ao componentDidUpdate)
}, [dependencia1, dependencia2]);
```

3- `componentWillUnmount`:Este método era chamado quando um componente de classe estava prestes a
ser desmontado do DOM. Você pode replicar esse comportamento usando o `useEffect` para realizar a
limpeza ou remoção de event listeners antes que o componente seja desmontado.

```js
useEffect(() => {
  // Código a ser executado antes da desmontagem do componente (equivalente ao componentWillUnmount)
  return () => {
    // Limpeza ou remoção de event listeners
  };
}, []);
```

Lembre-se de que o `useEffect` é flexível e pode ser usado para emular outros aspectos dos ciclos de
vida do componente. Ele oferece a capacidade de realizar ações secundárias em resposta a mudanças no
componente ou no ambiente, tornando-o uma alternativa poderosa aos componentes de classe para o
gerenciamento de efeitos e ciclos de vida em componentes funcionais no React.
