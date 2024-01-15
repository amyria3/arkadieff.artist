"handleKeyPress(event)"


function handleKeyPress(event) {
  if (event.key === 'Enter' || event.keyCode === 13) {
    event.preventDefault(); // Prevent the default behavior of the Enter key

    // Get the current tabIndex value
    let currentTabIndex = parseInt(event.currentTarget.tabIndex);

    // Check if the element that triggered the event is currently focused
    if (document.activeElement === event.currentTarget) {
      // Check if the next level index exists
      let nextLevelIndex = currentTabIndex.toString() + 1;
      let nextLevelElement = document.querySelector('[tabindex="' + nextLevelIndex + '"]');
      console.log("noticed Enter for Index " + nextLevelIndex)

      // If the next level element exists, focus it; otherwise, go to the next element on the same level
      if (nextLevelElement) {
        nextLevelElement.focus();
      } else {
        // Go to the next element on the same level after a short delay
        setTimeout(() => {
          let nextElementSelectable = currentTabIndex + 1;

          // Keep incrementing the nextElementSelectable until an element is found
          while (!document.querySelector('[tabindex="' + nextElementSelectable + '"]')) {
            nextElementSelectable++;
          }

          // Focus the found element
          let nextElement = document.querySelector('[tabindex="' + nextElementSelectable + '"]');
          if (nextElement) {
            nextElement.focus();
          }
        }, 100); // 100 milliseconds delay
      }
    }
  }
}
