import { onMounted, ref } from "vue";

function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
    //write function to fecth data
    async function fetchAlbums() {
        try {
            const response = await fetch(url);
            const albums = await response.json();
            data.value = albums;
        } catch (err) {
            console.log(err);
            error.value = err;
        }
    }

    //api calls must be done inside onmount
    onMounted(() => {
        fetchAlbums();
    });
    return {
        data, error
    }
}

export { useFetch }

