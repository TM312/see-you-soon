<template>
    <div>
        <menu-banner />
        <div class="body min-h-screen flex flex-col py-10">
            <div class="sm:mx-auto sm:w-full sm:max-w-md flex">
                <fieldset class="space-y-5">
                    <div
                        v-for="event in events"
                        :key="event.public_id"
                        class="relative flex items-start"
                    >
                        <div class="flex items-center h-5">
                            <input
                                id="offers"
                                aria-describedby="offers-description"
                                name="offers"
                                type="checkbox"
                                :checked="event.checked"
                                class="
                                    focus:ring-indigo-500
                                    h-4
                                    w-4
                                    text-indigo-600
                                    border-gray-300
                                    rounded
                                "
                            />
                        </div>
                        <div class="ml-3 text-sm">
                            <label
                                for="offers"
                                class="font-medium text-gray-700"
                                v-text="event.name"
                            />
                            <p
                                id="offers-description"
                                class="text-gray-500"
                                v-text="event.description"
                            />
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            events() {
                return this.$store.$db().model("events").all();
            },
        },
    };
</script>

<style>
</style>
