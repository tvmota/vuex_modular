<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('Category', ['list']),
    ...mapGetters('Category', ['leanList'])
  },
  methods: {
    ...mapActions('Category', ['setList'])
  },
  mounted () {
    this.setList()
  }
}
</script>

<template>
    <div><h3>categoria</h3></div>
</template>
