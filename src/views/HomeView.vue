<template>
  <recommended-jobs-vue></recommended-jobs-vue>
</template>

<script>
import { defineComponent } from "vue";
import RecommendedJobsVue from "../components/Organisms/RecommendedJobs.vue";

export default defineComponent({
  setup(){
    
  },
  components: {
    RecommendedJobsVue
  }
});
</script>
