<template>
  <div v-if="config.isFinishSetup" :class="index.container">
    <div :class="index.main">
      <!-- header -->
      <div :class="index.header">
        <div :class="index.logo">
          <img alt=" logog" src="./images/Text+Logo.svg" />
          <span :class="index.slogan">{{
            $gettext('Opensource AI Assistant On All Websites')
          }}</span>
        </div>
        <ul :class="index.tabs">
          <li
            :class="[index.tab, active == 'advanced' ? index.active : '']"
            @click="active = 'advanced'"
          >
            {{ $gettext('Advanced') }}
          </li>
          <!-- <li
            :class="[index.tab, active == 'account' ? index.active : '']"
            @click="active = 'account'"
          >
            {{ $gettext('Account') }}
          </li> -->
          <li :class="[index.tab, active == 'about' ? index.active : '']" @click="active = 'about'">
            {{ $gettext('About') }}
          </li>
        </ul>
      </div>

      <!-- body -->
      <div :class="index.body">
        <AdvancedView v-show="active == 'advanced'" />
        <!-- <AccountView v-show="active == 'account'" /> -->
        <AboutView v-show="active == 'about'" />
      </div>

      <!-- footer -->
      <div :class="index.footer">
        <span>{{ $gettext('Webpilot is open source') }}</span>
        <a href="https://github.com/webpilot-ai/Webpilot" rel="noreferrer" target="_blank">
          {{ $gettext('Star on Github') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@assets/styles/reset.scss'
import {ref} from 'vue'

import {storeToRefs} from 'pinia'

import useStore from '@/stores/store'
import useUserStore from '@/stores/user'

import AdvancedView from './AdvancedView.vue'
// import AccountView from './AccountView.vue'
import AboutView from './AboutView.vue'

const active = ref('advanced')

const store = useStore()
const {config} = storeToRefs(store)
const userStore = useUserStore()
// const {isSignedIn} = storeToRefs(userStore)
const {getUser} = userStore
getUser()

if (!config.value.isFinishSetup) {
  // const signURL = 'http://localhost/'
  const signURL = 'https://account.webpilot.ai/'

  chrome.tabs.getCurrent(tab => {
    const tabId = tab.id
    chrome.tabs.update(tabId, {url: signURL})
  })
}
</script>

<style module="index" lang="scss">
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 36px 32px 0;
  background: linear-gradient(150.76deg, #efdaff 12.93%, #b28aff 64.87%, #6f63ff 108.73%);
}

@media screen and (width <= 779px) {
  .container {
    padding: 18px 14px 0;
  }
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100vw - 18px);
  max-width: 1438px;
  padding: 16px;
  overflow-y: scroll;
  background: rgb(255 255 255 / 60%);
  border: 1px solid #fff;
  border-radius: 20px 20px 0 0;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  .body {
    padding: 16px 0 0;
  }
}

.logo {
  display: flex;
  flex-direction: row;
  height: 48px;

  img {
    height: 100%;
    margin: 4px 24px 4px 4px;
  }

  .slogan {
    margin-top: 18px;
    color: #777;
    font-weight: 400;
    font-size: 18px;
    font-style: normal;
    line-height: 25px;
  }
}

@media (width <= 820px) {
  .slogan {
    display: none;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  font-size: 18px;
  line-height: 25px;

  span {
    margin-top: 32px;
    color: #929497;
  }

  a {
    color: #4f5aff;
    text-decoration: none;
  }
}

.tabs {
  display: flex;
  flex-direction: row;
  margin: 28px 0 0;
  padding: 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  list-style: none;

  li {
    margin: 0 24px;
  }
}

.tab {
  border-bottom: 4px solid rgb(255 255 255 / 0%);
  cursor: pointer;
}

.active {
  color: #4f5aff;
  font-weight: 600;
  border-bottom: 4px solid #4f5aff;
}
</style>
