const SPREADSHEET_ID = '1V2nl7VLrc7E5tYe5LZFiIelYk7iNFxrZvEVG9Byc1U8';

function doPost(e) {
  try {
    if (!e) {
      return createCORSResponse({success: false, error: 'Event parameter undefined'});
    }

    let action, data;

    // Handle form data (from FormData)
    if (e.parameter && e.parameter.action) {
      action = e.parameter.action;
      data = JSON.parse(e.parameter.data || '{}');
    }
    // Handle JSON data (fallback)
    else if (e.postData && e.postData.contents) {
      const jsonData = JSON.parse(e.postData.contents);
      action = jsonData.action;
      data = jsonData.data;
    } else {
      return createCORSResponse({success: false, error: 'No valid data'});
    }

    if (action === 'addEntry') {
      return addPainEntry(data);
    }

    return createCORSResponse({success: false, error: 'Unknown action'});
  } catch (error) {
    return createCORSResponse({success: false, error: error.toString()});
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action;

    if (action === 'test') {
      return createCORSResponse({success: true, message: 'Connection successful'});
    }

    if (action === 'getData') {
      return getPainData(e.parameter.patientId);
    }

    return createCORSResponse({success: false, error: 'Unknown action'});
  } catch (error) {
    return createCORSResponse({success: false, error: error.toString()});
  }
}

function addPainEntry(data) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Date', 'Patient_ID', 'Pain_Level', 'Notes', 'Timestamp']);
    }

    // Add the new entry
    sheet.appendRow([
      data.date,
      data.patientId,
      data.level,
      data.notes,
      new Date().toISOString()
    ]);

    return createCORSResponse({success: true, message: 'Entry added successfully'});
  } catch (error) {
    return createCORSResponse({success: false, error: error.toString()});
  }
}

function getPainData(patientId) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    const data = sheet.getDataRange().getValues();

    if (data.length <= 1) {
      return createCORSResponse({success: true, data: []});
    }

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

    return createCORSResponse({success: true, data: filteredEntries});
  } catch (error) {
    return createCORSResponse({success: false, error: error.toString()});
  }
}

function createCORSResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
