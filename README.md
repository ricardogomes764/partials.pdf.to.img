### Conversor de PDF para Imagens usando Express e Multer

Este é um exemplo de aplicativo Node.js que usa o Express e o Multer para converter um arquivo PDF em imagens. O aplicativo recebe um arquivo PDF via upload, converte cada página em uma imagem e salva as imagens no sistema de arquivos local.

## Pré-requisitos
- Node.js instalado em seu sistema.
- Conhecimento básico de Express e Multer.

## Instalação
1 - Clone este repositório ou crie um novo diretório para o seu projeto.
2 - Navegue até o diretório do projeto no terminal.
3 - Execute o seguinte comando para instalar as dependências:

```npm install express multer pdf-to-img ```

### Como funciona
1 - O aplicativo cria um servidor Express.
2 - Configura o Multer para usar MemoryStorage (armazenamento em memória) para o upload do arquivo.
3 - Define uma rota POST para receber o arquivo PDF.
4 - Usa a biblioteca pdf-to-img para converter o buffer do arquivo PDF em imagens.
5 - Salva as imagens no sistema de arquivos local com nomes como page1.png, page2.png, etc.
6 - Retorna uma mensagem de sucesso ao cliente.

### Uso
1 - Execute o aplicativo com o seguinte comando:
```node app.js```

Acesse http://localhost:3001 em seu navegador.
Faça o upload de um arquivo PDF.
Verifique o diretório do projeto para encontrar as imagens geradas.

### Observações
- O uso de MemoryStorage é adequado para arquivos pequenos, mas pode não ser ideal para arquivos grandes, pois consome mais memória.
- Personalize o código conforme suas necessidades específicas.