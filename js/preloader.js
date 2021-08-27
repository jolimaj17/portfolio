var preload={
   
    myFunction: function()
	{
        var loader;
        loader = setTimeout(preload.showPage, 300);  

    },
    showPage: function()
	{
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block";
		document.getElementById("footer").style.display = "block";

    }
};



