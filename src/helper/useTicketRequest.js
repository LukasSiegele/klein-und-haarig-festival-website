import React, { useEffect, useState } from "react"
import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

export const getTicketID = async(orderID) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
  
  // return new Promise(resolve =>{  
  //   let results = [];
  //   base("Teilnehmer 2022")
  //   .select({ view: "Master", filterByFormula: `{OrderID} = "${orderID}"` })
  //   .eachPage((records, fetchNextPage) => {
  //     //setAudienceCount(audienceCount => audienceCount + records.length)
  //     console.log(records);
  //     results.push(records);
  //     fetchNextPage()
  //   }) 
  //   resolve(results);
  // })
}
