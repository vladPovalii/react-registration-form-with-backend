import React, { Component } from 'react';
import _ from 'underscore';
import classNames from'classnames';

class InputError extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      message: 'Input is invalid'
    };
  }

  render(){ 
    var errorClass = classNames({
      'error_container': true,
      'visible': this.props.visible,
      'invisible' : !this.props.visible
    });

    return (
      <div className={errorClass}>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }
}

export default InputError;