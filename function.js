document.getElementById("Form").addEventListener(submit, function(event) {
      event.preventDefault();

      // get value on console
      // DOM manuplation
      let finame = document.getElementById("finame").value;
       let lname = document.getElementById("name").value; 
      let email = document.getElementById("email").value;
      let DOB = document.getElementById("DOB").value;
      let AdharNumber = document.getElementById("Adhar number").value;
      let FatherName = document.getElementById("fName").value;
      let MotherName = document.getElementById("mName").value;
      let passYear = document.getElementById("pYear").value;
      let SchoolName = document.getElementById("sName").value;
      let mobileNumber = document.getElementById("moNumber").value;
      let AmobileNumber = document.getElementById("AmoName").value;
      
      

      // Print values to console
      console.log("Form Submitted:");
      console.log("First Name:", finame);
      console.log("Last Name:", lname);
      console.log("Email:", email);
      console.log("Date of birth:",DOB );
      console.log("Adhar Number:",AdharNumber );
      console.log("Father Name:",FatherName );
      console.log("Mother Name:",MotherName );
      console.log("Board pass year(class 10th):",passYear);
      console.log("School Name:",SchoolName);
      console.log("Mobile number:",mobileNumber);
      console.log("Alternate mobile number:",AmobileNumber);
    
    });
    Form.reset();
    function submit(){
      console.log("submit");
    }
  