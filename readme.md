# Zaptime Monorepo

## Contains

- Vue 3 Core
- Vue 3 component

## How to start the project

```
pnpm instal
```

```
pnpm dev
```

## How to publish

For the publishing we use changesets.

### Releasing changes

0. Run `pnpm --filter @zaptime/vue3 build` or `pnpm --filter @zaptime/core build`
1. Run `pnpm changeset version`. This will bump the versions of the packages
   previously specified with `pnpm changeset` (and any dependents of those) and
   update the changelog files.
2. Run `pnpm install`. This will update the lockfile and rebuild packages.
3. Commit the changes.
4. Run `pnpm publish -r`. This command will publish all packages that have
   bumped versions not yet present in the registry.
