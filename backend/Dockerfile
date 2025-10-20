FROM node:18-alpine

# Cria o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependência primeiro para otimizar cache
COPY package*.json ./

# Instala dependências
RUN npm install --production

# Copia todo o restante da aplicação
COPY . .

# Define o comando para rodar o servidor
CMD ["node", "src/server.js"]
