/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTACT_EMAIL: string;
  readonly CONTACT_LOCATION: string;
  readonly GITHUB_URL: string;
  readonly LINKEDIN_URL: string;
  readonly INSTAGRAM_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
