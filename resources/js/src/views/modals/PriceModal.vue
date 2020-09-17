<template>
  <div>
    <vs-prompt class="PriceModal"
      title="Price Table"
      cancel-text = "Close"
      button-cancel = "border"
      :buttons-hidden = true
      :active.sync="activePrompt">
        <vs-table :data="users">
          <template slot="thead">
            <vs-th>Email</vs-th>
            <vs-th>Name</vs-th>
            <vs-th>Website</vs-th>
            <vs-th>Nro</vs-th>
          </template>
          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].email">
                {{ data[indextr].email }}
              </vs-td>
              <vs-td :data="data[indextr].username">
                {{ data[indextr].name }}
              </vs-td>
              <vs-td :data="data[indextr].id">
                {{ data[indextr].website }}
              </vs-td>
              <vs-td :data="data[indextr].id">
                {{ data[indextr].id }}
              </vs-td>
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
      users: [{email: 'test@test.com', name: 'Admin', website: 'localhost', id: '1'}],
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
    priceData() {
      return this.$store.state.job.priceData;
    }
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
  }
}
</script>