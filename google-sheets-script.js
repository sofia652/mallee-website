/**
 * Mallee — Support Coordinator Lead Capture
 * Google Apps Script: paste this into your Google Sheet's script editor
 *
 * SETUP INSTRUCTIONS
 * ──────────────────
 * 1. Create a new Google Sheet (name it "Mallee SC Leads" or similar)
 * 2. In row 1, add these headers: Timestamp | First Name | Last Name | Email
 * 3. Open Extensions → Apps Script
 * 4. Delete any existing code and paste this entire file
 * 5. Click Save (floppy disk icon)
 * 6. Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 7. Click Deploy → copy the Web app URL
 * 8. Open supportcoordinators/index.html, find the line:
 *      const SHEETS_URL = 'REPLACE_WITH_YOUR_APPS_SCRIPT_URL';
 *    and replace the placeholder with your copied URL
 * 9. Save, commit, and push
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    const fname = (e.parameter.FNAME || '').trim();
    const lname = (e.parameter.LNAME || '').trim();
    const email = (e.parameter.EMAIL || '').trim();
    const timestamp = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });

    sheet.appendRow([timestamp, fname, lname, email]);

  } catch (err) {
    console.error('Mallee SC form error:', err);
  }

  // Always return 200 so the fetch() on the website resolves cleanly
  return ContentService
    .createTextOutput('OK')
    .setMimeType(ContentService.MimeType.TEXT);
}
