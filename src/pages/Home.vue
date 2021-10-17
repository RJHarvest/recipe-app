<template>
  <div>
    <Navbar />
    <div class="md-layout md-alignment-center-center">
      <div class="md-layout-item md-size-40 text">
        <h1 class="title">Become Your Own Chef</h1>
        <h3 class="subtitle">Last destination to find recipes or your food addiction</h3>
      </div>
      <div class="md-layout-item md-size-60">
        <img src="@/assets/tacos.png" alt="tacos">
      </div>
    </div>
    <div class="md-layout md-gutter test">
      <div class="md-layout-item md-size-33">
        <md-card md-with-hover>
          <md-card-header>
            <md-card-media md-medium>
              <img src="@/assets/quesadilla.png" alt="quesadilla">
            </md-card-media>

            <md-card-header-text>
              <div class="md-title">Mexican Cuisine</div>
              <div class="md-subhead">Get recipe of cuisines around the world</div>
              <md-button class="md-icon-button" to="/cuisine?filter=mexican">
                <md-icon class="md-size-2x">play_circle</md-icon>
              </md-button>
            </md-card-header-text>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-size-33">
        <md-card md-with-hover>
          <md-card-header>
            <md-card-media md-medium>
              <img src="@/assets/chicken-kebabs.png" alt="chicken kebabs">
            </md-card-media>

            <md-card-header-text>
              <div class="md-title">Chicken Recipes</div>
              <div class="md-subhead">Get recipe based on an ingredient</div>
              <md-button class="md-icon-button" to="/recipe?filter=chicken">
                <md-icon class="md-size-2x">play_circle</md-icon>
              </md-button>
            </md-card-header-text>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-size-33">
        <md-card md-with-hover>
          <md-card-header>
            <md-card-media md-medium>
              <img src="@/assets/breakfast.png" alt="breakfast">
            </md-card-media>

            <md-card-header-text>
              <div class="md-title">Breakfast Meals</div>
              <div class="md-subhead">Get different categories of recipes</div>
              <md-button class="md-icon-button" to="/meal?filter=breakfast">
                <md-icon class="md-size-2x">play_circle</md-icon>
              </md-button>
            </md-card-header-text>
          </md-card-header>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'home',
    components: {
      Navbar,
    },
  }
</script>

<style scoped>
  .text {
    padding-left: 80px;
    text-align: left;
    line-height: 1.5;
  }
  .title {
    font-size: 4em;
  }
  .subtitle {
    font-size: 1.5em;
    font-weight: 400;
  }
  .test {
    padding: 30px 40px;
  }
  .test .md-card {
    border-radius: 20px;
  }
  .test .md-card-media img {
    margin-top: 8px;
  }
  .test .md-card-header {
    padding: 8px;
  }
  .test .md-card-header-text {
    margin-top: 8px;
  }
  .md-icon {
    color: #DB9639 !important;
  }
</style>