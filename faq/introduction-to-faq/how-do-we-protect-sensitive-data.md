# How do we protect sensitive data?

## Introduction

The security and privacy of our Users, Respondents and Visitor's data is a huge priority for us. We use some of latest technologies for Internet Security that are available today.  &#x20;

Here is a list of our security measuers:

### Preventing unauthorized access (in the physical sense) to premises and facilities where data is processed

As explained in [this page](https://www.surveylegend.com/gdpr-compliance/why-and-how-do-we-collect-data/), we store and process data using technologies provided by DigitalOcean and Google. Here you can read about their ways of protecting their data centers: [DigitalOcean’s security](https://www.digitalocean.com/security/) and [Google Cloud Services’ security](https://cloud.google.com/security/security-design/). Also as explained in [this page](https://www.surveylegend.com/gdpr-compliance/why-and-how-do-we-collect-data/), our online payments are handled by Stripe, and here you can read about [Stripe’s security](https://stripe.com/docs/security/stripe). &#x20;

### Preventing unauthorized access to our IT systems

We use password procedures (including superior complex passwords special characters, regular change of passwords). We also use two step authentication for our accounts at DigitalOcean, Stripe, and Google. Additionally for our own administrator dashboard, not only we use complex passwords and username, but also we have incorporated multiple authentication layers to prevent unauthorized access. &#x20;

### Preventing unauthorized access to data

On our website we have differentiated access rights (profiles, roles), as well as access reports and logging. Our admins do not share accounts, and each have unique user IDs. Our employees all use only latest Apple devices for design and development. They are required to have password protected logins on their devices, as well as using [Apple’s FileValut technology](https://support.apple.com/en-us/HT204837) to encrypt their hard-disks. &#x20;

### Preventing disclosure of personal data

We use encrypted transfer (sFTP, SSL). All communications with the SurveyLegend.com website are sent over 256 SSL/TLS connections. Secure Sockets Layer (SSL) and Transport Layer Security (TLS) technology (the successor technology to SSL) protect communications by using both server authentication and data encryption. SL allows sensitive information such as credit card numbers, personal information, and login credentials to be transmitted securely. So, if an attacker is able to intercept all data being sent between your browser and our servers, they cannot see and use that encrypted information. We use a very strong 256-bit TLS encryption for all data transfer both on our website, app and all our surveys. Additionally, our firewall restricts access to all ports except 80 (http) and 443 (https). We also always apply latest security patches for all open-source libraries, as well as all purchased libraries, apps, add-ons, or 3rd party services that we use. Be it on our website, app, or development and design programs. Additionally, the latest security patches are applied to all operating systems on our servers regularly. We code in Javscript and PHP, and our servers run nginix, MySQL and CouchDB on Ubuntu Linux. Also, our engineers use the best routines and industry-standards, and secure coding guidelines to provide secure coding.   &#x20;
