import React, { useEffect, useState } from "react"
import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

export async function getTicketID(orderID) {
  let results = [];

    base("Teilnehmer 2022")
      .select({ view: "Master", filterByFormula: `{OrderID} = "${orderID}"` })
      .eachPage((records, fetchNextPage) => {
        //setAudienceCount(audienceCount => audienceCount + records.length)
        console.log(records);
        results.push(records);
        fetchNextPage()
      })
  
      
  return results
}
