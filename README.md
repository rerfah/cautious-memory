# LEO Penal Code calculator

A static, GitHub Pages-friendly penal-code calculator.

## Included features

- Search bar for penal codes.
- Single-column penal-code list with the code/reference on the left and classification on the right.
- Click a code to open its Preview.
- Preview shows:
  - penal code + reference
  - classification
  - fine
  - jail time
  - impoundment
  - section
- Preview has:
  - red **Go back**
  - green **Add to charge**
- Hold **Shift** while clicking a penal code to add it directly to Recent charges.
- Recent charges can be removed with the × button.
- Summary groups duplicate charges and displays `(count)code - reference`.
- Total fine calculation.
- Sentenced-imposed/jail total is only displayed when at least one selected charge has `warrantsArrest: true`.
- Continue opens a blurred modal.
- Modal options:
  - Written Warning
  - Citation
  - Arrest Report
- User ID accepts numbers only.
- Copy information generates the requested Discord-ready format and closes the modal.
- Clicking the blurred area closes the modal.
- Reset clears the current selection.

## Loading the real penal-code spreadsheet

The spreadsheet itself was not included in the files supplied with this message, so the project currently contains one sample record in:

`data/penalCodes.js`

Replace the contents of `PENAL_CODES` with the complete spreadsheet data.

Each entry should look like:

```js
{
  code: "01",
  reference: "Criminal Threats",
  classification: "Felony",
  fine: 7500,
  jailTime: 150,
  impoundment: "No",
  section: "Crimes Against Property",
  warrantsArrest: true
}
```

Use numbers for `fine` and `jailTime`, not strings.

## GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, and the `data` folder.
3. Go to **Settings → Pages**.
4. Select deployment from the `main` branch and the root folder.
5. Save. GitHub will provide the Pages URL.

No server, database, API key, or build process is required.
