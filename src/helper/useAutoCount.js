import React, { useEffect, useState } from "react"
import Airtable from "airtable"

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base("appM9sxaMNG520zPv")

export default function useAutoCount() {
  const [autoCount, setAutoCount] = useState(0)
  console.log("autos: " + autoCount)

  useEffect(() => {
    base("Teilnehmer 2021")
      .select({ view: "Grid" })
      .eachPage((records, fetchNextPage) => {
        records.map(items => {
          if (items.fields.Auto === "ja") {
            setAutoCount(autoCount => autoCount + 1)
          }
        })
        fetchNextPage()
      })
  }, [])

  return autoCount
}

// useLoadable(cursor)

// const base = useBase()
// const table = base.getTableByName("Forex Cards")
// const selectedRecord = useRecordById(table, cursor.selectedRecordIds[0] ?? "")
// useWatchable(cursor, "selectedRecordIds")
// const [cellValuesByFieldName, setCellValuesByFieldName] = useState({})

// useEffect(() => {
//   const newCellValuesByFieldName = {}
//   if (selectedRecord) {
//     for (const field of table.fields) {
//       newCellValuesByFieldName[field.name] = selectedRecord.getCellValue(field)
//     }
//   }
//   setCellValuesByFieldName(newCellValuesByFieldName)
// }, [selectedRecord, table.fields])
