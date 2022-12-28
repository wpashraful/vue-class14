
<template>
  <div class="flex-col item-center justify-center">
    <HomePage></HomePage>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <h1 class="text-blue-900">bangladesh</h1>
    <router-view></router-view>
    <ButtonComponent :classs="red">red button</ButtonComponent>
    <ButtonComponent :classs="blue">blue button</ButtonComponent>
  </div>

      <ul class="flex-col text-center ">
        <SinglePost
            v-for="post in posts"
           :post="post"
          @delete="handledelete($event)"
            @fav ="favpost"
        />

      </ul>
            <h1 class="text-6xl text-center">Favourits</h1>
        <ul class="flex-col text-center">
          <SinglePost
              v-for="post in favs"
              :post="post"
              @delete="handledelete($event)"
              @fav ="favpost"
          />

        </ul>

  <h1 class="text-6xl text-center">UnFavourits</h1>
  <ul class="flex-col text-center">
    <SinglePost
        v-for="post in unfavs"
        :post="post"
        @delete="handledelete($event)"
        @fav ="favpost"
    />

  </ul>


  <div class="flex flex-col items-center">
    <ButtonComponent class="mt-5 mb-5" @click="addNew()" :classs="green">Add Post</ButtonComponent>
    <ButtonComponent class="mt-5 mb-5" :classs="green">favourite count: {{ favcount }}</ButtonComponent>
    <ButtonComponent class="mt-5 mb-5" :classs="red">Unfavourite count: {{ unfavcount }}</ButtonComponent>
  </div>

</template>


<script>
import HomePage from "./views/HomePage.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import SinglePost from "@/components/SinglePost.vue";

export default {
  components: {
    HomePage , ButtonComponent, SinglePost
  },
  computed:{
    favcount(){
      return this.posts.filter(post => post.fav).length
    },
    favs(){
      return this.posts.filter(post => post.fav)
    },
    unfavs(){
      return this.posts.filter(post => !post.fav)
    },
    unfavcount(){
      return this.posts.filter(post => !post.fav).length
    },

  },
  methods: {
    handledelete($post){
      this.posts = this.posts.filter(post => post.id !== $post.id)
    },
    favpost(post){
      this.posts = this.posts.map(p =>{
        if(p.id === post.id){
          p.fav = !post.fav
        }
        return p
      })
    },
    addNew(){
      this.posts.push({

        name: `post number ${this.posts.length + 1}`


      })
    }
  },
  data(){
    return{
      blue:'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
      green:'bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
      red:'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
      posts: [
        {
          id: 1,
          name: 'Ashraful alam',
          description: 'post number',
          fav: true
        },
        {
          id: 2,
          name: 'Shamim sarkar',
          description: 'post number',
          fav: false
        },
        {
          id: 3,
          name: 'Harun Model',
          description: 'post number',
          fav: true
        }
      ]
    }
  }

}
</script>

<style>

</style>


