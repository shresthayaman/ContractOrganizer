import React from "react";
import "./InputContract.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export default class InputContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contractName: "",
      promisor: "",
      promisee: "",
      details: ""
    };
  }

  changeState(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    this.props.addToList(this.state);
    document.getElementById("contractName").value = "";
    document.getElementById("promisor").value = "";
    document.getElementById("promisee").value = "";
    document.getElementById("details").value = "";
  }
  render() {
    return (
      <div>
        <TextField
          label="Contract Name"
          id="contractName"
          name="contractName"
          margin="normal"
          style={{ width: 300 }}
          onChange={this.changeState.bind(this)}
        />
        <br />
        <TextField
          label="Promisor (Makes the promise)"
          id="promisor"
          name="promisor"
          margin="normal"
          style={{ width: 300 }}
          onChange={this.changeState.bind(this)}
        />
        <br />
        <TextField
          label="Promisee (Recieving end of the promise)"
          id="promisee"
          name="promisee"
          margin="normal"
          style={{ width: 300 }}
          onChange={this.changeState.bind(this)}
        />
        <br />
        <TextField
          label="Contract Details"
          id="details"
          name="details"
          margin="normal"
          style={{ width: 300 }}
          onChange={this.changeState.bind(this)}
        />
        <br />
        <br />

        <input
          type="file"
          name="file-1[]"
          id="file-1"
          class="inputfile inputfile-1"
          data-multiple-caption="{count} files selected"
          multiple
        />
        <label for="file-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
          >
            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
          </svg>
          <span>Choose a file&hellip;</span>
        </label>

        <br />
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
