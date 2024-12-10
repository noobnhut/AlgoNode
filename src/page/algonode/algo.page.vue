<template>
    <section class="" v-for="item in algo_items.filter(item => item.link == $route.params.algoPath)" :key="item.id">
        {{ item.content }}
        <template v-if="!item.content">
            <div class="flex flex-col items-center justify-center h-full min-h-screen">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
                <p class="text-gray-600 text-lg mb-8">Chúng tôi đang cố gắng hết sức để đưa nó lên website.</p>
                <div class="flex space-x-4">
                    <router-link to="/"
                        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300">Trang chủ</router-link>
                    <router-link to="/on-tap"
                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full shadow-lg transition duration-300">Ôn tập</router-link>
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

<script>
import axios from 'axios';
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default {
    data() {
        return {
            algo_items: [],
            activeTab: this.$route.params.algoPath,
        };
    },
    mounted() {
        window.Prism = window.Prism || {};
        window.Prism.manual = true;
        this.getData();
    },
    methods: {
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
