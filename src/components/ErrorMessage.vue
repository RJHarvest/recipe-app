<template>
  <md-snackbar md-position="center" :md-duration="snackbarDuration" :md-active.sync="showError">
    <span>{{ error }}</span>
  </md-snackbar>
</template>

<script>
  export default {
    name: 'error-message',
    props: {
      showError: Boolean,
      error: String,
    },
    data() {
      return {
        snackbarDuration: 4000,
      }
    },
  }
</script>