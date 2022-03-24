<template>
    <div class="">
        <div class="mb-3 w-96">
            <label for="formFile" class="inline-block mb-4 text-neutral font-semibold text-xl">Upload your CV</label>
            <input @change="onChoseFile" :class="{'border-red': !form.file.valid}" class="
            block
            w-full
            px-3
            py-1.5
            text-sm
            text-gray-3
            bg-white bg-clip-padding
            border border-solid border-gray-3
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-3 focus:bg-white focus:border-blue focus:outline-none" type="file" id="formFile">
        </div>
        <span v-if="!form.file.valid" class="text-red text-sm">File CV requires only pdf format</span>
</div>
</template>
<script>
import AppButtonVue from "../Atoms/AppButton.vue"
import {useForm} from "../../use/form"

const required = val => !!val;
const isPdf = val => {
    if (val.value === '') {
        return true;
    }
    if (val.type === 'application/pdf') {
        return true;
    }
    return false;
}

export default {
    setup() {
        const form = useForm({
            file: {
                value: '',
                validators: {isPdf}
            },
        });

        return {form}
    },
    components: {
        AppButtonVue
    },
    methods: {
        onChoseFile(event) {
            this.form.file.value = event.target.files[0];
        }
    }
}
</script>
