import React, {Component} from "react";
import {connect} from "react-redux";
import Firebase from "../../firebase";


const loginStyles = {
    width: "90%",
    maxWidth: "315px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px"
};

class Login extends Component {

    constructor(props) {
        super(props);
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
        this.state = {
            authorized: false
        };
    }

    authWithEmailPassword(event) {
        event.preventDefault();

        const auth = Firebase.auth;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        auth.fetchProvidersForEmail(email)
            .then((providers) => {
                if (providers.length === 0) {
                    return auth.createUserWithEmailAndPassword(email, password)
                } else if (providers.indexOf("password") === -1) {
                    this.loginForm.reset();
                    this.toaster.show({intent: Intent.WARNING, message: "Try alternative login."})
                } else {
                    return auth.signInWithEmailAndPassword(email, password);
                }
            })
            .then((user) => {
                if (user && user.email) {
                    this.loginForm.reset();
                    this.props.setUser(user);
                }
            })
            .catch((error) => {
                alert(error);
            })
    }


    /**
     * Handles the sign in button press.
     */
    toggleSignIn() {
        if (firebase.auth().currentUser) {
            // [START signout]
            firebase.auth().signOut();
            // [END signout]
        } else {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            if (email.length < 4) {
                alert('Please enter an email address.');
                return;
            }
            if (password.length < 4) {
                alert('Please enter a password.');
                return;
            }
            // Sign in with email and pass.
            // [START authwithemail]
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                document.getElementById('quickstart-sign-in').disabled = false;
                // [END_EXCLUDE]
            });
            // [END authwithemail]
        }
        document.getElementById('quickstart-sign-in').disabled = true;
    }

    /**
     * Handles the sign up button press.
     */
    handleSignUp() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START createwithemail]
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
        // [END createwithemail]
    }

    /**
     * Sends an email verification to the user.
     */
    sendEmailVerification() {
        // [START sendemailverification]
        firebase.auth().currentUser.sendEmailVerification().then(function () {
            // Email Verification sent!
            // [START_EXCLUDE]
            alert('Email Verification Sent!');
            // [END_EXCLUDE]
        });
        // [END sendemailverification]
    }

    sendPasswordReset() {
        var email = document.getElementById('email').value;
        // [START sendpasswordemail]
        firebase.auth().sendPasswordResetEmail(email).then(function () {
            // Password Reset Email Sent!
            // [START_EXCLUDE]
            alert('Password Reset Email Sent!');
            // [END_EXCLUDE]
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/invalid-email') {
                alert(errorMessage);
            } else if (errorCode == 'auth/user-not-found') {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
        // [END sendpasswordemail];
    }

    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    /* function initApp() {
     // Listening for auth state changes.
     // [START authstatelistener]
     firebase.auth().onAuthStateChanged(function(user) {
     // [START_EXCLUDE silent]
     document.getElementById('quickstart-verify-email').disabled = true;
     // [END_EXCLUDE]
     if (user) {
     // User is signed in.
     var displayName = user.displayName;
     var email = user.email;
     var emailVerified = user.emailVerified;
     var photoURL = user.photoURL;
     var isAnonymous = user.isAnonymous;
     var uid = user.uid;
     var providerData = user.providerData;
     // [START_EXCLUDE]
     document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
     document.getElementById('quickstart-sign-in').textContent = 'Sign out';
     document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
     if (!emailVerified) {
     document.getElementById('quickstart-verify-email').disabled = false;
     }
     // [END_EXCLUDE]
     } else {
     // User is signed out.
     // [START_EXCLUDE]
     document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
     document.getElementById('quickstart-sign-in').textContent = 'Sign in';
     document.getElementById('quickstart-account-details').textContent = 'null';
     // [END_EXCLUDE]
     }
     // [START_EXCLUDE silent]
     document.getElementById('quickstart-sign-in').disabled = false;
     // [END_EXCLUDE]
     });
     // [END authstatelistener]
     document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
     document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
     document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
     document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
     } */
    /*
     render() {

     return <div><br/><br/><br/>
     <h3>Email &amp; Password Authentication</h3>
     <input type="text" id="email" name="email" placeholder="Email"/>
     <br/>
     <input type="password" id="password" name="password" placeholder="Password"/>
     <button id="quickstart-sign-in" name="signin">Sign In</button>
     <br/>
     <button id="quickstart-sign-up" name="signup">Sign Up</button>
     <br/>
     <button id="quickstart-verify-email" name="verify-email">Send Email Verification</button>
     <br/>
     <button id="quickstart-password-reset" name="verify-email">Send Password Reset Email</button>
     <br/>
     <button id="test-user-sign-in" name="verify-email">Sign in on Test User</button>
     <div>
     Firebase sign-in status: <span id="quickstart-sign-in-status">Unknown</span>
     <div>Firebase auth <code>currentUser</code> object value:</div>
     <pre><code id="quickstart-account-details">null</code></pre>
     </div>
     </div>


     }
     */
    render() {
        /*     const { from } = this.props.location.state || { from: { pathname: '/' } }

         if (this.state.redirect === true) {
         return <Redirect to={from} />
         } */
        return (
            <div style={loginStyles}>
                <br/><br/><br/>

                <form onSubmit={(event) => {
                    this.authWithEmailPassword(event)
                }} ref={(form) => {
                    this.loginForm = form
                }}>
                    <div style={{marginBottom: "10px"}}>
                        <h5>Note</h5>
                        If you don't have an account already, this form will create your account.
                    </div>
                    <label className="pt-label">
                        Email
                        <input style={{width: "100%"}} className="pt-input" name="email" type="email" ref={(input) => {
                            this.emailInput = input
                        }} placeholder="Email"/>
                    </label>
                    <label className="pt-label">
                        Password
                        <input style={{width: "100%"}} className="pt-input" name="password" type="password"
                               ref={(input) => {
                                   this.passwordInput = input
                               }} placeholder="Password"/>
                    </label>
                    <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary"
                           value="Log In"/>
                </form>


                <br/><br/>

                {/*<Link to={"/"} onClick={() => this.props.onAuthorized(true)}>
                 <IconButton>
                 <FontIcon color={black} className="material-icons">verified_user</FontIcon>
                 </IconButton>
                 </Link>*/}
            </div>





        )
    }
}

const mapStateToProps = (state) => {
    return {
        authentication: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (value) => {
            dispatch({
                type: "LOGIN",
                payload: value
            })
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);