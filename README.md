# Estudos React

## useState() - é um gancho React que permite adicionar uma variável de estado ao componente

O `useState` é uma função em JavaScript, geralmente usada em bibliotecas como o React, que permite
criar e gerenciar variáveis que podem mudar ao longo do tempo em um programa. Isso é útil quando
você deseja armazenar e atualizar informações que podem ser exibidas em uma página da web, por
exemplo.

Imagine que você está criando uma página da web para contar o número de cliques em um botão. Para
fazer isso, você pode usar o `useState`. Aqui está como funciona:

Você declara uma variável usando o useState e inicializa com um valor, por exemplo, zero:

```js
const [contador, setContador] = useState(0);
```

Neste exemplo, contador é a variável que irá armazenar o número de cliques, e setContador é uma
função que você usa para atualizar o valor dessa variável.

Quando alguém clica no botão, você chama `setContador` para aumentar o valor do `contador`:

```js
<button onClick={() => setContador(contador + 1)}>Clique aqui</button>
```

Isso significa que cada vez que o botão é clicado, a função setContador é chamada para aumentar o
valor do `contador` em 1.

Agora, o `contador` armazena o número de cliques e pode ser usado em seu aplicativo para exibir essa
informação, por exemplo, em um elemento de texto:

```js
<p>O número de cliques é: {contador}</p>
```

Assim, o `useState` permite que você crie uma variável que pode ser atualizada dinamicamente à
medida que o usuário interage com sua aplicação, tornando-o uma ferramenta fundamental para o
desenvolvimento de interfaces interativas em JavaScript.

---

## useEffect() - é um gancho React que permite sincronizar um componente com um sistema externo.

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

---

## useCallback() - é um gancho React que permite armazenar em cache uma definição de função entre re-renderizações.

O `useCallback` é um dos Hooks do React que é usado para otimizar o desempenho de um componente,
principalmente quando se lida com funções que são passadas como propriedades para componentes
filhos. Ele permite que você "memoize" (guarde em cache) funções, de modo que elas não sejam
recriadas em cada renderização do componente, a menos que suas dependências mudem.

Aqui está como o `useCallback` funciona e quando é útil:

1- **Criação de Funções Memorizadas**: Você usa o `useCallback` para criar uma versão memorizada de
uma função. A função que você passa para o `useCallback` será guardada em cache e reutilizada, a
menos que as dependências especificadas mudem.

```js
const memorizedFunction = useCallback(() => {
  // Código da função
}, [dependencia1, dependencia2]);
```

2- **Dependências**: O segundo argumento do `useCallback` é uma matriz de dependências. Se alguma
das dependências listadas nessa matriz mudar entre as renderizações, a função será recriada. Se as
dependências não mudarem, a mesma função memorizada será reutilizada.

Por exemplo, se você tem uma função que depende de uma variável `count`, você pode usar o
`useCallback` para evitar que a função seja recriada a cada renderização do componente:

```js
const increment = useCallback(() => {
  setCount(count + 1);
}, [count]);
```

```js
// useCallback vai renderizar a função sempre que a dependência mudar
const incrementCounter = useCallback((num) => {
  // Usando o valor antigo do counter dessa maneira eu não preciso colocar dependências
  setCounter((prevCounter) => prevCounter + num);
}, []);
```

3- **Uso comum**: O `useCallback` é frequentemente utilizado quando você passa funções como
propriedades para componentes filhos. Isso evita que essas funções sejam recriadas
desnecessariamente, o que pode economizar recursos de computação.

```js
<ChildComponent onClick={memorizedFunction} />
```

O uso do `useCallback` é especialmente útil em combinação com o `useMemo` e o memo (para evitar
re-renderizações de componentes). Ele ajuda a otimizar o desempenho de componentes, reduzindo a
criação desnecessária de funções e re-renderizações não essenciais. No entanto, é importante usá-lo
com parcimônia, pois, em alguns casos, o excesso de uso do `useCallback` pode tornar o código mais
complexo do que o necessário. Portanto, use-o quando for realmente necessário para otimização.

