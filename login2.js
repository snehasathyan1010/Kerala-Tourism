function validate()
{
    var username=document_getElementById("username").value;
    var password=document_getElementById("password").value;
    if(username=="admin"&& password=="12345")
    {
        alert("Login successfully");
        return false;
    }
    else
    {
        alert("Login failed");
    }
}