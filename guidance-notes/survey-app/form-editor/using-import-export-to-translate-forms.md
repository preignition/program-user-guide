# Using import/ export to translate forms

{% hint style="info" %}
The import/ export feature facilitates working with translators by making it possible for a form to be translated outside the platform and then imported back in.
{% endhint %}

## Step 1

Translate your form using the auto translate feature.  This is covered in the guidance note '[Translate forms'](translate-forms.md).  &#x20;

This provides translators with a base translation to work from and helps highlight the feilds that need their attention.

## &#x20;Step 2

Activate the 'advanced' tab in the top right corner

'Export/ Import' will now appear in the Form Definition Menu

<figure><img src="../../../.gitbook/assets/image (3) (3).png" alt=""><figcaption><p>Screenshot showing the 'Export/ Import' option appearing when the advanced mode is activated</p></figcaption></figure>

## Step 3

Select 'Prepare a New Export'

A privacy warning notice will appear.  You will be asked to confirm that you have understood your responsibilies for keeping the data safe once it has been exported from the platform.&#x20;

<figure><img src="../../../.gitbook/assets/image (2) (6).png" alt=""><figcaption><p>Screenshot showing the privacy warning notice that appears when </p></figcaption></figure>

## Step 4

For the time being, 'localize' is the only type of export available.  Choose the language that you want to translate the form into and select 'Export Now'

<figure><img src="../../../.gitbook/assets/image (2) (1) (1).png" alt=""><figcaption><p>Screenshot showing 'French' as the language to translate the form into</p></figcaption></figure>

## Step 5

A new row appears on the Export/ Import grid, with a link to download the same export file again.  Other information related to the exported item is also shown such as the User who created the export and the time and date the export was prepared.

Exported file will now be available as a downloaded json file.

{% hint style="success" %}
Json files are the only file type supported for data import/export.  They provide greater control over the data structure than other files format such as csv or .xls.  Json files are widely for data interchange.
{% endhint %}

<figure><img src="../../../.gitbook/assets/image (8) (4).png" alt=""><figcaption></figcaption></figure>

## Step 5

The json file can be shared with translators.  The file contains all the fields that need to be translated, along with their respective values in the form's primary language. It also contains a series of metadata values, used to validate and guide the data import process.

Take care not to change any of the metadata values contained within the file.  These are used to validate and guide the data import process.  If these are changed it will not be possible to import the file back into the platform.

{% hint style="info" %}
The file must be editied in a json editor and imported back into the platform in the json file format.
{% endhint %}

## Step 6

There are many text editors available which are suitable for editing json files.  Some of them are free and others are paid for.   Some text editors are only available on-line where as others are installed locally on your computer.   Generally text editors that are installed locally provide greater functionality than on-line editors. &#x20;

&#x20;A list of the best free text editors which can be installed locally is available from Lifewire.com: [https://www.lifewire.com/best-free-text-editors-4155819](https://www.lifewire.com/best-free-text-editors-4155819)

For an online tool, JSON Editor On-line is a popular choice.  [https://jsoneditoronline.org/](https://jsoneditoronline.org/)&#x20;

&#x20;

<figure><img src="../../../.gitbook/assets/image (3) (5).png" alt=""><figcaption><p>Screenshot showing a json file being edited within JSON Editor Online</p></figcaption></figure>

## Step 7

The following video shows how a file can be exported from the platform, editied in JSON Editor On-line and imported back to the platform.

{% embed url="https://youtu.be/HT57p5Ex20s" %}
&#x20;3 minute video showing how a file can be edited in JSON Editor on-line
{% endembed %}

## Step 8&#x20;

Once the exported form has been worked on and the appropriate fields have been translated, the file can be imported back into the platform.

Go to the 'Import' feild and select 'Upload translated file'.  Drag and drop is supported

<figure><img src="../../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption><p>Screenshot showing the translated file being imported back onto the platform</p></figcaption></figure>

## Step 9

To complete the process, select the imported file from the 'latest import/ export' table and select 'process import'.

The translated feild will be imported into the platform.

<figure><img src="../../../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>Scfreenshot showing the 'process import' button in the 'latest import/ export' table</p></figcaption></figure>

