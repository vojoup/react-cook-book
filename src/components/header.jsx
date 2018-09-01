import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    const { history } = this.props;

    console.log('goback', history);
    history.goBack();
  }

  renderBackButton() {
    return window.location.pathname.includes('/recipe/');
  }

  render() {
    return (
      <header className="App-header">
        <h1 className="header-text">Recipes Book</h1>
        {this.renderBackButton() && (
          <div className="right">
            <button className="back-button round" type="button" onClick={this.goBack}>
              Go Back
            </button>
          </div>
        )}
      </header>
    );
  }
}

export default withRouter(Header);
