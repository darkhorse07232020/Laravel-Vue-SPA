<template>
  <div>
    <vs-prompt scroll overflow-hidden
      :title="doorImageTitle"
      cancel-text = "Close"
      button-cancel = "border"
      buttons-hidden = "accept"
      @cancel="removeTodo"
      @close="init"
      :active.sync="activePrompt">
        <div>
            <div class="px-3 ml-6 mr-auto" v-if="profiles.insides">
                <h4>Inside Profile</h4>
            </div>
            <div class="flex flex-wrap px-6 mb-6">
                <div class="px-3 ml-6" v-for="(inside, index) in profiles.insides" :key="index">
                    <img :src="`/images/inside/${inside.Code}.png`" :width="`60`" :height="`60`" />
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
      centerpanel_radio: '',
      outside_radio: '',
      stilerail_radio: '',
      hardware_radio: '',
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
      var tmp='';
      tmp += (this.inside_radio.trim().length ? this.inside_radio.trim() + ' ' : '');
      tmp += (this.stilerail_radio.trim().length ? this.stilerail_radio.trim() + ' ' : '');
      tmp += (this.centerpanel_radio.trim().length ? this.centerpanel_radio.trim() + ' ' : '');
      tmp += (this.outside_radio.trim().length ? this.outside_radio.trim() : '');

      const payload = {
        door_code: tmp,
        inside_code: this.inside_radio.trim(),
        centerpanel_code: this.centerpanel_radio.trim(),
        outside_code: this.outside_radio.trim(),
        hardware_code: this.hardware_radio.trim(),
        stilerail_code: this.stilerail_radio.trim(),
      };

      this.$store.dispatch('job/setDrawerdatas', payload);
    }
  },
  created () {
    this.$vs.loading();

    this.$store.dispatch('job/fetchProfiles', this.optionsVal)
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
    max-width: 100%;
}
</style>