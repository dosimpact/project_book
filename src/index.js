const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @findMany
 */
const TDD01 = async () => {
  const allBookInfo = await prisma.bookInfo.findMany();
  console.log(allBookInfo);
};

/**
 * @create
 */
const TDD02 = async () => {
  const bookInfo = await prisma.bookInfo.create({
    data: {
      ISBN: 1236,
      publisher: "dosimpact",
      title: "prisma1 world",
      author: "doyoung",
      published: `2020-05-17T00:00:00.000Z`,
    },
  });
  console.log(bookInfo);
};
/**
 * @findMaynWithRelation
 */
const TDD03 = async () => {
  const allBook = await prisma.book.findMany({
    include: { BookInfo: true },
  });
  console.dir(allBook, { depth: null });
};
const TDD04 = async () => {
  const res = await prisma.bookType.create({
    data: {
      Type: "freedocs",
      BookInfo: {
        connect: {
          ISBN: 1234,
        },
      },
    },
  });
  console.dir(res, { depth: null });
};
const TDD05 = async () => {
  const allBook = await prisma.book.findMany({
    include: { BookInfo: true },
  });
  console.dir(allBook, { depth: null });
  const type = await prisma.bookType.findOne({
    where: { id: allBook[0].BookInfo.BookType },
  });
  console.log(type);
};

async function main() {
  try {
    await TDD01();
  } catch (error) {
    throw error;
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
