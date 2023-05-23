function getFormvalue() {
    //Write your code here
	var form = document.getElementById("form1");

      // Get the values of the first and last name fields
      var firstName = form.elements["Firstname"].value;
      var lastName = form.elements["Lastname"].value;

      // Display the first and last name using alert()
      alert("First Name: " + firstName + "\nLast Name: " + lastName);

}
