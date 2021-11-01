import gql from "graphql-tag";

const CHARACTERS = gql`query charactersByPage($page: Int!){
  characters(page: $page) {
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
export default CHARACTERS