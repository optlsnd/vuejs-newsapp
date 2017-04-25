<template>
  <div class="notification-container">
    <div class="notification" v-for="message in messages">
      {{ message }}
    </div>
  </div>
</template>

<script>
  
  import { EventBus } from '@/event-bus.js'
  
  export default {
    data () {
      return {
        messages: []
      }
    },
    created () {
      EventBus.$on('notify', (message) => {
        this.messages.push(message)
        // setTimeout(() => {
        //   if (this.messages.length) {
        //     this.messages.shift()
        //   }
        // }, 4000)
      })
    }
  }
</script>

<style>

  .notification-container {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 200px;
  }

  .notification {
    width: 100%;
    padding: 1em;
    margin: .5rem auto;
    background-color: #e5e5ff;
    cursor: default;
    word-wrap: break-word;
    opacity: 0;
    transform: scale(0);
    animation: appear 4s linear;
  }

  @keyframes appear {
    10% {
      opacity: 1;
      transform: scale(1);
    }
    90% {
      opacity: 1;
      transform: scale(1);      
    }
  }

</style>
