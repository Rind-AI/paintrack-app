
# PainTrack Pro

PainTrack Pro is a web-based application designed for healthcare professionals to monitor and manage patient pain levels. It provides a user-friendly interface for patients to log their pain, and for doctors to view and analyze the data through charts and statistics. The application can be connected to a Google Sheet for easy data storage and management.

## Features

- **Patient-friendly data entry:** Simple form for patients to input their pain level, date, and any relevant notes.
- **Interactive pain scale:** A visual pain scale from 0 to 10 for easy and accurate reporting.
- **Data visualization:** A line chart displays the patient's pain progress over time.
- **Patient statistics:** Key metrics such as today's pain level, 7-day average, and 30-day trend are prominently displayed.
- **Recent entries:** A list of the most recent pain entries for a quick overview.
- **Google Sheets integration:** Securely store and manage patient data in a Google Sheet.
- **Local storage fallback:** If Google Sheets is not configured, data is stored locally in the browser.

## Getting Started

To use PainTrack Pro, you will need a web browser and a Google account (for Google Sheets integration).

### Setup

1. **Open the application:** Open the `index.html` file in your web browser.
2. **Google Sheets Integration (optional):**
   - Create a new Google Sheet.
   - In the first row, add the following headers: `Date`, `Patient_ID`, `Pain_Level`, `Notes`, `Timestamp`.
   - Go to `Extensions > Apps Script`.
   - Copy the code from `google-apps-script.js` and paste it into the Apps Script editor.
   - Deploy the script as a web app. **Note:** When deploying, you must grant the script permission to access your Google Sheets.
   - Copy the web app URL.
   - In the PainTrack Pro application, click on the "Setup Google Sheets" button.
   - Paste the Google Sheets URL and the web app URL into the respective fields and save the configuration.

### Usage

- **Enter patient data:** Fill in the patient's ID, select the date, choose a pain level, and add any notes.
- **Save entry:** Click the "Save Entry" button to log the data.
- **View data:** The chart and recent entries will update automatically.
- **Switch between patients:** If you are tracking multiple patients, you can enter a different patient ID to view their specific data.

## Codebase

- **`index.html`:** The main HTML file containing the structure and JavaScript for the frontend application.
- **`google-apps-script.js`:** The Google Apps Script code for the backend logic and Google Sheets integration.
- **`README.md`:** This file.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

**Happy tracking!**
