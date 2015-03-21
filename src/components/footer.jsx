import React from "react";

export default class Footer extends React.Component {
  constructor() {
    this.API_URL = 'https://rails-new-way.herokuapp.com/'
  }

  currentYear() {
    return new Date().getFullYear();
  }

  render() {
    return(
      <footer className="page-footer light-blue ">
        <div className="container">
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div className="light-blue lighten-2 footer-copyright">
          <div className="container">
          <a className="grey-text text-lighten-4" href="http://kamil.lelonek.me/">&copy; { this.currentYear() } Kamil Lelonek</a>
          <a className="grey-text text-lighten-4 right" href={ this.API_URL }>API</a>
          </div>
        </div>
      </footer>
    )
  }
}
