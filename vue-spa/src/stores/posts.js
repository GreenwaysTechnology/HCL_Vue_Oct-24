import { defineStore } from "pinia";

export const usePostsStore = defineStore('posts', {
    state: () => {
        return {
            posts: [],
            error: null
        }
    },
    actions: {
        //async 
        async fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const posts = await response.json()
                this.posts = posts
            }
            catch (err) {
                this.error = err
                console.log(err)
            }
        }
    },
    getters: {
        postList: state => state.posts
    }

})
