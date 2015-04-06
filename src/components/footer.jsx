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
          <h5 className="white-text">ReactJS frontend for Rails new way API</h5>
          <p className="grey-text text-lighten-4">
            You can find the code on <a className="white-text" target="_blank" href="https://github.com/search?utf8=%E2%9C%93&q=user%3AKamilLelonek+new-way">GitHub</a>
          </p>
        </div>
        <div className="light-blue lighten-2 footer-copyright">
          <div className="container">
            <a className="current-year grey-text text-lighten-4" href="http://kamil.lelonek.me/">&copy; { this.currentYear() } Kamil Lelonek</a>
            <a className="grey-text text-lighten-4 right" href={ this.API_URL }>API</a>
          </div>
        </div>
      </footer>
    )
  }
}
