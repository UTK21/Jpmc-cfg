import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaQuestion, FaUser } from 'react-icons/fa';
import '../index.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const guestLinks = (
    <ul>
      <li>
        <Link to="/login">
          <FaSignInAlt /> Login
        </Link>
      </li>
      <li>
        <Link to="/register">
          <FaUser /> Register
        </Link>
      </li>
      <li>
        <Link to="/faq">
          <FaQuestion />
          Faq's
        </Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul>
      <li>
        <a href="#!" onClick={logout}>
          <FaSignOutAlt /> Logout
        </a>
      </li>
      <li>
        <Link to="/faq">
          <FaQuestion />
          Faq's
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="px-2 bg-info navstyle text-white">
      <header className="header">
        <div className="logo">
          <img src="../../public/svg_img/aicgusec_logo.png"></img>
          <Link to="/">
            <span className="bg-light h3">AICGUSEC</span>
          </Link>
        </div>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </header>
    </div>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
