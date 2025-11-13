// Google Apps Script for PainTrack - Google Sheets Integration
// Copy this code to Google Apps Script (script.google.com)

function doPost(e) {
  try {
    // Handle FormData from frontend
    const action = e.parameter.action;
    const dataString = e.parameter.data;

    if (action === 'addEntry' && dataString) {
      const data = JSON.parse(dataString);
      return addPainEntry(data);
    }

    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: 'Unknown action'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action;
    
    if (action === 'test') {
      return ContentService
        .createTextOutput(JSON.stringify({success: true, message: 'Connection successful'}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (action === 'getData') {
      return getPainData(e.parameter.patientId);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: 'Unknown action'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function addPainEntry(data) {
  try {
    // Get the active spreadsheet (or specify by ID)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Date', 'Patient_ID', 'Pain_Level', 'Notes', 'Timestamp']);
    }
    
    // Add the new entry
    sheet.appendRow([
      data.date,
      data.patientId,
      data.level,
      data.notes,
      data.timestamp
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Entry added successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getPainData(patientId) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    if (data.length <= 1) {
      return ContentService
        .createTextOutput(JSON.stringify({success: true, data: []}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Convert to objects and filter by patient ID if provided
    const headers = data[0];
    const entries = data.slice(1).map(row => {
      const entry = {};
      headers.forEach((header, index) => {
        entry[header] = row[index];
      });
      return entry;
    });
    
    const filteredEntries = patientId ? 
      entries.filter(entry => entry.Patient_ID === patientId) : 
      entries;
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, data: filteredEntries}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to create a new spreadsheet with proper headers
function createPainTrackSheet() {
  const spreadsheet = SpreadsheetApp.create('PainTrack - Patient Data');
  const sheet = spreadsheet.getActiveSheet();
  
  // Set up headers
  sheet.appendRow(['Date', 'Patient_ID', 'Pain_Level', 'Notes', 'Timestamp']);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, 5);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4361ee');
  headerRange.setFontColor('white');
  
  // Set column widths
  sheet.setColumnWidth(1, 100); // Date
  sheet.setColumnWidth(2, 150); // Patient_ID
  sheet.setColumnWidth(3, 100); // Pain_Level
  sheet.setColumnWidth(4, 300); // Notes
  sheet.setColumnWidth(5, 150); // Timestamp
  
  Logger.log('Spreadsheet created: ' + spreadsheet.getUrl());
  return spreadsheet.getUrl();
}