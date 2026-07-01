---
description: Migration of GDS Cloud Functions APIs from legacy Express/TSOA to type-safe and schema-first Effect HTTP APIs.
---

# Unified GDS API Migration to Effect HTTP Framework

**Date:** 2026-06-30  
**Version:** 3.0.0  

## Overview

A major infrastructure update for the Global Disability Summit (GDS) API codebase. We have completely migrated all 10 core API endpoints in the GDS Cloud Functions codebase from the legacy Express/TSOA stack to our standardized, high-performance **Effect HTTP API** framework. This change unifies our APIs under a single, highly resilient, schema-driven architectural pattern, improves security at the boundary, and removes outdated code generation steps from GDS builds.

## What's New?

### Type-Safe Schema-First Routing

* **What it is:** All public and authorized endpoints are now defined using schema models (`GdsApi` in `apiGroup.ts`) via the Effect HTTP specification builder.
* **Why it matters:** Guarantees absolute type-safety at the API boundary, with incoming request payloads, URL parameters, and query parameters automatically validated and parsed before reaching the handlers.
* **How to use:** Requests to `/public-commitments`, `/commitments`, `/organisations`, `/reports`, and `/report-monitoring` are now parsed and routed with native Effect schema validations, returning descriptive parsing errors automatically when validation fails.

### Standardized BigQuery Service Injection

* **What it is:** Implemented a modular, trace-enabled, and type-safe `BigQueryService` that replaces direct unmanaged queries with a managed service layout.
* **Why it matters:** Provides standard dependency injection (`Context.Service`) adhering to the project's architectural standards, keeping our core SQL query routines clean, mockable, and predictable.

### Strict Middleware-Driven Authorization

* **What it is:** Fully integrated the new endpoints with standard `@lit-app/api` Authorization middleware, exposing the verified `CurrentUser`.
* **Why it matters:** Enables seamless GDS-specific scope checking (GDS Admin team validation via Firestore, and GDS App claims validation) under the same centralized token verification mechanism.

### Complete Deprecation of TSOA & Express

* **What it is:** Eradicated over 13 legacy code files—including unmanaged Express routers, manual error wrappers, generated TSOA route definitions, and the `tsoa.json` config file.
* **Why it matters:** Simplifies the package codebase, reduces overall bundle size, and prunes old NPM dependencies like `express` and `@tsoa/runtime` to speed up CI/CD pipeline build times.

## Fixes & Improvements

* **Centralized API Aggregation:** GDS endpoints are now compiled and served directly under the unified `effectapi` codebase, eliminating duplicate API function definitions.
* **Resilient Integration Testing:** Added robust integration test cases with mocking of Firestore and database layers to verify that endpoints function correctly without full live database requirements.
