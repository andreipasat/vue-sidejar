import { ref, reactive, watch } from "vue"

export function useField(field) {
    const valid = ref(true);
    const value = ref(field.value);
    
    const not = val => !val

    const errors = reactive({});

    const reassign = val => {
        valid.value = true;
        Object.keys(field.validators ?? {}).map(name => {
            const isValid = field.validators[name](val);
            errors[name] = not(isValid);
            if (not(isValid)) {
                valid.value = false;
            }
        })
    }

    watch(value, reassign)
    reassign(value)


    return {value, valid, errors};
}