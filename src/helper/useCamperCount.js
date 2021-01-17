import React, { useEffect, useState } from "react"
import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.GATSBY_APP_AIRTABLE_API_KEY,
}).base("appM9sxaMNG520zPv")

export default function useCamperCount() {
  const [camperCount, setCamperCount] = useState(0)

  useEffect(() => {
    base("Teilnehmer 2021")
      .select({ view: "Grid" })
      .eachPage((records, fetchNextPage) => {
        records.map(items => {
          if (items.fields.Camper === "ja") {
            setCamperCount(camperCount => camperCount + 1)
          }
        })
        fetchNextPage()
      })
  }, [])

  return camperCount
}
