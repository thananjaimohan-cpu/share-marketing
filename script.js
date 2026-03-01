document.addEventListener('DOMContentLoaded', function() {
    // Sample data for employees
    const oldEmployees = [
        { name: "John Doe", position: "Senior Developer", years: 5 },
        { name: "Jane Smith", position: "Project Manager", years: 4 },
        { name: "Mike Johnson", position: "QA Engineer", years: 3 }
    ];

    const newEmployees = [
        { name: "Sarah Williams", position: "Junior Developer", years: 1 },
        { name: "David Brown", position: "UI Designer", years: 0.5 },
        { name: "Emily Davis", position: "Marketing Specialist", years: 0.3 }
    ];

    const managers = [
        { name: "Robert Wilson", position: "CTO", years: 10 },
        { name: "Lisa Taylor", position: "HR Manager", years: 7 }
    ];

    // Function to display employees
    function displayEmployees(employees, containerId) {
        const container = document.getElementById(containerId);
        const employeeList = document.createElement('div');
        employeeList.className = 'employee-list';

        employees.forEach(employee => {
            const card = document.createElement('div');
            card.className = 'employee-card';
            card.innerHTML = `
                <h3>${employee.name}</h3>
                <p><strong>Position:</strong> ${employee.position}</p>
                <p><strong>Years:</strong> ${employee.years}</p>
            `;
            employeeList.appendChild(card);
        });

        container.appendChild(employeeList);
    }

    // Display all employees
    displayEmployees(oldEmployees, 'old-employees');
    displayEmployees(newEmployees, 'new-employees');
    displayEmployees(managers, 'managers');
});