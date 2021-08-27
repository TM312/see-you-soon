<!-- Please remove this file from your project -->
<template>
    <button
        type="button"
        @click="$emit('clicked')"
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
            bg-indigo-100
            hover:bg-indigo-200
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        "
    >
        When is soon ?
    </button>
</template>


<script>
    export default {
        name: "CenterButton",
        data() {
            return {
                showButton: true,
            };
        },
    };
</script>

<style>
</style>
