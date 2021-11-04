import gql from "graphql-tag";

const EPISODES = gql(`query episodes($ids: [ID!]!){
    episodesByIds(ids: $ids) {
        id
        name
        air_date
        episode  
    }
}`)

export default EPISODES