(function(){
  //console.log("auth.js loaded");
  function login(){
    const email = email_sign_in.value;
    message.innerHTML="<p>Logged in.</p>";
    a_logging_in.style.display = "none";
    a_logged_in.style.display = "block";
    //alert(email);
    //console.log("Logging in...");
  };
  function logout(){
    alert("You are being logged out");
    a_logging_in.style.display = "block";
    a_logged_in.style.display = "none";
    message.innerHTML="<p>Logged out.</p>";
  };
  document.addEventListener('DOMContentLoaded', () => {
    //document.getElementById("msg").innerText = "Hola Señor!";
    message.innerHTML="<p>Loaded</p>";
    //a_logging_in.style.display = "block";
    get_log_in.addEventListener('click',() => {a_logging_in.style.display = "block"});
    a_send_link_button.addEventListener('click', login);
    logout_button.addEventListener('click', logout);
  });

})();
