const jsonData = [
    {
        "No": 1,
        "NIS": "31370",
        "Nama": "ANAK AGUNG GDE DALEM SATRIA WIBAWA"
    },
    {
        "No": 2,
        "NIS": "31371",
        "Nama": "ANAK AGUNG KRISNA SAPUTRA"
    },
    {
        "No": 3,
        "NIS": "31372",
        "Nama": "ANDHIKA WIDNYANA PUTRA"
    },
    {
        "No": 4,
        "NIS": "31373",
        "Nama": "DAVID ARDIANSYAH"
    },
    {
        "No": 5,
        "NIS": "31374",
        "Nama": "FAIRUS FEBRINO GREVANANDA"
    },
    {
        "No": 6,
        "NIS": "31375",
        "Nama": "GEDE WAHYU ADISAPUTRA"
    },
    {
        "No": 7,
        "NIS": "31376",
        "Nama": "I DEWA PUTU SUARGITHA"
    },
    {
        "No": 8,
        "NIS": "31377",
        "Nama": "I GEDE ARYA"
    },
    {
        "No": 9,
        "NIS": "31378",
        "Nama": "I GEDE ARYA PUTRA"
    },
    {
        "No": 10,
        "NIS": "31379",
        "Nama": "I GEDE JULIAWAN"
    },
    {
        "No": 11,
        "NIS": "31380",
        "Nama": "I GEDE RADITYA MERTA"
    },
    {
        "No": 12,
        "NIS": "31381",
        "Nama": "I GEDE SUGI ARTHA"
    },
    {
        "No": 13,
        "NIS": "31382",
        "Nama": "I GST. NGR. AGUNG SATRIA WIGUNA"
    },
    {
        "No": 14,
        "NIS": "31383",
        "Nama": "I GUSTI AGUNG PUTU OKA PRATAMA PUTRA"
    },
    {
        "No": 15,
        "NIS": "31384",
        "Nama": "I GUSTI PUTU RADITYA SWASTIKA"
    },
    {
        "No": 16,
        "NIS": "31385",
        "Nama": "I KADEK ADI WIRAWAN"
    },
    {
        "No": 17,
        "NIS": "31386",
        "Nama": "I KADEK DONY SAPUTRA"
    },
    {
        "No": 18,
        "NIS": "31387",
        "Nama": "I KADEK KRESNA RIDANA PUTRA"
    },
    {
        "No": 19,
        "NIS": "31388",
        "Nama": "I KADEK YUDANA"
    },
    {
        "No": 20,
        "NIS": "31389",
        "Nama": "I KOMANG DIKA SAPUTRA"
    },
    {
        "No": 21,
        "NIS": "31390",
        "Nama": "I KOMANG TANGKAS LINGGA JAYA"
    },
    {
        "No": 22,
        "NIS": "31391",
        "Nama": "I MADE DEDE RAMA SAPUTRA"
    },
    {
        "No": 23,
        "NIS": "31392",
        "Nama": "I MADE GEDE KRISNA DIVAYANA"
    },
    {
        "No": 24,
        "NIS": "31393",
        "Nama": "I MADE JUNI ANTARA"
    },
    {
        "No": 25,
        "NIS": "31394",
        "Nama": "I MADE ROY SATRIA PERMANA"
    },
    {
        "No": 26,
        "NIS": "31395",
        "Nama": "I NYOMAN TRI DEVA NURIADI PUTRA"
    },
    {
        "No": 27,
        "NIS": "31396",
        "Nama": "I PUTU ADI GUNA PRADANA"
    },
    {
        "No": 28,
        "NIS": "31397",
        "Nama": "I PUTU ANDIKA SUPARTIKA"
    },
    {
        "No": 29,
        "NIS": "31398",
        "Nama": "I PUTU BAYU ANDIKA"
    },
    {
        "No": 30,
        "NIS": "31399",
        "Nama": "I PUTU GANDHI PURWANATHA"
    },
    {
        "No": 31,
        "NIS": "31400",
        "Nama": "I PUTU GUNARSA ADI PUTRA"
    },
    {
        "No": 32,
        "NIS": "31401",
        "Nama": "I PUTU OKA SANDIKA"
    },
    {
        "No": 33,
        "NIS": "31402",
        "Nama": "I PUTU RADITYA GUNAWAN GIRI"
    },
    {
        "No": 34,
        "NIS": "31403",
        "Nama": "I WAYAN ADI SUMANTARA"
    },
    {
        "No": 35,
        "NIS": "31404",
        "Nama": "I WAYAN DONI PRATAMA"
    },
    {
        "No": 36,
        "NIS": "31405",
        "Nama": "IDA KETUT ULIANTARA"
    },
    {
        "No": 37,
        "NIS": "31406",
        "Nama": "KADEK KEVIN PUTRA DWISA"
    },
    {
        "No": 38,
        "NIS": "31407",
        "Nama": "KOMANG AGUS YUDI PERMANA"
    },
    {
        "No": 39,
        "NIS": "31408",
        "Nama": "MADE IRWAN WIJAYA"
    },
    {
        "No": 40,
        "NIS": "31409",
        "Nama": "PUTU DENDRA DINATHA"
    },
    {
        "No": 41,
        "NIS": "31410",
        "Nama": "YOGA ADI PRATAMA"
    },
    {
        "No": 42,
        "NIS": "31780",
        "Nama": "I GUSTI NGURAH BAGUS TRI GUNA"
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