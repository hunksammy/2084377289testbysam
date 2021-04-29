const Employees = [
{ name: 'John Doe', department: 'Tech', age: 30 },
{ name: 'Jane Doe', department: 'Mech', age: 26 },
{ name: 'William Elliott', department: 'Prod', age: 33 },
{ name: 'Carl Ross', department: 'Tech', age: 20 },
{ name: 'Jeremy Scott', department: 'Mech', age: 36 },
{ name: 'Monica Geller', department: 'Prod', age: 23 }];


function Row(props) {
  return /*#__PURE__*/(
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", null, props.employee.name), /*#__PURE__*/
    React.createElement("td", null, props.employee.department), /*#__PURE__*/
    React.createElement("td", null, props.employee.age)));


}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: Employees };

    this.handleSelectChnage = this.handleSelectChnage.bind(this);
    this.handleInputChnage = this.handleInputChnage.bind(this);
  }

  handleSelectChnage(event) {
    if (event.target.value == '') {

      this.setState({
        employees: Employees });

    } else {
      let searchData = Employees.filter(emp => {
        return emp.department == event.target.value;
      });
      this.setState({
        employees: searchData });

    }

  }

  handleInputChnage(event) {
    const searchText = event.target.value.toLowerCase();
    let searchData = Employees.filter(emp => {
      return emp.name.toLowerCase().indexOf(searchText) > -1;
    });

    this.setState({
      employees: searchData });

  }

  render() {
    const rows = [];
    this.state.employees.forEach(emp => {
      rows.push( /*#__PURE__*/
      React.createElement(Row, { employee: emp }));

    });


    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "form-group" }, /*#__PURE__*/
      React.createElement("select", { className: "form-control", onChange: this.handleSelectChnage }, /*#__PURE__*/
      React.createElement("option", { value: "" }, "Select Department"), /*#__PURE__*/
      React.createElement("option", { value: "Tech" }, "Tech"), /*#__PURE__*/
      React.createElement("option", { value: "Mech" }, "Mech"), /*#__PURE__*/
      React.createElement("option", { value: "Prod" }, "Prod"))), /*#__PURE__*/


      React.createElement("div", { className: "form-group" }, /*#__PURE__*/
      React.createElement("input", { className: "form-control", placeholder: "Search Employee", onChange: this.handleInputChnage })), /*#__PURE__*/

      React.createElement("h3", null, "BILASPUR TRANSPORT"), /*#__PURE__*/
      React.createElement("table", { className: "table table-striped table-hover table-bordered table-hoved" }, /*#__PURE__*/
      React.createElement("thead", null, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", null, "Name"), /*#__PURE__*/
      React.createElement("th", null, "Department"), /*#__PURE__*/
      React.createElement("th", null, "Age"))), /*#__PURE__*/


      React.createElement("tbody", null,
      rows))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
