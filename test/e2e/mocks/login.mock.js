exports.postLogin = {
	request: {
		path: 'http://plurieducacional.com.br/homologacao/pluriidapi/webservice.php',
		method: 'POST'
	},
	response: {
		data: {
      "operacao": "008",
      "sucesso": true,
      "informacoesUsuario": {
          "nome": "aluno_1",
          "login": "aluno_1@plurieducacional.com.br",
          "email": "aluno_1@plurieducacional.com.br",
          "situacao": "1",
          "pluriID": "2874-f36391c703ffbb0f21736ca129b1be59",
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyODc0LWYzNjM5MWM3MDNmZmJiMGYyMTczNmNhMTI5YjFiZTU5IiwiaXNzIjoiaHR0cDpcL1wvd3d3LnBsdXJpZWR1Y2FjaW9uYWwuY29tLmJyIiwiYXVkIjoiaHR0cDpcL1wvd3d3LnBsdXJpZWR1Y2FjaW9uYWwuY29tLmJyIiwiZXhwIjoxNDk4NzU5MjY4fQ.F5e_CtgdkdY3lLkq7kUPJHINA9IB_pNHz5X5IImtyMs",
          "dadosComplementares": {
              "endereco": {
                  "cep": "50860260",
                  "logradouro": "Rua Ernesto Nazareth",
                  "numero": null,
                  "complemento": null,
                  "bairro": "Areias",
                  "cidade": "Recife",
                  "uf": "PE"
              },
              "telefones": [{
                  "codigoArea": "81",
                  "numero": "34473333",
                  "tipo": "C"
              }]
          }
      },
      "informacoesSistemas": [{
          "codigoDaFonte": "4084",
          "nomeDaFonte": "ESCOLA DEMONSTRA\u00c7\u00c3O PLURI",
          "tipoUsuario": "Aluno",
          "sistemas": [{
              "chaveSistema": "1b6453892473a467d07372d45eb05abc2031647a",
              "nomeSistema": "Sem Chamada",
              "rotinas": [{
                  "id": "197",
                  "descricao": "Acesso"
              }, {
                  "id": "206",
                  "descricao": "Configura\u00e7\u00f5es do Sistema"
              }, {
                  "id": "208",
                  "descricao": "Acesso ao dashboard do Aluno"
              }, {
                  "id": "209",
                  "descricao": "Participa\u00e7\u00e3o do Simulado"
              }],
              "parametros": []
          }, {
              "chaveSistema": "ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4",
              "nomeSistema": "Corrige a\u00ed",
              "rotinas": [{
                  "id": "196",
                  "descricao": "Acesso"
              }],
              "parametros": []
          }]
      }]
    }
	}
};
