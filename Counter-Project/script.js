document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    const stepInput = document.getElementById('step-value');
    const incrementBtn = document.querySelector('.btn-1');
    const decrementBtn = document.querySelector('.btn-2');
    const resetBtn = document.querySelector('.reset-btn');
  
    let counter = 0;
  
    // Function to update the counter display
    const updateCounter = () => {
      counterDisplay.textContent = counter;
    };
  
    // Event listener for increment button
    incrementBtn.addEventListener('click', () => {
      const step = parseInt(stepInput.value) || 1;
      counter += step;
      updateCounter();
    });
  
    // Event listener for decrement button
    decrementBtn.addEventListener('click', () => {
      const step = parseInt(stepInput.value) || 1;
      counter -= step;
      updateCounter();
    });
  
    // Event listener for reset button
    resetBtn.addEventListener('click', () => {
      counter = 0;
      updateCounter();
    });
  });
  