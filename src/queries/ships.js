import { gql } from "@apollo/client";

export const GET_SHIPS = gql`

  query Ships {
    ships {
      id, name
    }
  }

`