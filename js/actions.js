function send_mail()
{
	
	var name=$("#name").val();
	var email=$("#email").val();
	var comment=$("#comment").val();
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
	if(name=="")
	{
		alert("Please enter name");
		$('#name').focus();
	}
	else if(email=="")
	{
		alert("Please enter a valid email");
		$('#email').focus();
	}
	else if (!EmailValid)
   {
   alert("Enter a valid email");
   $('#email').focus();
   }
	else if(comment=="")
	{
		alert("Please enter you comment");
		$('#comment').focus();
	}
	else{
		$("#result").html('<font color="blue">Sending mail,please wait.</font>');
	$.ajax({
		  type: "POST",
		  url: "actions.php",
                  data: {action:'send_mail',name:name,email:email,comment:comment},
		  success: function( res ) {
			$("#result").html(res);
			
			
		}
		   
	});
}}
function search()
{
	var industry=$('#industry').val();
	var hi_degree=$('#hi_degree').val();
	var year_gra=$('#year_gra').val();
	$("#search_result").html('<font color="blue">Search.</font>');
	$.ajax({
		  type: "POST",
		  url: "actions.php",
                  data: {action:'search',industry:industry,hi_degree:hi_degree,year_gra:year_gra},
		  success: function( res ) {
			$("#search_result").html(res);
			}
			});}
function profile_setting()
{
	
	var fname=$('#fname').val();
    var lname=$('#lname').val();
    var location=$('#location').val();
    var occupation=$('#occupation').val();
    var curr_sale=$('#curr_sale').val();
    var interests=$('#interests').val();
    var len=fname.length;
	var len1=lname.length;
	var checkOK = "0123456789";
     var checkStr = curr_sale;
     var allValid = true;
     for (i = 0;  i < checkStr.length;  i++)
     {
     ch = checkStr.charAt(i);
     for (j = 0;  j < checkOK.length;  j++)
     if (ch == checkOK.charAt(j))
     break;
     if (j == checkOK.length)
     {
     allValid = false;
     break;
     }
     }
    var checkOK1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
     var checkStr = fname;
     var allValid1 = true;
     for (i = 0;  i < checkStr.length;  i++)
     {
     ch = checkStr.charAt(i);
     for (j = 0;  j < checkOK1.length;  j++)
     if (ch == checkOK1.charAt(j))
     break;
     if (j == checkOK1.length)
     {
     allValid1 = false;
     break;
     }
     }
     var checkOK2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
     var checkStr = lname;
     var allValid2 = true;
     for (i = 0;  i < checkStr.length;  i++)
     {
     ch = checkStr.charAt(i);
     for (j = 0;  j < checkOK2.length;  j++)
     if (ch == checkOK2.charAt(j))
     break;
     if (j == checkOK2.length)
     {
     allValid2 = false;
     break;
     }
     }
	 if (fname=="")
     {
     alert("Enter First Name");
     $('#fname').focus();
     }
     else if(len<3)
     {
   	 alert("Enter mninmum 3 characters in Fist Name");	
   	 $('#fname').focus();
     }
     else if (!allValid1)
     {
     alert("Enter letters only.");
     $('#fname').focus();
     }
     else if(lname=="")
     {
     alert("Please enter Last Name");
     $('#lname').focus();
     }
     else if(len1<3)
     {
   	 alert("Enter mninmum 3 characters in List Name");	
   	 $('#lname').focus();
     }
     else if (!allValid2)
     {
     alert("Enter letters only.");
     $('#lname').focus();
     }
     else if(location=="")
     {
     alert("Please Enter Location");
     $('#location').focus();
     }
     else if(occupation=="")
     {
     alert("Please Enter Occupation");
     $('#occupation').focus();
     }
     
     else if(curr_sale=="")
     {
     alert("Please Enter Current Salary");
     $('#curr_sale').focus();
     }
     else if (!allValid)
     {
     alert("Please Enter Numbers only");
     $('#curr_sale').focus();
     }
     else if(interests=="")
     {
     alert("Please Enter Your Interests");
     $('#interests').focus();
     }
     else
     {
	$("#edit_result").html('<font color="blue">Updating Your Profile.Please Wait</font>');
	$.ajax({
		  type: "POST",
		  url: "actions.php",
                  data: {action:'profile_setting',fname:fname,lname:lname,location:location,occupation:occupation,curr_sale:curr_sale,interests:interests},
		  success: function( res ) {
			$("#edit_result").html(res);
			$("#loc").html(location);
			$("#occ").html(occupation);
			$("#curr").html(curr_sale);
			$("#int").html(interests);
			}
			});}
}

