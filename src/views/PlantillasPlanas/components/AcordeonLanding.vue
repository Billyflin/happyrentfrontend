<script setup>
import AccordionItem from '@/components/AccordionItem.vue'
</script>

<template>
  <div class="mt-8 row">
    <div class="mx-auto text-center col-md-6">
      <h2>Preguntas frecuentes</h2>
      <p>Si tienes alguna duda, revisa nuestras preguntas frecuentes</p>
    </div>
  </div>
  <div class="row">
    <div class="mx-auto col-md-10">
      <div id="accordionRental" class="accordion">
        <accordion-item accordion-id="headingOne" active collapse-id="collapseOne">
          <template #question>How do I order?</template>
          <template #answer>
            We’re not always in the position that we want to be at. We’re constantly growing. We’re
            constantly making mistakes. We’re constantly trying to express ourselves and actualize
            our dreams. If you have the opportunity to play this game of life you need to appreciate
            every moment. A lot of people don’t appreciate the moment until it’s passed.
          </template>
        </accordion-item>
        <accordion-item accordion-id="headingTwo" collapse-id="collapseTwo">
          <template #question>How can i make the payment?</template>
          <template #answer>
            It really matters and then like it really doesn’t matter. What matters is the people who
            are sparked by it. And the people who are like offended by it, it doesn’t matter.
            Because it&#39;s motivating the doers. Because I’m here to follow my dreams and and
            inspire other people to follow their dreams, too.
            <br />We’re not always in the position that we want to be at. We’re constantly growing.
            We’re constantly making mistakes. We’re constantly trying to express ourselves and
            actualize our dreams. If you have the opportunity to play this game of life you need to
            appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
          </template>
        </accordion-item>

        <accordion-item accordion-id="headingThree" collapse-id="collapseThree">
          <template #question>How much time does it take to receive the order? </template>
          <template #answer>
            The time is now for it to be okay to be great. People in this world shun people for
            being great. For being a bright color. For standing out. But the time is now to be okay
            to be the greatest you. Would you believe in what you believe in, if you were the only
            one who believed it? If everything I did failed - which it doesn&#39;t, it actually
            succeeds - just the fact that I&#39;m willing to fail is an inspiration. People are so
            scared to lose that they don&#39;t even try. Like, one thing people can&#39;t say is
            that I&#39;m not trying, and I&#39;m not trying my hardest, and I&#39;m not trying to do
            the best way I know how.
          </template>
        </accordion-item>

        <accordion-item accordion-id="headingFour" collapse-id="collapseFour">
          <template #question>Can I resell the products?</template>
          <template #answer>
            I always felt like I could do anything. That’s the main thing people are controlled by!
            Thoughts- their perception of themselves! They&#39;re slowed down by their perception of
            themselves. If you&#39;re taught you can’t do anything, you won’t do anything. I was
            taught I could do everything.
            <br />
            <br />If everything I did failed - which it doesn&#39;t, it actually succeeds - just the
            fact that I&#39;m willing to fail is an inspiration. People are so scared to lose that
            they don&#39;t even even try. Like, one thing people can&#39;t say is that I&#39;m not
            trying, and I&#39;m not trying my hardest, and I&#39;m not trying trying to do the best
            way I know how.
          </template>
        </accordion-item>

        <accordion-item accordion-id="headingFifth" collapse-id="collapseFifth">
          <template #question>Where do I find the shipping details? </template>
          <template #answer>
            There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s
            my skill. I’m not really specifically talented at anything except for the ability to
            learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because
            you can’t learn anything from a compliment. I always felt like I could do anything.
            That’s the main thing people are controlled by! Thoughts- their perception of
            themselves! They&#39;re slowed down by their perception of themselves. If you&#39;re
            taught you can’t do anything, you won’t do anything. I was taught I could do everything.
          </template>
        </accordion-item>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
