# Estudos React

## useState():

O `useState` é uma função em JavaScript, geralmente usada em bibliotecas como o React, que permite criar e gerenciar variáveis que podem mudar ao longo do tempo em um programa. Isso é útil quando você deseja armazenar e atualizar informações que podem ser exibidas em uma página da web, por exemplo.

Imagine que você está criando uma página da web para contar o número de cliques em um botão. Para fazer isso, você pode usar o `useState`. Aqui está como funciona:

Você declara uma variável usando o useState e inicializa com um valor, por exemplo, zero:

```js
const [contador, setContador] = useState(0);
```

Neste exemplo, contador é a variável que irá armazenar o número de cliques, e setContador é uma função que você usa para atualizar o valor dessa variável.

Quando alguém clica no botão, você chama `setContador` para aumentar o valor do `contador`:

```js
<button onClick={() => setContador(contador + 1)}>Clique aqui</button>
```

Isso significa que cada vez que o botão é clicado, a função setContador é chamada para aumentar o valor do `contador` em 1.

Agora, o `contador` armazena o número de cliques e pode ser usado em seu aplicativo para exibir essa informação, por exemplo, em um elemento de texto:

```js
<p>O número de cliques é: {contador}</p>
```

Assim, o `useState` permite que você crie uma variável que pode ser atualizada dinamicamente à medida que o usuário interage com sua aplicação, tornando-o uma ferramenta fundamental para o desenvolvimento de interfaces interativas em JavaScript.

---

## `useEffect`()

o `useEffect` é uma função usada para realizar ações secundárias em resposta a mudanças em um componente ou quando algo acontece no ciclo de vida do componente. Aqui está como funciona:

`Declaração do `useEffect``: Você usa o `useEffect` em um componente funcional do React para realizar ações quando algo específico acontece. Para fazer isso, você passa duas coisas para o `useEffect`: uma função e um array de dependências (ou nada, se você quiser que o efeito seja executado toda vez que o componente for renderizado).

```js
useEffect(() => {
  // Código a ser executado quando ocorrer algum evento
}, [dependencia1, dependencia2]);
```

`Ação a ser Realizada`: Dentro da função do `useEffect`, você coloca o código que deseja executar quando a ação ocorre. Por exemplo, você pode querer buscar dados de um servidor, atualizar o DOM, ou realizar qualquer ação assíncrona.

`Dependências`: O array de dependências é uma lista das variáveis ou valores que o `useEffect` deve observar. Se algum desses valores mudar, o código dentro do `useEffect` será executado novamente. Se você não fornecer um array de dependências, o `useEffect` será executado sempre que o componente for renderizado.

Aqui estão alguns exemplos de como o `useEffect` pode ser usado:

`Efeito Sem Dependências:` Se você passar um array vazio como dependência, o `useEffect` será executado uma vez, logo após o componente ser montado. Isso é útil para realizar tarefas de inicialização.

```js
useEffect(() => {
  // Código a ser executado após a montagem do componente
}, []);
```

`Efeito com Dependências:` Se você passar variáveis no array de dependências, o `useEffect` será executado toda vez que uma dessas variáveis mudar. Isso é útil para reagir a mudanças específicas.

```js
useEffect(() => {
  // Código a ser executado quando dependencia1 ou dependencia2 mudarem
}, [dependencia1, dependencia2]);
```

O `useEffect` é uma ferramenta poderosa para controlar ações secundárias em componentes do React e garantir que seu aplicativo responda às mudanças de maneira apropriada.

Antes do React Hooks, o gerenciamento do ciclo de vida do componente era feito usando componentes de classe, e havia vários métodos do ciclo de vida, como `componentDidMount`, `componentDidUpdate` e `componentWillUnmount`. Agora, com os React Hooks, você pode usar o `useEffect` para replicar o comportamento desses métodos em componentes funcionais. Vou explicar como você pode usar o `useEffect` para emular os ciclos de vida do componente:

1- `componentDidMount`: Este método era chamado quando um componente de classe era montado no DOM. Você pode replicar esse comportamento usando o `useEffect` com um array de dependência vazio. O código dentro do `useEffect` será executado após o primeiro render.

```js
useEffect(() => {
  // Código só sera excetuado 1x
  console.log("componentDidMount");
});
```

2- `componentDidUpdate`: Esse método era chamado sempre que as props ou o estado do componente de classe eram atualizados. Você pode replicar esse comportamento usando o `useEffect` com uma lista de dependências que inclui as variáveis que você deseja observar.

```js
useEffect(() => {
  // Código a ser executado após cada atualização do componente (equivalente ao componentDidUpdate)
  console.log("componentDidUpdate");
}, [dependencia1, dependencia2]);
```

3- `componentWillUnmount`:Este método era chamado quando um componente de classe estava prestes a ser desmontado do DOM. Você pode replicar esse comportamento usando o `useEffect` para realizar a limpeza ou remoção de event listeners antes que o componente seja desmontado.

```js
useEffect(() => {
  // Código a ser executado antes da desmontagem do componente (equivalente ao componentWillUnmount)
  document.querySelector("h1").addEventListener("click", eventFn);
  console.log("componentWillUnmount");

  return () => {
    // Limpeza ou remoção de event listeners
    document.querySelector("h1")?.removeEventListener("click", eventFn);
    console.log("componentWillUnmount");
  };
}, []);
```

Lembre-se de que o `useEffect` é flexível e pode ser usado para emular outros aspectos dos ciclos de vida do componente. Ele oferece a capacidade de realizar ações secundárias em resposta a mudanças no componente ou no ambiente, tornando-o uma alternativa poderosa aos componentes de classe para o gerenciamento de efeitos e ciclos de vida em componentes funcionais no React.
