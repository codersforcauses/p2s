<template>
  <v-card flat>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0"
            :class="`${primary}--text`"
        >
          Manage Programs
        </h3>
        <div>
          View all the created programs
          <br>
          Create a new program for coaches to use
        </div>
      </div>
    </v-card-title>

    <v-card-actions class="pa-0">
      <v-btn  flat
              round
      >
        View All
      </v-btn>
      <v-btn  flat
              round
      >
        Create New
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['primary'],
};
</script>

<style scoped>
</style>
