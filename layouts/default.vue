<template>
    <div class="bg-gray-300">
        <navbar />
        <Nuxt />
    </div>
</template>

<script>
    import data from "@/data";

    export default {
        computed: {
            events() {
                return this.$store.$db().model("events").exists();
            },
        },
        async fetch() {
            if (this.events === false) {
                // Here we are stubbing the initial data. In the real world, this
                // should be the response from the API Backend.
                const initialData = await data();
                this.$store.$db().model("events").create({ data: initialData });
            }
        },
    };
</script>


<style>
    /* .body {
            height: 100vh;
            margin: 0;
        } */

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
