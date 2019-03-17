import React from "react";
import User from "components/admin-panel/component/User/User";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "utils/authorization/setAuthToken";

class AdminPanel extends React.Component {
  state = {
    modalVisible: true
  };

  componentDidMount() {
    const { setCurrentUser, logOutUser } = this.props;
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
      const decoded = jwt_decode(token);
      setCurrentUser(decoded);
      const currentTime = Date.now() / 1000;
      console.log(decoded.exp);
      console.log(currentTime);
      if (decoded.exp < currentTime) {
        // Logout user
        logOutUser();
        // Redirect to home
        window.location.href = "./";
      }
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible
    }));
  };
  render() {
    const { modalVisible } = this.state;
    const {
      logIn,
      currentUser: { userData, isLogged }
    } = this.props;
    console.log({ userData, isLogged });
    return (
      <section className="AdminPanel">
        {!userData && !isLogged && (
          <User
            modalVisible={modalVisible}
            toggle={this.toggle}
            logIn={logIn}
          />
        )}
      </section>
    );
  }
}

export default AdminPanel;
