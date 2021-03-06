// import * as esbuild from 'https://deno.land/x/esbuild@v0.14.45/mod.js'
// import * as esbuild from './node_modules/esbuild-wasm/esm/browser.min.js'
// import * as esbuild from 'esbuild-wasm/esm/browser'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

// @TODO consider cache-control headers, to cut down bandwidth
// https://nextjs.org/docs/api-reference/next.config.js/url-imports#lockfile

export default async function handler(req: NextRequest) {
  /*
  console.log({ globalThis })
  // Shims and polyfills needed for esbuild
  if (!globalThis.performance) {
    const nowOffset = Date.now()
    // @ts-ignore -- only polyfilling now for now
    globalThis.performance = {
      now() {
        return Date.now() - nowOffset
      },
    }
  }

  try {
    await esbuild.initialize({
      wasmURL: 'https://unpkg.com/esbuild-wasm/esbuild.wasm',
      worker: false,
    })
    const result = await esbuild.transform(
      `// Generated ${new Date().toJSON()}
    export function fromPalette(hello?: string) {
      console.log('Hello from palette!', {hello})
    }
    `,
      { loader: 'ts' }
    )
    if (result.warnings) {
      console.warn(result.warnings)
    }
    return new Response(result.code, {
      status: 200,
      headers: {
        'content-type': 'application/javascript; charset=utf-8',
      },
    })
  } catch (err) {
    console.error(err)
    return new Response(err.message, {
      status: 500,
    })
  }

  const ts = 'let test: boolean = true'

  const result = await esbuild.transform(ts, { loader: 'ts' })
  console.log('result:', result)
  esbuild.stop()
  try {
    // @ts-ignore
    console.log(esbuild)
  } catch {
    // ignore
  }
  const { searchParams } = new URL(req.url)
 // */
  const timestamp = new Date().toJSON()
  return new Response(
    `// Generated ${timestamp}
console.log('Hello from palette!', 'Generated on the edge', new Date(${JSON.stringify(
      timestamp
    )}).toLocaleString())
export const studioTheme = { colors: {} }
`,
    {
      status: 200,
      headers: {
        'access-control-allow-origin': '*',
        'content-type': 'application/javascript; charset=utf-8',
      },
    }
  )
}
