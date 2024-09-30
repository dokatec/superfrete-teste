# Backend com Firebase

## Descrição

Criação de backend com firebase como servidor e dentro do firebase foram utilizados dois recursos, que são: Cloud Functions e Cloud Firestore, O projeto foi executado via emulador.

## Tecnologias Utilizadas

* **Backend:** [Node.js, Javascript]
* **Banco de dados:** [Cloud Firestore]
* **Outras:** [Cloud Functions]

## Pré-requisitos

* **Node.js:** [v18.20.4]
* **npm:** [10.7.0]
* **Firebase CLI:** [13.20.1]

## Instalação

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/dokatec/superfrete-teste.git

2. **Acessar a pasta do repositório via CLI:**
   ```bash
   cd superfrete-teste

3. **Acessar a pasta functions via CLI:**
   ```bash
   cd functions

4. **Instalar as dependências com npm via CLI:**
   ```bash
   npm install

5. **Iniciar a aplicação pelo emulador via CLI:**
   ```bash
   npm run serve

6. **Metodos HTTP utilizados:**
   ```bash
   GET - Obter todos os names com os campos (increment_id, name)
   POST - Cria novo name com auto incremento id sequencial sempre continuando para o proximo registro.

7. **Cadastrar registro via POST em JSON:**
   ```bash
    POST
   {
        "name":"Jhonatan Pacheco"
   }

    GET
   {   "increment_Id": 1,
		"name": "Jhonatan Pacheco"
   }

8. **Deploy para a Cloud Firestore via CLI:**
   ```bash
    npm run deploy


9. **Observações:**
   ```bash
    Ao executar o emulador vai ser informado quais emuladores iniciaram fornecendo o URL de acesso a Interface do    emulador fornecendo também as URL para gerenciar as functions dentro de alguma ferramenta como: Postman, Insomnia.

10. **Exemplos:**
   ```bash
    +  functions: Loaded functions definitions from source: addName, getNames, incrementDocumentID.

    +  functions[us-central1-addName]: http function initialized (http://127.0.0.1:5001/superfrete-teste-5661c/us-central1/addName).

    +  functions[us-central1-getNames]: http function initialized (http://127.0.0.1:5001/superfrete-teste-5661c/us-central1/getNames).

    ┌───────────┬────────────────┬─────────────────────────────────┐
    │ Emulator  │ Host:Port      │ View in Emulator UI             │
    ├───────────┼────────────────┼─────────────────────────────────┤
    │ Functions │ 127.0.0.1:5001 │ http://127.0.0.1:4000/functions │
    ├───────────┼────────────────┼─────────────────────────────────┤
    │ Firestore │ 127.0.0.1:8080 │ http://127.0.0.1:4000/firestore │
    └───────────┴────────────────┴─────────────────────────────────┘