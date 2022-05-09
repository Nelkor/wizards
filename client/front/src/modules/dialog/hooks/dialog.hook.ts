import { ref, shallowRef, computed, Component, ComputedRef } from 'vue'

type MaybeComponent = Component | null
type DialogProps = Record<string, unknown>

let closeViaBackgroundClick = true

const isDialogOpenRef = ref(false)
const componentRef = shallowRef<MaybeComponent>(null)

export const componentProps = ref<DialogProps>({})

export const isDialogOpen = computed(() => isDialogOpenRef.value)

export const dialogComponent = computed(
  () => componentRef.value
) as ComputedRef<null>

export const openDialog = (
  component: Component,
  props?: DialogProps,
  clickBgToClose = true
) => {
  componentRef.value = component
  isDialogOpenRef.value = true
  closeViaBackgroundClick = clickBgToClose

  if (props) {
    componentProps.value = props
  }
}

export const closeDialog = () => {
  componentRef.value = null
  isDialogOpenRef.value = false
  componentProps.value = {}
}

export const clickBackground = () => {
  if (closeViaBackgroundClick) {
    closeDialog()
  }
}
