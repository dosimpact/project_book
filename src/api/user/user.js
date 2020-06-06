import { prisma } from "../../schema";

export default {
  Query: {
    allUser: async () => {
      const users = await prisma.user.findMany();
      console.log(users);
      return users;
    },
  },
};
