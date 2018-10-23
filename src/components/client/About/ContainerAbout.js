import React, { Component } from 'react'

export default class ContainerAbout extends Component {
  render() {
    return (
        <div className="container m-5" >
            <h2 className="">About me </h2>
            <p>Võ Hùng Nghiêm</p>
            <a className="text-secondary" href="mailto:vohungnghiem@gmail.com">
              vohungnghiem@gmail.com
            </a> <br/>
            <a className="text-secondary" href="tel:+84362208218">(+84) 362208218</a>
        </div>
    )
  }
}
