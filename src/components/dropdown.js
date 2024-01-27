// dropdown.js

function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("active");

    // Change the arrow direction based on the dropdown's state
    var arrowIcon = document.querySelector(".arrow-icon");
    if (dropdown.classList.contains("active")) {
        arrowIcon.classList.add("up");
    } else {
        arrowIcon.classList.remove("up");
    }
}

function handleDropdownItemClick(item) {
    console.log('Dropdown item clicked:', item);
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.arrow-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
                document.querySelector(".arrow-icon").classList.remove("up");
            }
        }
    }
}

export { toggleDropdown, handleDropdownItemClick };
