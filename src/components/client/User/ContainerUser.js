import React, { Component } from 'react'

export default class ContainerUser extends Component {
  render() {
      console.log(this.props.match)
    return (
        <div className="container m-5" >
            <h2 className="">this is User page </h2>
        </div>
    )
  }
}
