import React, { Component } from 'react'

export default class MainFooter extends Component {
  render() {
    return (
        <div className="bg-dark text-center mt-5 py-5 mb-0 text-white">
            <p>Võ Hùng Nghiêm</p>
            <a className="text-info" href="mailto:vohungnghiem@gmail.com">
              vohungnghiem@gmail.com
            </a> <br/>
            <a className="text-info" href="tel:+84362208218">(+84) 362208218</a>
        </div>
    )
  }
}
