const jsonData = [
    {
      "No": 1,
      "NIS": "30568",
      "Nama": "GEDE SURYA"
    },
    {
      "No": 2,
      "NIS": "30569",
      "Nama": "I GUSTI NGURAH AGUNG PUTRA SEDANA"
    },
    {
      "No": 3,
      "NIS": "30570",
      "Nama": "I KADEK AGUS DWIPAYANA"
    },
    {
      "No": 4,
      "NIS": "30572",
      "Nama": "I KADEK DODIX KARYANTHA"
    },
    {
      "No": 5,
      "NIS": "30573",
      "Nama": "I KADEK JONI ARTA"
    },
    {
      "No": 6,
      "NIS": "30574",
      "Nama": "I KADEK SUJANA PUTRA"
    },
    {
      "No": 7,
      "NIS": "30575",
      "Nama": "I KETUT ADI KURNIAWAN"
    },
    {
      "No": 8,
      "NIS": "30576",
      "Nama": "I KETUT CHANDRA WIRYAWAN"
    },
    {
      "No": 9,
      "NIS": "30577",
      "Nama": "I KETUT WAHYU MERTHA WIJAYA"
    },
    {
      "No": 10,
      "NIS": "30578",
      "Nama": "I KOMANG TEGUH UPADANA ARTA"
    },
    {
      "No": 11,
      "NIS": "30579",
      "Nama": "I MADE ADI ARIANA"
    },
    {
      "No": 12,
      "NIS": "30580",
      "Nama": "I MADE ANDRAWIJAYA"
    },
    {
      "No": 13,
      "NIS": "30581",
      "Nama": "I MADE DAVA ANGGARAVANKA"
    },
    {
      "No": 14,
      "NIS": "30582",
      "Nama": "I MADE PENDY WIGUNA"
    },
    {
      "No": 15,
      "NIS": "30583",
      "Nama": "I NYOMAN CIPTA SETIAJAYADI"
    },
    {
      "No": 16,
      "NIS": "30584",
      "Nama": "I PUTU ADITYASTHA DIVAYANA SUPUTRA"
    },
    {
      "No": 17,
      "NIS": "30585",
      "Nama": "I PUTU AGUS GALANG SATYA SADARMA"
    },
    {
      "No": 18,
      "NIS": "30586",
      "Nama": "I PUTU AGUS UGU JAWANTA"
    },
    {
      "No": 19,
      "NIS": "30587",
      "Nama": "I PUTU ARYA KHURNIAWAN"
    },
    {
      "No": 20,
      "NIS": "30588",
      "Nama": "I PUTU DEVA ADITYA PRATAMA"
    },
    {
      "No": 21,
      "NIS": "30589",
      "Nama": "I PUTU EKA BUDI ASTAWA"
    },
    {
      "No": 22,
      "NIS": "30590",
      "Nama": "I PUTU FARREL DEDIANA IKA PUTRA"
    },
    {
      "No": 23,
      "NIS": "30591",
      "Nama": "I PUTU MADHYASTHA BHASKARA YASA"
    },
    {
      "No": 24,
      "NIS": "30592",
      "Nama": "I PUTU WIDIARTANA"
    },
    {
      "No": 25,
      "NIS": "30593",
      "Nama": "I WAYAN ADIT KARYASA SAPUTRA"
    },
    {
      "No": 26,
      "NIS": "30594",
      "Nama": "I WAYAN PURNAYASA"
    },
    {
      "No": 27,
      "NIS": "30595",
      "Nama": "KOMANG WIJA ARSA"
    },
    {
      "No": 28,
      "NIS": "30597",
      "Nama": "SATRIA DARMA WIBAWA"
    }
  ];
  

// Create a table element
const table = document.createElement('table');

// Create table header row
const headerRow = document.createElement('tr');
for (const key in jsonData[0]) { // Access the first object's keys for header
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
}
table.appendChild(headerRow);

// Create table body rows
for (const data of jsonData) {
    const bodyRow = document.createElement('tr');
    for (const value of Object.values(data)) {
        const td = document.createElement('td');
        td.textContent = value;
        bodyRow.appendChild(td);
    }
    table.appendChild(bodyRow);
}

// Append the table to an HTML element (e.g., a div with id 'table-container')
const tableContainer = document.getElementById('table-container');
tableContainer.appendChild(table);