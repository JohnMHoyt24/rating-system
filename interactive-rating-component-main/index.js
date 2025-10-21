document.addEventListener('DOMContentLoaded', () => {
  const ratingForm = document.querySelector('.rating-form');
  const ratingState = document.getElementById('rating-state');
  const thankYouState = document.getElementById('thank-you-state');
  const selectedRatingSpan = document.getElementById('selected-rating');
  const backButton = document.getElementById('back-button');

  ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedRating = document.querySelector('input[name="rating"]:checked');

    if(selectedRating) {
      const ratingValue = selectedRating.value;

      selectedRatingSpan.textContent = ratingValue;

      ratingState.classList.add('hidden');
      thankYouState.classList.remove('hidden');
    } else{
      alert('Please select a rating before submitting.');
    }
  });

  function resetForm(){
    ratingState.classList.remove('hidden');
    thankYouState.classList.add('hidden');

    ratingForm.reset();
  }

  backButton.addEventListener('click', () => {
    resetForm();
  });
});