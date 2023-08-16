<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="Products">
          <header>
            <div class="navbar-container">
              <a href="" class="logo-container">
                <img
                  src="./images/JME-logo.png"
                  alt="logo"
                  class="logo-image q-my-sm"
                />
              </a>
              <div class="navbtn-container">
                <div class="navbtn-visibility">
                  <q-btn
                    v-for="button in navbuttons"
                    :key="button.label"
                    dense
                    no-caps
                    flat
                    class="btn-navbar q-pa-xs text-bold q-mx-md text-dark"
                    size="20px"
                    :to="button.route"
                  >
                    {{ button.label }}
                  </q-btn>
                </div>

                <div class="btn-group-visibility">
                  <q-btn-dropdown class="nav-btn-group">
                    <q-list>
                      <q-item
                        v-for="button in navbuttons"
                        :key="button.label"
                        dense
                        no-caps
                        flat
                        class="btn-navbar q-pa-xs text-bold q-mx-md"
                        :to="button.route"
                      >
                        <q-item-section>
                          <q-item-label class="btn-label text-h5">{{
                            button.label
                          }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>
              </div>
            </div>
          </header>

          <section id="sec-5">
            <div class="sec-5">
              <div class="company-header q-pa-md">
                <h2 class="text-center text-white text-bold q-ma-md">
                  Major Company Partners
                </h2>
              </div>

              <div class="company-logos row justify-evenly q-pa-md">
                <div v-for="company in companyLogo" :key="company.id">
                  <q-img
                    :src="company.logo"
                    spinner-color="primary"
                    spinner-size="82px"
                    class="logo q-ma-md"
                  />
                </div>
              </div>
              <div class="bottom-color q-pa-md"></div>
            </div>
          </section>
          <footer class="bg-dark">
            <div class="footer-container">
              <div class="text-white footer-title">
                <img
                  src="./images/JME-logo.png"
                  alt="logo"
                  class="footer-logo q-my-sm"
                />
                <h4>Jade Metal Enterprise</h4>
              </div>
            </div>
          </footer>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
@import "./styles/PartnersPage.scss";
</style>
<script src="./scripts/HomePage"></script>
