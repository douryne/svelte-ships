import { gql } from "@apollo/client";

export const GET_SHIPS = gql`

  query Ships($offset: Int, $limit: Int) {
    ships(offset: $offset, limit: $limit) {
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

`

export const GET_SHIPS_COUNT = gql`

  query ShipsCount {
    shipsResult {
      result {
        totalCount
      }
    }
  }

`