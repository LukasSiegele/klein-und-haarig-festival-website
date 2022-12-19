// import React, { useEffect, useState } from "react"
// import Airtable from "airtable"
// import addToMailchimp from "gatsby-plugin-mailchimp"

// const base = new Airtable({
//   apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
// }).base(process.env.GATSBY_AIRTABLE_BASE)

// export const getTicketID = async orderID => {
//   return new Promise((resolve, reject) => {
//     let results = []
//     base("Teilnehmer 2022")
//       .select({ view: "Master", filterByFormula: `{OrderID} = "${orderID}"` })
//       .eachPage((records, fetchNextPage) => {
//         //setAudienceCount(audienceCount => audienceCount + records.length)
//         console.log(records)
//         results.push(records)
//         fetchNextPage()
//         console.log(results.length)
//         if(results.length > 1){reject('More than one ticket found', results)}
//     else{
//       const res1 = results[0];
//       const res2 = res1[0];
//       resolve(res2.id)
//     }
//       })

//   })
// }
