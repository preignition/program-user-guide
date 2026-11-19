---
description: Why respondent data is physically hosted in one location for the life of the organization, and how to choose between multi-region and regional hosting.
---

# Data Sovereignty and Storage Locations

Where survey data is stored is a legal and operational decision, not a preference. Accessible Surveys provisions a database in a geographic location chosen during onboarding, and that location cannot be changed afterwards. This article explains what the choice means and how to make it well.

## What is chosen

At onboarding the organization selects a **storage location**. It determines where respondent data, including survey responses and the platform's supporting records, is physically stored and processed.

The setting is permanent. Changing it after the account is created is not supported, because changing a region is not a setting — it is moving and rebuilding live databases while preserving identity, keys and access.

## Multi-region versus regional

### Multi-region

A multi-region location replicates data across several data centers within a continent. Examples are Europe (`eur3`) and North America (`nam5`).

- **Strength:** high availability and automatic failover if one data center is unavailable.
- **Strength:** lower latency for respondents spread across the continent.
- **Trade-off:** data may be replicated outside any single country, which can conflict with strict national residency rules.

Multi-region suits international research, distributed respondent pools, and organizations without a single-country requirement.

### Regional

A regional location keeps data in one territory or country, for example Belgium, Frankfurt, London, Paris or Northern Virginia.

- **Strength:** strict jurisdictional isolation; data stays inside the chosen region.
- **Trade-off:** less redundancy across geographies; a regional outage has a wider impact.
- **Trade-off:** latency may be higher for respondents far from the region.

Regional hosting suits healthcare, public-sector and government research, and any program subject to data-localization law.

## Why the choice is permanent

The location is a property of the database instance, not of a document. Encryption keys, service accounts, backups and the platform's security rules are provisioned around it. Moving a live organization would mean exporting data, rebuilding the environment in another region and recreating identity and access — with a window in which neither copy is authoritative.

Rather than offer a risky migration, the platform makes the choice explicit and irreversible. Treat it as an architectural decision, not a checkbox.

## How to decide

Ask, in this order:

1. **Does a law or contract require data to stay in a specific country?** If yes, choose a regional location in that country. Nothing else overrides this.
2. **Is the respondent population concentrated in one jurisdiction?** A regional location may satisfy both law and performance.
3. **Is the population spread across a continent or the globe, with no single-country requirement?** A multi-region location gives better availability and latency.
4. **Does the organization have a data protection officer or legal reviewer?** Involve them before onboarding, not after.

Write the decision down. The person who created the account may not be the person answering a regulator years later.

## What the location does not decide

- **Who can see the data** is governed by access roles and survey permissions, not by region.
- **How long data is kept** is governed by your retention practice and the survey's settings, not by region.
- **Which languages and currencies** the organization uses are separate profile settings.

## If the choice was wrong

Because the setting is permanent, the practical options are:

- run the affected work in a new organization with the correct location;
- keep the current organization and document the compensating controls with legal advice;
- contact support to discuss the specific case before assuming a migration is possible.

Do not create a second account casually: quota, billing, team membership and branding all have to be rebuilt with it.

## Related Content

- [Storage Locations Reference](../reference/customer/storage-locations.md): The available locations and the permanence rule.
- [Plans, Subscriptions and Quota Lifecycle](./plans-subscriptions-and-quota.md): What else is fixed or renewable.
- [Customers, Teams and the Active Team](./customers-teams-and-active-team.md): How organizations and workspaces are structured.
- [Data Privacy and Security](../../survey/explanation/data-privacy-and-security.md): Encryption, retention and respondent privacy.
