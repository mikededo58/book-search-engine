const typeDefs = `
type Book {
    _id: ID
    author: String
    description: String
    BookId: String
    image: String
    link: String
    title: String
}

Type User {
    _id: ID
    username: String
    email: String 
    password: String
}

type Query {
user(_id: String): User
}

type Mutation{
addUser(username: String!, email: String!, password: String!): Auth
login(email: String!, password: String!): Auth
saveBook(userId: ID, bookId: ID!): Book
deleteBook: Book
}
`;
module.exports = typeDefs;
