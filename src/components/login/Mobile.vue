<template>
  <v-content>
    <v-toolbar flat dark color="lightPrimary" height=64>
      <v-toolbar-title class="pl-3 headline">
        Login
      </v-toolbar-title>
    </v-toolbar>

    <v-sheet  tile
              height="calc(100% - 64px)"
              color="lightPrimary"
    >
      <v-container fill-height fluid grid-list-lg class="py-0">
        <v-layout fill-height row wrap>
          <v-flex xs12 class="pa-0">
            <v-sheet flat class="px-4 login">
              <v-img  contain
                      class="mx-auto pt-5 pb-4"
                      max-width="32vmax"
                      :src="require('@/assets/p2s-logo.svg')"
              ></v-img>
              <slot name="form"></slot>
            </v-sheet>
          </v-flex>
        </v-layout>
      </v-container>
    </v-sheet>
  </v-content>
</template>

<style scoped>
.login.v-sheet {
  border-top-left-radius: var(--thiccness);
  border-top-right-radius: var(--thiccness);
  background-color: #EBEBEB;
  height: calc(100vh - 64px);
  margin-left: -8px;
  margin-right: -8px;
}
</style>
