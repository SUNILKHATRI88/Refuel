/**
 * 
 */
document.getElementById("myButton").onclick = function () 
    {
        location.href = "file:///Users/sunilkhatri/Documents/workspace/SUNIL/MYHTML2.html";
    };
    
    function todaydate()
    {
    	var currentdate = new Date(); 
    	var datetime =  + currentdate.getDate() + "/"
    	                + (currentdate.getMonth()+1)  + "/" 
    	                + currentdate.getFullYear() + " @ "  
    	                + currentdate.getHours() + ":"  
    	                + currentdate.getMinutes() + ":" 
    	                + currentdate.getSeconds();
    	document.getElementById("demo").innerHTML = datetime;
    }







	