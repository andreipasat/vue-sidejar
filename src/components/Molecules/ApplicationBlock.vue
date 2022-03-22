<template>
    <div>
        <div class="space-y-12 w-full h-36">
        <div class="w-full flex justify-between">
            <span class=" text-neutral text-xl font-tt_commons">{{ element.amount }}</span>

            <span v-html="element.svg"></span>
        </div>

        <div class=" text-gray-3 font-tt_commons text-lg">
            {{element.name}}
        </div>

        </div>

    </div>
</template>
<script>
    export default {
        props: ['element']
    }
</script>