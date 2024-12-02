document.addEventListener("DOMContentLoaded", () => {
  const ratingCard = document.querySelector(".content-wrapper:first-child");
  const thankYouCard = document.querySelector(".thank-you-content");
  const submitButton = document.querySelector(".button");
  const ratingInputs = document.querySelectorAll('input[name="rating"]');
  const selectedValueSpan = document.querySelector(".select span");

  thankYouCard.style.display = "none"; // Hide final card at the beginning

  submitButton.addEventListener("click", () => {
    const selectedRating = [...ratingInputs].find(
      (input) => input.checked
    )?.value;

    if (selectedRating) {
      selectedValueSpan.textContent = selectedRating; // display the selected value
      ratingCard.style.display = "none"; // Hide the rating card
      thankYouCard.style.display = "flex"; // Display the final card
    } else {
      alert("Select a value before submission ");
    }
  });
});
