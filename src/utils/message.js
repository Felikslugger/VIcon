import { createApp } from 'vue'

const messageBox = {
  props: {
    msg: {
      type: String,
      required: true,
      default: ''
    },
  },
  render(ctx) {
    const { $props, $emit } = ctx;
    return (
      <div class="modal">
        <div class="box">
          <div class="text">{$props.msg}</div>
          <button click={$emit('onClick')}>确定</button>
        </div>
      </div>
    )
  },
  mounted() {
    setTimeout(() => {
      document.body.removeChild(this.$el)
    }, 2000)
  }
}

export default function (options) {
  const { message, type, duration } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    data() {
      return {
        message,
        type,
        duration
      }
    },
    template: `
      <div class="message" :class="type">
        <span>{{message}}</span>
      </div>
    `,
    mounted() {
      setTimeout(() => {
        document.body.removeChild(div)
      }, duration)
    }
  })
  app.mount(div)
}