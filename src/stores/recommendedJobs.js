import { defineStore } from 'pinia'

export const useRecommendedJobs = defineStore({
  id: 'recommendedJobs',
  state: () => {
    return {
      jobs: [
        {
          imgSrc: "public/svg/linkedin-logo-icon-image-vector-37037034 1.svg",
          title: "Fullstack developer",
          companyName: 'The linkedIdn Inc.'
        },
        {
          imgSrc: "public/svg/linkedin-logo-icon-image-vector-37037034 1.svg",
          title: "Frontend developer",
          companyName: 'The facebook Inc.'
        },
        {
          imgSrc: "public/svg/linkedin-logo-icon-image-vector-37037034 1.svg",
          title: "Backend developer",
          companyName: 'The apple Inc.'
        },
        {
          imgSrc: "public/svg/linkedin-logo-icon-image-vector-37037034 1.svg",
          title: "Backend developer",
          companyName: 'The apple Inc.'
        },
      ],
    }
  },
  getters: {
    recommendedJobs(state) {
      return state.jobs;
    },
  },
  actions: {
    addJob() {
      this.recommendedJobs.push({
        imgSrc: "public/svg/linkedin-logo-icon-image-vector-37037034 1.svg",
        title: "Devops",
        companyName: 'The google Inc.'
      },)
    }
  }
})
