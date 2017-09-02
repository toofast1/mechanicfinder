import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  constructor({ body, userName }) {
    super();
    this.state = { body, userName };
  }
  onUsernameChange(e) {
    this.setState({ ...this.state, userName: e.target.value });
  }
  onBodyChange(e) {
    this.setState({ ...this.state, body: e.target.value });
  }
  onFormSubmit(e) {
    let { body, userName } = this.state;

    e.preventDefault();

    if (body.length === 0) return;

    if (userName.length === 0) userName = 'guest';

    this.props.onSubmit({ body, userName });
    this.setState({ ...this.state, body: '', userName: '' });
  }
  render() {
    const { body, userName } = this.state;
    const { onBodyChange, onFormSubmit, onUsernameChange } = this;

    return (
      <form>
        <div>
          <label>Usuario</label>
          <input type="text" value={userName} onChange={onUsernameChange.bind(this)} />
        </div>
        <div>
          <label>Comentario</label>
          <textarea value={body} onChange={onBodyChange.bind(this)} />
        </div>
        <button onClick={onFormSubmit.bind(this)}>Comentar</button>
      </form>
    );
  }
}

CommentForm.defaultProps = {
  body: '',
  onSubmit: c => {},
  userName: ''
};

CommentForm.propTypes = {
  body: PropTypes.string,
  onSubmit: PropTypes.func,
  userName: PropTypes.string
};

export default CommentForm;