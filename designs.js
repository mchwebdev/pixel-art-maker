// Variable declarations
const inputHeight = $('#input-height');
const inputWidth = $('#input-width');
const table = $('#pixel-canvas');
const inputClear = $('#clear-table');
const inputColor = $('input[type="color"]');
const sizePicker = $('#size-picker');

// Function to trigger makeGrid() when submit button is clicked
sizePicker.submit(function(e) {
  e.preventDefault();

  // Clear previously made table (if any)
  table.html('');
  makeGrid();
});

// Function to clear all cells from the table when the clear table button is clicked
inputClear.click(function(e) {
  e.preventDefault();
  makeGrid();
});

// Make grid function
function makeGrid() {
  const height = inputHeight.val();
  const width = inputWidth.val();

  // Clear previously made table (if any)
  table.html('');

  // Loop to:
  // Create rows
  for (let row = 0; row < height; row++) {
    table.append('<tr class="canvas"></tr>');

    //Create columns
    for (let col = 0; col < width; col++) {
      table.children().last().append('<td class="canvas"></td>');
    }
  }
}

// Function to add or remove background color of cells
table.on('click', 'td', function() {
  // Checks the actual color value of bgColor
  let bgValue = $(this).attr('bgColor');

  // If the bgColor is different than the inputColor value,
  // replace the cell color with the inputColor value
  if (bgValue != inputColor.val()) {
    $(this).attr('bgColor', inputColor.val());

    // Else if the bgColor of the cell is the same as the inputColor value,
    // then remove the attribute to remove the background color
  } else if ($(this).is('[bgColor]')) {
    $(this).removeAttr('bgColor');

    // Else create bgColor attribute and add the inputColor value to it
  } else {
    $(this).attr('bgColor', inputColor.val());
  }
});

// Call makeGrid function to generate a grid on load
makeGrid();

// Media queries to change the input max value in order for the generated
// table to fit the smaller screens nicely
window.onresize = function() {
  if (window.matchMedia('(max-width: 320px)').matches) {
    document.getElementById('input-height').max = '12';
    document.getElementById('input-width').max = '12';
  } else if (window.matchMedia('(max-width: 375px)').matches) {
    document.getElementById('input-height').max = '14';
    document.getElementById('input-width').max = '14';
  } else if (window.matchMedia('(max-width: 425px)').matches) {
    document.getElementById('input-height').max = '16';
    document.getElementById('input-width').max = '16';
  } else if (window.matchMedia('(max-width: 768px)').matches) {
    document.getElementById('input-height').max = '30';
    document.getElementById('input-width').max = '30';
  }
}
