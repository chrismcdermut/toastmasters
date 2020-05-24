/* Script cobbled together to automate many of the Table Topics functions so that we all can fully participate.
Tracking time, picking questions, and recording speaker and duration data */

//Create the menu item and open it.
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Table Topics Sidebar')
      .addItem('Launch Sidebar', 'showSidebar')
      .addToUi();
}
function showSidebar(){
  var html = HtmlService.createHtmlOutputFromFile('Table_Topics_Sidebar').setTitle('Table Topics Sidebar').setWidth(100);
  SpreadsheetApp.getUi().showSidebar(html);
}


/*part of the original code to move text input from HTML sidebar to script below to spreadsheet*/
// Sets the value of D1 cell to value entered in the input field in the side bar!
function enterName(name){
 var sheetTS = SpreadsheetApp.getActive().getSheetByName('Timer Sheet');
 sheetTS.getRange("D1").setValue(name)
}


//WIP: conditional formatting to automate green,yellow,red color changes based on timer in HTML
function applyConditionalFormatting() {
  var sheetD = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Dashboard');

  var numRows = sheetD.getLastRow();
  var rangeToHighlight = sheetD.getRange("A2:A" + numRows);
  var rule = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=INDIRECT("R[1]C[1]", FALSE)="X"')
      .setBackground("green")
      .setRanges([rangeToHighlight])
      .build();

  var rules = sheetD.getConditionalFormatRules();
  rules.push(rule);
  sheetD.setConditionalFormatRules(rules);
}
