import React from "react"
import Navigation from "./Navigation"
import Leftbar from "../components/menu/Leftbar"
import { Card } from "semantic-ui-react"

export default class ProfileMenu extends React.Component {
  render() {
    return (
      <>
        <Navigation>
          <Card fluid>
            <Leftbar />
          </Card>
        </Navigation>
      </>
    )
  }
}
