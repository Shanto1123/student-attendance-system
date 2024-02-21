// Sample student attendance data (you can replace this with your actual data)
const attendanceData = [
    {
        name: "Sheikh Shanto",
        rollNo: 101,
        attendance: "Present",
    },
    {
        name: "Abdur Rahman",
        rollNo: 102,
        attendance: "Absent",
    },
    // Add more student data as needed
];

// Function to populate the attendance list
function populateAttendanceList() {
    const attendanceList = document.getElementById("attendanceList");

    // Create a table to display the data
    const table = document.createElement("table");
    table.classList.add("table");

    // Create table headers
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Name</th><th>Roll No.</th><th>Attendance</th>";
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");
    
    // Loop through the attendance data and create rows
    attendanceData.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${student.name}</td><td>${student.rollNo}</td><td>${student.attendance}</td>`;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    attendanceList.appendChild(table);
}

// Call the populateAttendanceList function to display the data
populateAttendanceList();

const currentDate = new Date();

// Format the date as desired (e.g., "September 21, 2023")
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

// Update the placeholder element with the formatted date
document.getElementById('currentDate').textContent = `Today's Date: ${formattedDate}`;
