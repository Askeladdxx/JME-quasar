<template>
  <div class="Home">
    <section>
      <header>
        <div class="container">
          <a href="" class="logo-container">
            <img
              src="./images/JME-logo.png"
              alt="logo"
              class="logo-image q-mr-md"
            />
            <label class="logo-name text-bold">Jade Metal Enterprise</label>
          </a>
          <div class="navbtn-containers">
            <q-btn
              v-for="button in navbuttons"
              :key="button.label"
              dense
              no-caps
              flat
              class="btn-navbar q-pa-xs text-bold q-mx-md"
              size="20px"
              :to="button.route"
            >
              {{ button.label }}
            </q-btn>
          </div>
        </div>
      </header>

      <div class="landing-section flex flex-center">
        <q-parallax src="./images/bg-image.png" class="parallax">
          <h1 class="text-white">Basic</h1>
        </q-parallax>
        <div class="">
          <img src="./images/JME-logo.png" alt="logo" class="landing-logo" />
          <h1 class="">Jade Metal Enterprise</h1>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
@import "./styles/HomePage.scss";
</style>
<script src="./scripts/HomePage"></script>
