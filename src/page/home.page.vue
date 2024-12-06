<template>
  <!--main-->
 
             <!--search reponsive-->
             <div class="px-6 pt-6 lg:hidden lg:mb-0 block">
                <form class="flex items-center relative">
                   <input
                      class="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
                      placeholder="Tìm kiếm ..." value="">
                   <button
                      class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80 h-10 px-4 py-2 rounded-l-none"
                      type="submit">
                      <SearchIcon class="h-4 w-4"></SearchIcon>
                   </button>
                </form>
             </div>
 
             <!--list course-->
             <div class="p-6 space-y-4">
                <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                   <div v-for="number in 12" :key="number">
                      <a href="/">
                         <div
                            class="group hover:shadow-sm border transition overflow-hidden rounded-lg h-full flex flex-col bg-white">
                            <div class="flex-1">
                               <div class="relative w-full aspect-video rounded-t-md overflow-hidden border-b">
                                  <img alt="Hehehehehe" loading="lazy" decoding="async" data-nimg="fill"
                                     class="duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover"
                                     sizes="100vw"
                                     src="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F639978a4-f9e8-402d-ad9e-3f7921ff0efb-8goos1.png&w=1920&q=75"
                                     style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                               </div>
                               <div class="flex flex-col pt-2 px-3">
                                  <div
                                     class="text-sm md:text-base font-medium group-hover:text-sky-700 transition line-clamp-1">
                                     Dự án code với Google docs</div>
                               </div>
                            </div>
                            <div class="px-3 pb-3"></div>
                         </div>
                      </a>
                   </div>
                </div>
             </div>
 
 </template>
 
 <script>
 import {
    SearchIcon
 } from 'lucide-vue-next'
 
 
 export default {
    data() {
       return {
 
       }
    },
 
    components: {
       SearchIcon,
    },
 
    mounted() {
 
    },
 
    methods: {
 
    }
 }
 </script>
