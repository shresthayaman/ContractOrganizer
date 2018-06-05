import React from "react";
import "./DisplayContract.css";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

import Divider from "@material-ui/core/Divider";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import contractLogo from "./contract.png";

export default class DisplayContract extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <List className="horizontalList">
          {this.props.allContracts.map(contract => {
            console.log(contract.promisor);

            return (
              <Card key={contract.name} className="card">
                <CardContent>
                  <Typography
                    style={{
                      marginBottom: 16,
                      fontSize: 14
                    }}
                    variant="headline"
                    component="h2"
                  >
                    <b>{contract.contractName}</b>
                  </Typography>

                  <img src={contractLogo} height="100" width="100" />

                  <Typography style={{ textAlign: "left" }} component="p">
                    <br />
                    <b>Promisor (Makes the promise): </b>
                    {contract.promisor}
                    <br />
                    <b>Promisee (Recieving end of the promise): </b>
                    {contract.promisee}
                    <br />
                    <b>Contract Details: </b>
                    {contract.details}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => this.props.deleteContract(contract.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
        </List>
      </div>
    );
  }
}
