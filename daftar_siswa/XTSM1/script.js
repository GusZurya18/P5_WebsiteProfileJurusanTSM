const jsonData = [
    {
        "No": 1,
        "NIS": "32233",
        "Nama": "ADAM IRWANSYAH PUTRA WIDODO"
    },
    {
        "No": 2,
        "NIS": "32234",
        "Nama": "ANDIKA SURYA PRATAMA"
    },
    {
        "No": 3,
        "NIS": "32235",
        "Nama": "BAGAS FATIR PRATAMA"
    },
    {
        "No": 4,
        "NIS": "32236",
        "Nama": "DAVID CHRISTIAN LATIPRA"
    },
    {
        "No": 5,
        "NIS": "32237",
        "Nama": "FAHRI ADNAN SAPUTRA"
    },
    {
        "No": 6,
        "NIS": "32238",
        "Nama": "FERDY FIRMANSYAH"
    },
    {
        "No": 7,
        "NIS": "32239",
        "Nama": "I GEDE ALDI WIGUNA PUTRA"
    },
    {
        "No": 8,
        "NIS": "32240",
        "Nama": "I GEDE PEBRI PRADANA"
    },
    {
        "No": 9,
        "NIS": "32241",
        "Nama": "I KADEK ARI SETIAWAN"
    },
    {
        "No": 10,
        "NIS": "32242",
        "Nama": "I KADEK ARTHA WIGUNA"
    },
    {
        "No": 11,
        "NIS": "32243",
        "Nama": "I KADEK DANA SASTRA WIJAYA"
    },
    {
        "No": 12,
        "NIS": "32244",
        "Nama": "I KADEK GEDE ALVIN MAHARDIKA"
    },
    {
        "No": 13,
        "NIS": "32245",
        "Nama": "I KADEK MALFIN JUANDIKA"
    },
    {
        "No": 14,
        "NIS": "32246",
        "Nama": "I KOMANG SATRIA WIDNYANA"
    },
    {
        "No": 15,
        "NIS": "32247",
        "Nama": "I MADE AGUS DARMAYASA"
    },
    {
        "No": 16,
        "NIS": "32248",
        "Nama": "I MADE ARI WIRA SENTANA"
    },
    {
        "No": 17,
        "NIS": "32249",
        "Nama": "I MADE DHARMAYASA"
    },
    {
        "No": 18,
        "NIS": "32250",
        "Nama": "I MADE DWI ARNATHA MURTI"
    },
    {
        "No": 19,
        "NIS": "32251",
        "Nama": "I MADE DWI ARTA WIGUNA"
    },
    {
        "No": 20,
        "NIS": "32252",
        "Nama": "I MADE MAHENDRAWAN"
    },
    {
        "No": 21,
        "NIS": "32253",
        "Nama": "I NYOMAN ADI ARDITA"
    },
    {
        "No": 22,
        "NIS": "32254",
        "Nama": "I NYOMAN SETIAWAN WIKA PUTRA"
    },
    {
        "No": 23,
        "NIS": "32255",
        "Nama": "I NYOMAN TRI PRAMANA MEIDA YOGA"
    },
    {
        "No": 24,
        "NIS": "32256",
        "Nama": "PUTU ASUKA ALANTARA"
    },
    {
        "No": 25,
        "NIS": "32257",
        "Nama": "PUTU BAYU ASMITAJAYA"
    },
    {
        "No": 26,
        "NIS": "32258",
        "Nama": "PUTU DANADIVA VALENTINO"
    },
    {
        "No": 27,
        "NIS": "32259",
        "Nama": "PUTU DIPTA NAYA PRATAMA"
    },
    {
        "No": 28,
        "NIS": "32260",
        "Nama": "PUTU RAKANANTHA BANDESUARYA"
    },
    {
        "No": 29,
        "NIS": "32261",
        "Nama": "IDA BAGUS INDRA BHARATA MANUABA"
    },
    {
        "No": 30,
        "NIS": "32262",
        "Nama": "KADEK GINA DHARMA PUTRA"
    },
    {
        "No": 31,
        "NIS": "32263",
        "Nama": "KOMANG ADINATHA PUTRA"
    },
    {
        "No": 32,
        "NIS": "32264",
        "Nama": "MADE MAS KUSUMA WIJAYA"
    },
    {
        "No": 33,
        "NIS": "32265",
        "Nama": "MAHENDRA PRAMUDYA"
    },
    {
        "No": 34,
        "NIS": "32266",
        "Nama": "MOCHAMAD ALFAN DAMAR PRATAMA"
    },
    {
        "No": 35,
        "NIS": "32267",
        "Nama": "MOH. KANA RAMADAN"
    },
    {
        "No": 36,
        "NIS": "32268",
        "Nama": "MUHAMAD YOGI ARDIANSYAH"
    },
    {
        "No": 37,
        "NIS": "32269",
        "Nama": "PUTU KRISNA DIPAYANA PUTRA"
    },
    {
        "No": 38,
        "NIS": "32270",
        "Nama": "RAYHAN AUGIE NUGRAHA"
    },
    {
        "No": 39,
        "NIS": "32271",
        "Nama": "SAKA DWI ANDREANTO"
    },
    {
        "No": 40,
        "NIS": "32272",
        "Nama": "SATRIA FAJAR HIBATULLAH"
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