<template>
  <div class="p-6 space-y-4 pt-[50px]">
    <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      <div v-for="item in news" :key="item.id" class="relative">
        <a :href="item.url" target="_blank">
          <div class="group hover:shadow-sm border transition overflow-hidden rounded-lg h-full flex flex-col bg-white">
            <div class="flex-1">
              <div class="relative w-full aspect-video rounded-t-md overflow-hidden border-b">
                <img
                  alt="Post Thumbnail"
                  loading="lazy"
                  decoding="async"
                  class="duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover"
                  sizes="100vw"
                  :src="item.cover_image || 'https://khromov.se/wp-content/uploads/2023/11/dev-to-logo-1024x512.png'"
                  style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                />
              </div>
              <div class="flex flex-col pt-2 px-3">
                <div class="text-sm md:text-base font-medium group-hover:text-sky-700 transition line-clamp-1">
                  {{ item.title }}
                </div>
                <p class="text-xs text-gray-500 mt-1">{{ item.description }}</p>
              </div>
            </div>
            <div class="px-3 pb-3 text-xs text-gray-400">
             Ngày đăng: {{ new Date(item.published_at).toLocaleDateString() }}
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- Phân trang -->
    <Pagination
      v-slot="{ page }"
      :total="total_pages * per_page"
      :sibling-count="1"
      show-edges
      :default-page="1"
      @update:page="handlePageChange"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst />
        <PaginationPrev />
        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>
        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>
  </div>
</template>
<script>
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";

export default {
  data() {
    return {
      news: [], // Dữ liệu bài viết
      per_page: 6, // Số bài viết mỗi trang
      page: 1, // Trang hiện tại
      total_pages: 0,
    };
  },

  mounted() {
    this.fetchData();
  },

  components: {
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
    Button,
  },

  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://dev.to/api/articles?tag=javascript", {
          params: {
            per_page: this.per_page, // Số bài viết mỗi trang
            page: this.page, // Trang hiện tại
          },
        });
        this.news = response.data; // Cập nhật danh sách bài viết

        const get_total_items = await axios.get("https://dev.to/api/articles?tag=javascript"); // lấy ra tổng kq
        const total_items = get_total_items.data.length; // Tổng số mục
        this.total_pages = Math.ceil(total_items / this.per_page); // Làm tròn lên
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    handlePageChange(newPage) {
      this.page = newPage; // Cập nhật trang hiện tại
      this.fetchData(); // Lấy dữ liệu mới
    },
  },
};
</script>
