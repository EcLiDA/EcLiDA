function c(val)
{
    document.getElementById("d").value=val;
}


function math(val)
{
    document.getElementById("d").value+=val;
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}
function e()

{
    try
    {
      c(eval(document.getElementById("d").value))
    }
    catch(e)
    {
      c('Error')
    }
}
 