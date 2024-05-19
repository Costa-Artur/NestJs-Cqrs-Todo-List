import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const task1 = await prisma.task.upsert({
        where: {id: 1},
        update: {},
        create: {
            description: "Task teste",
        },
    });

    const task2 = await prisma.task.upsert({
        where: {id: 2},
        update: {},
        create: {
            description: "Task teste 2",
            completed: true
        },
    });

    console.log(task1, task2);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });