<template>
  <input
    @change="onChangeFile"
    class="block w-full px-3 py-1.5 text-sm text-gray-3 bg-white bg-clip-padding border border-solid border-gray-3 rounded transition ease-in-out m-0 focus:text-gray-3 focus:bg-white focus:border-blue focus:outline-none"
    type="file"
  />
</template>

<script>
export default {
    methods: {
        onChangeFile(event) {
            this.$emit('update:modelValue', event.target.files[0])
        }
    }
}
</script>