import "./logo.css"
import { Link } from "react-router-dom"


export function Logo(){
  return(
    <Link to="/">
      <h1 className="logo">R<span className="logoText">Link's</span></h1>
    </Link>
  )
}