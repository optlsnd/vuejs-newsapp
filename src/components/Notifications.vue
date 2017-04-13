<template>
  <div class="notification" v-if="message.length" @click="deleteNotification">
    {{ message }}
  </div>
</template>

<script>
  
  import { EventBus } from './event_bus/event-bus.js'
  
  export default {
    data () {
      return {
        message: ''
      }
    },
    created () {
      EventBus.$on('notify', (message) => {
        this.message = message
      })
    },
    methods: {
      deleteNotification () {
        this.message = ''
      }
    }
  }
</script>

<style>
  .notification {
    display: inline-block;
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    padding: 1em;
    border: 1px solid #bbb;
    border-left: .25rem solid #555;
    cursor: default;
  }
</style>
