const { deleteBook } = require("../controllers/user-controller");
const { User, Book } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, {userId, bookId}) => {
        if (context.user) {
            throw AuthenticationError;
          }
          return User.findOneandUpdate(
            {_id: userId},
            {$addtoSet: {book: bookId}},
            {new: true}
          )
    },
    deleteBook:async (parent, {userId, bookId}) => {
        if (context.user) {
            throw AuthenticationError;
          }
          return User.findOneandUpdate(
            {_id: userId},
            {$pull: {book: bookId}},
            {new: true}
          )
    },
}
};
module.exports = resolvers;
