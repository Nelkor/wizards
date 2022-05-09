<script lang="ts" setup>
import { $T } from '@/i18n'

import {
  invitation,
  name,
  password,
  wantToRepeat,
  repeat,
  isInvitationReadonly,
  isNameReadonly,
  isPasswordReadonly,
  invitationNotificationView,
  nameNotificationView,
  passwordNotificationView,
  repeatNotificationView,
  invitationFocus,
  nameFocus,
  passwordFocus,
  repeatFocus,
  invitationBlur,
  nameBlur,
  passwordBlur,
  repeatBlur,
  onSendClicked,
  isSendButtonEnabled,
} from '../hooks/reg.hook'
</script>

<template>
  <div class="account-form">
    <h1>{{ $T('acc-reg-header') }}</h1>

    <p class="explanation">
      {{ $T('acc-reg-explanation-invite-text') }}
      <router-link :to="{ name: 'contacts' }">
        {{ $T('acc-reg-explanation-invite-contacts') }}
      </router-link>
    </p>

    <label class="text">
      <span>{{ $T('acc-reg-invite') }}</span>

      <input
        v-model="invitation"
        class="text"
        type="text"
        :readonly="isInvitationReadonly"
        @focus="invitationFocus"
        @blur="invitationBlur"
      />
    </label>

    <p class="notification" :class="invitationNotificationView.className">
      {{ $T(invitationNotificationView.text) }}
    </p>

    <p class="explanation">{{ $T('acc-reg-explanation-name') }}</p>

    <label class="text">
      <span>{{ $T('acc-reg-name') }}</span>

      <input
        v-model="name"
        class="text"
        type="text"
        :readonly="isNameReadonly"
        @focus="nameFocus"
        @blur="nameBlur"
      />
    </label>

    <p class="notification" :class="nameNotificationView.className">
      {{ $T(nameNotificationView.text) }}
    </p>

    <p class="explanation">{{ $T('acc-reg-explanation-password') }}</p>

    <label class="text">
      <span>{{ $T('acc-reg-password') }}</span>

      <input
        v-model="password"
        class="text"
        type="password"
        :readonly="isPasswordReadonly"
        @focus="passwordFocus"
        @blur="passwordBlur"
      />
    </label>

    <p class="notification" :class="passwordNotificationView.className">
      {{ $T(passwordNotificationView.text) }}
    </p>

    <p class="explanation">{{ $T('acc-reg-explanation-repeat') }}</p>

    <label class="checkbox">
      <input v-model="wantToRepeat" type="checkbox" />
      <span>{{ $T('acc-reg-want-to-repeat') }}</span>
    </label>

    <label :class="{ disabled: !wantToRepeat }" class="text">
      <span>{{ $T('acc-reg-repeat-password') }}</span>

      <input
        v-model="repeat"
        class="text"
        type="password"
        @focus="repeatFocus"
        @blur="repeatBlur"
      />
    </label>

    <p class="notification" :class="repeatNotificationView.className">
      {{ $T(repeatNotificationView.text) }}
    </p>

    <button :disabled="!isSendButtonEnabled" @click="onSendClicked">
      {{ $T('acc-reg-button') }}
    </button>

    <p class="alternative">
      {{ $T('acc-reg-alternative-text') }}
      <router-link :to="{ name: 'enter' }">
        {{ $T('acc-reg-alternative-link') }}
      </router-link>
    </p>
  </div>
</template>
