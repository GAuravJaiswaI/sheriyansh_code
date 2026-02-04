const btn = document.querySelector('button');
const h2 = document.querySelector('h2');
const inner = document.querySelector('.inner'); // The colored bar inside

btn.addEventListener('click', function () {
  // 1. Define variable LOCALLY so it resets on every click
  let grow = 0;

  // 2. Disable button immediately so user can't double click
  btn.style.pointerEvents = "none";
  btn.style.opacity = 0.5;

  // 3. Start the Interval
  const int = setInterval(function () {
    grow++;

    // Update UI
    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";

    // 4. SELF-CHECK: Check if we hit the limit inside the loop
    if (grow >= 100) {
      clearInterval(int); // Stop the loop
      btn.innerHTML = "Downloaded";
      // We don't need setTimeout anymore!
    }
  }, 50); // Speed
});