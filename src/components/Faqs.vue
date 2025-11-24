<script setup>
import { ref } from 'vue'

const howItWorksOpen = ref(-1)
const safeDrivingOpen = ref(-1)

const toggleFaq = (section, index) => {
  if (section === 'howItWorks') {
    howItWorksOpen.value = howItWorksOpen.value === index ? -1 : index
  } else {
    safeDrivingOpen.value = safeDrivingOpen.value === index ? -1 : index
  }
}

const howItWorks = [
  {
    question: 'How do I download the app?',
    answer: `To download the Scoot app, you can search "Scoot" in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you'll be re-directed to the correct page.`,
  },
  {
    question: 'Can I find a nearby Scoots?',
    answer: `Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information.`,
  },
  {
    question: 'Do I need a license to ride?',
    answer: `Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.`,
  },
]

const safeDriving = [
  {
    question: 'Should I wear a helmet?',
    answer: `Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.`,
  },
  {
    question: 'How about the rules & regulations?',
    answer: `Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.`,
  },
  {
    question: 'What if I damage my Scoot?',
    answer: `Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.`,
  },
]
</script>

<template>
  <section class="px-24 max-[900px]:px-6">
    <h2 class="css-h2 text-dark-navy text-center my-[2rem]">FAQs</h2>
    
    <article class="grid grid-cols-2 max-[1024px]:grid-cols-1 my-[2.5rem]">
      <h3 class="css-h3 text-dark-navy max-[1024px]:text-center">How it works</h3>
      <div>
        <div 
          v-for="(faq, i) in howItWorks" 
          :key="i"
          class="my-[1rem] overflow-hidden transition-all duration-300 hover:bg-trans-yellow"
          :class="howItWorksOpen === i ? 'bg-trans-yellow' : 'bg-light-grey'"
        >
          <div 
            class="flex items-center justify-between cursor-pointer px-[2rem] py-[1rem]"
            @click="toggleFaq('howItWorks', i)"
          >
            <strong class="css-h4 text-dark-navy">{{ faq.question }}</strong>
            <img 
              src="/images/icons/chevron.svg" 
              alt="Toggle the faq answer"
              class="transition-transform duration-300 flex-shrink-0 ml-4"
              :class="{ 'rotate-180': howItWorksOpen === i }"
            />
          </div>
          <div 
            class="transition-all duration-300 ease-in-out overflow-hidden"
            :class="howItWorksOpen === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
          >
            <p class="px-[2rem] pb-[1rem] text-dark-navy">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </article>

    <article class="grid grid-cols-2 max-[1024px]:grid-cols-1 my-[2.5rem]">
      <h3 class="css-h3 text-dark-navy max-[1024px]:text-center">Safe driving</h3>
      <div>
        <div 
          v-for="(faq, i) in safeDriving" 
          :key="i"
          class="my-[1rem] overflow-hidden transition-all duration-300 hover:bg-trans-yellow"
          :class="safeDrivingOpen === i ? 'bg-trans-yellow' : 'bg-light-grey'"
        >
          <div 
            class="flex items-center justify-between cursor-pointer px-[2rem] py-[1rem]"
            @click="toggleFaq('safeDriving', i)"
          >
            <strong class="css-h4 text-dark-navy">{{ faq.question }}</strong>
            <img 
              src="/images/icons/chevron.svg" 
              alt="Toggle the faq answer"
              class="transition-transform duration-300 flex-shrink-0 ml-4"
              :class="{ 'rotate-180': safeDrivingOpen === i }"
            />
          </div>
          <div 
            class="transition-all duration-300 ease-in-out overflow-hidden"
            :class="safeDrivingOpen === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
          >
            <p class="px-[2rem] pb-[1rem] css-body text-dark-navy">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>