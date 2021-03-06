import gql from "graphql-tag";

const CHARACTER = gql`query characterById($id: ID!){
  character(id: $id) {
      id
      name
      image
      status
      species
      gender
      origin {
        id
        name
        type
        dimension
      }
      episode {
        id
        name
        air_date
        episode
      }
      location {
        name
        type
        dimension
        residents {
          id
          name
          image
        }
      }
   }
 }`
export default CHARACTER