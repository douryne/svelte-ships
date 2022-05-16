import { gql } from "@apollo/client";

export const GET_SHIPS = gql`

  query Ships($offset: Int, $limit: Int) {
    shipsResult(offset: $offset, limit: $limit) {
      result {
        totalCount
      }
      data {
        id,
        name,
        image,
        weight_kg,
        speed_kn,
        model,
        status,
        successful_landings,
        year_built
      }
    }
  }

`