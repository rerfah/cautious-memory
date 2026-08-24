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
    reference: "Child Endangerment (Banned RP)",
    classification: "Felony",
    fine: 0,
    jailTime: 180,
    impoundment: "No",
    section: "(7) Crimes Against State Dependents",
    warrantsArrest: true
  },
  {
    code: "(7)02",
    reference: "Failure to Provide Care (Banned RP)",
    classification: "Misdemeanor",
    fine: 0,
    jailTime: 120,
    impoundment: "No",
    section: "(7) Crimes Against State Dependents",
    warrantsArrest: true
  },
  {
    code: "(7)03",
    reference: "Elder Abuse (Banned RP)",
    classification: "Felony",
    fine: 0,
    jailTime: 180,
    impoundment: "No",
    section: "(7) Crimes Against State Dependents",
    warrantsArrest: true
  },
  {
    code: "(8)01",
    reference: "Reckless Driving",
    classification: "Misdemeanor",
    fine: 1000,
    jailTime: 60,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)02",
    reference: "Speeding",
    classification: "Citation",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)03",
    reference: "Speeding 100+ MPH",
    classification: "Misdemeanor",
    fine: 1500,
    jailTime: 0,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)04",
    reference: "Failure to Yield",
    classification: "Citation",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)05",
    reference: "Failure to Stop",
    classification: "Citation",
    fine: 500,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)06",
    reference: "Evading a Peace Officer",
    classification: "Felony",
    fine: 1000,
    jailTime: 120,
    impoundment: "Yes",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)07",
    reference: "Hit and Run",
    classification: "Felony",
    fine: 1000,
    jailTime: 120,
    impoundment: "Yes",
    section: "(8) Traffic Offences",
    warrantsArrest: true
  },
  {
    code: "(8)08",
    reference: "Driving Without a License",
    classification: "Citation",
    fine: 500,
    jailTime: 0,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)09",
    reference: "Driving Without Registration",
    classification: "Citation",
    fine: 500,
    jailTime: 0,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)10",
    reference: "Driving Without Insurance",
    classification: "Citation",
    fine: 500,
    jailTime: 0,
    impoundment: "Officer Discretion",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)11",
    reference: "Illegal Parking",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)12",
    reference: "Jaywalking",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)13",
    reference: "Illegal U-Turn",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)14",
    reference: "Failure to Maintain Lane",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)15",
    reference: "Illegal Window Tint",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)16",
    reference: "Failure to Signal",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(8)17",
    reference: "Illegal Passing",
    classification: "Citation",
    fine: 250,
    jailTime: 0,
    impoundment: "No",
    section: "(8) Traffic Offences",
    warrantsArrest: false
  },
  {
    code: "(9)01",
    reference: "Felon in Possession of a Firearm",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)02",
    reference: "Possession of an Illegal Firearm",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)03",
    reference: "Possession of a Firearm Without a License",
    classification: "Felony",
    fine: 5000,
    jailTime: 90,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)04",
    reference: "Brandishing a Firearm",
    classification: "Felony",
    fine: 5000,
    jailTime: 90,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)05",
    reference: "Discharging a Firearm",
    classification: "Felony",
    fine: 5000,
    jailTime: 120,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)06",
    reference: "Discharging a Firearm in Public",
    classification: "Felony",
    fine: 10000,
    jailTime: 180,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)07",
    reference: "Possession of a Silencer",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)08",
    reference: "Possession of Armor-Piercing Ammunition",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)09",
    reference: "Possession of Explosives",
    classification: "Felony",
    fine: 20000,
    jailTime: 180,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)10",
    reference: "Use of Explosives",
    classification: "Felony",
    fine: 50000,
    jailTime: 240,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)11",
    reference: "Possession of Body Armor During a Crime",
    classification: "Felony",
    fine: 10000,
    jailTime: 120,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  },
  {
    code: "(9)12",
    reference: "Weapon Modification for Automatic Fire",
    classification: "Felony",
    fine: 20000,
    jailTime: 180,
    impoundment: "No",
    section: "(9) Control Of A Deadly Weapon And Equipment",
    warrantsArrest: true
  }
];
