async function checkStudent(id) {
    const response = await fetch('https://fap.fpt.edu.vn/Schedule/ActivityStudent.aspx/GetStudent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ searchTerm: id })
    });
    const data = await response.json();
    console.table(data.d, ["RollNumber", "FullName", "Email"]);
}

// Just type this and hit enter whenever you want to check an ID!
checkStudent('HE204488');