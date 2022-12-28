<template>
    <Button :class="classs"  ><slot></slot></Button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props:{
    classs:String,
  }

}

</script>

<style scoped>

</style>