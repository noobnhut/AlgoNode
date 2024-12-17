<template>
   <div class="flex flex-col h-full">

      <div class="flex-1">
         <!--navbar-->
         <div class="h-[80px] fixed inset-y-0 w-full z-[49]">
            <div class="p-4 gap-x-4 h-full flex items-center bg-background border-b">
               <!--button menu responsive-->
               <Sheet>
                  <SheetTrigger>
                     <button class="
            inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
            disabled:pointer-events-none disabled:opacity-50 
            hover:bg-accent hover:text-accent-foreground h-10 px-4
            py-2 lg:hidden pr-4 hover:opacity-75 transition">
                        <Menu></Menu>
                     </button>

                  </SheetTrigger>
                  <SheetTitle class="sr-only">navbar mobile</SheetTitle>
                  <SheetContent class="w-[250px] sm:w-[540px]" side="left">
                     <div class="flex flex-col w-full space-y-1.5 pt-4">
                        <router-link to="/"
                           class="flex w-full text-sm items-center text-muted-foreground  py-3.5 px-3 hover:bg-muted rounded-lg transition-background group"
                           :class="{ 'bg-muted font-bold': isActiveTab('/') }" @click="setActiveTab('/')">
                           Trang chủ
                        </router-link>

                        <router-link to="/on-tap"
                           class="flex w-full text-sm text-muted-foreground items-center py-3.5 px-3 hover:bg-muted rounded-lg transition-background group"
                           :class="{ 'bg-muted font-bold': isActiveTab('/on-tap') }" @click="setActiveTab('/on-tap')">
                           Ôn tập
                        </router-link>

                        <router-link to="/tin-tuc"
                           class="flex w-full text-sm text-muted-foreground items-center py-3.5 px-3 hover:bg-muted rounded-lg transition-background group"
                           :class="{ 'bg-muted font-bold': isActiveTab('/tin-tuc') }" @click="setActiveTab('/tin-tuc')">
                           DEV.TO
                        </router-link>
                     </div>
                  </SheetContent>
               </Sheet>


               <!--icon website-->
               <a href="/">
                  <div class="items-center gap-x-2 hidden lg:flex hover:opacity-75 transition-opacity">
                     <img alt="logo" src="/public/vite.svg" loading="lazy" width="40" height="40"
                        style="color:transparent">
                     <div class="leading-tight">
                        <p class="font-semibold text-base text-sky-700">AlgoNode</p>
                        <p class="text-xs text-muted-foreground">404NFP Team</p>
                     </div>
                  </div>
               </a>

               <!--search bar-->
               <div class="ml-auto hidden lg:block">
                  <div class="flex items-center relative">
                     <input v-model="searchValue" @keyup.enter="searchHandler"
                        class="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
                        placeholder="Tìm kiếm ..." />
                     <button @click="searchHandler"
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80 h-10 px-4 py-2 rounded-l-none"
                        type="button">
                        <SearchIcon class="h-4 w-4"></SearchIcon>
                     </button>
                  </div>
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
                     <router-link to="/"
                        class="flex w-full text-sm items-center text-muted-foreground  py-3.5 px-3 hover:bg-muted rounded-lg transition-background group"
                        :class="{ 'bg-muted font-bold': isActiveTab('/') }" @click="setActiveTab('/')">
                        Trang chủ
                     </router-link>

                     <router-link to="/on-tap"
                        class="flex w-full text-sm text-muted-foreground items-center py-3.5 px-3 hover:bg-muted rounded-lg transition-background group"
                        :class="{ 'bg-muted font-bold': isActiveTab('/on-tap') }" @click="setActiveTab('/on-tap')">
                        Ôn tập
                     </router-link>

                     <router-link to="/tin-tuc"
                        class="flex w-full text-sm text-muted-foreground items-center py-3.5 px-3 hover:bg-muted rounded-lg transition-background group"
                        :class="{ 'bg-muted font-bold': isActiveTab('/tin-tuc') }" @click="setActiveTab('/tin-tuc')">
                        DEV.TO
                     </router-link>
                  </div>
               </div>

               <footer class="p-4 w-full bg-white border-t flex items-center justify-between">
                  <div class="text-xs text-muted-foreground py-2 px-4 lg:flex-1">© 2024 404NFP Team</div>
               </footer>
            </div>
         </div>

         <!--main-->
         <main class="lg:pl-72 pt-[40px] bg-muted">
            <router-view />
         </main>

      </div>
   </div>
</template>

<script>
import {
   SearchIcon,
   Menu
} from 'lucide-vue-next'

import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/components/ui/sheet'

export default {
   data() {
      return {
         activeTab: this.$route.path,
         searchValue: "",
      }
   },

   components: {
      SearchIcon,
      Sheet,
      SheetClose,
      SheetContent,
      SheetDescription,
      SheetFooter,
      SheetHeader,
      SheetTitle,
      SheetTrigger,

      Menu
   },

   mounted() {

   },
   watch: {
      // Khi URL thay đổi (chuyển tab), cập nhật lại activeTab
      '$route.path'(newPath) {
         this.activeTab = newPath;
      },
   },

   methods: {
      isActiveTab(tabPath) {
         return this.activeTab === tabPath;
      },
      // Set active tab khi click vào tab
      setActiveTab(tabPath) {
         this.activeTab = tabPath;
      },

      searchHandler() {
      if (this.searchValue.trim()) {
        // Điều hướng đến URL tìm kiếm
                window.location.href = `/tim-kiem?q=${encodeURIComponent(this.searchValue)}`;

      }
    },
   }
}
</script>