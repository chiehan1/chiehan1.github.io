function signIn(googleUser) {
    // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

    // The ID token you need to pass to your backend:
  var idToken = googleUser.getAuthResponse()['id_token'];
  console.log('ID Token: ' + idToken);
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

document.getElementById('signOutLink')
  .addEventListener('click', signOut, false);