# useContext() / createContext()

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
