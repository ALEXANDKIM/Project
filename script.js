// Add event listener to button
document.getElementById("load-btn").addEventListener("click", function() {
  // Show loader
  document.getElementById("loader").style.display = "block";

  // Hide loader after 5 seconds
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 5000);
});