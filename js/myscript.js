

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

$( document ).ready(function() {


	// MOBILE NAVIGATION TOGGLE
	$('#nav-icon').click(function(){
		$('.menu-items').slideToggle(400);
	});
	// MOBILE NAVIGATION TOGGLE

    console.log( "Devio Above Script Is Completed!" );



});