<template>
  <!--main-->
  <!--search reponsive-->
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
    <div
      class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
    >
      <div v-for="algo in algos">
        <a href="/">
          <div
            class="group hover:shadow-sm border transition overflow-hidden rounded-lg h-full flex flex-col bg-white"
          >
            <div class="flex-1">
              <div
                class="relative w-full aspect-video rounded-t-md overflow-hidden border-b"
              >
                <img
                
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  class="duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover"
                  sizes="100vw"
                  :src="algo.img"
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    inset: 0px;
                    color: transparent;
                  "
                />
              </div>
              <div class="flex flex-col pt-2 px-3">
                <div
                  class="text-sm md:text-base font-medium group-hover:text-sky-700 transition line-clamp-1"
                >
                 {{ algo.title }}
                </div>
                <div class="my-3 flex items-center gap-x-2 text-xs">
                  <div class="flex items-center gap-x-1 text-slate-500">
                    <div
                      class="inline-flex items-center border rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800"
                    >
                     
                      <span>{{algo.date}}</span>
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
  </div>
</template>

<script>
import { SearchIcon } from "lucide-vue-next";
import axios from "axios";
export default {
  data() {
    return {
      algos: [],
    };
  },

  components: {
    SearchIcon,
  },

  mounted() {
    this.getAlgos();
  },

  methods: {
    async getAlgos() {
      try {
        const response = await axios.get(
          "https://6753ea65f3754fcea7bcc402.mockapi.io/api/v1/algo_table"
        );
        this.algos = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
