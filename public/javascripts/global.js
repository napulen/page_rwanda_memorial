// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

  // Populate the user table on initial page load
  populateTable();

  // Username link click
  $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);

  // Add User button click
  $('#btnAddUser').on('click', addUser);

  // Delete User link click
  $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

  // Converts undefined into empty string
  function emptyStringer (s) { if (s === undefined) { return '' } else { return s } }

  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/victims/victimelist', function( data ) {

    // Stick our user data array into a userlist variable in the global object
    userListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td>' + emptyStringer(this["Prénom de la personne que soumet le formulaire"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Nom de la personne que soumet le formulaire"]) + '</td>';
      tableContent += '<td><a href="#" class="linkshowuser" rel="' + this["Email address soumeter"] + '">' + emptyStringer(this["Email address soumeter"]) + '</a></td>';
      tableContent += '<td>' + emptyStringer(this["Relation avec la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Prénom de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Nom de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Prénom du pere de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Nom du pere de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Prénom de la mere de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Nom de la mere de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Date de naissance de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Date de décès de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Lieu de naissance de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Lieu de résidence de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Lieu de décès de la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Profession et lieu de travail"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Témoignage sur la victime"]) + '</td>';
      tableContent += '<td>' + emptyStringer(this["Circonstances de décès"]) + '</td>';
      tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#userList table tbody').html(tableContent);
  });
};


// Show User Info
function showUserInfo(event) {

  // Prevent Link from Firing
  event.preventDefault();

  // Retrieve username from link rel attribute
  var thisUserName = $(this).attr('rel');

  // Get Index of object based on id value
  var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.username; }).indexOf(thisUserName);

  // Get our User Object
  var thisUserObject = userListData[arrayPosition];

  //Populate Info Box
  $('#userInfoName').text(thisUserObject.fullname);
  $('#userInfoAge').text(thisUserObject.age);
  $('#userInfoGender').text(thisUserObject.gender);
  $('#userInfoLocation').text(thisUserObject.location);

};

// function nullifier(s) {
//   if (s === '') {
//     return null
//   }
// }

// Add User
function addUser(event) {
  event.preventDefault();

  // Super basic validation - increase errorCount variable if any fields are blank
  var errorCount = 0;
  // $('#addUser input').each(function(index, val) {
  //   if($(this).val() === '') { errorCount++; }
  // });

  // Check and make sure errorCount's still at zero
  if(errorCount === 0) {

    // If it is, compile all user info into one object
    var newUser = {
      'Prénom de la personne que soumet le formulaire': $('#addUser fieldset input#inputPrenomSoumeter').val(),
      'Nom de la personne que soumet le formulaire': $('#addUser fieldset input#inputNomSoumeter').val(),
      'Email address soumeter': $('#addUser fieldset input#inputEmailSoumeter').val(),
      'Relation avec la victime': $('#addUser fieldset input#inputRelationAvecVictime').val(),
      'Prénom de la victime': $('#addUser fieldset input#inputPrenomVictime').val(),
      'Nom de la victime': $('#addUser fieldset input#inputNomVictime').val(),
      'Prénom du pere de la victime': $('#addUser fieldset input#inputPrenomPere').val(),
      'Nom du pere de la victime': $('#addUser fieldset input#inputNomPere').val(),
      'Prénom de la mere de la victime': $('#addUser fieldset input#inputPrenomMere').val(),
      'Nom de la mere de la victime': $('#addUser fieldset input#inputNomMere').val(),
      'Date de naissance de la victime': $('#addUser fieldset input#inputDateNaissance').val(),
      'Date de décès de la victime': $('#addUser fieldset input#inputDateDeces').val(),
      'Lieu de naissance de la victime': $('#addUser fieldset input#inputLieuNaissance').val(),
      'Lieu de résidence de la victime': $('#addUser fieldset input#inputLieuResidence').val(),
      'Lieu de décès de la victime': $('#addUser fieldset input#LieuDeces').val(),
      'Profession et lieu de travail': $('#addUser fieldset input#inputProfessionVictime').val(),
      'Témoignage sur la victime': $('#addUser fieldset input#inputTemoignane').val(),
      'Circonstances de décès': $('#addUser fieldset input#inputCirconstancesDeces').val(),
      // 'Circonstances de décès': null
    }

    // Droping the empty key values, this will be used for schema validation
    Object.keys(newUser).forEach(k => (!newUser[k] && newUser[k] !== undefined) && delete newUser[k]);

    // Use AJAX to post the object to our adduser service
    $.ajax({
      type: 'POST',
      data: newUser,
      url: '/victims/addvictim',
      dataType: 'JSON'
    }).done(function( response ) {

      // Check for successful (blank) response
      if (response.msg === '') {

        // Clear the form inputs
        $('#addUser fieldset input').val('');

        // Update the table
        populateTable();

      }
      else {

        // If something goes wrong, alert the error message that our service returned
        // alert('Error: ' + response.msg);
        alert('Please fill in all fields');

      }
    });
  }
  else {
    // If errorCount is more than 0, error out
    alert('Please fill in all fields');
    return false;
  }
};

// Delete User
function deleteUser(event) {

  event.preventDefault();

  // Pop up a confirmation dialog
  var confirmation = confirm('Are you sure you want to delete this user?');

  // Check and make sure the user confirmed
  if (confirmation === true) {

    // If they did, do our delete
    $.ajax({
      type: 'DELETE',
      url: '/victims/deleteuser/' + $(this).attr('rel')
    }).done(function( response ) {

      // Check for a successful (blank) response
      if (response.msg === '') {
      }
      else {
        alert('Error: ' + response.msg);
      }

      // Update the table
      populateTable();

    });

  }
  else {

    // If they said no to the confirm, do nothing
    return false;

  }

};
