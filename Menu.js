"use strict";

var dropdown = document.getElementById('dropdownMenu');

var SiteSelectionDivs = document.getElementsByClassName('siteName');

for (var i = 0; i < dropdown.options.length; i++) {
  var optionName = dropdown.options[i].value;
  SiteSelectionDivs[i].id = optionName;
  SiteSelectionDivs[i].innerHTML = SiteSelectionDivs[i].innerHTML;
}

dropdown.addEventListener('change', function() {
  var selectedSection = document.getElementById(dropdown.value);
  selectedSection.scrollIntoView({behavior: "smooth"});
});
