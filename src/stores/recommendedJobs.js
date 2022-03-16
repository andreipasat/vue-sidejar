import { defineStore } from 'pinia'

export const useRecommendedJobs = defineStore({
  id: 'recommendedJobs',
  state: () => {
    return {
      jobs: [
        {
          imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
          title: "AMS Performance Marketing gfhvgjdhf vfdhjvgdjfhgh",
          companyName: 'The linkedIdn Inc.'
        },
        {
          imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
          title: "Frontend developer",
          companyName: 'The facebook Inc.'
        },
        {
          imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
          title: "Backend developer",
          companyName: 'The apple Inc.'
        },
        {
          imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
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
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
        title: "Devops",
        companyName: 'The google Inc.'
      },)
    }
  }
})
