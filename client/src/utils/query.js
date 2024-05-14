import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getMe {
    getMe {
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