(function(){
  //console.log("storage.js is Loaded");

  auth.login = function(){
    //console.log("auth.login is ran");
    list_storage.style.display = "block";
    list_edit_button.disabled = false;
  }

  auth.logout = function(){
  }

  document.addEventListener('DOMContentLoaded', () => {
    list_edit_button.addEventListener('click', () => {
      list_edit_button.disabled = true;
      list_storage_view.style.display = "none";
      list_storage_edit.style.display = "block";
      list_edit_confirm_button.disabled = false;
      list_edit_cancel_button.disabled = false;
    })

    list_edit_confirm_button.addEventListener('click', () => {
      list_edit_button.disabled = false;
      list_storage_view.style.display = "block";
      list_storage_edit.style.display = "none";
      list_edit_confirm_button.disabled = true;
      list_edit_cancel_button.disabled = true;
    })

    list_edit_cancel_button.addEventListener('click', () => {
      list_edit_button.disabled = false;
      list_storage_view.style.display = "block";
      list_storage_edit.style.display = "none";
      list_edit_confirm_button.disabled = true;
      list_edit_cancel_button.disabled = true;
    })

  });
})();
