import React from "react";
import PropTypes from 'prop-types';

class RegisterInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChangeHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value
      }
    })
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

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    return (
      <div className="card input bg-primary w-50">
        <div className="card-body">
          <h1 className=" text-center fs-3 fw-bold text-white mb-0 ms-3">Aplikasi Catatan</h1>
          <h5 className=" text-center fw-bold text-white mb-4 ms-3">Silahkan daftar dulu sebelum masuk</h5>
          <form onSubmit={this.onSubmitHandler} className='input-register'>
            <div className="form-group">
              <label>Nama</label>
              <input type="text" className="form-control" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeHandler} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onEmailChangeHandler} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onPasswordChangeHandler} />
            </div>
            <button type="submit" className="btn btn-light mt-3">Daftar</button>
          </form>
        </div>
      </div>
    );
  }
}


RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;