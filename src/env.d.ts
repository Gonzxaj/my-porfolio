/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTACT_EMAIL: string;
  readonly CONTACT_LOCATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
