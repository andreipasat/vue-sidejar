<template>
    <div class="flex justify-between align-middle py-5 font-semibold">
      <div>
        <h1 class="text-neutral text-xl">Jobs you may be interested in</h1>
      </div>
      <div class="mt-1">
        <app-button>More jobs</app-button>
      </div>
    </div>
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z" fill="#B0B0B0"/>
                </svg>
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00008 4.66664C9.41457 4.66664 10.7711 5.22854 11.7713 6.22874C12.7715 7.22893 13.3334 8.58549 13.3334 9.99997C13.3334 11.4145 12.7715 12.771 11.7713 13.7712C10.7711 14.7714 9.41457 15.3333 8.00008 15.3333C6.58559 15.3333 5.22904 14.7714 4.22885 13.7712C3.22865 12.771 2.66675 11.4145 2.66675 9.99997C2.66675 8.58549 3.22865 7.22893 4.22885 6.22874C5.22904 5.22854 6.58559 4.66664 8.00008 4.66664ZM8.00008 5.99997C6.93922 5.99997 5.9218 6.4214 5.17165 7.17155C4.42151 7.92169 4.00008 8.93911 4.00008 9.99997C4.00008 11.0608 4.42151 12.0783 5.17165 12.8284C5.9218 13.5785 6.93922 14 8.00008 14C9.06095 14 10.0784 13.5785 10.8285 12.8284C11.5787 12.0783 12.0001 11.0608 12.0001 9.99997C12.0001 8.93911 11.5787 7.92169 10.8285 7.17155C10.0784 6.4214 9.06095 5.99997 8.00008 5.99997ZM8.00008 6.99997L8.88208 8.78664L10.8534 9.07331L9.42675 10.4633L9.76341 12.4273L8.00008 11.5L6.23675 12.4266L6.57341 10.4633L5.14675 9.07264L7.11808 8.78597L8.00008 6.99997ZM12.0001 1.33331V3.33331L11.0914 4.09197C10.3374 3.69636 9.51412 3.44986 8.66675 3.36597V1.33331H12.0001ZM7.33341 1.33264V3.36597C6.48631 3.44974 5.6633 3.69601 4.90941 4.09131L4.00008 3.33331V1.33331L7.33341 1.33264Z" fill="#207544"/>
                </svg>
              </div>
              <div class="basis-10/12"><span class="text-green font-sans text-xs">Great fit</span></div>
            </div>

            <div class="flex justify-between">
              <div>
                <a href="#">
                  <span class="font-semibold font-sans text-gray-0 text-sm">Dismiss</span>
                </a>
              </div>
              <div class="basis-1/2 flex justify-end">
                <a href="#">
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
import AppButton from "../Atoms/AppButton.vue"
export default {
    setup() {
        const jobsStore = useRecommendedJobs();
        return {
            jobsStore
        }
    },
    components:{
      AppButton
    }
}
</script>