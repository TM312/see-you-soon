<template>
    <div>
        <dl
            class="grid grid-cols-1 gap-5 sm:grid-cols-2 mx-auto max-w-2xl py-5"
        >
            <div class="bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt class="text-sm font-medium text-sky-500 truncate">
                    Dec 3, 2021 20:23:00 GMT +08:00
                </dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">
                    &#128747; SIN
                </dd>
            </div>

            <div
                class="
                    px-4
                    py-5
                    bg-gray-50
                    shadow
                    rounded-lg
                    overflow-hidden
                    sm:p-6
                "
            >
                <dt class="text-sm font-medium text-sky-500 truncate">
                    Dec 3, 2021 20:23:00 GMT +02:00
                </dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">
                    &#128748; FRA
                </dd>
            </div>
        </dl>
    </div>
</template>

<script>
    export default {
        name: "Itinerary",
    };
</script>

<style>
</style>
