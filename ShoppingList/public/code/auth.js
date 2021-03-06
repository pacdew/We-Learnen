(function(){
  //console.log("auth.js loaded");
  window.auth = {}

  function sendEmailLoginLink(){
    a_send_link_button.disabled = true;
    const email = a_email.value;
    var actionCodeSettings = {
      // Will allow for the localhost situation and the firebase.app situation
      url: location.href,
      handleCodeInApp: true,
    };
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
    .then(function(){
      message.innerHTML = "<p>Login Link sent to email.</p>";
      // was not storing the email value leading to problems
      localStorage.setItem("email", email);
    })
    .catch(function(error){
      console.log("An error occurred when sending the sign in link.");
    });
  };

  function loginPageLoad(){
    let email = localStorage.getItem("email");
    if(!email){
      email = prompt('Please provide your email for confirmation');
    }

    firebase.auth().signInWithEmailLink(email, location.href)
    .then(function(result){
      localStorage.removeItem("email")
      //const user = result.user;
    })
    .catch(function(error){
      console.log("Error Logging in.");
    })

  };

  function logout(){
    firebase.auth().signOut()
    //.then(function(){
      //a_logged_in.style.display = "none";
      //message.innerHTML="<p>Logged out.</p>";
  //  })
    .catch(function(error){
      console.log("Error Logging out.");
    });
    message.innerHTML="<p>Logged out.</p>";
    alert("You have been logged out!");
  };

/*
  function loggedOutPageLoad(){
    get_log_in.addEventListener('click',() => {a_logging_in.style.display = "block"});
    message.innerHTML="<p>Logged out.</p>";
    a_logging_in.style.display = "block";
    a_logged_in.style.display = "none";
    a_send_link_button.disabled = false;
    //a_send_link_button.addEventListener('click', sendEmailLoginLink);
  };
*/
/*
  function loggedInPageLoad(){
    message.innerHTML = "<p>Logged In.</p>";
    a_logged_in.style.display = "block";
    a_logout_button.disabled = false;
    //a_logout_button.addEventListener('click', logout);
  }
*/

  function authStateChange(user){
    if(user === null){
      message.innerHTML="<p>Logged out.</p>";
      a_logging_in.style.display = "block";
      //get_log_in.addEventListener('click', () => {a_logging_in.style.display = "block"});
      a_logged_in.style.display = "none";
      a_send_link_button.disabled = false;
      if (auth.logout)  auth.logout();
    }
    else{
      message.innerHTML = "<p>Logged In.</p>";
      //get_log_in.addEventListener('click', () => {alert("Already Signed in!")});
      a_logging_in.style.display = "none";
      a_logged_in.style.display = "block";
      a_logout_button.disabled = false;
      if (auth.login) auth.login();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const authf = firebase.auth();
    message.innerHTML="<p>Loaded</p>";
    a_send_link_button.addEventListener('click', sendEmailLoginLink);
    a_logout_button.addEventListener('click', logout);
    //get_log_in.addEventListener('click', () => {a_logging_in.style.display = "block"});
    authf.onAuthStateChanged(authStateChange);
    if(authf.isSignInWithEmailLink(location.href)){
      loginPageLoad();
    }
  });
})();


/*
message.innerHTML="<p>Logged in.</p>";
//get_log_in.addEventListener('click', () => {alert("Already Signed in!")});
a_logging_in.style.display = "none";
a_logged_in.style.display = "block";
a_logout_button.addEventListener('click', logout);
//alert(email);
//console.log("Logging in...");
*/
