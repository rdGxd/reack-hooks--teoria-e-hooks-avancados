# useReducer()

O `useReducer` é um hook do React que ajuda a gerenciar o estado complexo em componentes de uma
forma organizada, especialmente quando esse estado envolve múltiplas ações e transições.

Imagine um estado que precisa passar por várias transformações diferentes em resposta a ações do
usuário ou eventos. Em vez de usar `useState` separado para cada caso, o `useReducer` permite criar
uma única função que lida com todas as mudanças de estado com base em ações específicas.

Aqui está uma explicação simplificada do `useReducer`:

1- **Definição do Reducer**: Você começa definindo uma função chamada "reducer" que descreve como o
estado deve ser atualizado em resposta a diferentes ações. O reducer recebe o estado atual e uma
ação como argumentos, e retorna o novo estado.

```js
function meuReducer(state, action) {
  switch (action.type) {
    case 'AÇÃO_1':
      return { ...state, payload: action.novoValor };
    case 'AÇÃO_2':
      return { ...state, payload: action.outroNovoValor };
    // Outros casos aqui...
    default:
      return state;
  }
}
```

2- **Inicialização do State**: Em seguida, você inicializa o estado e o dispatch (função para
despachar ações) usando o `useReducer`.

```js
const [state, dispatch] = useReducer(meuReducer, estadoInicial);
```

3- **Despachando Ações**: Para atualizar o estado, você "despacha" ações usando a função `dispatch`.
Cada ação é um objeto que inclui um tipo (por convenção, uma string) e, opcionalmente, dados
relacionados à ação.

```js
dispatch({ type: 'AÇÃO_1', payload: 42 });
dispatch({ type: 'AÇÃO_2', payload: 'algum texto' });
```

4- **O Reducer Responde**: O reducer é chamado automaticamente com o estado atual e a ação
despachada. Com base no tipo da ação, o reducer retorna o novo estado.

5- **Atualização do Componente**: O estado é atualizado automaticamente, e o componente é
re-renderizado com o novo estado, refletindo as mudanças causadas pelas ações.

O `useReducer` é particularmente útil quando você tem estados complexos que evoluem com base em
várias ações ou quando precisa manter um histórico de ações passadas. Isso torna o código mais
previsível, mais fácil de entender e mais escalável à medida que seu aplicativo cresce.
