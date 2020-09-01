<template>
  <div>
    <vs-prompt class="DrawerModal"
      title="Door Image"
      cancel-text = "Close"
      button-cancel = "border"
      :buttons-hidden = true
      :active.sync="activePrompt">
        <div>
          <div class="flex flex-wrap px-6 mb-6 ml-auto mr-auto">
              <img class="ml-auto mr-auto" :src="`${filePaths.path}.png`" height="500" @error="imageLoadError" />
          </div>
        </div>
        <hr>
        <div class="flex px-3 mt-3">
          <div class="flex flex-wrap w-4/5 px-6 ">
            <div class =" pr-6 ">
              <a :href="`${filePaths.path}.DXF`" download>
                <vs-button type="border" size="default"  @click="">DXF</vs-button>
              </a>
            </div>
            <div class =" pl-2 ">
              <a :href="`${filePaths.path}.PDF`" download>
                <vs-button type="border" size="default"  @click="">PDF</vs-button>
              </a>
            </div>
          </div>
          <div class="flex flex-wrap w-1/5 pl-20">
            <vs-button type="border" size="default"  @click="removeTodo">Close</vs-button>
          </div>
        </div>
    </vs-prompt>
  </div>
</template>

<script>
export default {
  props: {
    displayDrawer: {
      type: Boolean,
      required: true
    },
    filePaths: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    activePrompt: {
      get () {
        return this.displayDrawer;
      },
      set (value) {
        this.$emit('hideDisplayPrompt', value)
      }
    },
  },
  methods: {
    removeTodo () {
      this.$emit('hideDisplayPrompt')
      
    },
    init () {
      this.$emit('hideDisplayPrompt')
    },
    submitTodo () {
      this.$emit('hideDisplayPrompt')

    },
    imageLoadError(event) {
      event.target.src = "/images/1x1.png";
      event.target.height = "500";
    },
  },
  created () {
    console.log(this.filePaths.path);
  }
}
</script>

<style lang="stylus">
.DrawerModal .con-vs-dialog .vs-dialog {
    max-width: 50%;
}
</style>