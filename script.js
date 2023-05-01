//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('color_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset_button');

changeButton.addEventListener('click', () => {
  const blockId = blockIdInput.value;
  const color = colorInput.value;
  const block = document.getElementById(blockId);
  
  if (block) {
    gridItems.forEach((item) => {
      item.style.backgroundColor = 'transparent';
    });
    
    block.style.backgroundColor = color;
  }
});

resetButton.addEventListener('click', () => {
  gridItems.forEach((item) => {
    item.style.backgroundColor = 'transparent';
  });
});