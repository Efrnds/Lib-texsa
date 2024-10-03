# Lib-Texsa

## Descrição

`Lib-Texsa` é uma biblioteca de componentes React estilizados com TailwindCSS. Esses componentes foram criados para serem reutilizáveis em qualquer projeto React que esteja configurado com TailwindCSS.

## Instalação

Siga os passos abaixo para configurar e usar a biblioteca no seu projeto.

### 1. Instale a biblioteca

Primeiro, instale a biblioteca via `npm`:

```bash
npm install my-react-library
```

### 2. Configure o TailwindCSS

Se o TailwindCSS ainda não estiver configurado no seu projeto, siga os passos abaixo:

-Instale o TailwindCSS e suas dependências:


```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init
```
-Configure o arquivo tailwind.config.js:

No arquivo tailwind.config.js, adicione o caminho da biblioteca para garantir que as classes de Tailwind dentro dos componentes sejam processadas corretamente:
```javascript
//tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/my-react-library/dist/**/*.{js,jsx}'  // Adiciona a biblioteca aqui
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
-Implemente o CSS do Tailwind no seu projeto:
No arquivo CSS principal do seu projeto (por exemplo, src/index.css), adicione as diretivas do Tailwind:

```css
//index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Como Usar os Componentes

Após a configuração do TailwindCSS, você pode começar a usar os componentes da biblioteca no seu projeto.

Exemplo de uso:

```javascript
//App.jsx

import React from 'react';
import { MeuComponente } from 'my-react-library';

function App() {
  return (
    <div>
      <MeuComponente />
    </div>
  );
}

export default App;
```
### 4. Personalização

Como o TailwindCSS está configurado no seu projeto, você pode personalizar os estilos dos componentes diretamente no seu arquivo tailwind.config.js, adicionando cores, fontes ou espaçamentos personalizados.
```javascript
//tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
    },
  },
  plugins: [],
}
```
### 5. Contribuição

Se você deseja contribuir para o desenvolvimento desta biblioteca, siga as etapas abaixo:

- Faça o fork do repositório.
- Crie uma nova branch: git checkout -b minha-nova-feature.
- Faça suas alterações e commit: git commit -m 'Adiciona nova feature'.
- Envie as mudanças: git push origin minha-nova-feature.
- Abra um Pull Request para revisão.

### 6. FAQ

*O que acontece se eu não configurar o Tailwind no meu projeto?*
-Os componentes não terão o estilo correto e você verá apenas o HTML básico. Para garantir que os estilos funcionem como esperado, certifique-se de seguir a seção de configuração do TailwindCSS.

*Preciso ter Tailwind configurado no meu projeto?*
-Sim, esta biblioteca depende do TailwindCSS para aplicar os estilos aos componentes. Por isso, o Tailwind deve estar configurado corretamente no seu projeto.

### Explicação das Seções do `README.md`:

1. **Descrição**: Uma breve descrição sobre o que a biblioteca faz e como ela foi construída (com React e TailwindCSS).
2. **Instalação**: Instruções detalhadas de como instalar a biblioteca e configurar o TailwindCSS, caso o cliente ainda não tenha feito isso.
3. **Uso dos Componentes**: Um exemplo simples de como importar e usar os componentes da sua biblioteca no projeto do cliente.
4. **Personalização**: Explica como o Tailwind pode ser customizado diretamente no projeto do cliente.
5. **Contribuindo**: Instruções para desenvolvedores que desejam colaborar com o projeto.
6. **FAQ**: Seção de perguntas frequentes para ajudar usuários com problemas comuns.
