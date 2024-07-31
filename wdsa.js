$(function () {
    let selectedDate = dayjs();
  
    // Function to display current date
    function displayCurrentDate() {
      $('#currentDay').text(selectedDate.format('dddd, MMMM D, YYYY'));
    }
  
    // Function to generate time blocks
    function generateTimeBlocks() {
      var container = $('.container-lg');
      container.empty();
      for (var hour = 9; hour <= 17; hour++) {
        var timeBlock = $('<div>')
          .attr('id', 'hour-' + hour)
          .addClass('row time-block');
  
        var hourCol = $('<div>')
          .addClass('col-2 col-md-1 hour text-center py-3')
          .text(dayjs().hour(hour).format('hA'));
  
        var textArea = $('<textarea>')
          .addClass('col-8 col-md-10 description')
          .attr('rows', '3');
  
        var saveBtn = $('<button>')
          .addClass('btn saveBtn col-2 col-md-1')
          .attr('aria-label', 'save')
          .html('<i class="fas fa-save" aria-hidden="true"></i>');
  
        timeBlock.append(hourCol, textArea, saveBtn);
        container.append(timeBlock);
      }
    }
  
    // Function to update time block colors
    function updateTimeBlockColors() {
      var currentHour = dayjs().hour();
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
        if (selectedDate.isSame(dayjs(), 'day')) {
          if (blockHour < currentHour) {
            $(this).removeClass('present future').addClass('past');
          } else if (blockHour === currentHour) {
            $(this).removeClass('past future').addClass('present');
          } else {
            $(this).removeClass('past present').addClass('future');
          }
        } else if (selectedDate.isBefore(dayjs(), 'day')) {
          $(this).removeClass('present future').addClass('past');
        } else {
          $(this).removeClass('past present').addClass('future');
        }
      });
    }
  
    // Function to load saved events
    function loadSavedEvents() {
      $('.time-block').each(function () {
        var id = $(this).attr('id');
        var fullId = selectedDate.format('YYYY-MM-DD') + '-' + id;
        var savedEvent = localStorage.getItem(fullId);
        if (savedEvent) {
          $(this).find('.description').val(savedEvent);
        } else {
          $(this).find('.description').val('');
        }
      });
    }
  
    // Event listener for save button
    $(document).on('click', '.saveBtn', function () {
      var timeBlock = $(this).closest('.time-block');
      var id = timeBlock.attr('id');
      var fullId = selectedDate.format('YYYY-MM-DD') + '-' + id;
      var eventText = timeBlock.find('.description').val();
      localStorage.setItem(fullId, eventText);
    });
  
    // Initialize datepicker
    $('#datepicker').datepicker({
      onSelect: function(dateText) {
        selectedDate = dayjs(dateText);
        displayCurrentDate();
        updateTimeBlockColors();
        loadSavedEvents();
      }
    });
  
    // Initialize the app
    displayCurrentDate();
    generateTimeBlocks();
    updateTimeBlockColors();
    loadSavedEvents();
  
    // Update time block colors every minute
    setInterval(updateTimeBlockColors, 60000);
  });