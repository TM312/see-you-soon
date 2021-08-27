<template>
    <div>
        <div class="body min-h-screen flex flex-col justify-center py-10">
            <div class="sm:mx-auto sm:w-full sm:max-w-md flex justify-center">
                <transition name="fade">
                    <button
                        type="button"
                        v-show="!clicked"
                        @click="clickButton"
                        class="
                            inline-flex
                            items-center
                            px-4
                            py-2
                            border border-transparent
                            text-sm
                            font-medium
                            rounded-md
                            text-indigo-700
                            bg-indigo-300
                            hover:bg-indigo-400
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-indigo-600
                        "
                    >
                        When is soon ?
                    </button>
                </transition>
                <transition name="fade">
                    <countdown
                        v-show="next"
                        class="flex justify-center content-center"
                    />
                </transition>
            </div>
        </div>
        <transition name="fade">
            <itinerary v-show="next" />
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                clicked: false,
                next: false,
            };
        },
        methods: {
            async clickButton() {
                this.clicked = true;
                this.$emit("clicked");
                await this.sleep(5);
                this.next = true;
            },
        },
    };
</script>
