/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable strict */
$(function() {
    $('#js-shopping-list-form').submit((event) => {
      event.preventDefault();
      console.log('A button was clicked')
       let listItem = $('#shopping-list-entry').val();
    console.log('item detected', listItem);
  
    let template = `<li>
    <span class="shopping-item">${listItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
  
    $('.shopping-list').append(template);;
    });
  

    $('.shopping-item-toggle').on('click', function(event) {
      let checkVar = $(this).parent().siblings().toggleClass('shopping-item__checked');
           
    });
   
    
    $('.shopping-item-delete').on('click', function() {
      $(this).parentsUntil('ul').remove();
    });
  
  });

  


 
  
