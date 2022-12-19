// import Airtable from "airtable"

// const base = new Airtable({
//   apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
// }).base(process.env.GATSBY_AIRTABLE_BASE)

// const table = base("errorLog2020");

// export default async (ticketID, data, email) =>{

//     if(typeof data === 'object'){
//         data = JSON.stringify(data);
//     }else if(Array.isArray(data)){
//         data = String(data)
//     }
//             table
//             .create([
//                 {
//                     fields: {
//                         ticketID: ticketID,
//                         data: String(data),
//                         email:email
//                     }
//                 }
//             ])
//             .then(()=>console.log('error was logged'))
// }
