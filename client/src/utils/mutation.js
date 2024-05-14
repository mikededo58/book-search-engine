import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $username: String!, $password: String!) {
    addUser(email: $email, username: $username, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation Mutation($newBook: InputBook) {
    saveBook(newBook: $newBook) {
      _id
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
      username
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation Mutation($bookId: String!) {
    deleteBook(bookId: $bookId) {
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
  }
`;
