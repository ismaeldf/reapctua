# Repactua API
Aplicação que armazena alterações realizadas em "planilhas" de repactuação, que são utilizadas para alteração dos valores em contratos regisdos pela Lei 8.666 de 1993. 
Desenvolvida em nos frameworks Ionic e Adonis.

## Requisitos

- Node.js >= 8.0.0
- npm >= 3.0.0
- Adonis >= 4
- Docker and Docker Compose

## Instalação de requisitos

## Node + npm

https://nodejs.org/en/download/

```
  sudo apt-get install -y nodejs
```

## Docker

https://docs.docker.com/compose/install/

## Adonis

```
  npm i -g @adonisjs/cli
```

## Instalando packages

```
npm install
```

## Criando .env file

```
cp .env.example .env
```

Para produção alterar as seguintes variáveis para:
HOST=0.0.0.0
NODE_ENV=production
APP_URL=http://0.0.0.0:3333

## Executando o docker

```
docker-compose up -d
```

## Executando o migration

```
adonis migration:run
```

## Executando a aplicação em desenvolvimento

```
adonis serve --dev
```

## Ou Executando a aplicação em produção via PM2

```
sudo npm install -g pm2 --watch

pm2 start server.js
```

# Repactua Frontend

## Requisitos

- npm 6.4.1
- ionic last version
- cordova last version

## Instalação de requisitos

## ionic + cordova

```
  npm install -g ionic cordova
```

## Instalando packages

```
npm install
```

## Executando a aplicação em desenvolvimento

```
ionic serve
```

## Executando a aplicação em produção

### Alterar url da API

Editar a variável baseUrl do arquivo /src/providers/api
