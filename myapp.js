const Employees = [
  { name: "John Doe", department: "Tech", age: 30 },
  { name: "Jane Doe", department: "Mech", age: 26 },
  { name: "William Elliott", department: "Prod", age: 33 },
  { name: "Carl Ross", department: "Tech", age: 20 },
  { name: "Jeremy Scott", department: "Mech", age: 36 },
  { name: "Monica Geller", department: "Prod", age: 23 }
];

function Row(props) {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.department}</td>
      <td>{props.employee.age}</td>
    </tr>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: Employees
    };
    this.handleSelectChnage = this.handleSelectChnage.bind(this);
    this.handleInputChnage = this.handleInputChnage.bind(this);
  }

  handleSelectChnage(event) {
    if (event.target.value == "") {
      this.setState({
        employees: Employees
      });
    } else {
      let searchData = Employees.filter((emp) => {
        return emp.department == event.target.value;
      });
      this.setState({
        employees: searchData
      });
    }
  }

  handleInputChnage(event) {
    const searchText = event.target.value.toLowerCase();
    let searchData = Employees.filter((emp) => {
      return emp.name.toLowerCase().indexOf(searchText) > -1;
    });

    this.setState({
      employees: searchData
    });
  }

  render() {
    const rows = [];
    this.state.employees.forEach((emp) => {
      rows.push(<Row employee={emp} />);
    });

    return (
      <div>
        <div className="form-group">
          <select className="form-control" onChange={this.handleSelectChnage}>
            <option value="">Select Department</option>
            <option value="Tech">Tech</option>
            <option value="Mech">Mech</option>
            <option value="Prod">Prod</option>
          </select>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Search Employee"
            onChange={this.handleInputChnage}
          />
        </div>
        <h3>Employee Management</h3>
        <table className="table table-striped table-hover table-bordered table-hoved">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