---

## useMemo() - é um gancho React que permite armazenar em cache o resultado de um cálculo entre re-renderizações.

O `useMemo` é outro dos Hooks do React e é usado para memorizar (cache) o resultado de uma função de
cálculo complexo, de modo que o cálculo só seja realizado quando as dependências especificadas
mudam. Isso é particularmente útil para otimizar o desempenho de um componente, evitando cálculos
repetidos e desnecessários.

Aqui está como o `useMemo` funciona e quando é útil:

1- **Criação de Valores Memorizados**: Você usa o `useMemo` para criar um valor memorizado. Esse
valor é calculado pela função que você passa para o `useMemo`.

```js
const memorizedValue = useMemo(() => {
  // Cálculos complexos
  return resultado;
}, [dependencia1, dependencia2]);
```

2- **Dependências**: O segundo argumento do `useMemo` é uma matriz de dependências. O valor
memorizado será recalculado apenas quando alguma das dependências listadas nessa matriz mudar entre
as renderizações. Se as dependências permanecerem inalteradas, o valor memorizado será reutilizado.

Por exemplo, se você tem um componente que exibe o resultado de um cálculo baseado em variáveis `a`
e `b`, você pode usar o `useMemo` para evitar que o cálculo seja repetido a cada renderização:

```js
const resultado = useMemo(() => {
  return calcularResultado(a, b);
}, [a, b]);
```

3- **Uso Comum**: O `useMemo` é frequentemente usado quando você tem operações computacionais caras,
como cálculos matemáticos complexos ou transformações de dados, que não precisam ser refeitos a cada
renderização, a menos que as dependências mudem.

```js
const dadosTransformados = useMemo(() => {
  // Transformação de dados complexa
  return transformarDados(dados, opcoes);
}, [dados, opcoes]);
```

O `useMemo` ajuda a otimizar o desempenho do componente, evitando a recálculo de valores que não
mudaram entre renderizações. No entanto, é importante usá-lo com moderação, uma vez que a
memorização de valores pode consumir mais memória, especialmente quando se lida com muitos valores
memorizados em um componente. Portanto, use o `useMemo` apenas quando houver cálculos significativos
e caros que possam ser evitados.

---

## useRef() - é um gancho React que permite referenciar um valor que não é necessário para renderização.

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

---

## useContext() / createContext()

`useContext` é um hook do React que permite o compartilhamento de dados e informações entre
componentes, sem a necessidade de passar props manualmente de componente para componente. Ele é
especialmente útil quando você deseja disponibilizar informações ou funcionalidades globais para
vários componentes em sua aplicação, como temas, autenticação, preferências do usuário e muito mais.

Aqui está uma explicação simplificada do `useContext`:

1 - **Criando um contexto**: Você começa criando um contexto que atuará como um recipiente para os
dados que deseja compartilhar.

```js
const MeuContexto = React.createContext();
```

2 - **Provedor de contexto**: Em um componente pai ou de nível superior da sua aplicação, você
envolve os componentes que precisam acessar os dados desse contexto com um componente
`<MeuContexto.Provider>`.

```js
<MeuContexto.Provider value={dadosCompartilhados}>
  {/* Componentes que podem acessar dadosCompartilhados */}
</MeuContexto.Provider>
```

3 - **Consumindo o contexto**: Nos componentes filhos, você pode acessar os dados do contexto usando
o hook `useContext`. Isso permite que esses componentes acessem os dados compartilhados sem a
necessidade de passar props.

```js
const dados = useContext(MeuContexto);
```

Isso simplifica o acesso a dados e funcionalidades globais em sua aplicação, tornando o código mais
limpo e fácil de manter. `useContext` é especialmente útil para evitar a chamada de múltiplos níveis
de componentes para passar dados de cima para baixo (props drilling).

Por exemplo, você pode usar `useContext` para compartilhar informações como o tema atual da sua
aplicação ou o estado de autenticação entre vários componentes sem precisar passar essas informações
manualmente como props em todos os lugares onde elas são necessárias.
