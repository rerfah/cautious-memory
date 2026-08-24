/*
  Replace the sample entries below with every penal code from your spreadsheet.

  Required fields:
    code             = penal-code reference, e.g. "01"
    reference        = name, e.g. "Criminal Threats"
    classification   = classification shown on the right of the list
    fine             = numeric fine
    jailTime         = jail time in seconds
    impoundment      = "Yes" or "No"
    section          = section/category
    warrantsArrest   = true/false

  The app does not need a server/database. This file is the local database.
*/

const PENAL_CODES = [
  {
    code: "01",
    reference: "Criminal Threats",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 150,
    impoundment: "No",
    section: "1",
    warrantsArrest: true
  }
];
