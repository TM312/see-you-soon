<template>
    <div>
        <div class="body min-h-screen flex flex-col justify-center py-10">
            <div class="sm:mx-auto sm:w-full sm:max-w-md flex justify-center">
                <transition name="fade">
                    <button
                        v-show="!clicked"
                        @click="clickButton"
                        class="btn btn-outline btn-primary no-animation"
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
