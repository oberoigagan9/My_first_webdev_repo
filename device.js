// Get the H2 tag using the document's querySelector() method
var deviceH2 = document.querySelector("#deviceName");

window.addEventListener("resize", function() {
    // Get the screen width using the window's innerWidth property
    var screenWidth = window.innerWidth;

    // Update the H2 tag based on the screen width
    if (screenWidth >= 320 && screenWidth < 480) {
        deviceH2.textContent = "Mobile";
    } else if (screenWidth >= 481 && screenWidth <= 768) {
        deviceH2.textContent = "Tablet";
    } else if (screenWidth >= 769 && screenWidth <= 1024) {
        deviceH2.textContent = "Laptops or Small Screens";
    } else {
        deviceH2.textContent = "Desktop or Larger";
    }
});
