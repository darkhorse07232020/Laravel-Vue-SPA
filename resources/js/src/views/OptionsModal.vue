<template>
  <div>
    <vs-prompt
      title="Edit Task"
      accept-text= "Submit"
      cancel-text = "Remove"
      button-cancel = "border"
      @cancel="removeTodo"
      @accept="submitTodo"
      @close="init"
      :active.sync="activePrompt">
      <div>
        <div>
          <div class="px-3 ml-6 mr-auto">
            <h3>Inside Profile</h3>
          </div>
          <div class="flex flex-wrap px-6 mb-6">
            <div class="px-3 ml-auto mr-auto" v-for="(image, index) in images" :key="index">
              <vs-radio v-model="inside_radio" :vs-value="image.logo_image_small" @change="">
                <img :src="`/images/logos/${image.logo_image_small}`" :width="`60`" :height="`60`" />
              </vs-radio>
            </div>
          </div>
        </div>
      </div>
    </vs-prompt>
  </div>
</template>

<script>
export default {
  props: {
    displayPrompt: {
      type: Boolean,
      required: true
    },
    optionsVal: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      inside_radio: '',
    }
  },
  computed: {
    activePrompt: {
      get () {
        return this.displayPrompt
      },
      set (value) {
        this.$emit('hideDisplayPrompt', value)
      }
    },
    profiles () {
      return this.$store.state.job.profiles;
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
    }
  },
  created () {
    this.$vs.loading();
    this.$store.dispatch('job/fetchProfiles', optionsVal)
      .then(()=>{
        this.$vs.loading.close();
      })
      .catch(error => {
        this.$vs.loading.close();
      })
  }
}
</script>

<style lang="stylus">
.con-vs-dialog .vs-dialog {
    max-width: 800px;
}
</style>