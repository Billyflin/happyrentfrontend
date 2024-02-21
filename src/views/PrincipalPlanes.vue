<template>
  <navbar />
  <div
    class="page-header bg-gradient-dark position-relative m-3 border-radius-xl min-vh-50"
  >
    <img
      src="../assets/img/bg-pricing.jpg"
      alt="pattern-lines"
      class="page-header top-0 position-absolute opacity-8 start-0 w-100"
    />
    <span class="mask bg-gradient-dark opacity-2"></span>
    <div class="container py-10 position-relative z-index-2">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h2 class="text-white">Pick the best plan for you</h2>
          <p class="text-white">
            You have Free Unlimited Updates and Premium Support on each package.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid px-5 my-6">
    <div class="card mt-n8">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-4 col-md-6 col-7 mx-auto text-center">
            <div class="nav-wrapper mt-5 position-relative z-index-2">
              <ul
                id="tabs-pricing"
                class="nav nav-pills nav-fill flex-row p-1"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    id="tabs-iconpricing-tab-1"
                    class="nav-link mb-0 active"
                    data-bs-toggle="tab"
                    href="#monthly"
                    role="tab"
                    aria-controls="monthly"
                    aria-selected="true"
                  >Monthly</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    id="tabs-iconpricing-tab-2"
                    class="nav-link mb-0"
                    data-bs-toggle="tab"
                    href="#annual"
                    role="tab"
                    aria-controls="annual"
                    aria-selected="false"
                  >Annual</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tab-content tab-space">
          <div id="monthly" class="tab-pane active">
            <div class="row">
              <pricing-card
                :badge="{ color: 'light', label: 'Starter' }"
                :price="{ currency: '$', value: '59', charged: 'mo' }"
                :specifications="[
                  { label: '2 team members', includes: true },
                  { label: '20GB Cloud storage', includes: true },
                  { label: 'Integration help', includes: false },
                  { label: 'Sketch Files', includes: false },
                  { label: 'API Access', includes: false },
                  { label: 'Complete documentation', includes: false },
                ]"
                :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Join',
                }"
              />
              <pricing-card
                color="dark"
                :badge="{ color: 'success', label: 'premium' }"
                :price="{ currency: '$', value: '89', charged: 'mo' }"
                :specifications="[
                  { label: '10 team members', includes: true },
                  { label: '40GB Cloud storage', includes: true },
                  { label: 'Integration help', includes: true },
                  { label: 'Sketch Files', includes: true },
                  { label: 'API Access', includes: false },
                  { label: 'Complete documentation', includes: false },
                ]"
                :action="{
                  color: 'success',
                  route: 'javascript:;',
                  label: 'Try Premium',
                }"
                dark-mode
              />
              <pricing-card
                :badge="{ color: 'light', label: 'Enterprise' }"
                :price="{ currency: '$', value: '99', charged: 'mo' }"
                :specifications="[
                  { label: 'Unlimited team members', includes: true },
                  { label: '100GB Cloud storage', includes: true },
                  { label: 'Integration help', includes: true },
                  { label: 'Sketch Files', includes: true },
                  { label: 'API Access', includes: true },
                  { label: 'Complete documentation', includes: true },
                ]"
                :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Join',
                }"
              />
            </div>
          </div>
          <div id="annual" class="tab-pane">
            <div class="row">
              <pricing-card
                :badge="{ color: 'light', label: 'Starter' }"
                :price="{ currency: '$', value: '119', charged: 'yearly' }"
                :specifications="[
                  { label: '2 team members', includes: true },
                  { label: '20GB Cloud storage', includes: true },
                  { label: 'Integration help', includes: false },
                  { label: 'Sketch Files', includes: false },
                  { label: 'API Access', includes: false },
                  { label: 'Complete documentation', includes: false },
                ]"
                :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Join',
                }"
              />
              <pricing-card
                color="dark"
                :badge="{ color: 'success', label: 'premium' }"
                :price="{ currency: '$', value: '159', charged: 'yearly' }"
                :specifications="[
                  { label: '10 team members', includes: true },
                  { label: '40GB Cloud storage', includes: true },
                  { label: 'Integration help', includes: true },
                  { label: 'Sketch Files', includes: true },
                  { label: 'API Access', includes: false },
                  { label: 'Complete documentation', includes: false },
                ]"
                :action="{
                  color: 'success',
                  route: 'javascript:;',
                  label: 'Try Premium',
                }"
                dark-mode
              />
              <pricing-card
                :badge="{ color: 'light', label: 'Enterprise' }"
                :price="{ currency: '$', value: '399', charged: 'yearly' }"
                :specifications="[
                  { label: 'Unlimited team members', includes: true },
                  { label: '100GB Cloud storage', includes: true },
                  { label: 'Integration help', includes: true },
                  { label: 'Sketch Files', includes: true },
                  { label: 'API Access', includes: true },
                  { label: 'Complete documentation', includes: true },
                ]"
                :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Join',
                }"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container my-6">
        <div class="row">
          <div class="mx-auto text-center col-8">
            <h6 class="opacity-5">More than 50+ brands trust Soft</h6>
          </div>
        </div>
        <div class="mt-4 row">
          <div class="mb-4 col-lg-2 col-md-4 col-6">
            <img
              class="w-100 opacity-9"
              src="../assets/img/logos/gray-logos/logo-coinbase.svg"
              alt="logo_coinbase"
            />
          </div>
          <div class="mb-4 col-lg-2 col-md-4 col-6">
            <img
              class="w-100 opacity-9"
              src="../assets/img/logos/gray-logos/logo-nasa.svg"
              alt="logo_nasa"
            />
          </div>
          <div class="mb-4 col-lg-2 col-md-4 col-6">
            <img
              class="w-100 opacity-9"
              src="../assets/img/logos/gray-logos/logo-netflix.svg"
              alt="logo_netflix"
            />
          </div>
          <div class="mb-4 col-lg-2 col-md-4 col-6">
            <img
              class="w-100 opacity-9"
              src="../assets/img/logos/gray-logos/logo-pinterest.svg"
              alt="logo_pinterest"
            />
          </div>
          <div class="mb-4 col-lg-2 col-md-4 col-6">
            <img
              class="w-100 opacity-9"
              src="../assets/img/logos/gray-logos/logo-spotify.svg"
              alt="logo_spotify"
            />
          </div>
          <div class="mb-4 col-lg-2 col-md-4 col-6">
            <img
              class="w-100 opacity-9"
              src="../assets/img/logos/gray-logos/logo-vodafone.svg"
              alt="logo_vodafone"
            />
          </div>
        </div>
        <div class="mt-8 row">
          <div class="mx-auto text-center col-md-6">
            <h2>Frequently Asked Questions</h2>
            <p>
              A lot of people don&#39;t appreciate the moment until it’s passed.
              I&#39;m not trying my hardest, and I&#39;m not trying to do
            </p>
          </div>
        </div>
        <div class="row">
          <div class="mx-auto col-md-10">
            <div id="accordionRental" class="accordion">
              <accordion-item
                accordion-id="headingOne"
                collapse-id="collapseOne"
                active
              >
                <template #question>How do I order?</template>
                <template #answer>
                  We’re not always in the position that we want to be at. We’re
                  constantly growing. We’re constantly making mistakes. We’re
                  constantly trying to express ourselves and actualize our
                  dreams. If you have the opportunity to play this game of life
                  you need to appreciate every moment. A lot of people don’t
                  appreciate the moment until it’s passed.
                </template>
              </accordion-item>
              <accordion-item
                accordion-id="headingTwo"
                collapse-id="collapseTwo"
              >
                <template #question>How can i make the payment?</template>
                <template #answer>
                  It really matters and then like it really doesn’t matter. What
                  matters is the people who are sparked by it. And the people
                  who are like offended by it, it doesn’t matter. Because
                  it&#39;s motivating the doers. Because I’m here to follow my
                  dreams and and inspire other people to follow their dreams,
                  too.
                  <br />We’re not always in the position that we want to be at.
                  We’re constantly growing. We’re constantly making mistakes.
                  We’re constantly trying to express ourselves and actualize our
                  dreams. If you have the opportunity to play this game of life
                  you need to appreciate every moment. A lot of people don’t
                  appreciate the moment until it’s passed.
                </template>
              </accordion-item>

              <accordion-item
                accordion-id="headingThree"
                collapse-id="collapseThree"
              >
                <template #question
                >How much time does it take to receive the order?</template
                >
                <template #answer>
                  The time is now for it to be okay to be great. People in this
                  world shun people for being great. For being a bright color.
                  For standing out. But the time is now to be okay to be the
                  greatest you. Would you believe in what you believe in, if you
                  were the only one who believed it? If everything I did failed
                  - which it doesn&#39;t, it actually succeeds - just the fact
                  that I&#39;m willing to fail is an inspiration. People are so
                  scared to lose that they don&#39;t even try. Like, one thing
                  people can&#39;t say is that I&#39;m not trying, and I&#39;m
                  not trying my hardest, and I&#39;m not trying to do the best
                  way I know how.
                </template>
              </accordion-item>

              <accordion-item
                accordion-id="headingFour"
                collapse-id="collapseFour"
              >
                <template #question>Can I resell the products?</template>
                <template #answer>
                  I always felt like I could do anything. That’s the main thing
                  people are controlled by! Thoughts- their perception of
                  themselves! They&#39;re slowed down by their perception of
                  themselves. If you&#39;re taught you can’t do anything, you
                  won’t do anything. I was taught I could do everything.
                  <br />
                  <br />If everything I did failed - which it doesn&#39;t, it
                  actually succeeds - just the fact that I&#39;m willing to fail
                  is an inspiration. People are so scared to lose that they
                  don&#39;t even even try. Like, one thing people can&#39;t say
                  is that I&#39;m not trying, and I&#39;m not trying my hardest,
                  and I&#39;m not trying trying to do the best way I know how.
                </template>
              </accordion-item>

              <accordion-item
                accordion-id="headingFifth"
                collapse-id="collapseFifth"
              >
                <template #question
                >Where do I find the shipping details?</template
                >
                <template #answer>
                  There’s nothing I really wanted to do in life that I wasn’t
                  able to get good at. That’s my skill. I’m not really
                  specifically talented at anything except for the ability to
                  learn. That’s what I do. That’s what I’m here for. Don’t be
                  afraid to be wrong because you can’t learn anything from a
                  compliment. I always felt like I could do anything. That’s the
                  main thing people are controlled by! Thoughts- their
                  perception of themselves! They&#39;re slowed down by their
                  perception of themselves. If you&#39;re taught you can’t do
                  anything, you won’t do anything. I was taught I could do
                  everything.
                </template>
              </accordion-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>
<script>
import { useAppStore } from '@/store/index.js'
import { onMounted, onUnmounted } from 'vue'
import PricingCard from '@/views/components/PricingCard.vue'
import AccordionItem from '@/views/components/AccordionItem.vue'
// eslint-disable-next-line no-unused-vars
// import NavPill from "./components/NavPill.vue";
import setNavPills from "@/assets/js/nav-pills.js";
export default {
  name: 'PrincipalPlanes',
  components: { AccordionItem, PricingCard,},
  data() {
    return {}
  },
  methods: {
  },
  mounted() {
    setNavPills();
  },
  setup() {
    const store = useAppStore()
    const { toggleEveryDisplay, toggleHideConfig } = store
    onMounted(() => {
      toggleEveryDisplay()
      toggleHideConfig()
    })

    onUnmounted(() => {
      toggleEveryDisplay()
      toggleHideConfig()
    })
  }
}
</script>
