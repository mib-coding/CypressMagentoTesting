# Dockerfile
FROM cypress/included:9.5.0

WORKDIR /e2e
COPY . .

RUN npm install

CMD ["npx", "cypress", "run"]
