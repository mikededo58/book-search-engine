const typeDefs = `
type Book {
    _id: ID!
    author: String
    description: String
    BookId: String
    image: String
    link: String
    title: String
}

type User {
    _id: ID!
    username: String
    email: String 
    password: String
    savedBook: [Book]
    bookCount: Int
}

input InputBook {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    forSale: String
    link: String
  }

type Auth {
    token: ID!
    user: User
  }

type Query {
user(_id: String): User
}

type Mutation{
addUser(username: String!, email: String!, password: String!): Auth
login(email: String!, password: String!): Auth
saveBook(newBook: InputBook): User
deleteBook(bookId: String!): User
}
`;
module.exports = typeDefs;
