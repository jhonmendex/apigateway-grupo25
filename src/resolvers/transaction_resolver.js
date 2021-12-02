const transactionResolver = {
  Query: {
    transactionByUsername: async (
      _,
      { username },
      { dataSources, userIdToken }
    ) => {
      usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
      if (username == usernameToken)
        return dataSources.accountAPI.transactionByUsername(username);
      else return null;
    },
  },
  Mutation: {
    createTransaction: async (_, { transaction }, { dataSources }) => {
      //usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
      return dataSources.accountAPI.createTransaction(transaction);
    },
  },
};

module.exports = transactionResolver;
