<template>
    <a href="#" @click="$emit('onClick')" class="bg-blue text-white text-sm-2 px-3 py-2 border border-blue rounded">
        <slot />
    </a>
</template>
<script>

export default {
    emits: ['onClick']
}
</script>
