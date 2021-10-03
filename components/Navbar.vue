<template>
    <div class="text-xl flex justify-end p-10">
        <NuxtLink
            :class="next ? '' : 'invisible'"
            type="button"
            :to="route"
            class="
                inline-flex
                rounded
                hover:bg-gray-50
                items-center
                px-4
                py-2
                text-base
                font-medium
                text-gray-600
                hover:text-gray-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
            "
        >
            <icon-menu class="mr-1" />
            {{ linkName }}
        </NuxtLink>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                next: false,
            };
        },
        created() {
            this.$nuxt.$on("clicked", () => {
                this.showMenu();
            });
        },

        computed: {
            linkName() {
                return this.$route.name == "index" ? "Menu" : "Home";
            },
            route() {
                return this.$route.name == "index" ? "/menu" : "/";
            },
        },
        methods: {
            async showMenu() {
                await this.sleep(6);
                this.next = true;
            },
        },
    };
</script>

<style>
</style>
