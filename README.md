## Installation

```bash
yarn
```

## Create DB

```bash
docker compose up -d
```

```bash
npx prisma migrate dev
```

- update 

```bash
npx prisma db push
```

## Running the app

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarnstart:prod
```

## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```
