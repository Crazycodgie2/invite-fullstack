import React from "react"
import { useExample } from "../hooks"

export default props => {
  const { person } = useExample()

  return (
    <div className="container">
      <img className="thumb" src={person.picture} />
      <p>
        Name: {person.fname} {person.lname}
      </p>
      <p>Phone: {person.phone} </p>
      <p>Email: {person.email}</p>
      <button className="notgoing">Not Going</button>
      <button className="going">Going</button>
    </div>
  )
}
