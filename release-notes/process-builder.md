---
description: Release note regarding process builder
---

# Process Builder

Preignition contained a Process Engine since early version of the application. However editing processes was difficult and demanded a deep knowledge of the application's internal logic. 

The new process builder aims at changing this and provide an easy way to adjust processes according to client's need.

## Overall

Processes are configured through 2 main views: `Compose` and `Access`. Certain type of specialized processes like Selections have additional views \(e.g. `Selection`, `Batch` and `Campaign`\).

![Process builder overall view. The active View is &apos;Apply to Program&apos; state  ](../.gitbook/assets/image%20%2838%29.png)

## Composition

A process is build in the `Compose` view, which comprises three sections. On the top, a visualization of nodes and transitions - automatically drawn from process definition. On the left, a tree grid indicating the structure of the process. Finally on the left, a section displaying the active item \(node, transition or action\).   

Users can add / remove process items from the tree grid \(via a context menu\). 

![Expanded Process Tree Grid, with a context menu](../.gitbook/assets/image%20%28160%29.png)

### States, Transitions, actions

Preignition Process Engine is a custom implementation of a[ Finite State Machine](https://en.wikipedia.org/wiki/Finite-state_machine). Hence a process has to transition from one state to another in to perform different actions.

Actions are triggered whenever a state is activated. For the time being, users can set 4 different type of actions: send an email, display a message in a user's bulletin board, create a survey, and make and automatic transition. 

Some type of actions require further settings. For instance, an email template has to be set when the type of action is "send an email".

![Choosing a type of action](../.gitbook/assets/image%20%28178%29.png)

### Process Validation

The app checks whether a process is valid. The user is informed in case of missing elements \(like missing transition, missing email template, ...\). An invalid process cannot be published. 

![Example of an invalid process ](../.gitbook/assets/image%20%28196%29.png)

## Access

Like other Preignition resources, processes have an owner and can share different type of access \(edit, view\).  

![Process Access page. ](../.gitbook/assets/image%20%2822%29.png)

## Selection Process

Selection processes are specialized type of processes, aimed at defining and controlling how a business is accepted to a program. A business applies to a program by accessing a link associated to a selection process.

Additional information can be set for those type of processes. 

### Selection page

This view allows to add human readable `aliases` for a selection process, or define a user who will be the default `steward` for businesses applying to the program. 

It is also possible to describe the program so that businesses starting the selection process are well informed.  

![Setting aliases and steward to a selection process](../.gitbook/assets/image%20%2846%29.png)

![Presentation of a program - displayed to businesses applying.](../.gitbook/assets/image%20%2825%29.png)

### Batches

Multiple batches can be defined for a selection process. This allows to group businesses according to their respective application dates. Only one batch is active at a give time. Batches can also have starting and ending dates so as to only allow business to apply within defined time frames.



![One active batch starting from a certain date, without closing date.](../.gitbook/assets/image%20%28200%29.png)

### Campaign

It is useful to be able to trace how a business got access to a certain program. Campaign are added for this purpose. A campaign is a specific link attached to a selection process, allowing to know how a business interacted with a program. 

For instance, a `campaign` link can be distributed to a partner relaying program communication. Alternatively, a different `campaign` link can be shared on twitter and other social media / email campaign. 

![Example of one link to be shared with a specific partner. ](../.gitbook/assets/image%20%28114%29.png)



