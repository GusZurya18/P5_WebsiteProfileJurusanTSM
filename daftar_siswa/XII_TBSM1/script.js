const jsonData = [
    {
        "No": 1,
        "NIS": "30502",
        "Nama": "ALIT JULIANTARA"
    },
    {
        "No": 2,
        "NIS": "30505",
        "Nama": "GEDE BAGUS DHARMA SUPUTRA"
    },
    {
        "No": 3,
        "NIS": "30506",
        "Nama": "I GEDE ARYA PRANATA"
    },
    {
        "No": 4,
        "NIS": "30507",
        "Nama": "I GEDE PANCA KURNIAWAN"
    },
    {
        "No": 5,
        "NIS": "30508",
        "Nama": "I GEDE WIRYA HADI WIGUNA"
    },
    {
        "No": 6,
        "NIS": "30509",
        "Nama": "I GUSTI AGUNG PUTU SUSILA ARINATHA"
    },
    {
        "No": 7,
        "NIS": "30510",
        "Nama": "I GUSTI MADE ADI AURELIO WIGUNA"
    },
    {
        "No": 8,
        "NIS": "30511",
        "Nama": "I GUSTI PUTU AGUS DARMA"
    },
    {
        "No": 9,
        "NIS": "30512",
        "Nama": "I KADEK ADI DARMAWAN"
    },
    {
        "No": 10,
        "NIS": "30513",
        "Nama": "I KADEK EDY SUGIANTARA"
    },
    {
        "No": 11,
        "NIS": "30514",
        "Nama": "I KADEK SILA JULIANTARA"
    },
    {
        "No": 12,
        "NIS": "30515",
        "Nama": "I KETUT ADI WIRANATA"
    },
    {
        "No": 13,
        "NIS": "30516",
        "Nama": "I KETUT GEDE JUNIARTHANA PUTRA"
    },
    {
        "No": 14,
        "NIS": "30517",
        "Nama": "I KOMANG ALDI PUTRA JAYA"
    },
    {
        "No": 15,
        "NIS": "30519",
        "Nama": "I MADE ARYA ADHI WIJAYA"
    },
    {
        "No": 16,
        "NIS": "30520",
        "Nama": "I MADE OKA PUTRA TERNAMA"
    },
    {
        "No": 17,
        "NIS": "30522",
        "Nama": "I NYOMAN FAJAR SANTIKA"
    },
    {
        "No": 18,
        "NIS": "30523",
        "Nama": "I PUTU EKA PUTRA TERNAMA"
    },
    {
        "No": 19,
        "NIS": "30524",
        "Nama": "I WAYAN HIVNU DANA MERTA"
    },
    {
        "No": 20,
        "NIS": "30525",
        "Nama": "I WAYAN PRAMANA WIJAYA"
    },
    {
        "No": 21,
        "NIS": "30527",
        "Nama": "I WAYAN YUDHA ADITYA SAPUTRA"
    },
    {
        "No": 22,
        "NIS": "30530",
        "Nama": "MADE WIRA KIRTANA"
    },
    {
        "No": 23,
        "NIS": "30531",
        "Nama": "MUHAMMAD RIZAL"
    },
    {
        "No": 24,
        "NIS": "30532",
        "Nama": "PANDE AGUS DARMAWAN"
    },
    {
        "No": 25,
        "NIS": "30533",
        "Nama": "TOMAS IBRAHIM"
    },
    {
        "No": 26,
        "NIS": "30534",
        "Nama": "WESHLEY TERRY IRAWAN"
    },
    {
        "No": 27,
        "NIS": "29629",
        "Nama": "SULTHAN SALAHUDDIN"
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