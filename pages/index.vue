<template>
    <div>
        <div class="body min-h-screen flex flex-col justify-center pb-32">
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
                    <div>
                        <countdown
                            v-show="next && showTimer"
                            class="flex justify-center content-center"
                            @arrived="showTimer = false"
                        />
                        <div
                            v-show="next && !showTimer"
                            class="flex justify-center text-center uppercase text-3xl text-indigo-900"
                        >
                        WELCOME TO 🇸🇬
                        
                        <div><img class="mt-16" src="~assets/gif/welcome.gif" width="384" height="248" /></div>
                        </div>
                    </div>

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
                showTimer: true
            };
        },
        methods: {
            async clickButton() {
                this.clicked = true;
                this.$nuxt.$emit("clicked");
                await this.sleep(3);
                this.next = true;
            },
        },
    };
</script>
