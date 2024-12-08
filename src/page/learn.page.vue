<template>
  <!--main-->
  <!--search reponsive-->
  <section class="min-h-screen h-full">
  <div class="px-6 pt-6 lg:hidden lg:mb-0 block">
    <form class="flex items-center relative">
      <input
        class="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
        placeholder="Tìm kiếm ..."
        value=""
      />
      <button
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80 h-10 px-4 py-2 rounded-l-none"
        type="submit"
      >
        <SearchIcon class="h-4 w-4"></SearchIcon>
      </button>
    </form>
  </div>

  <!--list course-->
  <div class="p-6 space-y-4">
    <!--menu-->
    <div class="flex items-center gap-x-2 overflow-x-auto pb-2">
      
      <router-link to="/on-tap">
        <div
          class="py-2 px-3 text-sm rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border"
          :class="{
            'border-sky-800/10 bg-sky-500/10 text-sky-800 font-bold': isActiveTab(
              '/on-tap'
            ),
            'bg-white': !isActiveTab('/on-tap'),
          }"
          @click="setActiveTab('/on-tap')"
        >
          <div class="truncate text-xs font-semibold">All</div>
        </div>
      </router-link>

      <router-link to="/on-tap/array">
        <div
          class="py-2 px-3 text-sm rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border"
          :class="{
            'border-sky-800/10 bg-sky-500/10 text-sky-800 font-bold': isActiveTab(
              '/array'
            ),
            'bg-white': !isActiveTab('/array'),
          }"
          @click="setActiveTab('/array')"
        >
          <div class="truncate text-xs font-semibold">Mảng</div>
        </div>
      </router-link>

      <router-link to="/on-tap/danh-sach">
        <div
          class="py-2 px-3 text-sm rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border"
          :class="{
            'border-sky-800/10 bg-sky-500/10 text-sky-800 font-bold': isActiveTab(
              '/danh-sach'
            ),
            'bg-white': !isActiveTab('/danh-sach'),
          }"
          @click="setActiveTab('/danh-sach')"
        >
          <div class="truncate text-xs font-semibold">Danh sách</div>
        </div>
      </router-link>

      <router-link to="/on-tap/ngan-xep-hang-doi">
        <div
          class="py-2 px-3 text-sm rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border"
          :class="{
            'border-sky-800/10 bg-sky-500/10 text-sky-800 font-bold': isActiveTab(
              '/ngan-xep-hang-doi'
            ),
            'bg-white': !isActiveTab('/ngan-xep-hang-doi'),
          }"
          @click="setActiveTab('/ngan-xep-hang-doi')"
        >
          <div class="truncate text-xs font-semibold">Ngăn xếp và hàng đợi</div>
        </div>
      </router-link>

      <router-link to="/on-tap/giai-thuat-tim-kiem">
        <div
          class="py-2 px-3 text-sm rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border"
          :class="{
            'border-sky-800/10 bg-sky-500/10 text-sky-800 font-bold': isActiveTab(
              '/giai-thuat-tim-kiem'
            ),
            'bg-white': !isActiveTab('/giai-thuat-tim-kiem'),
          }"
          @click="setActiveTab('/giai-thuat-tim-kiem')"
        >
          <div class="truncate text-xs font-semibold">Giải thuật tìm kiếm</div>
        </div>
      </router-link>

      <router-link to="/on-tap/giai-thuat-sap-xep">
        <div
          class="py-2 px-3 text-sm rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border"
          :class="{
            'border-sky-800/10 bg-sky-500/10 text-sky-800 font-bold': isActiveTab(
              '/giai-thuat-sap-xep'
            ),
            'bg-white': !isActiveTab('/giai-thuat-sap-xep'),
          }"
          @click="setActiveTab('/giai-thuat-sap-xep')"
        >
          <div class="truncate text-xs font-semibold">Giải thuật sắp xếp</div>
        </div>
      </router-link>

      <router-link to="/on-tap/cau-truc-du-lieu-cay">
        <div
          class="py-2 px-3 text-sm rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border"
          :class="{
            'border-sky-800/10 bg-sky-500/10 text-sky-800 font-bold': isActiveTab(
              '/cau-truc-du-lieu-cay'
            ),
            'bg-white': !isActiveTab('/cau-truc-du-lieu-cay'),
          }"
          @click="setActiveTab('/cau-truc-du-lieu-cay')"
        >
          <div class="truncate text-xs font-semibold">Cấu trúc dữ liệu cây</div>
        </div>
      </router-link>

      <router-link to="/on-tap/de-quy">
        <div
          class="py-2 px-3 text-sm rounded-md flex items-center gap-x-1 hover:shadow-sm transition cursor-pointer border"
          :class="{
            'border-sky-800/10 bg-sky-500/10 text-sky-800 font-bold': isActiveTab(
              '/de-quy'
            ),
            'bg-white': !isActiveTab('/de-quy'),
          }"
          @click="setActiveTab('/de-quy')"
        >
          <div class="truncate text-xs font-semibold">Đệ quy</div>
        </div>
      </router-link>

    </div>

    <!--course-->
    <router-view></router-view>
  </div>
</section>
</template>

<script>
import { SearchIcon } from "lucide-vue-next";

export default {
  data() {
    return {
      activeTab: this.$route.path,
    };
  },

  components: {
    SearchIcon,
  },

  watch: {
    // Khi URL thay đổi (chuyển tab), cập nhật lại activeTab
    "$route.path"(newPath) {
      this.activeTab = newPath;
    },
  },
  mounted() {},

  methods: {
    isActiveTab(tabPath) {
      return this.activeTab === tabPath;
    },
    // Set active tab khi click vào tab
    setActiveTab(tabPath) {
      this.activeTab = tabPath;
    },
  },
};
</script>
