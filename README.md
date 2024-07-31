# Work Day Scheduler

## Description

This Work Day Scheduler is an advanced calendar application that allows users to save events for each hour of any day throughout the year. It runs in the browser and features dynamically updated HTML and CSS powered by jQuery. The app uses the Day.js library to work with date and time.

## Features

- Displays a full year calendar with a date picker
- Shows the selected date at the top of the calendar
- Presents timeblocks for standard business hours (9am–5pm) for any selected date
- Color-codes each timeblock based on past, present, and future relative to the current date and time
- Allows users to enter and save events for each timeblock on any date
- Saves events in local storage
- Persists saved events even after refreshing the page
- Allows users to review past and future scheduled events

## Usage

1. Open the Work Day Scheduler in your web browser.
2. Use the date picker on the left to select any date.
3. The selected date will be displayed at the top of the page.
4. Timeblocks for each hour of the working day (9am-5pm) will be displayed on the right.
5. Each timeblock is color-coded:
   - Gray: Past
   - Red: Present (only for the current date)
   - Green: Future
6. Click into a timeblock to enter an event.
7. Click the save button (floppy disk icon) on the right to save the event for that specific date and time.
8. You can navigate to different dates to view, add, or edit events for those dates.
9. Refresh the page, and your saved events will still be there.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- jQuery UI (for the datepicker)
- Day.js
- Bootstrap
- Font Awesome

## Installation

No installation is required. Simply open the `wdsa.html` file in a web browser to use the application.

## Future Enhancements

- Add the ability to set reminders for events
- Implement a week view and month view
- Allow for recurring events

## License

This project is licensed under the MIT License.