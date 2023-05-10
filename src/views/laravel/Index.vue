<template>
  <div class="ml-6 mr-6">
      <v-row class="mt-5">
        <v-col cols="12" md="12" xl="12" lg="12" sm="6" xs="12" >
          <v-card  max-height="400">
            <v-card-text>
              <v-text-field
                :loading="loading"
                density="compact"
                variant="solo"
                label="Search templates"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                @click:append-inner="onClick"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>
<script>
  export default {
    data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>