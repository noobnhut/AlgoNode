<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
    <div v-for="algo in algos">
      <a :href="algo.link">
        <div class="group hover:shadow-sm border transition overflow-hidden rounded-lg h-full flex flex-col bg-white">
          <div class="flex-1">
            <div class="relative w-full aspect-video rounded-t-md overflow-hidden border-b">
              <img loading="lazy" decoding="async" data-nimg="fill"
                class="duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover" sizes="100vw"
                :src="`https://res.cloudinary.com/dgnsgobj6/image/upload/` + algo.img" style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                " />
            </div>
            <div class="flex flex-col pt-2 px-3">
              <div class="text-sm md:text-base font-medium group-hover:text-sky-700 transition line-clamp-1">
                {{ algo.title }}
              </div>
              <div class="my-3 flex items-center gap-x-2 text-xs">
                <div class="flex items-center gap-x-1 text-slate-500">
                  <div
                    class="inline-flex items-center border rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800">
                    <span>{{ algo.date }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="px-3 pb-3"></div>
        </div>
      </a>
    </div>
  </div>
  <!-- Phân trang -->
  <Pagination v-slot="{ page }" :total="total_pages * per_page" :sibling-count="1" show-edges :default-page="1"
    @update:page="handlePageChange">
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />
      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
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
</template>
<script>
import axios from "axios";
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
import { Button } from "@/components/ui/button";

export default {
  data() {
    return {
      algos: [],
      per_page: 6, // Số bài viết mỗi trang
      page: 1, // Trang hiện tại
      total_pages: 0,
    };
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
    Button
  },

  mounted() {
    this.getAlgos();
  },

  methods: {
    async getAlgos() {
      try {
        const response = await axios.get(
          "https://6753ea65f3754fcea7bcc402.mockapi.io/api/v1/algo_table",
          {
            params: {
              page:this.page,
              limit:this.per_page
            }
          }
        );
        this.algos = response.data;

        const get_total_items = await axios.get("https://6753ea65f3754fcea7bcc402.mockapi.io/api/v1/algo_table"); // lấy ra tổng kq
        const total_items = get_total_items.data.length; // Tổng số mục
        this.total_pages = Math.ceil(total_items / this.per_page); // Làm tròn lên
      } catch (error) {
        console.log(error);
      }
    },
    handlePageChange(newPage) {
      this.page = newPage; // Cập nhật trang hiện tại
      this.getAlgos(); // Lấy dữ liệu mới
    },
  },
};
</script>
