import gql from "graphql-tag";

const EPISODES_COUNT = gql(`query episodesCount{
    episodes {
        info {
            count
        }
    }
}`)

export default EPISODES_COUNT