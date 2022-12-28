<template>

  <li class="text-3xl p-3 border bg-green-600 text-white" >
    <div :class="{fav: post.fav}">
      {{ post.name }} {{post.id}}
    </div>

    <ButtonComponent @click="handleclikc(post)" :classs="red">delete</ButtonComponent>
    <ButtonComponent @click="like(post)" :classs="white">make fav</ButtonComponent>
  </li>

</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  name: "SinglePost",
  components: {ButtonComponent},
  methods: {
    handleclikc(post){
       this.$emit('delete', post)
    },
    like(fav){
      this.$emit('fav', fav)
    }
  },
  props: {
    post: {
      type: Object
    }
  },
  data(){
    return{
      blue:'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
      red:'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
      white:'bg-white hover:bg-white text-black font-bold py-2 px-4 rounded',
    }

  }
}
</script>

<style scoped>
.fav{
  color: deeppink;
}
</style>