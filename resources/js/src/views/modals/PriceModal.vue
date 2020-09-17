<template>
  <div>
    <vs-prompt class="PriceModal"
      title="Price Table"
      cancel-text = "Close"
      button-cancel = "border"
      :buttons-hidden = true
      :active.sync="activePrompt">
        <vs-table :data="priceData">
          <template slot="thead">
            <vs-th></vs-th>
            <vs-th>Door</vs-th>
            <vs-th>Tall</vs-th>
            <vs-th>Full</vs-th>
            <vs-th>Drw</vs-th>
            <vs-th>LgDrw</vs-th>
            <vs-th>Over</vs-th>
            <vs-th>DrSQ</vs-th>
            <vs-th>DrwSQ</vs-th>
            <vs-th>WallE</vs-th>
            <vs-th>BaseE</vs-th>
            <vs-th>TallE</vs-th>
            <vs-th>FinInts</vs-th>
            <vs-th>P1sq</vs-th>
            <vs-th>P2sq</vs-th>
          </template>
          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <template v-if = "tr.Name.Value">
                <vs-td :data="tr.Name.Value">
                  {{tr.Name.Keyword}}: {{ tr.Name.Value }}
                </vs-td>
                <vs-td :key="indextd" v-for="(td, indextd) in tr.Cols">
                  {{ td }}
                </vs-td>
              </template>
              <template v-else>
                <vs-td :data="tr.Name.Value">
                  {{tr.Name.Keyword}}: None
                </vs-td>
                <vs-td :key="indextd" v-for="indextd in 14">
                  0.00
                </vs-td>
              </template>
            </vs-tr>
          </template>
        </vs-table>

        <div class="flex px-3 mt-3">
          <div class="flex flex-wrap pl-20">
            <vs-button type="border" size="default"  @click="removeTodo">Close</vs-button>
          </div>
        </div>
    </vs-prompt>
  </div>
</template>

<script>
import LogoVue from '../../layouts/components/Logo.vue';
export default {
  props: {
    displayPrice: {
      type: Boolean,
      required: true
    },
    priceData: {
      type: Array,
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
        return this.displayPrice;
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
  },
  created () {
  }
}
</script>