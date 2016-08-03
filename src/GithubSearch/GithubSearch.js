import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigateGithub } from '../redux/actions';

class GithubSearch extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleGoClick = this.handleGoClick.bind(this);
  }

  handleKeyUp(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.handleGoClick();
    }
  }

  handleGoClick() {
    this.props.navigateGithub(this.refs.input.value);
  }

  render() {
    return (
      <div>
        <input
          size="45"
          ref="input"
          defaultValue="spikeo/react-starter"
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.handleGoClick}>
          Go!
        </button>
        <p>Enter a repo's fullname and check the state.</p>
      </div>
    );
  }
}

GithubSearch.propTypes = {
  navigateGithub: PropTypes.func,
  login: PropTypes.object
};

export default connect(
  state => ({ githubsearch: state.githubsearch }),
  { navigateGithub }
)(GithubSearch);
