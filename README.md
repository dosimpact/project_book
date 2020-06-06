# prisma2 client 만들기

# Process

```js

npm install @prisma/cli --save-dev
npx prisma init

---

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

---


DATABASE_URL="mysql://root:dosimpact@localhost:7002/mydb"

---

npx prisma introspect


---
npm install @prisma/client
npx prisma generate

```
