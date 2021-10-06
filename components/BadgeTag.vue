<template>
    <span
        :class="`bg-${color}-300 text-${color}-500 hover:bg-${color}-100 hover:text-${color}-600`"
        class="
            uppercase
            inline-flex
            items-center
            px-2.5
            py-0.5
            rounded-full
            text-xs
            font-regular
        "
    >
        {{ name }}
    </span>
</template>

<script>
    export default {
        name: "BadgeTag",
        props: {
            name: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style>
</style>
