const jsonData = [
    {
        "No": 1,
        "NIS": "30535",
        "Nama": "ADITIYA ANUGRAH NOVIANTO"
    },
    {
        "No": 2,
        "NIS": "30536",
        "Nama": "AHMAT DWI SAPUTRA"
    },
    {
        "No": 3,
        "NIS": "30537",
        "Nama": "ANAK AGUNG PUTU PUTRA KARTIKA"
    },
    {
        "No": 4,
        "NIS": "30538",
        "Nama": "ANDREARTHA FAKHROJA PRAWIRA"
    },
    {
        "No": 5,
        "NIS": "30539",
        "Nama": "ARYA PUTRA BIMA"
    },
    {
        "No": 6,
        "NIS": "30540",
        "Nama": "DEWA GEDE INDRA ARDITYA"
    },
    {
        "No": 7,
        "NIS": "30542",
        "Nama": "I GEDE AGUS KANDEL PRADITA"
    },
    {
        "No": 8,
        "NIS": "30543",
        "Nama": "I GUSTI NGURAH ANOM SUBAWA"
    },
    {
        "No": 9,
        "NIS": "30545",
        "Nama": "I KETUT ARIYOGA PUTRA DINATHA"
    },
    {
        "No": 10,
        "NIS": "30546",
        "Nama": "I KETUT BUDIARTHA"
    },
    {
        "No": 11,
        "NIS": "30547",
        "Nama": "I KETUT PUTRA WIBAWA"
    },
    {
        "No": 12,
        "NIS": "30548",
        "Nama": "I MADE ADITYA SUMANATHA"
    },
    {
        "No": 13,
        "NIS": "30549",
        "Nama": "I MADE ROBY ANTARA"
    },
    {
        "No": 14,
        "NIS": "30550",
        "Nama": "I MADE SUKADANA"
    },
    {
        "No": 15,
        "NIS": "30551",
        "Nama": "I NYOMAN ARYA HARI SEDANA"
    },
    {
        "No": 16,
        "NIS": "30552",
        "Nama": "I NYOMAN WIDIA WIGUNA"
    },
    {
        "No": 17,
        "NIS": "30553",
        "Nama": "I PUTU AGUS ADITYA"
    },
    {
        "No": 18,
        "NIS": "30554",
        "Nama": "I PUTU GEDE JAYA NEGARA"
    },
    {
        "No": 19,
        "NIS": "30555",
        "Nama": "I PUTU NOVAN ARI WISNAWA"
    },
    {
        "No": 20,
        "NIS": "30556",
        "Nama": "I PUTU SUASTIKA"
    },
    {
        "No": 21,
        "NIS": "30557",
        "Nama": "I WAYAN TRESNA SUMAWALIKA"
    },
    {
        "No": 22,
        "NIS": "30558",
        "Nama": "KOMANG SUTA DIATMIKA"
    },
    {
        "No": 23,
        "NIS": "30559",
        "Nama": "MUHAMMAD RIZKY PERMANA DIARTO"
    },
    {
        "No": 24,
        "NIS": "30560",
        "Nama": "PUTU ADITYA PRATAMA"
    },
    {
        "No": 25,
        "NIS": "30561",
        "Nama": "PUTU KEVIN ARYA PERDANA"
    },
    {
        "No": 26,
        "NIS": "30562",
        "Nama": "RASYID FADHILLAH PUTRA HERMAWAN"
    },
    {
        "No": 27,
        "NIS": "30563",
        "Nama": "RIZKY ADITIA"
    },
    {
        "No": 28,
        "NIS": "30564",
        "Nama": "SENDY PUTRA LAKSANA"
    },
    {
        "No": 29,
        "NIS": "30565",
        "Nama": "SHEEHAN JUANANDA PUTRA WIJAYA"
    },
    {
        "No": 30,
        "NIS": "30566",
        "Nama": "SUBHAN ADI SAPUTRA"
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