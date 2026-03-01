from flask import Flask, jsonify

app = Flask(__name__)

# Sample data for employees
employees_data = {
    "old_employees": [
        {"name": "John Doe", "position": "Senior Developer", "years": 5},
        {"name": "Jane Smith", "position": "Project Manager", "years": 4},
        {"name": "Mike Johnson", "position": "QA Engineer", "years": 3}
    ],
    "new_employees": [
        {"name": "Sarah Williams", "position": "Junior Developer", "years": 1},
        {"name": "David Brown", "position": "UI Designer", "years": 0.5},
        {"name": "Emily Davis", "position": "Marketing Specialist", "years": 0.3}
    ],
    "managers": [
        {"name": "Robert Wilson", "position": "CTO", "years": 10},
        {"name": "Lisa Taylor", "position": "HR Manager", "years": 7}
    ]
}

@app.route('/api/employees', methods=['GET'])
def get_employees():
    return jsonify(employees_data)

if __name__ == '__main__':
    app.run(debug=True)