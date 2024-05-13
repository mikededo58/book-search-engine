import { gql } from "@apollo/client";

export const GET_ME = gql`
  query User {
    User {
      _id
      username
      email
      bookCount
      savedbook {
        title
        authors
        description
        bookId
        image
        link
      }
    }
  }
`;