import React from 'react';

function StudentsTable(props) {
    return (
        <div>
            {
                props.students.length > 0 ?
                <div>
                    Found: {props.students.length} Students
                    <div>Student table:</div>
                    <table className="table" border="1px solid #ddd" style={{ margin: "20px auto", textAlign: "center" }}>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Average</th>
                        </tr>
                        {
                            props.students.map(student => {
                                return (
                                    <tr>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.average}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
                    :
                    <div>
                        No students found.
                    </div>
            }

        </div>
    )
}

export default StudentsTable;