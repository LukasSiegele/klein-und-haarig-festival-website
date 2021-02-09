import React, { useEffect, useState } from "react"
import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
}).base(process.env.GATSBY_AIRTABLE_BASE)

export default function useAutoCount() {
  const [autoCount, setAutoCount] = useState(0)

  useEffect(() => {
    base("Teilnehmer 2021")
      .select({ view: "Grid" })
      .eachPage((records, fetchNextPage) => {
        records.map(items => {
          if (items.fields.Auto === "Ja") {
            setAutoCount(autoCount => autoCount + 1)
          }
        })
        fetchNextPage()
      })
  }, [])

  // Auto Limit
  const maxAutos = 56
  const [autoParkplatz, setAutoParkplatz] = useState(false)

  useEffect(() => {
    // Check for Max. Autos
    if (autoCount >= maxAutos) {
      setAutoParkplatz(true)
    } else {
      setAutoParkplatz(false)
    }
  }, [autoCount])

  return autoParkplatz
}
