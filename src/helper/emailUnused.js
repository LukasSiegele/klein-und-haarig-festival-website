import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

export const emailUnused = async email => {
  return new Promise((resolve, reject) => {
    let results = []
    base("Teilnehmer 2022")
      .select({ view: "Master", filterByFormula: `{Email} = "${email}"` })
      .eachPage((records, fetchNextPage) => {
        //setAudienceCount(audienceCount => audienceCount + records.length)
        console.log(records)
        results.push(records)
        fetchNextPage()
        console.log(results.length)
        if(results.length > 0){reject(false)}
        else{
          resolve(true)
        }
      })
    
  })
}
