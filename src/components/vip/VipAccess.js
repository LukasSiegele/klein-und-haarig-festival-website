
import React, { useEffect } from "react"


const VipAccessForm = () => {

    const onTokenSubmit = e => {
        e.preventDefault()
        console.log("submit");
    }
    

  return (

        <form onSubmit={onTokenSubmit}>
            <input></input>
            <button type="submit">submit</button>
        </form>
  )
}

export default VipAccessForm