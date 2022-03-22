import { defineStore } from 'pinia'

export const useRecommendedJobs = defineStore({
  id: 'recommendedJobs',
  state: () => {
    return {
      jobs: [
        {
          imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
          title: "AMS Performance",
          companyName: 'The linkedIdn Inc.'
        },
        {
          imgSrc: "http://simpleicon.com/wp-content/uploads/facebook_1.png",
          title: "Frontend developer",
          companyName: 'The facebook Inc.'
        },
        {
          imgSrc: "http://simpleicon.com/wp-content/uploads/apple.png",
          title: "Backend developer",
          companyName: 'The apple Inc.'
        },
        {
          imgSrc: "http://simpleicon.com/wp-content/uploads/google_1.png",
          title: "Backend developer",
          companyName: 'Google Inc.'
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
