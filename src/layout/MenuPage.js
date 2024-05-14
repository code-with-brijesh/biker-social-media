import React from "react"
import Navigation from "./Navigation"
import Rightbar from "../components/menu/Rightbar"
import { Card } from "semantic-ui-react"

export default class ProfileMenu extends React.Component {
  render() {
    return (
      <>
        <Navigation>
          <Card fluid>
            <Rightbar />
          </Card>
        </Navigation>
      </>
    )
  }
}
