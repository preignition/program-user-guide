# How do I ensure that the data in my CSV file is properly formatted?

## Question:  When I download my survey data in a CSV file, the data is not appearing in the correct format.  How do I resolve this issue?

The underlying issue is likely to be caused by how your computer is set up to format CSV files. &#x20;

There are 2 ways to resolve this.

### Option 1-  Opening the file in excel

When you use the "Import Data" feature in Excel, Excel lets you specify that the CSV file is UTF-8 encoded.

To ensure Excel always opens CSV files with the correct characters, follow these steps:

1. Save the CSV file on your computer without opening the file.
2. Open a new Excel document.
3. In Excel, go to the Data tab on the ribbon.
4. Click From Text/CSV.
5. Select your CSV file and click Import.
6. In the preview window, if it looks incorrect, select 65001: Unicode (UTF-8) from the dropdown menu for the file origin.
7. Click Load.

Excel should display the characters correctly from your UTF-8 encoded CSV file.

### Option 2- Opening the file in another type of spreadsheet

Google Sheets and LibreOffice Calc seem to handle opening CSV files better than Excel.  So an alternative option is to save the CSV file on your computer and then import it into either Google Sheets or LibreOffice Calc.
