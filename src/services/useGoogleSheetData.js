import { useEffect, useState } from "react";

const useGoogleSheetData = (tabName, range) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sheetID = import.meta.env.VITE_GOOGLE_SHEET_ID;
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${tabName}!${range}?key=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(result => {
        if (result.values && result.values.length > 1) {
          const headers = result.values[0];
          const rows = result.values.slice(1); // 👈 Get all rows after headers

          const formattedData = rows.map(row => {
            const rowData = {};
            headers.forEach((header, i) => {
              rowData[header.toUpperCase()] = row[i] || "";
            });
            return rowData;
          });

          setData(formattedData);
        } else {
          setError("No data found.");
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError("Error fetching data.");
      });
  }, [tabName, range]);

  return { data, error };
};

export default useGoogleSheetData;
