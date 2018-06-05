import React, { Component } from "react";
import "./App.css";
import InputContract from "./Components/InputContract";
import DisplayContract from "./Components/DisplayContract";

import firebase from "./firebase";
import Button from "@material-ui/core/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractList: []
    };
  }

  componentDidMount() {
    let contractsRef = firebase.database().ref("contracts");

    contractsRef.on("value", snapshot => {
      let contracts = snapshot.val();
      let newState = [];
      for (let contract in contracts) {
        newState.push({
          id: contract, //add the id key for the list so there is a reference avialble making it easier to delete
          name: contracts[contract].name,
          company: contracts[contract].company,
          details: contracts[contract].details
        });
      }
      this.setState({
        contractList: newState
      });
    });
  }

  addContract(contract) {
    let tempList = this.state.contractList; //a list of all the previous contracts
    if (
      contract.name === "" ||
      contract.comapny === "" ||
      contract.details === ""
    ) {
      alert(
        "Some field are missing! Please resubmit after filling out all fields."
      );
    } else {
      let contractsRef = firebase.database().ref("contracts");
      let pushedKey = contractsRef.push(contract).key; //puts contract info into data base and get the key value for it

      tempList.push({
        id: pushedKey,
        name: contract.name,
        company: contract.company,
        details: contract.details
      });

      this.setState({
        contractList: tempList
      });
    }
  }

  removeContract(contractId) {
    const contractRef = firebase.database().ref(`/contracts/${contractId}`);
    contractRef.remove();
  }

  deleteAll() {
    this.state.contractList.map(contract => {
      this.removeContract(contract.id);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Contract Organizer</h1>

        <InputContract addToList={contract => this.addContract(contract)} />
        <div className="deleteAll">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.deleteAll()}
          >
            Delete All
          </Button>
        </div>
        <DisplayContract
          allContracts={this.state.contractList}
          deleteContract={contractId => this.removeContract(contractId)}
        />
      </div>
    );
  }
}

export default App;
