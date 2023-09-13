<template>
  <q-layout
    view="hHr LpR fFr"
    container
    style="min-height: 100vh"
    class="shadow-2"
  >
    <q-page-container>
      <q-page>
        <div class="Products">
          <q-header reveal elevated class="header">
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
                    class="btn-navbar q-pa-xs text-bold q-mx-md text-white"
                    size="20px"
                    :to="button.route"
                  >
                    {{ button.label }}
                  </q-btn>
                </div>
              </div>
              <div class="btn-group-visibility">
                <div>
                  <q-toolbar>
                    <q-btn
                      flat
                      @click="drawerRight = !drawerRight"
                      round
                      dense
                      icon="menu"
                      size="25px"
                    />
                  </q-toolbar>
                  <q-drawer
                    side="right"
                    v-model="drawerRight"
                    bordered
                    :width="200"
                    :breakpoint="500"
                    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
                    ><q-scroll-area class="fit">
                      <div class="q-pa-sm">
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
                    </q-scroll-area>
                  </q-drawer>
                </div>
              </div>
            </div>
          </q-header>
          <section id="sec-5">
            <div class="sec-5">
              <div class="company-header q-pa-md">
                <h2 class="text-center text-bold q-ma-md">
                  Major Company Partners
                </h2>
              </div>

              <div class="company-logos row justify-evenly">
                <div
                  v-for="company in companyLogo"
                  :key="company.id"
                  class="q-ma-md q-pa-md"
                >
                  <q-img
                    :src="company.logo"
                    spinner-color="primary"
                    spinner-size="82px"
                    class="logo"
                  />
                </div>
              </div>
              <div class="bottom-color q-pa-md"></div>
            </div>
          </section>
          <footer class="bg-dark text-white">
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
            <div class="footer-text">
              <div class="text-center">
                <label class="text-bold">Contact Us:</label>
                <h6 class="q-my-sm"><q-icon name="call" />09159017838</h6>
                <h6 class="q-my-sm"><q-icon name="call" />09382325267</h6>
              </div>
              <div class="text-center">
                <label class="text-bold">Email us:</label>
                <h6 class="q-my-sm">
                  <q-icon name="mail" />jademetal17@gmail.com
                </h6>
              </div>
            </div>
            <q-separator inset color="grey" />

            <div class="flex flex-center q-pa-lg">
              <label class="text-center text-white"
                >© 2023 Jade Metal Enterprise. All rights reserved.</label
              >
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
