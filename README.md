# Decodificador de Texto

![Logo](assets/logo.png)

## Descrição

O **Decodificador de Texto** é uma aplicação web que criptografa e descriptografa mensagens de forma simples, utilizando regras específicas para a substituição de vogais. Ideal para a troca de mensagens secretas entre usuários que conheçam as regras da criptografia utilizada.

## Funcionalidades

- **Criptografar Texto**: Converte as vogais da mensagem para uma sequência específica de letras.
- **Descriptografar Texto**: Converte a mensagem criptografada de volta para seu texto original.
- **Copiar para Área de Transferência**: Permite copiar o texto criptografado ou descriptografado para a área de transferência com um clique.

## Regras de Criptografia

- A letra "e" é convertida para "enter".
- A letra "i" é convertida para "imes".
- A letra "a" é convertida para "ai".
- A letra "o" é convertida para "ober".
- A letra "u" é convertida para "ufat".



## Como Utilizar

1. **Digite** sua mensagem no campo de texto na seção esquerda da tela.
2. **Escolha** entre criptografar ou descriptografar clicando no botão correspondente.
3. A mensagem processada será exibida na seção direita da tela.
4. **Clique em "Copiar"** para copiar o texto resultante para a área de transferência.

## Estrutura do Projeto

```plaintext
|-- assets
|   |-- logo.svg
|   |-- personagem.svg
|-- screenshots
|   |-- tela-inicial.png
|   |-- mensagem-criptografada.png
|-- index.html
|-- styles.css
|-- scripts.js
|-- README.md
assets/: Contém imagens e ícones utilizados na aplicação.
screenshots/: Capturas de tela do projeto para o README.
index.html: Estrutura HTML principal.
styles.css: Estilos CSS para a aplicação.
scripts.js: Lógica JavaScript para criptografia, descriptografia, e cópia do texto.
Instalação e Execução
Clone este repositório:

git clone https://github.com/seu-usuario/decodificador-de-texto.git
Navegue até o diretório do projeto:


cd decodificador-de-texto
Abra o arquivo index.html no seu navegador:


open index.html

Tecnologias Utilizadas
HTML5
CSS3
JavaScript ES6
Contribuição
Contribuições são bem-vindas! Por favor, envie um Pull Request ou abra uma Issue para sugerir melhorias ou relatar problemas.

Licença
Este projeto está licenciado sob a Licença MIT.

Feito com ❤️ por Luiz Henrique Caldas.
