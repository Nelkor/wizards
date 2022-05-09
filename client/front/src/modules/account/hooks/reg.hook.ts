import { ref, watch, computed } from 'vue'

import { openMessageDialog } from '@/dialog'

import { viewByNotification } from '../helpers/view-by-notification'
import { validateName, validatePassword } from '../helpers/sync-validators'
import {
  checkInvitation,
  checkName,
  checkPassword,
} from '../helpers/async-validators'
import { MaybeNotification } from '../types'

export const invitation = ref('')

export const name = ref('')

export const password = ref('')

export const wantToRepeat = ref(false)

export const repeat = ref('')

const isInvitationGood = ref(false)
const isNameGood = ref(false)
const isPasswordGood = ref(false)
const isRepeatGood = ref(false)

const isInvitationBlocked = ref(false)
const isNameBlocked = ref(false)
const isPasswordBlocked = ref(false)

const invitationNotification = ref<MaybeNotification>(null)
const nameNotification = ref<MaybeNotification>(null)
const passwordNotification = ref<MaybeNotification>(null)
const repeatNotification = ref<MaybeNotification>(null)

export const isInvitationReadonly = computed(() => isInvitationBlocked.value)

export const isNameReadonly = computed(() => isNameBlocked.value)

export const isPasswordReadonly = computed(() => isPasswordBlocked.value)

export const invitationNotificationView = computed(() =>
  viewByNotification(invitationNotification.value)
)

export const nameNotificationView = computed(() =>
  viewByNotification(nameNotification.value)
)

export const passwordNotificationView = computed(() =>
  viewByNotification(passwordNotification.value)
)

export const repeatNotificationView = computed(() =>
  viewByNotification(repeatNotification.value)
)

export const isSendButtonEnabled = computed(() => {
  const areAllFieldsGood =
    isInvitationGood.value && isNameGood.value && isPasswordGood.value

  const isRepeatOk = !wantToRepeat.value || isRepeatGood.value

  return areAllFieldsGood && isRepeatOk
})

export const invitationFocus = () => {
  isInvitationGood.value = false
  invitationNotification.value = null
}

export const nameFocus = () => {
  isNameGood.value = false
  nameNotification.value = null
}

export const passwordFocus = () => {
  isPasswordGood.value = false
  passwordNotification.value = null
  repeatNotification.value = null
}

export const repeatFocus = () => {
  isRepeatGood.value = false
  repeatNotification.value = null
}

export const invitationBlur = async () => {
  if (!invitation.value || isInvitationBlocked.value) {
    return
  }

  isInvitationBlocked.value = true

  isInvitationGood.value = await checkInvitation(invitation.value)

  isInvitationBlocked.value = false

  invitationNotification.value = {
    isPositive: isInvitationGood.value,
    text: isInvitationGood.value
      ? 'acc-reg-good-invitation'
      : 'acc-reg-bad-invitation',
  }
}

export const nameBlur = async () => {
  if (!name.value || isNameBlocked.value) {
    return
  }

  if (!validateName(name.value)) {
    nameNotification.value = {
      isPositive: false,
      text: 'acc-reg-bad-name',
    }

    return
  }

  isNameBlocked.value = true

  isNameGood.value = await checkName(name.value)

  isNameBlocked.value = false

  nameNotification.value = {
    isPositive: isNameGood.value,
    text: isNameGood.value ? 'acc-reg-name-freely' : 'acc-reg-name-taken',
  }
}

export const repeatBlur = () => {
  if (!repeat.value || !isPasswordGood.value) {
    return
  }

  isRepeatGood.value = repeat.value === password.value

  repeatNotification.value = {
    isPositive: isRepeatGood.value,
    text: isRepeatGood.value
      ? 'acc-reg-passwords-match'
      : 'acc-reg-passwords-do-not-match',
  }
}

export const passwordBlur = async () => {
  if (!password.value || isPasswordBlocked.value) {
    return
  }

  if (!validatePassword(password.value)) {
    passwordNotification.value = {
      isPositive: false,
      text: 'acc-reg-short-password',
    }

    return
  }

  isPasswordBlocked.value = true

  isPasswordGood.value = await checkPassword(password.value)

  isPasswordBlocked.value = false

  passwordNotification.value = {
    isPositive: isPasswordGood.value,
    text: isPasswordGood.value
      ? 'acc-reg-good-password'
      : 'acc-reg-bad-password',
  }

  repeatBlur()
}

export const onSendClicked = () => {
  openMessageDialog('acc-reg-fail', ['acc-reg-name-just-taken'])
}

watch(wantToRepeat, value => {
  if (!value) {
    repeat.value = ''
    isRepeatGood.value = false
    repeatNotification.value = null
  }
})
