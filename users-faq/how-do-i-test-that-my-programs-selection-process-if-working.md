---
description: >-
  This page describes how a User or Advanced User can test that their program's
  selection process is working without interfering with the program's live data.
---

# How do I test that my program's selection process if working?

### Question

I want to test that my program's selection process is working properly but I don't want to interfere with my program's live data.  What should I do?

### Answer

### Step 1- Set up a 'test' account

* Adding `?testMode=true` to the `/apply/{programAlias}` URL will add a new user as a testMember instead as a normal member of a program
* All the logic of the application process will run as for normal members, except that they will not show up in the program's live selection page.

![shows the URL to set up a &apos;test&apos; user on the TBN program](../.gitbook/assets/image%20%2865%29.png)

* A 'test mode' message will be displayed. 

![](../.gitbook/assets/image%20%2872%29.png)

* Apply for the program as usual.

### Step 2-  Review the 'test' 

