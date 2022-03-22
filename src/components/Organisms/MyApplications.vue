<template>
    <div class="flex justify-between align-middle py-5 font-semibold">
      <div>
        <h1 class="text-neutral text-xl">My applications</h1>
      </div>
      <div class="mt-1">
        <app-button>Job tracker</app-button>
      </div>
    </div>
    <ul
        role="list"
        class="grid auto-rows-auto grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <li class="col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-154 min-h-154"
      >
        <application-block-vue :element="wishlist"></application-block-vue>

      </li>
      <li class="col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-154 min-h-154"
      >
        <application-block-vue :element="applied"></application-block-vue>

      </li>
      <li class="col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-154 min-h-154"
      >
        <application-block-vue :element="interview"></application-block-vue>

      </li>
      <li class="col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-154 min-h-154"
      >
        <application-block-vue :element="offer"></application-block-vue>

      </li>

    </ul>
  <!-- </div> -->
</template>

<script>
import { useMyApplications } from "../../stores/myApplications";
import AppButton from "../Atoms/AppButton.vue"
import ApplicationBlockVue from "../Molecules/ApplicationBlock.vue";
export default {
    setup() {
        const appsStore = useMyApplications();
        //  console.log(appsStore.wishlist);
        return {
            appsStore
        }
    },
    components:{
      AppButton, ApplicationBlockVue
    },
    data () {
      return {
        wishlist: this.appsStore.wishlist,
        applied: this.appsStore.applied,
        interview: this.appsStore.interview,
        offer: this.appsStore.offer
      }
    }
}
</script>