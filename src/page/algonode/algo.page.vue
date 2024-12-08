<template>
    <section class="bg-white p-6" v-for="item in algo_items.filter(item => item.link == $route.params.algoPath)" :key="item.id">
        <div class="rounded-lg shadow-lg p-6">
            <span v-html="item.content"></span>
            <pre>
                <code class="language-javascript" v-html="highlightCode(item.content_code)"></code>
            </pre>
        </div>
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
