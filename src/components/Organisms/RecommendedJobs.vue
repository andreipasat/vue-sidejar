<template>
    <!-- <div class="py-2 px-2 m-auto lg:w-4/5 md:w-2/3"> -->
    <!-- <button type="button" class="border border-indigo rounded p-1 mb-2 bg-white text-indigo text-sm" @click="addJob">Add job</button> -->
    <ul
        role="list"
        class="grid auto-rows-auto grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <li v-for="(job, idx) in jobsStore.recommendedJobs" :key="job.title + idx" class="col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-264 min-h-264"
      >
        <div>
          <div class="space-y-5 w-full h-36">
            <div class="w-full flex justify-between space-x-6">
              <img
                  class="w-10 h-10 bg-gray-300 rounded flex-shrink-0"
                  :src="job.imgSrc"
                  alt=""
              />

              <a href="#">
                <img src="/svg/add.svg" />
              </a>

            </div>

            <div class="space-y-1">
              <h1 class="text-neutral font-sans text-lg">{{ job.title }} </h1>
              <h2 class="text-gray-3 font-sans text-sm">{{ job.companyName }}</h2>
            </div>


          </div>

          <div class="space-y-5 w-full">
            <div class="flex space-x-1">
              <div class="flex justify-center basis-1/7">
                <img src="/svg/fit.svg" class="" alt="">
              </div>
              <div class="basis-10/12"><span class="text-green font-sans text-xs">Great fit</span></div>
            </div>

            <div class="flex justify-between">
              <div>
                <a href="/">
                  <span class="font-semibold font-sans text-gray-0 text-sm">Dismiss</span>
                </a>
              </div>
              <div class="basis-1/2 flex justify-end">
                <a href="/">
                  <span class="text-sm font-semibold font-sans text-indigo">Learn more</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </li>

    </ul>
  <!-- </div> -->
</template>

<script>
import { useRecommendedJobs } from "../../stores/recommendedJobs";
export default {
    setup() {
        const jobsStore = useRecommendedJobs();
        return {
            jobsStore
        }
    },
}
</script>