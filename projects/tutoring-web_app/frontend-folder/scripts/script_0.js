// Get the search form and attach an event listener
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", searchTutors);

// Function to handle the tutor search
function searchTutors(event) {
  event.preventDefault();

  // Get the location and subject inputs
  const locationInput = document.getElementById("location-input");
  const subjectInput = document.getElementById("subject-input");

  // Fetch tutors based on the search criteria
  fetchTutors(locationInput.value, subjectInput.value);
}

// Function to fetch tutors based on search criteria
function fetchTutors(location, subject) {
  // Make an API call to fetch tutors based on the location and subject
  // Replace this with your actual API call

  // Example response data (replace with your actual API response)
  const tutors = [
    { name: "John Doe", location: "New York", subject: "Math", ratings: 4.8 },
    { name: "Jane Smith", location: "Los Angeles", subject: "English", ratings: 4.9 },
  ];

  // Display the fetched tutors
  displayTutors(tutors);
}

// Function to display the fetched tutors
function displayTutors(tutors) {
  const featuredTutors = document.getElementById("featured-tutors");

  // Clear existing tutor cards
  featuredTutors.innerHTML = "";

  // Create and append tutor cards for each tutor
  tutors.forEach((tutor) => {
    const tutorCard = document.createElement("div");
    tutorCard.classList.add("tutor-card");
    
    const tutorName = document.createElement("h3");
    tutorName.textContent = tutor.name;
    tutorCard.appendChild(tutorName);

    const tutorLocation = document.createElement("p");
    tutorLocation.textContent = "Location: " + tutor.location;
    tutorCard.appendChild(tutorLocation);

    const tutorSubject = document.createElement("p");
    tutorSubject.textContent = "Subject: " + tutor.subject;
    tutorCard.appendChild(tutorSubject);

    const tutorRatings = document.createElement("p");
    tutorRatings.textContent = "Ratings: " + tutor.ratings;
    tutorCard.appendChild(tutorRatings);

    featuredTutors.appendChild(tutorCard);
  });
}
