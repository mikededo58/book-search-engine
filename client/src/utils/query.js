import { gql } from "@apollo/client";

export const GET_ME = gql`
query GetMe {
  getMe {
    _id
    username
    email
    password
    bookCount
    savedBook {
      _id
      author
      description
      BookId
      image
      link
      title
    }
  }
}`