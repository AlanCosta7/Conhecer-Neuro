<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Conhecer Neuro
        </q-toolbar-title>

        <div>Projeto de extensão UERJ v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item clickable :to="{ name: 'introducao' }">
          <q-item-section avatar>
            <q-icon name="bookmark" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Introdução</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'hipoxia-isquemia' }">
          <q-item-section avatar>
            <q-icon name="pregnant_woman" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Hipóxia-Isquemia</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'nicotina-Alcool' }">
          <q-item-section avatar>
            <q-icon name="smoking_rooms" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Alcool e Nicotina</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'malnutricao' }">
          <q-item-section avatar>
            <q-icon name="local_pizza" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Malnutrição</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
