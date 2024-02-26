const employees=[
    {
        name: "Joe",
        age: 23,
        role: "backend developer",
        company: "Facebook",
        skills: "Python, C++"

    },
    {
        name: "David",
        age: 25,
        role: "Frontend developer",
        company: "Aamazon",
        skills: "Javaskrip, html, scc"
    }
]

function gentablerows(){
    const tbody = document.querySelector('tbody');

    employees.forEach(employee => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = employee.name;

        const ageCell = document.createElement('td');
        ageCell.textContent = employee.age;

        const roleCell = document.createElement('td');
        roleCell.textContent = employee.role;
        
        const companyCell = document.createElement('td');
        companyCell.textContent = employee.company;

        const skillsCell = document.createElement('td');
        skillsCell.textContent = employee.skills;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(roleCell);
        row.appendChild(companyCell);
        row.appendChild(skillsCell);

        tbody.appendChild(row);

    }
        )
}

gentablerows();