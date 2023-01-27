<template>
  <div>
    <Header />
    <SectionOne />
    <SectionTwo />
    <Review />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import SectionOne from "./components/sectionOne.vue";
import SectionTwo from "./components/sectiontwo.vue";
import Review from "./components/review.vue";
import Gallery from "./components/gallery.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    SectionOne,
    SectionTwo,
    Review,
    Gallery,
    Footer,
  },
};
</script>

<style></style>
