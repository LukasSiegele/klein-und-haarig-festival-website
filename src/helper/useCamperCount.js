import React, { useEffect, useState } from "react"
import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

export default function useCamperCount() {
  const [camperCount, setCamperCount] = useState(0)

  useEffect(() => {
    base("Teilnehmer 2022")
      .select({ view: "Master" })
      .eachPage((records, fetchNextPage) => {
        records.map(items => {
          if (items.fields.Camper === "Ja") {
            setCamperCount(camperCount => camperCount + 1)
          }
        })
        fetchNextPage()
      })
  }, [])

  // Camper Count
  const maxCampers = 4
  const [camperParkplatz, setCamperParkplatz] = useState(false)

  useEffect(() => {
    // Check for Max. Campers
    if (camperCount >= maxCampers) {
      setCamperParkplatz(true)
    } else {
      setCamperParkplatz(false)
    }
  }, [camperCount])

  return camperParkplatz
}
