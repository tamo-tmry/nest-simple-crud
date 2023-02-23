import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  const articles = [
    {
      title: 'article title1',
      context: 'article context1',
    },
    {
      title: 'article title2',
      context: 'article context2',
    },
    {
      title: 'article title3',
      context: 'article context3',
    },
  ];

  await Promise.all(
    articles.map((article) => {
      return prisma.article.create({
        data: {
          title: article.title,
          content: article.context,
        },
      });
    }),
  );
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
