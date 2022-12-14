import { gql } from "@apollo/client";

export const LaunchesQuery = gql`
query Launches{
    launches(limit:100) {
      mission_name
      launch_year
      id
    }

}
`