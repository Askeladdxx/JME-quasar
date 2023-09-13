<template>
  <head>
    <meta
      name="google-site-verification"
      content="c6NAzXfpvfZuiQMnLkMh3KBEzQ7kuokxPemYU5WwQRY"
    />
  </head>
  <q-layout
    view="hHr LpR fFr"
    container
    style="min-height: 100vh"
    class="shadow-2"
  >
    <q-page-container>
      <q-page>
        <div class="Contacts">
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
          <section id="sec-6">
            <div class="sec-6">
              <div class="contact-us q-pa-md">
                <h2 class="text-bold text-center">HOW TO REACH US?</h2>
                <div class="warehouse-container flex justify-evenly">
                  <div class="warehouse-one">
                    <h4 class="text-bold text-center">Caloocan Warehouse</h4>
                    <h5>
                      1278 Avocado Street Brgy. 178 Camarin, Caloocan City
                    </h5>
                    <h5><q-icon name="call" />09159017838</h5>
                  </div>
                  <div class="warehouse-two">
                    <h4 class="text-bold text-center">Pampanga Warehouse</h4>
                    <h5>
                      Brgy. Maliwalu, Bacolor Pampanga (In front of Maliwalu
                      Public Cemetery)
                      <h5><q-icon name="call" />09382325267</h5>
                    </h5>
                  </div>
                </div>
                <div class="contacts text-center">
                  <h4 class="text-bold">Email Us:</h4>
                  <h5 class="text-bold">
                    <q-icon name="mail" />jademetal17@gmail.com
                  </h5>
                </div>
              </div>
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
@import "./styles/ContactsPage.scss";
</style>
<script src="./scripts/ContactsPage"></script>
