# useMemo() - é um gancho React que permite armazenar em cache o resultado de um cálculo entre re-renderizações.

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
