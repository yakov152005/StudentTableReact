import './App.css';
import React from 'react';
import StudentsTable from "./components/StudentsTable";

class App extends React.Component {
    state = {
        students: [
            { firstName: "Ido", lastName: "Liron", average: 86 },
            { firstName: "Yakov", lastName: "Benhemo", average: 99 },
            { firstName: "Shai", lastName: "Givati", average: 89 },
            { firstName: "Avia", lastName: "Lolo", average: 95 },
        ],
        firstNameFilter: "",
        lastNameFilter: "",
        averageFilter: 0,
        filteredStudents: [],
        newStudent: {
            firstName: "",
            lastName: "",
            average: 0
        },
    };

    changeFirstNameFilter = (event) => {
        this.setState({
            firstNameFilter: event.target.value
        });
    }

    changeLastNameFilter = (event) => {
        this.setState({
            lastNameFilter: event.target.value
        });
    }

    changeAverageFilter = (event) => {
        const value = event.target.value;
        if (value >= 0 && value <= 100) {
            this.setState({
                averageFilter: value
            });
        } else {
            alert("Error, enter a valid average");
        }
    }

    addNewStudent = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            newStudent: {
                ...prevState.newStudent,
                [name]: value,
            },
        }));
    }

    addStudent = () => {
        const { students, newStudent } = this.state;

        if (
            newStudent.firstName.trim() === "" ||
            newStudent.lastName.trim() === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        const average = newStudent.average;
        if (average < 0 || average > 100) {
            alert("Invalid average. Please enter a number between 0 and 100.");
            return;
        }

        const updatedStudents = [
            ...students,
            { ...newStudent, average }
        ];

        this.setState({
            students: updatedStudents,
            filteredStudents: updatedStudents,
            newStudent: { firstName: "", lastName: "", average: 0 }
        });
        alert("Successfully added students.");
    }

    applyFilters = () => {
        const { students, firstNameFilter, lastNameFilter, averageFilter } = this.state;

        const filtered = students.filter(student => {
            const matchesFirstName = student.firstName.toLowerCase().includes(firstNameFilter.toLowerCase());
            const matchesLastName = student.lastName.toLowerCase().includes(lastNameFilter.toLowerCase());
            const matchesAverage = student.average >= averageFilter;

            return matchesFirstName && matchesLastName && matchesAverage;
        });

        this.setState({ filteredStudents: filtered });
    }

    componentDidMount() {
        this.setState({ filteredStudents: this.state.students });
    }

    clearText = () => {
        this.setState({
            firstNameFilter: "",
            lastNameFilter: "",
            averageFilter: 0,
            filteredStudents: this.state.students
        });
    }

    isClearDisabled = () => {
        const { firstNameFilter, lastNameFilter, averageFilter } = this.state;
        return !firstNameFilter && !lastNameFilter && !averageFilter;
    }

    isClearDisabled2 = () => {
        const { newStudent} = this.state;
        return (
          !newStudent.firstName.trim()||
          !newStudent.lastName.trim() ||
          (!newStudent.average < 0 && !newStudent.average > 100 )
        );
    }



    render = () => {
        return (
            <div className="App">
                <div>
                    <div>First Name:
                        <input
                            value={this.state.firstNameFilter}
                            onChange={this.changeFirstNameFilter}
                            placeholder="Enter first name"
                        />
                    </div>
                    <div>Last Name:
                        <input
                            value={this.state.lastNameFilter}
                            onChange={this.changeLastNameFilter}
                            placeholder="Enter last name"
                        />
                    </div>
                    <div>Average:
                        <input
                            type="number"
                            min={0} max={100}
                            value={this.state.averageFilter}
                            onChange={this.changeAverageFilter}
                            placeholder="minimum"
                        />
                    </div>
                    <br/>
                    <button type="button"
                            onClick={this.applyFilters}
                            disabled={this.isClearDisabled()}>Filter
                    </button>
                    <br/>
                    <button type="button"
                            onClick={this.clearText}
                            disabled={this.isClearDisabled()}>Clear All Students
                    </button>
                </div>
                <div style={{marginTop: '20px'}}>
                    <StudentsTable students={this.state.filteredStudents}/>
                </div>

                <div style={{border: "1px solid red", marginTop: '20px', padding: '10px'}}>
                    <input
                        name="firstName"
                        value={this.state.newStudent.firstName}
                        onChange={this.addNewStudent}
                        placeholder="first name"
                    /><br/>
                    <input
                        name="lastName"
                        value={this.state.newStudent.lastName}
                        onChange={this.addNewStudent}
                        placeholder="last name"
                    /><br/>
                    <input
                        name="average"
                        type="number"
                        value={this.state.newStudent.average}
                        onChange={this.addNewStudent}
                        placeholder="average"
                    /><br/>
                    <button
                        type={"button"}
                        onClick={this.addStudent}
                        disabled={this.isClearDisabled2()}>Add Student
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
