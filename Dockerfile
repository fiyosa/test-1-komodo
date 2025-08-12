# Gunakan image Node.js resmi
FROM node:22-alpine

# Tentukan direktori kerja
WORKDIR /app

# Salin seluruh file
COPY package.json .

RUN npm install

# Salin seluruh file
COPY . .

# Jalankan aplikasi
CMD ["npm", "start"]