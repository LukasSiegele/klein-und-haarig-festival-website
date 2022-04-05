import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

export default async (ticketID) => {

  return new Promise((resolve) => {
    let results = []
    base("Teilnehmer 2022")
      .select({ view: "Master", filterByFormula: `{TicketID} = "${ticketID}"` })
      .eachPage((records, fetchNextPage) => {
        //setAudienceCount(audienceCount => audienceCount + records.length)
        console.log(records)
        results.push(records)
        fetchNextPage()
        console.log(results[0].length)
        const res1 = results[0]
        if(results[0].length === 1){
          resolve(res1[0]);
        }
        else{
          resolve(false)
        }
      })
    
  })
}
