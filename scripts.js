 function toggleSection(sectionId) {
            // Hide all sections
            var sections = document.querySelectorAll("section");
            sections.forEach(function(section) {
                section.classList.remove("active");
            });

            // Show the selected section
            var selectedSection = document.getElementById(sectionId);
            selectedSection.classList.add("active");
        }

        // Show or hide the back to top button based on scroll position
        window.onscroll = function() {
            var button = document.querySelector('.back-to-top');
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                button.style.display = "flex"; // Show button
            } else {
                button.style.display = "none"; // Hide button
            }
        };

        function scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
