import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    const { history } = this.props;

    history.goBack();
  }

  renderBackButton() {
    return window.location.pathname.includes('/recipe/') || window.location.pathname.includes('/newRecipe');
  }

  render() {
    return (
      <header className="App-header">
        <h1 className="header-text">Recipes Book</h1>
        {this.renderBackButton() && (
          <div className="right">
            <button className="button" type="button" onClick={this.goBack}>
              Go Back
            </button>
          </div>
        )}
        <ToastContainer />
      </header>
    );
  }
}

export default withRouter(Header);
