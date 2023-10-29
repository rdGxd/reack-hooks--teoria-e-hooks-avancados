# useCallback() - é um gancho React que permite armazenar em cache uma definição de função entre re-renderizações.

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
