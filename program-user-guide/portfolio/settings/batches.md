# Batches

{% hint style="danger" %}
This page is Advanced Users only.
{% endhint %}

Batches are a way to automatically group businesses according to their application date. A business can only belong to one batch. When a business applies to a `program`, it is automatically added as a member of the active batch. Only a single batch can be the active batch.

{% hint style="info" %}
Podio uses the term `cohort` for the same concept. Preignition keeps `cohort` for later stage (post-selection) business grouping.
{% endhint %}

## Managing Batches

Batches are managed by `master` users from the settings page:

![Main Batch page](<../../../.gitbook/assets/image (27).png>)

The active batch is marked with a `star` on the batch list grid. `Master` users activate other batches by clicking on the `set as active batch` button.

`Master` users can also create batches - or delete batches (only when they are empty, e.g. no businesses are members of the batch to delete).

A batch has `label`, `description`, `from` date and `to` date fields.

Users activate edit mode by clicking on a row in the grid:

![Batch details](<../../../.gitbook/assets/image (31).png>)

If a `From` date is set, the application process will be closed before this date. It is possible to provide a message to be displayed to users trying to apply before application opening:

![Example of batch closing date](<../../../.gitbook/assets/image (46).png>)

Similarly, setting a `To` date will prevent businesses to apply after the given date.

## Application Process

When a business tries to apply to a program and the current batch is not open, it will be provided with the appropriate notification:

![Message informing users that the application process is currently closed](<../../../.gitbook/assets/image (56).png>)

Businesses can indicate their interest by providing an email address
