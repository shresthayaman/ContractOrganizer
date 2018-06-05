import React from "react";

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

export default class DisplayContract extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <List>
          <Divider />
          {this.props.allContracts.map(contract => {
            return (
              <div>
                <ListItem key={contract.name} dense>
                  <Avatar alt="Remy Sharp" />
                  <ListItemText
                    primary={
                      <div>
                        <b>Name: </b>
                        {contract.name}
                        <br />
                        <b>Company: </b>
                        {contract.company}
                        <br />
                        <b> Details: </b>
                        {contract.details}
                      </div>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="Delete"
                      onClick={() => this.props.deleteContract(contract.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    );
  }
}
