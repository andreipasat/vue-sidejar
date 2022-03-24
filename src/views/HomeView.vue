<template>
  <file-upload-vue></file-upload-vue>
  <div class=" mt-16"></div>
  <my-applications-vue></my-applications-vue>
  <div class=" mt-16"></div>
  <recommended-jobs-vue></recommended-jobs-vue>
</template>

<script>
import { defineComponent } from "vue";
import RecommendedJobsVue from "../components/Organisms/RecommendedJobs.vue";
import MyApplicationsVue from "../components/Organisms/MyApplications.vue";
import FileUploadVue from "../components/Organisms/FileUpload.vue";

export default defineComponent({
  setup(){
    
  },
  components: {
    RecommendedJobsVue, MyApplicationsVue, FileUploadVue
  }
});
</script>
