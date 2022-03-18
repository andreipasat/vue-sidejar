<template>
    <router-link :to="to" class="flex flex-nowrap px-3 py-6px hover:text-neutral-2 hover:bg-gray-4 hover:rounded">
        <span class="grow">
            <slot />
        </span>
        <span v-if="count" class="text-xs-no-line-height text-indigo-2 font-semibold text-center bg-gray-4 w-6 h-6 rounded-full">{{ count }}</span>
    </router-link>
</template>
<script>
import { RouterLink } from "vue-router"

export default {
    components: {
        RouterLink
    },
    props: {
        to: {
            type: String,
            required: true
        },
        count: Number
    }

}

</script>