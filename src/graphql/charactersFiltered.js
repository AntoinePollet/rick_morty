import gql from "graphql-tag";

const CHARACTERS_FILTERED = gql`query charactersByPage($filter: FilterCharacter!, $page: Int!){
  characters(filter: $filter, page: $page) {
    info {
      pages
      count
      next
      prev
    },
    results {
      id
      name
      image
      status
      species
      origin {
        id
        name
        dimension
      }
    }
   }
  }`
export default CHARACTERS_FILTERED