function submit()
{
	window.location.href='logout.php';
}
function reg_validations()
{
	var f_name=$("#fname").val();
	var l_name=$("#lname").val();
	var email=$("#email").val();
	var password=$("#password").val();
	var repeat=$("#repeat").val();
	var h_degree=$("#h_degree").val();
	var year_gra=$("#year_gra").val();
	var industry=$("#industry").val();
	if(f_name=="")
	{
		alert("Please Enter First Name");
		$("#fname").focus();
		return false;
	}
	else if(l_name=="")
	{
		alert("Please Enter Last Name");
		$("#lname").focus();
		return false;
	}
	else if(email=="")
	{
		alert("Please Enter a valid Email");
		$("#email").focus();
		return false;
	}
		var checkEmail = "@.";
        var checkStr = email;
        var EmailValid = false;
        var EmailAt = false;
        var EmailPeriod = false;
        for (i = 0;  i < checkStr.length;  i++)
        {
        ch = checkStr.charAt(i);
        for (j = 0;  j < checkEmail.length;  j++)
        {
        if (ch == checkEmail.charAt(j) && ch == "@")
        EmailAt = true;
        if (ch == checkEmail.charAt(j) && ch == ".")
        EmailPeriod = true;
	    if (EmailAt && EmailPeriod)
		break;
	    if (j == checkEmail.length)
		break;
	    }
       if (EmailAt && EmailPeriod)
       {
		EmailValid = true
		break;
	  }
      } 
      if (!EmailValid)
      {
      alert("Enter a valid email");
      $("#email").focus();
      return (false);
      }
	  
	  else if(password=="")
	  {
		alert("Please Enter Password");
		$("#password").focus();
		return false;
	}
	else if(repeat=="")
	{
		alert("Please Enter Password Again");
		$("#repeat").focus();
		return false;
	}
	else if(h_degree=="Highest Degree")
	{
		alert("Please Select Highest Degree ");
		$("#h_degree").focus();
		return false;
	}
	else if(year_gra=="Year Of Graduation")
	{
		alert("Please Select Year Of Graduation");
		$("#year_gra").focus();
		return false;
	}
	else if(password!=repeat)
	{
		alert("Password and repeat password are not same");
		$("#repeat").focus();
		return false;
	}
	else if(industry=="Select Industry")
	{
		alert("Please select Industry");
		$("#industry").focus();
		return false;
	}

    else
	{
	return true;
	}
}

function valid_photo()
{
	var path = $("#cons_image").val();
	if(path=="")
	{
		alert("Please select a photo first");
		return false;
	}
	else{
		return true;
	}
}
