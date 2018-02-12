// Variable declarations
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');
const table = $('#pixel_canvas');
const inputSubmit = $('#submit');
const inputClear = $('#clearTable');
const inputColor = $('input[type="color"]');

// Function to trigger makeGrid() when submit button is clicked
inputSubmit.click(function(evt) {
  evt.preventDefault();

  // Clear previously made table (if any)
  table.html('');
  makeGrid();
});

// Function to clear all cells from the table when button is clicked
inputClear.click(function(evt) {
  evt.preventDefault();
  clearTable();
});

// ClearTable function
function clearTable() {
  const td = $('td');
  td.removeAttr('bgColor', inputColor.val());
}

// Make grid function
function makeGrid() {
  height = inputHeight.val();
  width = inputWidth.val();

  // Loop to:
  // Create rows
  for (let row = 0; row < height; row++) {
    table.append('<tr></tr>');

    //Create columns
    for (let col = 0; col < width; col++) {
      table.children().last().append('<td></td>');
    }
  }
}

// Function to change the clicked cell background color
table.on('click', 'td', function() {
  $(this).attr('bgColor', inputColor.val());
});

// Function to remove the background color from the clicked cell
table.on('dblclick', 'td', function() {
  $(this).removeAttr('bgColor', inputColor.val());
});

makeGrid();
