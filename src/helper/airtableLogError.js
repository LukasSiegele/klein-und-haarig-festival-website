import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

const table = base("errorLog2020");

export default async (ticketID, data, email) =>{

            table
            .create([
                {
                    fields: {
                        ticketID: ticketID,
                        data: data,
                        email:email
                    }
                }
            ])
            .then(()=>console.log('error was logged'))
}

