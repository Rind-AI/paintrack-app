# PainTrack Pro - Professional Patient Pain Monitoring

A comprehensive web application for medical practices to track patient pain levels with Google Sheets integration for centralized data management.

## 🌟 Features

- **Professional Pain Tracking**: 0-10 pain scale with visual interface
- **Patient Management**: Individual patient tracking with unique IDs
- **Google Sheets Integration**: Centralized data storage and export
- **Real-time Charts**: Visual progress tracking with Chart.js
- **Statistical Analysis**: Daily, weekly, and monthly pain trends
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Local Backup**: Falls back to localStorage if Google Sheets unavailable

## 🚀 Live Demo

Visit: `https://yourusername.github.io/paintrack-app`

## 📊 Google Sheets Setup Guide

### Step 1: Create Google Sheets Document

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "PainTrack - Patient Data" 
4. The headers will be automatically created when first data is submitted

### Step 2: Set up Google Apps Script

1. In your Google Sheets, go to **Extensions** → **Apps Script**
2. Delete the default `myFunction()` code
3. Copy and paste the code from `google-apps-script.js` file
4. Save the project (Ctrl+S) and name it "PainTrack Integration"

### Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Type" and select **Web app**
3. Set the following configuration:
   - **Description**: "PainTrack Patient Data API"
   - **Execute as**: "Me (your-email@gmail.com)"
   - **Who has access**: "Anyone" (for public access) or "Anyone with Google account"
4. Click **Deploy**
5. **Important**: Copy the Web app URL - you'll need this for the PainTrack app

### Step 4: Configure PainTrack App

1. Open the PainTrack application
2. Click **"Setup Google Sheets"** button in the top right
3. Enter your Google Sheets URL
4. Paste the Google Apps Script Web App URL
5. Click **"Save Configuration"**
6. Test the connection using **"Test Connection"** button

## 📱 How to Use

### For Medical Staff:

1. **Enter Patient Information**: Input patient ID/name
2. **Record Pain Data**: Select date and pain level (0-10)
3. **Add Notes**: Document symptoms, medications, triggers
4. **Submit Entry**: Data saves to Google Sheets automatically
5. **View Analytics**: Review charts and statistics

### For Patients (Individual Use):

1. Use your name or patient ID consistently
2. Record daily pain levels
3. Add detailed notes about activities, medications
4. Track progress with visual charts

## 🔧 Technical Details

### Data Structure (Google Sheets)
| Column | Description |
|--------|-------------|
| Date | Entry date (YYYY-MM-DD) |
| Patient_ID | Patient identifier |
| Pain_Level | Pain level (0-10) |
| Notes | Additional comments |
| Timestamp | Entry creation time |

### Browser Compatibility
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 🛠️ Installation for GitHub Pages

### Option 1: Fork This Repository

1. Click **"Fork"** on this repository
2. Go to your forked repository settings
3. Scroll to **"Pages"** section
4. Select **"Deploy from a branch"**
5. Choose **"main"** branch and **"/ (root)"**
6. Your app will be live at: `https://yourusername.github.io/paintrack-app`

### Option 2: Create New Repository

1. Create a new repository named `paintrack-app`
2. Upload these files:
   - `index.html`
   - `README.md`
   - `google-apps-script.js`
3. Enable GitHub Pages in repository settings

## 🔒 Privacy & Security

- **Local Storage**: Data stored locally when Google Sheets not configured
- **HTTPS Only**: All data transmission encrypted
- **No Personal Data**: Only pain levels and notes stored
- **Google Security**: Uses Google's secure infrastructure
- **Access Control**: Configure who can access your Google Sheets

## 📧 Support

For technical support or feature requests:
1. Create an issue in this repository
2. Email: support@yourdomain.com
3. Include browser version and error details

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏥 Medical Disclaimer

This application is for informational and tracking purposes only. It is not intended to replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical decisions.

---

**Made with ❤️ for better patient care**