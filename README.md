## Kenzie Hub
Projeto realizado no quarto módulo do curso de **Formação em Desenvolvimento Full Stack da Kenzie Academy Brasil**

O objetivo desse projeto é desenvolver um CRUD de usuário, criando algumas regras de acesso.

Esse serviço possui uma API REST e um banco de dados volátil, ou seja, um array que é zerado toda vez que a aplicação reiniciar.

Rotas e suas funcionalidades:
- **POST /users**

Rota para criação de usuário com os seguintes dados:
1. name: string;
2. email: string;
3. password: uma string que armazena uma hash gerada com a biblioteca bcrypt;
4. isAdm: boolean;
5. createdOn: é gerado apenas no momento da validação dos dados ;
6. updatedOn: é gerado apenas no momento da validação dos dados, na qual o usuário é atualizado, e inicia com o valor de criação;
7. uuid: é gerado no momento da validação dos dados.

A rota de criação retorna todos os dados, com exceção da hash de senha.
Não é possível cadastrar dois usuário com o mesmo e-mail.

- **POST /login** 

Rota de login recebendo email e password. 
O login valida se o usuário existe e se a senha está correta. 

A rota de login retorna um token JWT válido por 24h caso todas as validações passem.

- **GET /users** 

A rota de listagem de usuários retorna todos os dados dos usuários, incluindo os hashs de senha. 
Está rota está protegida por um middleware de validação do token JWT e um middleware para checar se o usuário logado é um administrador. Ela só pode ser acessada por usuários que sejam administradores.

- **GET /users/profile** 

A rota de perfil retorna os dados do usuário logado. Ela está protegida por um middleware de validação do token JWT.

Os dados do usuário são obtidos a partir da decodificação do token JWT.

- **PATCH	/users/<uuid>** 

A rota de atualização de usuário é capaz de atualizar tanto um quanto todos os dados de um usuário. Está rota está protegida por um middleware de validação do token JWT e um middleware para checar se o usuário logado é um administrador. Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio perfil.

O campo isAdm não pode ser atualizado.
 
Essa rota retorna os dados atualizados do usuário.

- **DELETE /users/<uuid>** 

A rota de exclusão de usuário é capaz de excluir usuários. Está rota está protegida por um middleware de validação do token JWT e um middleware para checar se o usuário logado é um administrador. Apenas administradores podem excluir qualquer usuário, usuários não-administradores podem apenas excluir seu próprio usuário.

A rota de exclusão de usuário retorna um objeto com uma chave de nome "mensagem" com o valor "User deleted with success".
