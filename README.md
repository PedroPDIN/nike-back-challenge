# Desafio Back-End

Este projeto é a parte back-end de do desafio full-stack, desenvolvido com AdonisJS. Ele fornece as APIs que alimentam o front-end com dados de produtos e informações relacionadas.

## Tecnologias Utilizadas

* [AdonisJs](https://docs.adonisjs.com/guides/preface/introduction)
* [Typescript](https://www.typescriptlang.org/docs/)
* [CORS](https://docs.adonisjs.com/guides/security/cors)

# Instalação

1. Clone o repositório:

~~~
git clone git@github.com:PedroPDIN/nike-back-challenge.git
~~~

2. Navegue até o diretório do projeto:

~~~
cd nike-back-challenge
~~~

3. Instale as dependências:

~~~
npm install
~~~

4. Para rodar o servidor localmente em modo de desenvolvimento:

~~~
npm run dev
~~~
O servidor estará rodando em http://localhost:3333.

# Database

* Os dados são consumidos no arquivo `data.json`, portanto, o arquivo que encontra no `app/models/products_model.ts`, simula um consumo de banco de dados através do arquivo `data.json`.

# Endpoints

1. Lista de Produtos:

    * Método: `GET`.
    * Rota: `/products`.
    * Descrição: Retorna todos os produtos.
    * Exemplo de resposta:
      ~~~json
      [
	      {
	      	"id": 1,
	      	"name": "Camiseta do Brasil",
	      	"image_url": "https://imgnike-a.akamaihd.net/1300x1300/0228340L.jpg",
	      	"type": "Camiseta",
	      	"price": 349.99,
	      	"seller": "Nike",
	      	"available_sizes": [
	      		"P",
	      		"M",
	      		"G",
	      		"GG"
	      	],
	      	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	      	"sport": "Futebol"
	      },

          ...
      ]
      ~~~

2. Busca por produto pelo `id`:

    * Método: `GET`.
    * Rota: `/products/:id'`.
    * Descrição: Retorna apenas um produto pelo `id` fornecido.
    * Exemplo de resposta:
      ~~~json
	      {
	        "id": 4,
	        "name": "Calção da Nike",
	        "image_url": "https://static.netshoes.com.br/produtos/calcao-nike-dri-fit-academy-masculino/26/HZM-0829-326/HZM-0829-326_zoom1.jpg?ts=1660657811",
	        "type": "Calção",
	        "price": 109.69,
	        "seller": "Nike",
	        "available_sizes": [],
	        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	        "sport": "Corrida"
        }
      ~~~

3. Lista todos tamanhos de roupa dos produtos disponíveis:
    * Método: `GET`.
    * Rota: `/products/clothing-size'`.
    * Descrição: Retorna todos os tamanhos de roupas disponíveis.
    * Exemplo de resposta:
      ~~~json
      ["P", "M", "G", "XPP"]
      ~~~

4. Lista todos tamanhos de calçados dos produtos disponíveis:
    * Método: `GET`.
    * Rota: `/products/shoe-size'`.
    * Descrição: Retorna todos os tamanhos de calçados disponíveis.
    * Exemplo de resposta:
      ~~~json
      ["44", "39"]
      ~~~

---
