import React from 'react';


export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }


  render() {
    return (
      <div>
        Calendar
      </div>
    );
  }
}