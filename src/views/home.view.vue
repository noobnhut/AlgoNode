<template>
   <div class="flex flex-col h-full">

      <div class="flex-1">
         <!--navbar-->
         <div class="h-[80px] fixed inset-y-0 w-full z-[49]">
            <div class="p-4 gap-x-4 h-full flex items-center bg-background border-b">
               <!--button menu responsive-->
               <button class="
            inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
            disabled:pointer-events-none disabled:opacity-50 
          hover:bg-accent hover:text-accent-foreground h-10 px-4
            py-2 lg:hidden pr-4 hover:opacity-75 transition">
                  <Menu></Menu>
               </button>

               <!--icon website-->
               <a href="/">
                  <div class="items-center gap-x-2 hidden lg:flex hover:opacity-75 transition-opacity">
                     <img alt="logo"
                        src="https://media.discordapp.net/attachments/1137648162677456956/1260444636179075112/logo.png?ex=6751248b&is=674fd30b&hm=0a91ad6fc4acb362ee3b61944d3f0f7d64cb2b4bf251b7bc276b9768e2be3022&=&format=webp&quality=lossless&width=497&height=497"
                        loading="lazy" width="40" height="40" style="color:transparent">
                     <div class="leading-tight">
                        <p class="font-semibold text-base text-sky-700">AlgoNode</p>
                        <p class="text-xs text-muted-foreground">Code with 404NFP Team</p>
                     </div>
                  </div>
               </a>

               <!--search bar-->
               <div class="ml-auto hidden lg:block">
                  <form class="flex items-center relative">
                     <input
                        class="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
                        placeholder="Tìm kiếm ..." value=""><button
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80 h-10 px-4 py-2 rounded-l-none"
                        type="submit">
                        <SearchIcon class="h-4 w-4"></SearchIcon>
                     </button>
                  </form>
               </div>

               <!--icon team 404nfp-->

               <div class="flex items-center gap-x-2 ml-auto">
                  <button
                     class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                     404NFP Team
                  </button>
               </div>
            </div>
         </div>

         <!--sidebar-->
         <div class="hidden lg:flex pt-[80px] h-full w-72 flex-col fixed inset-y-0 z-[48]">
            <div class="h-full flex flex-col bg-white border-r overflow-y-auto">
               <div class="flex flex-col w-full flex-1">
                  <div class="flex flex-col w-full space-y-1.5 p-3">
                     <button class="flex w-full text-sm items-center py-3.5 px-3 hover:bg-muted rounded-lg transition-background group
                         bg-muted text-primary font-medium">Trang chủ</button>

                     <button class="flex w-full text-sm text-muted-foreground items-center py-3.5 px-3 
                        hover:bg-muted rounded-lg transition-background group">Tin tức</button>
                  </div>
               </div>

               <footer class="p-4 w-full bg-white border-t flex items-center justify-between">
                  <div class="text-xs text-muted-foreground py-2 px-4 lg:flex-1">© 2024 404NFP Team</div>
               </footer>
            </div>
         </div>

         <!--main-->
         <main class="lg:pl-72 pt-[80px]">
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
               <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6" >
                  <div v-for="number in 12" :key="number">
                  <a href="/">
                     <div
                        class="group hover:shadow-sm border transition overflow-hidden rounded-lg h-full flex flex-col bg-white">
                        <div class="flex-1">
                           <div class="relative w-full aspect-video rounded-t-md overflow-hidden border-b">
                              <img
                                 alt="Hehehehehe" loading="lazy" decoding="async" data-nimg="fill"
                                 class="duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover"
                                 sizes="100vw"
                                 src="https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-animated-mountains-landscape-wallpaper-4k-and-1080p-2px-image_2565761.jpg"
                                 style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                           </div>
                           <div class="flex flex-col pt-2 px-3">
                              <div
                                 class="text-sm md:text-base font-medium group-hover:text-sky-700 transition line-clamp-1">
                                 Hehehehehe</div>
                           </div>
                        </div>
                        <div class="px-3 pb-3"></div>
                     </div>
                  </a>
               </div>
               </div>
            </div>
         </main>
      </div>
   </div>
</template>

<script>
import {
   SearchIcon,
   Menu
} from 'lucide-vue-next'

export default {
   data() {
      return {
        
      }
   },

   components: {
      SearchIcon,

      Menu
   },

   mounted() {

   },

   methods: {

   }
}
</script>