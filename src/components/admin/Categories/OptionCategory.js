import React, { Component } from 'react'

export default class OptionCategory extends Component {
  render() {
    return (
      <React.Fragment>
          {this.props.option.id === this.props.id?
          <option disabled >
            {this.props.tas + " " + this.props.option.title}
          </option>:
          <option value={this.props.option.id} >
            {this.props.tas + " " + this.props.option.title}
          </option>
          }
      </React.Fragment>
    )
  }
}
