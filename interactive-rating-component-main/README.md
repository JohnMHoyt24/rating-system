# Frontend Mentor - Interactive rating component
A simple rating form where a user can select from a scale 1 to 5 and submit their feedback. Then the state
of the component will change with a thank you message and the option to return to the original form.
## Rating State
<img width="363" height="313" alt="image" src="https://github.com/user-attachments/assets/bc67294b-6dda-41d8-b9ee-7b0386ae1b41" />

## Thank You State
<img width="812" height="359" alt="image" src="https://github.com/user-attachments/assets/1e0e92d2-f7ae-4407-a324-48a49db4bb2b" />

## John Hoyt

- Website - [John's World](https://www.your-site.com](https://accessible-portfolio-six.vercel.app/))
- Frontend Mentor - [@JohnMHoyt24]([https://www.frontendmentor.io/profile/yourusername](https://www.frontendmentor.io/profile/JohnMHoyt24))

## Technologies Used
- HTML
- JavaScript
- CSS
- Flexbox

## What I Learned
- The classList function and how it influences the state of the component by
  adding or removing the .hidden class

    ### index.js lines 8-22
    ```
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
  ```
- The Flexbox and how it can be used to organize divs and wrap text on a new line
  ### index.css lines 11-16
  ```
    form.rating-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }
```
