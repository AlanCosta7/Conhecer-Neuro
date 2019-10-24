<template>
  <q-page>
    <div class="q-ma-xl" v-html="editor">
    </div>
  </q-page>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'PageIntrodução',
  data() {
    return {
      editor: '',
      id: '',
    };
  },
  computed: {
    ...Vuex.mapGetters({
      intro: 'module/intro',
    }),
  },
  watch: {
    intro(newData, oldData) {
      if (Array.isArray(newData) && newData.length) {
        this.editor = newData[0].data.newdata;
        this.id = newData[0].id;
      } else {
        this.editor = oldData;
      }
    },
  },
  async created() {
    await this.$store.dispatch('module/watchIntro');
  },
  async beforeDestroy() {
    await this.$store.dispatch('module/unwatchIntro');
  },
};
</script>
