# Mastro Template Basic for Deno

This is a basic TypeScript template for [Mastro](https://mastrojs.github.io) when using [Deno](https://deno.com/).


## Run locally

    deno task start


## Next steps

To see how the Mastro web framework works, [follow the guide](https://mastrojs.github.io/guide/server-side-components-and-routing/).


## Deploy to production

If you have a server, you can run `deno task start` on it. Alternatively, [join Deno Deploy<sup>EA</sup>](https://docs.deno.com/deploy/early-access/) (Early Access) and set up a [new app](https://app.deno.com/mastrojs/~/new) with the following build configuration:

- Framework preset: No Preset
- Install command: `deno install`
- Build command: blank
- Dynamic App -> Entrypoint: `server.ts`
