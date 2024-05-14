import { useLazyQuery } from "@apollo/client"
import React, { useState, useContext} from "react"
import { FETCH_XML_URLS } from "../../common/gql_api_def"
import { Link } from "react-router-dom"
import { Dimmer, Loader } from "semantic-ui-react"
import { AuthContext } from "../../context/auth"

function Adminbar() {
  const [completedFlag, setCompletedFlag] = useState(false)
  const { user } = useContext(AuthContext)
  const isAdmin = user && user.admin

  const [getXMLFile, { data }] = useLazyQuery(FETCH_XML_URLS, {
    fetchPolicy:"no-cache",
    onCompleted: () => {
      setCompletedFlag(false)
    }
  })
  const createXml = () => {
    getXMLFile();
    setCompletedFlag(true)
  }
  return (
    <>
      <div className="ui secondary menu">
        <Link to="/admin/upload" className="item" >Bike Upload</Link>
        <Link to="/admin/sponsor" className="item" >Sponsor</Link>
        <Link to="/admin/contest" className="item" >Contest</Link>
      {isAdmin  && 
        <a  className="item" onClick={(e) => createXml()} >Generate Site Map</a>
      }
      </div>
      {completedFlag ? <Dimmer active><Loader /></Dimmer> : ""}
    </>
  )
}
export default Adminbar
