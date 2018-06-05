import React from "react";
import TextField from "@material-ui/core/TextField";
// import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export default class InputContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      details: ""
    };
  }

  changeState(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    this.props.addToList(this.state);
    document.getElementById("name").value = "";
    document.getElementById("company").value = "";
    document.getElementById("details").value = "";
  }
  render() {
    return (
      <div>
        <TextField
          label="Name"
          id="name"
          name="name"
          margin="normal"
          onChange={this.changeState.bind(this)}
        />
        <br />
        <TextField
          label="Company"
          id="company"
          name="company"
          margin="normal"
          onChange={this.changeState.bind(this)}
        />
        <br />
        <TextField
          label="Details"
          id="details"
          name="details"
          margin="normal"
          onChange={this.changeState.bind(this)}
        />
        <br />
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          onClick={event => this.handleClick()}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}
