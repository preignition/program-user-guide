# How do I test my program?

### Question

I want to test that my program is properly set up on Preignition but I don't want to interfere with my program's live data.  What should I do?

### Answer

### Step 1- Set up a 'test' account

* Adding `?testMode=true` to the `/apply/{programAlias}` URL will add a new user as a 'testMember'
* All the logic of the account set up and application process will run as normal, except that testMembers will not show up in the program's live selection page.

![Example of creating a testMember account on the TBN program](../.gitbook/assets/image%20%28100%29.png)

* A 'test mode' message will be displayed. 

![](../.gitbook/assets/image%20%2888%29.png)

* Apply for the program as usual.

### Step 2-  Review the 'test' selection page

* To review the 'test' section page, go to the live selection page and add`?testMode=true to the URL.`

![Example of the &apos;test&apos; selection page for TBN program](../.gitbook/assets/image%20%28132%29.png)

* Only testMembers are shown
* The selection process mirrors the actual selection process
* The only exception is that the 'apply date' is not shown.

![](../.gitbook/assets/image%20%2876%29.png)



