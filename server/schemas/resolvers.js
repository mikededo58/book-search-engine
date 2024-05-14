const { deleteBook } = require("../controllers/user-controller");
const { User, Book } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getMe: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("You need to be logged in!");
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
    saveBook: async (parent, { newBook }) => {
      if (context.user) {
        throw AuthenticationError;
      }
      const updatedBookList = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBook: newBook } },
        { new: true }
      );
      return updatedBookList;
    },
    deleteBook: async (parent, { bookId }) => {
      if (context.user) {
        throw AuthenticationError;
      }
      const updatedBookList = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBook: { bookId } } },
        { new: true }
      );
      return updatedBookList;
    },
  },
};
module.exports = resolvers;
