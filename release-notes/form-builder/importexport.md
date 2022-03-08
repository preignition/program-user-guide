---
description: Release note for Import/Export feature in form builder
---

# import/export

Exporting and re-importing form definition is an important features, for instance when translating a form outside the platform.&#x20;

This new feature allows exactly that. &#x20;

![Screenshot of the import export tool. Clicking on "show latest only" will filter the grid and only show latest export for each language](../../.gitbook/assets/selection\_179.png)

### Exporting Data

Exporting data is the first step. Form editor need to press the `prepare a new export` button, which opens the following dialog, for choosing the type of export and the language:&#x20;

![Export Dialog. For the time being, we only have one type of export for form localization](../../.gitbook/assets/selection\_180.png)

Once the export completed, the application download the export file. A new row appears on the Export/Import grid, with a link to download the same export file again. Other information related to the export like language, export status.&#x20;

For the time being, we only have one type of export available: `localize`, which prepares a `json` file used to externalized form translation. This file contains all fields that need to be translated, along with their respective values in the form primary language. It also contains a series of metadata values, used to validate and guide data import process.&#x20;

### Importing data

The export file can be re-imported into the application once necessary updates have been integrated, for instance having translated the appropriate fields.&#x20;

For this, the form editor need to switch from export to import mode, using the following tab:&#x20;

![Switching from export to import mode](../../.gitbook/assets/selection\_182.png)

This will display an upload field in which files to be re-imported can be dropped

![](../../.gitbook/assets/selection\_183.png)

The application will check whether the import tentative is valid and only accept the file if it is the case. For instance, it will make sure the file is a result of a previous export, or if it correspond to the form currently being edited.&#x20;

Once successfully imported, status of the file item is modified on the grid (from `exported` to `stored`), and some information about import is added to be visible for the form editor, like date and name of the user performing the import.

### Processing the import

Once data of the imported file is copied into the database, the application still need to process it. For a localize import/export, this involves copying the translated text back to the form definition for the respective language.&#x20;

Once processing the import is successfully completed, status on the grid changes from `stored` to `synced`.

{% hint style="info" %}
**Processing localize import is done automatically for the latest export**. Otherwise (for instance when a new export was done later on for the same language), the form editor need to manually initiate processing the import.&#x20;

This is done by clicking on the grid row to expand it and pressing the `process import` button.
{% endhint %}



### &#x20;
