declare module '*.vue' {
  import type { Component } from 'vue'

  const component: Component

  export default component
}

declare module '*.jpg' {
  const text: string

  export default text
}

declare module '*.png' {
  const text: string

  export default text
}

declare module '*.webp' {
  const text: string

  export default text
}

declare module '*.svg' {
  const text: string

  export default text
}
