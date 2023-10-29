# useState() - é um gancho React que permite adicionar uma variável de estado ao componente

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
