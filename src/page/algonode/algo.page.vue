<template>
    <section class="" v-for="item in algo_items.filter(item => item.link == $route.params.algoPath)" :key="item.id">
        <template v-if="!item.content">
            <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8 text-center">
                    <div>
                        <FileSearchIcon class="mx-auto h-24 w-24 text-gray-400" />
                        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                            Bài viết chưa hoàn thiện
                        </h2>
                        <p class="mt-2 text-sm text-gray-600">
                            Xin lỗi, chúng tôi sẽ đăng nó lên sớm hơn.
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
        <template v-if="item.content">
            <div class="p-6">
                <div class="pt-[40px]">
                    <span v-html="item.content"></span>
                </div>
                <pre>
                <code class="language-javascript" v-html="highlightCode(item.content_code)"></code>
            </pre>
            </div>
        </template>
    </section>
</template>

<style scoped>
/* Chỉ ảnh hưởng trong component này */
pre[class*="language-"] {
    font-size: 14px;
    /* Tùy chỉnh kích thước chữ */
}

code[class*="language-"] {
    font-size: 14px;
    color: #2d2d2d;
    /* Tùy chỉnh màu chữ */
    background-color: #f5f5f5;
    /* Màu nền code block */
    padding: 8px;
    border-radius: 4px;
}

pre[class*="language-"] {
    white-space: pre-wrap;
    /* Cho phép tự động xuống hàng */
    word-wrap: break-word;
    /* Ngắt dòng khi từ quá dài */
    overflow-x: auto;
    /* Hiển thị thanh cuộn ngang nếu cần */
}

code[class*="language-"] {
    white-space: pre-wrap;
    /* Tự xuống hàng */
    word-wrap: break-word;
    /* Ngắt dòng */
    font-size: 14px;
    /* Tùy chỉnh kích thước chữ */
    line-height: 1.5;
    /* Tăng khoảng cách dòng */
}
</style>

<script>
import axios from 'axios';
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { FileSearchIcon, SearchIcon, ArrowRightIcon } from 'lucide-vue-next'

export default {
    data() {
        return {
            algo_items: [],
            activeTab: this.$route.params.algoPath,
            searchValue:""
        };
    },
    mounted() {
        window.Prism = window.Prism || {};
        window.Prism.manual = true;
        this.getData();
    },
    components:{
        FileSearchIcon, SearchIcon, ArrowRightIcon
    },
    methods: {
        searchHandler() {
      if (this.searchValue.trim()) {
        // Điều hướng đến URL tìm kiếm
                window.location.href = `/tim-kiem?q=${encodeURIComponent(this.searchValue)}`;

      }},
        async getData() {
            try {
                const result = await axios.get('https://6753ea65f3754fcea7bcc402.mockapi.io/api/v1/algo_table');
                this.algo_items = result.data;
                // Re-highlight after data is fetched
                this.$nextTick(() => {
                    Prism.highlightAll();
                });
            } catch (error) {
                console.log(error);
            }
        },
        highlightCode(code) {
            // Escape special characters and use Prism to highlight
            const escapedCode = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            return Prism.highlight(escapedCode, Prism.languages.javascript, 'javascript');
        },
    },
};
</script>
