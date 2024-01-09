const audioPlayer = document.getElementById('audioPlayer');

  audioPlayer.addEventListener('dragstart', (event) => {
    // Set the drag data (you can customize this data)
    event.dataTransfer.setData('text/plain', 'Drag me!');
  });

  // Prevent the browser's default handling of the dragover event
  document.body.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  // Handle the drop event
  document.body.addEventListener('drop', (event) => {
    event.preventDefault();

    // Retrieve the data from the drag operation
    const data = event.dataTransfer.getData('text/plain');

    // Log the dropped data (you can replace this with your desired functionality)
    console.log('Dropped:', data);
  });