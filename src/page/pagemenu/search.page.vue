<template>
    <section class="min-h-screen h-full pt-[50px]">
        <div class="p-6 space-y-4">
            <template v-if="algos.length > 5">
            <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                <div v-for="algo in algos">
                    <a :href="'/' + algo.link">
                        <div
                            class="group hover:shadow-sm border transition overflow-hidden rounded-lg h-full flex flex-col bg-white">
                            <div class="flex-1">
                                <div class="relative w-full aspect-video rounded-t-md overflow-hidden border-b">
                                    <img loading="lazy" decoding="async" data-nimg="fill"
                                        class="duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover"
                                        sizes="100vw"
                                        :src="`https://res.cloudinary.com/dgnsgobj6/image/upload/` + algo.img" style="
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      inset: 0px;
                      color: transparent;
                    " />
                                </div>
                                <div class="flex flex-col pt-2 px-3">
                                    <div
                                        class="text-sm md:text-base font-medium group-hover:text-sky-700 transition line-clamp-1">
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
            <Pagination v-if="algos.length > 5" v-slot="{ page }" :total="total_pages * per_page" :sibling-count="1"
                show-edges :default-page="1" @update:page="handlePageChange">
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

        <template v-else>
            <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8 text-center">
                    <div>
                        <FileSearchIcon class="mx-auto h-24 w-24 text-gray-400" />
                        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                            Bài viết không tìm thấy
                        </h2>
                        <p class="mt-2 text-sm text-gray-600">
                            Xin lỗi, chúng tôi không thể tìm thấy bài viết bạn đang tìm kiếm.
                        </p>
                    </div>
                    <div class="mt-8 space-y-6">
                        <input type="text" v-model="searchValue" @keyup.enter="searchHandler"
                            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                            placeholder="Tìm kiếm bài viết..." />
                        <button @click="searchHandler()"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-sky-700 text-white hover:bg-sky-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <SearchIcon class="h-5 w-5 mr-2" />
                            Tìm kiếm
                        </button>
                    </div>
                    <div class="mt-6">
                        <router-link to="/" class="font-medium text-gray-600 hover:text-gray-500">
                            Trở về trang chủ
                            <ArrowRightIcon class="inline-block h-4 w-4 ml-1" />
                        </router-link>
                    </div>
                </div>
            </div>
        </template>

        </div>
    </section>
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
import { FileSearchIcon, SearchIcon, ArrowRightIcon } from 'lucide-vue-next'
import { Button } from "@/components/ui/button";

export default {
    data() {
        return {
            algos: [],
            per_page: 6, // Số bài viết mỗi trang
            page: 1, // Trang hiện tại
            total_pages: 0,
            algoPath: this.$route.query.q,
            searchValue:""
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
        Button,
        FileSearchIcon, 
        SearchIcon,
        ArrowRightIcon
    },
    watch: {
        // Theo dõi sự thay đổi của tham số trên router
        "$route.query.q": {
            immediate: true, // Chạy ngay khi component được tạo
            handler(newPath) {
                this.algoPath = newPath;
                this.page = 1; // Reset về trang 1 khi thay đổi algoPath
                this.getAlgos();
            },
        },
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
                            page: this.page,
                            limit: this.per_page,
                            title: this.algoPath
                        }
                    }
                );
                this.algos = response.data;

                const get_total_items = await axios.get("https://6753ea65f3754fcea7bcc402.mockapi.io/api/v1/algo_table", {
                    params: {
                        title: this.algoPath
                    }
                }
                ); // lấy ra tổng kq
                const total_items = get_total_items.data.length; // Tổng số mục
                this.total_pages = Math.ceil(total_items / this.per_page); // Làm tròn lên
            } catch (error) {
                console.log(error)
            }
        },

        handlePageChange(newPage) {
            this.page = newPage; // Cập nhật trang hiện tại
            this.getAlgos(); // Lấy dữ liệu mới
        },

        searchHandler() {
      if (this.searchValue.trim()) {
        // Điều hướng đến URL tìm kiếm
                window.location.href = `/tim-kiem?q=${encodeURIComponent(this.searchValue)}`;

      }}
    },
};
</script>