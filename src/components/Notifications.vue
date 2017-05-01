<script>
  
  import { EventBus } from '@/event-bus.js'
  
  export default {
    created () {
      EventBus.$on('notify', (message) => {
        this.$notify({
          title: 'Newsapp',
          message: message
        })
      })
    }
  }
</script>
