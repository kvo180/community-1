import React, { Component } from 'react';
import { AppBar } from 'material-ui';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleClick () {
    this.props.changeHeader('Yvonne is smart');
  }

  render () {
    return (
			<div>
        <AppBar title="Community" />
        {/* <div>{this.props.header}</div>
        <button onClick={this.handleClick.bind(this)}>
          Click
        </button> */}
			</div>
    );
  }
}

export default Header;
