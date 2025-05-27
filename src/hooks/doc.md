# `hooks`

I decided to group hooks in a separated folder to make it easier to find. We could also organize by features bit I consider pointless for this demo app.

---

# Notes about hooks

- `useDebouncedState`:
  I choosed to make the debouncer with a hook instead of a function factory because I consider it is more a React way of implementing.

- `useParsedPhrases`:
  I rather encapsulate this kind of logic in specific hooks.
