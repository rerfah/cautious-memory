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
    code: "(1)01",
    reference: "Criminal Threats",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 60,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)02",
    reference: "Assault",
    classification: "Felony",
    fine: 750,
    jailTime: 240,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)03",
    reference: "Assault with a Deadly Weapon",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)04",
    reference: "Battery",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)05",
    reference: "Aggravated Battery",
    classification: "Felony",
    fine: 0,
    jailTime: 120,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)06",
    reference: "Attempted Murder",
    classification: "Felony",
    fine: 10000,
    jailTime: 240,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)07",
    reference: "Manslaughter",
    classification: "Felony",
    fine: 0,
    jailTime: 270,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)08",
    reference: "Murder",
    classification: "Felony",
    fine: 0,
    jailTime: 600,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)09",
    reference: "False Imprisonment",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)10",
    reference: "Kidnapping (Banned RP)",
    classification: "Felony",
    fine: 0,
    jailTime: 210,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)11",
    reference: "Domestic Violence",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)12",
    reference: "Domestic Violence (Physical Traumatic Injury)",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)13",
    reference: "Assault on a Public Servant",
    classification: "Felony",
    fine: 1000,
    jailTime: 120,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)14",
    reference: "Attempted Assault on a Public Servant",
    classification: "Felony",
    fine: 1000,
    jailTime: 100,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)15",
    reference: "Attempted Assault",
    classification: "Felony",
    fine: 1000,
    jailTime: 100,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(1)16",
    reference: "Assault on a Peace Officer",
    classification: "Felony",
    fine: 2000,
    jailTime: 180,
    impoundment: "No",
    section: "(1) Crimes Against The Person",
    warrantsArrest: true
  },
  {
    code: "(2)01",
    reference: "Arson",
    classification: "Felony",
    fine: 0,
    jailTime: 210,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)02",
    reference: "Trespassing",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 15,
    impoundment: "Officer Discretion",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)03",
    reference: "Trespassing within a Restricted Facility",
    classification: "Felony",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)04",
    reference: "Burglary",
    classification: "Felony",
    fine: 0,
    jailTime: 150,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)05",
    reference: "Possession of Burglary Tools",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)06",
    reference: "Robbery",
    classification: "Felony",
    fine: 0,
    jailTime: 150,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)07",
    reference: "Armed Robbery",
    classification: "Felony",
    fine: 0,
    jailTime: 390,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)08",
    reference: "Petty Theft",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 0,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)09",
    reference: "Grand Theft",
    classification: "Felony",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)10",
    reference: "Grand Theft Auto",
    classification: "Felony",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)11",
    reference: "Receiving Stolen Property",
    classification: "Felony",
    fine: 10000,
    jailTime: 90,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)12",
    reference: "Extortion",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)13",
    reference: "Forgery/Fraud",
    classification: "Felony",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)14",
    reference: "Vandalism",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)15",
    reference: "Loitering",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 0,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)16",
    reference: "Destruction of Civilian Property",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(2)17",
    reference: "Destruction of Government Property",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(2) Crimes Against Property",
    warrantsArrest: true
  },
  {
    code: "(3)01",
    reference: "Lewd or Dissolute Conduct In Public (Banned RP)",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(3) Crimes Against Public Decency",
    warrantsArrest: true
  },
  {
    code: "(3)02",
    reference: "Stalking",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(3) Crimes Against Public Decency",
    warrantsArrest: true
  },
  {
    code: "(3)03",
    reference: "Public Urination",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 120,
    impoundment: "No",
    section: "(3) Crimes Against Public Decency",
    warrantsArrest: true
  },
  {
    code: "(3)04",
    reference: "Public Defecation",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 120,
    impoundment: "No",
    section: "(3) Crimes Against Public Decency",
    warrantsArrest: true
  },
  {
    code: "(3)05",
    reference: "Public Intoxication (Banned RP)",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 120,
    impoundment: "No",
    section: "(3) Crimes Against Public Decency",
    warrantsArrest: true
  },
  {
    code: "(4)01",
    reference: "Bribery",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)02",
    reference: "Dissuading a Victim",
    classification: "Felony",
    fine: 0,
    jailTime: 60,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)03",
    reference: "False Information to a Peace Officer",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 120,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)04",
    reference: "Filing a False Police Report",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 60,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)05",
    reference: "Failure to Identify to a Peace Officer",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)06",
    reference: "Impersonation of a Peace Officer (Banned RP)",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)07",
    reference: "Obstruction of a Peace Officer",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)08",
    reference: "Resisting a Peace Officer",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 120,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)09",
    reference: "Escape from Custody",
    classification: "Felony",
    fine: 1000,
    jailTime: 210,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)10",
    reference: "Prisoner Breakout",
    classification: "Felony",
    fine: 10000,
    jailTime: 90,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)11",
    reference: "Misuse of Government Hotline",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 0,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)12",
    reference: "Tampering with Evidence",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 0,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)13",
    reference: "Introduction of Contraband (Banned RP)",
    classification: "Felony",
    fine: 0,
    jailTime: 120,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)14",
    reference: "False Arrest",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)15",
    reference: "Failure to Inform",
    classification: "Misdemeanor",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)16",
    reference: "Obstruction of Justice",
    classification: "Felony",
    fine: 500,
    jailTime: 60,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)17",
    reference: "Disorderly Conduct",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)18",
    reference: "Failure to Comply with a Lawful Order",
    classification: "Misdemeanor",
    fine: 500,
    jailTime: 60,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(4)19",
    reference: "Aiding and Abetting",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(4) Crimes Against Public Justice",
    warrantsArrest: true
  },
  {
    code: "(5)01",
    reference: "Disturbing the Peace",
    classification: "Misdemeanor",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(5) Crimes Against Public Peace",
    warrantsArrest: true
  },
  {
    code: "(5)02",
    reference: "Unlawful Assembly",
    classification: "Felony",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(5) Crimes Against Public Peace",
    warrantsArrest: true
  },
  {
    code: "(5)03",
    reference: "Inciting Riot (Banned RP)",
    classification: "Felony",
    fine: 1000,
    jailTime: 120,
    impoundment: "No",
    section: "(5) Crimes Against Public Peace",
    warrantsArrest: true
  },
  {
    code: "(6)01",
    reference: "Possession of a Controlled Substance (Banned RP)",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(6) Crimes Against Public Health And Safety",
    warrantsArrest: true
  },
  {
    code: "(6)02",
    reference: "Possession of a Controlled Substance with Intent to Sell (Banned RP)",
    classification: "Felony",
    fine: 20000,
    jailTime: 120,
    impoundment: "No",
    section: "(6) Crimes Against Public Health And Safety",
    warrantsArrest: true
  },
  {
    code: "(6)03",
    reference: "Possession of Drug Paraphernalia (Banned RP)",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(6) Crimes Against Public Health And Safety",
    warrantsArrest: true
  },
  {
    code: "(6)04",
    reference: "Maintaining a Place for the Purpose of Distribution (Banned RP)",
    classification: "Felony",
    fine: 10000,
    jailTime: 90,
    impoundment: "No",
    section: "(6) Crimes Against Public Health And Safety",
    warrantsArrest: true
  },
  {
    code: "(6)05",
    reference: "Manufacture of a Controlled Substance (Banned RP)",
    classification: "Felony",
    fine: 50000,
    jailTime: 180,
    impoundment: "No",
    section: "(6) Crimes Against Public Health And Safety",
    warrantsArrest: true
  },
  {
    code: "(6)06",
    reference: "Sale of a Controlled Substance (Banned RP)",
    classification: "Felony",
    fine: 5000,
    jailTime: 180,
    impoundment: "No",
    section: "(6) Crimes Against Public Health And Safety",
    warrantsArrest: true
  },
  {
    code: "(6)07",
    reference: "Public Intoxication (Banned RP)",
    classification: "Misdemeanor",
    fine: 3000,
    jailTime: 90,
    impoundment: "No",
    section: "(6) Crimes Against Public Health And Safety",
    warrantsArrest: true
  },
  {
    code: "(6)08",
    reference: "Under the Influence of a Controlled Substance (Banned RP)",
    classification: "Felony",
    fine: 2000,
    jailTime: 180,
    impoundment: "No",
    section: "(6) Crimes Against Public Health And Safety",
    warrantsArrest: true
  },
  {
    code: "(6)09",
    reference: "Detention of Mentally Disordered Persons (Banned RP)",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 180,
    impoundment: "No",
    section: "(6) Crimes Against Public Health And Safety",
    warrantsArrest: true
  },
  {
    code: "(6)10",
    reference: "Possession of Marijuana (Banned RP)",
    classification: "Felony",
    fine: 0,
    jailTime: 180,
    impoundment: "No",
    section: "(6) Crimes Against Public Health And Safety",
    warrantsArrest: true
  },
   {
    code: "(7)01",
    reference: "Animal Abuse/Cruelty (Banned RP)",
    classification: "Felony",
    fine: 20000,
    jailTime: 90,
    impoundment: "No",
    section: "(7) Crimes Against State Dependents",
    warrantsArrest: true
  },
  {
    code: "(7)02",
    reference: "Sale of Alcohol to a Minor (Banned RP)",
    classification: "Misdemeanor",
    fine: 3000,
    jailTime: 0,
    impoundment: "No",
    section: "(7) Crimes Against State Dependents",
    warrantsArrest: true
  },
  {
    code: "(7)03",
    reference: "Minor Alcohol Violation (Banned RP)",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 0,
    impoundment: "No",
    section: "(7) Crimes Against State Dependents",
    warrantsArrest: true
  },
  {
    code: "(7)04",
    reference: "Child Endangerment (Banned RP)",
    classification: "Misdemeanor",
    fine: 10000,
    jailTime: 60,
    impoundment: "No",
    section: "(7) Crimes Against State Dependents",
    warrantsArrest: true
  },
   {
    code: "(8)01",
    reference: "Invalid/No Vehicle Registration/Insurance",
    classification: "Citation",
    fine: 200,
    jailTime: 0,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)02",
    reference: "Driving Without a License",
    classification: "Citation",
    fine: 1000,
    jailTime: 0,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)03",
    reference: "Driving With a Suspended or Revoked License",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)04",
    reference: "Accident Reporting Requirements - Property Damage",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 0,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)05",
    reference: "Accident Reporting Requirements - Injury or Death",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)06",
    reference: "Failure to Obey Traffic Signal",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)07",
    reference: "Driving Opposite Lanes",
    classification: "Misdemeanor",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)08",
    reference: "Failure to Maintain Lane",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)09",
    reference: "Unsafe Following Distance",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)10",
    reference: "Failure to Yield to Civilian",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)11",
    reference: "Failure to Yield to Emergency Vehicle",
    classification: "Citation",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)12",
    reference: "Unsafe Turn",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)13",
    reference: "Unsafe Lane Change",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)14",
    reference: "Illegal U-Turn",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)15",
    reference: "Speeding (1-15 MPH Over)",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)16",
    reference: "Speeding (16-25 MPH Over)",
    classification: "Citation",
    fine: 360,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)17",
    reference: "Speeding (26+ MPH)",
    classification: "Citation",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)18",
    reference: "Felony Speeding (95 MPH)",
    classification: "Felony",
    fine: 880,
    jailTime: 80,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)19",
    reference: "Unreasonably Slow / Stopped",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)20",
    reference: "Speeding in a School Zone (5+ MPH Over)",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)21",
    reference: "Illegally Parked",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)22",
    reference: "Reckless Driving",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)23",
    reference: "Street Racing",
    classification: "Misdemeanor",
    fine: 400,
    jailTime: 0,
    impoundment: "Yes",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)24",
    reference: "Throwing Objects",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)25",
    reference: "Operating While Intoxicated (Banned RP)",
    classification: "Misdemeanor",
    fine: 2000,
    jailTime: 60,
    impoundment: "Yes",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)26",
    reference: "Enhanced Operating While Intoxicated (Banned RP)",
    classification: "Felony",
    fine: 4000,
    jailTime: 120,
    impoundment: "Yes",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)27",
    reference: "Alcohol Beverages in Motor Vehicles (Banned RP)",
    classification: "Citation",
    fine: 400,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)28",
    reference: "Evading a Peace Officer",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 270,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)29",
    reference: "Felony Evading a Peace Officer",
    classification: "Felony",
    fine: 0,
    jailTime: 300,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)30",
    reference: "Road Rage",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)31",
    reference: "Littering",
    classification: "Citation",
    fine: 1000,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)32",
    reference: "Unsafe Speed for Conditions",
    classification: "Citation",
    fine: 2000,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)33",
    reference: "Public Endangerment",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)34",
    reference: "Impeding Traffic",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)35",
    reference: "Jaywalking",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)36",
    reference: "Unnecessary Use of Horn",
    classification: "Citation",
    fine: 480,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)37",
    reference: "Excessive Music/Sounds",
    classification: "Citation",
    fine: 400,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)38",
    reference: "Failure to Sign Citation",
    classification: "Misdemeanor",
    fine: 250,
    jailTime: 60,
    impoundment: "Yes",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)39",
    reference: "Failure to Yield to Pedestrian",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)40",
    reference: "Distracted Driving",
    classification: "Citation",
    fine: 1000,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)41",
    reference: "Driving on Shoulder/Emergency Lane",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)42",
    reference: "Move Over Law",
    classification: "Citation",
    fine: 1000,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)43",
    reference: "Driving Without Headlights",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)46",
    reference: "Vehicular Manslaughter",
    classification: "Felony",
    fine: 750,
    jailTime: 120,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)47",
    reference: "Reckless Evasion",
    classification: "Felony",
    fine: 750,
    jailTime: 120,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)48",
    reference: "Possession of a Stolen Vehicle",
    classification: "Felony",
    fine: 0,
    jailTime: 120,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)49",
    reference: "Reckless Endangerment",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)50",
    reference: "Unroadworthy Vehicle",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 0,
    impoundment: "Yes",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)51",
    reference: "Passing a Stopped School Bus",
    classification: "Misdemeanor",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)52",
    reference: "Improper Display of Registration Plates",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)53",
    reference: "Exceeding Vehicle Registration Limit",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)54",
    reference: "Invalid/No Trailer Registration",
    classification: "Citation",
    fine: 200,
    jailTime: 0,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)55",
    reference: "Occupying Towed Vehicles",
    classification: "Citation",
    fine: 1000,
    jailTime: 0,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)56",
    reference: "Failing to Follow Rules at a Railroad Crossing",
    classification: "Citation",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)57",
    reference: "Improper Operation of a Self-Driving Vehicle",
    classification: "Citation",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(9)01",
    reference: "Possession of an Illegal Weapon",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)02",
    reference: "Brandishing a Firearm",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)03",
    reference: "Illegal Discharge of a Firearm",
    classification: "Felony",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)04",
    reference: "Unlicensed Possession of a Firearm",
    classification: "Felony",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)05",
    reference: "Possession of a Stolen Weapon",
    classification: "Felony",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)06",
    reference: "Unlawful Distribution of a Firearm",
    classification: "Felony",
    fine: 0,
    jailTime: 90,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  }
];
