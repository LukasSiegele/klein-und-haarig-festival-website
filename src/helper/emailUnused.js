import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

export default (email) => {
  console.log("emailUnused entered")
  return new Promise((resolve) => {
    let results = []
    base("Teilnehmer 2022")
      .select({ view: "Master", filterByFormula: `{Email} = "${email}"` })
      .eachPage((records, fetchNextPage) => {
        //setAudienceCount(audienceCount => audienceCount + records.length)
        console.log(records)
        results.push(records)
        fetchNextPage()
        console.log(results[0].length)
        if(results[0].length > 0){
          resolve(false)
        }
        else{
          resolve(true)
        }
      })
    
  })
}
