const jsonData = [
    {
        "No": 1,
        "NIS": "32273",
        "Nama": "AHMAD REYFAN ABDILLAH"
    },
    {
        "No": 2,
        "NIS": "32274",
        "Nama": "AHMAD YOGA FAHRESYA"
    },
    {
        "No": 3,
        "NIS": "32275",
        "Nama": "DEWA MADE DHARMA YUDA"
    },
    {
        "No": 4,
        "NIS": "32276",
        "Nama": "DIMAS ANANTA SAPUTRA"
    },
    {
        "No": 5,
        "NIS": "32277",
        "Nama": "FIRMAN JATI IMANSYAH"
    },
    {
        "No": 6,
        "NIS": "32278",
        "Nama": "I GEDE OKA WINATHA"
    },
    {
        "No": 7,
        "NIS": "32279",
        "Nama": "I GUSTI KADE WISNU AMBARA"
    },
    {
        "No": 8,
        "NIS": "32280",
        "Nama": "I KADEK ADI PUTRA"
    },
    {
        "No": 9,
        "NIS": "32281",
        "Nama": "I KADEK ADI SURYA"
    },
    {
        "No": 10,
        "NIS": "32282",
        "Nama": "I KADEK ARYA ADI GUNA WIJAYA"
    },
    {
        "No": 11,
        "NIS": "32283",
        "Nama": "I KADEK KUSADI ADRIANO PERMANA"
    },
    {
        "No": 12,
        "NIS": "32284",
        "Nama": "KADEK PRIMA HARTAWAN"
    },
    {
        "No": 13,
        "NIS": "32285",
        "Nama": "KADEK RESTU ADI SAPUTRA"
    },
    {
        "No": 14,
        "NIS": "32286",
        "Nama": "I KOMANG AGUS TRI GUNAWAN"
    },
    {
        "No": 15,
        "NIS": "32287",
        "Nama": "I KOMANG ARYA JATI WIGUNA"
    },
    {
        "No": 16,
        "NIS": "32288",
        "Nama": "I KOMANG PUTRA YASA"
    },
    {
        "No": 17,
        "NIS": "32289",
        "Nama": "I KOMANG YAMA AGUS"
    },
    {
        "No": 18,
        "NIS": "32290",
        "Nama": "I MADE AGUNG DWIPA LAKSANA"
    },
    {
        "No": 19,
        "NIS": "32291",
        "Nama": "I MADE AGUS ANANTA PUTRA"
    },
    {
        "No": 20,
        "NIS": "32292",
        "Nama": "I MADE ARY SUCAHYA"
    },
    {
        "No": 21,
        "NIS": "32293",
        "Nama": "I NYOMAN BAGUS ADI PERMANA"
    },
    {
        "No": 22,
        "NIS": "32294",
        "Nama": "I PUTU ARI ARTAWAN"
    },
    {
        "No": 23,
        "NIS": "32295",
        "Nama": "I PUTU DARMAYASA"
    },
    {
        "No": 24,
        "NIS": "32296",
        "Nama": "I PUTU KESAWA ARTANA"
    },
    {
        "No": 25,
        "NIS": "32297",
        "Nama": "I WAYAN ARTHA WIJAYA"
    },
    {
        "No": 26,
        "NIS": "32298",
        "Nama": "KADEK DIPTA PRADNYANA"
    },
    {
        "No": 27,
        "NIS": "32299",
        "Nama": "KADEK DWIVA ADITYA SURYA PRATAMA"
    },
    {
        "No": 28,
        "NIS": "32300",
        "Nama": "KADEK JANOARTA"
    },
    {
        "No": 29,
        "NIS": "32301",
        "Nama": "KADEK PICAN MADA MAHAYANA"
    },
    {
        "No": 30,
        "NIS": "32302",
        "Nama": "KHOIRUL ARZAQI"
    },
    {
        "No": 31,
        "NIS": "32303",
        "Nama": "MUHAMMAD NACHULA DIRGANTARA"
    },
    {
        "No": 32,
        "NIS": "32304",
        "Nama": "MUHAMMAD RIZAL HARTAJI"
    },
    {
        "No": 33,
        "NIS": "32305",
        "Nama": "PASHA HABIBI SYAHPUTRA"
    },
    {
        "No": 34,
        "NIS": "32306",
        "Nama": "PUTU ARDI SUDIANTARA"
    },
    {
        "No": 35,
        "NIS": "32307",
        "Nama": "REVIO DAVERIO PRAKOSO"
    },
    {
        "No": 36,
        "NIS": "32308",
        "Nama": "RIZACKY ALGHANIYY TRIASNYAH"
    },
    {
        "No": 37,
        "NIS": "32309",
        "Nama": "SI GEDE PUTU SURYA NANTA NUGRAHA"
    },
    {
        "No": 38,
        "NIS": "32310",
        "Nama": "TAQI ROVERO DAVIAN OLIFAR"
    },
    {
        "No": 39,
        "NIS": "32311",
        "Nama": "TUDE PANCA BAYU ANDIKA GOTAMA"
    },
    {
        "No": 40,
        "NIS": "31412",
        "Nama": "ADE FITO DWI ANDIKA"
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