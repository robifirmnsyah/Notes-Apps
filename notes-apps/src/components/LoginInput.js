import React from 'react';
import PropTypes from 'prop-types';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      }
    })
  }


  onPasswordChangeHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value
      }
    })
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    return (
      <div className="card input bg-primary w-50">
      <div className="card-body">
      <h1 className=" text-center fs-3 fw-bold text-white mb-0 ms-3">Aplikasi Catatan</h1>
      <h5 className=" text-center fw-bold text-white mb-4 ms-3">Silahkan masuk untuk melanjutkan</h5>
      <form onSubmit={this.onSubmitHandler} className='input-login'>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onEmailChangeHandler} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onPasswordChangeHandler} />
        </div>
        <button type="submit" className="btn btn-light mt-3">Masuk</button>
      </form>
      </div>
    </div>
      
    );
  }
}


LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;