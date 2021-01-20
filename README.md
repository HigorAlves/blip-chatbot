# Take Blip

## Chatbot Developer Challenge

Você deverá construir um chatbot em nossa plataforma, para isso, você pode seguir esses passos:

- crie uma conta em nosso portal (https://bit.ly/3lYcJTf), depois crie um chatbot usando a opção "Criar do zero";

- crie uma API que faça integração com a API pública do GitHub com informações sobre os repositórios da Take no GitHub. Para criá-la, você pode usar C#, Java ou Javascript;

- agora que você tem a API criada, deverá utilizar esses dados para exibir um carrossel a partir de qualquer entrada do usuário com informações sobre os 5 repositórios de linguagem C# mais antigos da Take, ordenados de forma crescente por data de criação;

- a imagem de cada card do carrossel deve ser o avatar da Take no GitHub. O título de cada card deve ser o nome completo do repositório, e o subtítulo deve ser a descrição do repositório. Os cards não devem ter nenhum botão;

- o fluxo do bot precisa estar parecido com o que está no link:https://bit.ly/2uDaGhi;

- favor colocar no repositório o json do fluxo do bot para que o mesmo possa ser avaliado.

Seguem links que podem auxiliar em seu desafio:

- Fluxo do bot: https://bit.ly/3bxfe9F
- Documentação do BLiP com todos os tipos de card e exemplos: https://docs.blip.ai/
- Documentação de como criar um bot no Builder: https://bit.ly/37n4F5G
- Documentação da API do GitHub: https://developer.github.com/v3/

## To Run

To run this API just run `yarn start` or you can just use the Heroku endpoint `https://blip-test.herokuapp.com/github`.

**Bot File**: The Json bot file is named as `bot_json.json`.
