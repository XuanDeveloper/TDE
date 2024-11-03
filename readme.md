# Weather App

Uma aplicação mobile desenvolvida com React Native e Expo para visualização de condições climáticas ao redor do mundo.


## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)

## 💻 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- Um editor de código como [VSCode](https://code.visualstudio.com/)

## 🎯 Começando

```bash
# Clone este repositório
$ git clone https://github.com/seu-usuario/weather-app.git

# Acesse a pasta do projeto
$ cd weather-app

# Instale as dependências
$ npm install
# ou
$ yarn install

# Instale as dependências específicas de navegação
$ npx expo install @react-navigation/native @react-navigation/native-stack
$ npx expo install react-native-screens react-native-safe-area-context

# Instale as dependências de ícones
$ npx expo install react-native-feather

# Inicie o projeto
$ npx expo start
```

## 📱 Rodando no Emulador/Dispositivo

Após iniciar o projeto com `npx expo start`, você terá algumas opções:

- Pressione `a` para abrir no emulador Android
- Pressione `i` para abrir no emulador iOS (apenas macOS)
- Escaneie o QR code com o aplicativo Expo Go no seu dispositivo físico

## 📋 Estrutura do Projeto

```
weather-app/
├── App.tsx
├── babel.config.js
├── package.json
├── tsconfig.json
├── src/
│   ├── screens/
│   │   ├── IntroScreen.tsx
│   │   └── WeatherScreen.tsx
│   ├── components/
│   │   └── CityCard.tsx
│   └── styles/
│       └── theme.ts
└── assets/
    └── fonts/
        └── Roboto/
```

## 🛠️ Configurações Adicionais

### Fonte Roboto

Para adicionar a fonte Roboto ao projeto:

1. Crie uma pasta `assets/fonts` na raiz do projeto
2. Adicione os arquivos da fonte Roboto nesta pasta
3. Crie ou modifique o arquivo `app.json`:

```json
{
  "expo": {
    "fonts": {
      "Roboto": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf")
    }
  }
}
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Feito por [Seu Nome](https://github.com/seu-usuario)

## ✨ Agradecimentos

- [Expo Team](https://expo.dev/)
- [React Native Community](https://reactnative.dev/community/overview)
