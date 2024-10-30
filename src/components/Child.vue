<template>
    <div>
        afdjadf
    </div>
</template>
<script setup>
import {ref, defineExpose} from 'vue'

const a = 1
const b = ref(2)

//Compiler macros like defineExpose do not need to be imported.
defineExpose({a, b})
console.log("1"+new Date())
</script>