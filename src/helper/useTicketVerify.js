import React, { useEffect, useState } from "react"
import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

export default function useTicketVerify(key) {
  const [audienceCount, setAudienceCount] = useState(0)

  useEffect(() => {
    base("Teilnehmer 2022")
      .select({ view: "Grid", filterByFormula: `{ID} = "${key}"` })
      .eachPage((records, fetchNextPage) => {
        setAudienceCount(audienceCount => audienceCount + records.length)
        fetchNextPage()
      })
  }, [])

  return audienceCount
}
