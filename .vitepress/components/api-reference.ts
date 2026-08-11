import { defineComponent, h, onMounted, ref, type Ref } from 'vue'

declare global {
  interface Window {
    Scalar?: {
      createApiReference: (target: HTMLElement | string, config: Record<string, unknown>) => void
    }
  }
}

export const ScalarApiReference = defineComponent({
  name: 'ScalarApiReference',
  props: {
    url: { type: String, required: true }
  },
  setup(props) {
    const container: Ref<HTMLElement | null> = ref(null)

    onMounted(() => {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/@scalar/api-reference'
      script.async = true
      script.onload = () => {
        window.Scalar?.createApiReference(container.value as HTMLElement, {
          url: props.url,
          proxyUrl: 'https://proxy.scalar.com',
          hideSearch: true,
          showDeveloperTools: 'never'
        })
      }
      document.head.appendChild(script)
    })

    return () => h('div', { ref: container })
  }
})
