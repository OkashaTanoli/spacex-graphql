import { gql } from "@apollo/client";

export const IndLaunch = gql`
query LaunchInfo($id: ID!) {
  launch(id: $id) {
    id
    details
    links {
      wikipedia
      video_link
      flickr_images
    }
    launch_year
    launch_success
    mission_name
  }
}
`