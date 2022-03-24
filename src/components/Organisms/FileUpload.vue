<template>
    <h1 class="inline-block mb-4 text-neutral font-semibold text-xl">Upload your CV</h1>
    <div class="flex space-x-2">
        <div class="mb-3 w-96">
            <app-input-file-vue v-model="form.file.value" :class="{'border-red': !form.file.valid}"></app-input-file-vue>
            <span v-if="!form.file.valid" class="text-red text-sm">File CV requires only pdf format</span>
        </div>
    </div>
</template>
<script>
import AppButtonVue from "../Atoms/AppButton.vue"
import AppInputFileVue from "../Atoms/AppInputFile.vue";
import {useForm} from "../../use/form"
import http from "../../use/http"

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
    data() {
        return {
            file: this.form.file
        }
    },
    components: {
        AppButtonVue, AppInputFileVue
    },
    watch: {
        'form.file.value'(newValue) {
            if (this.form.file.valid && typeof this.form.file.value === 'object') {
                const formData = new FormData();
                formData.append('file', this.form.file.value);
                http.post('/upload', formData, {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                });
            }
        }
    }
}
</script>
