<template>
  <div class="grid grid-cols-1 gap-0 md:grid-cols-12">
    <div class="col-span-12 md:col-span-7 px-2">
      <div
        class="
          flex-1 flex flex-col
          justify-center
          py-12
          sm:px-6
          lg:flex-none
          mr-24
          bg-gray-50
        "
      >
        <div v-if="!data.isSended" class="mx-auto w-full">
          <div>
            <h2 class="mt-6 text-3xl tracking-tight font-bold text-gray-900">
              Homiy sifatida ariza topshirish
            </h2>
          </div>

          <div class="mt-8">
            <div>
              <nav
                class="
                  relative
                  z-0
                  rounded-lg
                  shadow
                  flex
                  divide-x divide-gray-200
                "
                aria-label="Tabs"
              >
                <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
                <div
                  class="
                    rounded-l-lg
                    group
                    relative
                    min-w-0
                    flex-1
                    overflow-hidden
                    py-4
                    px-4
                    text-sm
                    font-medium
                    text-center
                    focus:z-10
                    uppercase
                    cursor-pointer
                  "
                  aria-current="page"
                  :class="
                    data.isActive === 'physical'
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'hover:bg-gray-50 text-gray-500 hover:text-gray-700'
                  "
                  @click="changeNav('physical')"
                >
                  <span>Jismoniy shaxs</span>
                </div>

                <div
                  class="
                    group
                    relative
                    rounded-r-lg
                    min-w-0
                    flex-1
                    overflow-hidden
                    py-4
                    px-4
                    text-sm
                    font-medium
                    text-center
                    focus:z-10
                    uppercase
                    cursor-pointer
                  "
                  :class="
                    data.isActive === 'legal'
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'hover:bg-gray-50 text-gray-500 hover:text-gray-700'
                  "
                  @click="changeNav('legal')"
                >
                  <span>Yuridik shaxs</span>
                </div>
              </nav>
            </div>
            <div class="mt-6">
              <form class="space-y-6" @submit.prevent="onSubmit">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    F.I.SH (Familiya Ism Sharifingiz)
                  </label>
                  <div class="mt-1">
                    <input
                      id="name"
                      name="name"
                      v-model="data.sponsor.fullname"
                      placeholder="Abdullayev Abdulla Abdulla o'g'li"
                      required
                      class="
                        appearance-none
                        block
                        w-full
                        px-3
                        py-2
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        placeholder-gray-400
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Telefon raqamingiz
                  </label>
                  <div class="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      v-model="data.sponsor.phone"
                      required
                      plaseholder="+99800 000-00-00"
                      class="
                        appearance-none
                        block
                        w-full
                        px-3
                        py-2
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        placeholder-gray-400
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    To'lov summasi
                  </label>
                  <div
                    class="
                      mt-4
                      grid grid-cols-1
                      gap-y-6
                      sm:grid-cols-3 sm:gap-x-4
                    "
                  >
                    <label
                      v-for="(sum, index) in data.sums"
                      :key="index"
                      class="
                        relative
                        bg-white
                        border
                        rounded-lg
                        shadow-sm
                        p-4
                        flex
                        cursor-pointer
                        focus:outline-none
                      "
                      :class="
                        sum.checked
                          ? 'border-transparent border-blue-500 ring-2 ring-blue-500'
                          : 'border-gray-300'
                      "
                      @click="selectSum(sum)"
                    >
                      <input
                        type="radio"
                        name="project-type"
                        value="Newsletter"
                        class="sr-only"
                        aria-labelledby="project-type-0-label"
                        aria-describedby="project-type-0-description-0 project-type-0-description-1"
                      />
                      <span class="flex-1 flex">
                        <span class="flex flex-col align-middle">
                          <span>{{ tools.currency(sum.price) }}</span>
                        </span>
                      </span>
                      <svg
                        :class="sum.checked ? '' : 'invisible'"
                        class="h-5 w-5 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="
                          absolute
                          -inset-px
                          rounded-lg
                          border-2
                          pointer-events-none
                        "
                        :class="
                          sum.checked
                            ? 'border border-blue-500'
                            : 'border-2 border-transparent'
                        "
                        aria-hidden="true"
                      ></span>
                    </label>
                    <label
                      class="
                        relative
                        bg-white
                        border
                        rounded-lg
                        shadow-sm
                        p-4
                        flex
                        cursor-pointer
                        focus:outline-none
                      "
                      :class="
                        data.isOtherPrice
                          ? 'border-transparent border-blue-500 ring-2 ring-blue-500'
                          : 'border-gray-300'
                      "
                      @click="selectOtherPrice()"
                    >
                      <input
                        type="radio"
                        name="project-type"
                        value="Newsletter"
                        class="sr-only"
                        aria-labelledby="project-type-0-label"
                        aria-describedby="project-type-0-description-0 project-type-0-description-1"
                      />
                      <span class="flex-1 flex">
                        <span class="flex flex-col align-middle">
                          <span>Boshqa</span>
                        </span>
                      </span>
                      <svg
                        :class="data.isOtherPrice ? '' : 'invisible'"
                        class="h-5 w-5 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        class="
                          absolute
                          -inset-px
                          rounded-lg
                          border-2
                          pointer-events-none
                        "
                        :class="
                          data.isOtherPrice
                            ? 'border border-blue-500'
                            : 'border-2 border-transparent'
                        "
                        aria-hidden="true"
                      ></span>
                    </label>
                  </div>
                </div>
                <div v-if="data.isOtherPrice">
                  <div class="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="number"
                      min="0"
                      v-model="data.sponsor.sum"
                      plaseholder="0"
                      class="
                        appearance-none
                        block
                        w-full
                        px-3
                        py-2
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        placeholder-gray-400
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>
                </div>
                <div v-if="data.isActive === 'legal'">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Tashkilot nomi
                  </label>
                  <div class="mt-1">
                    <input
                      id="firm"
                      name="firm"
                      v-model="data.sponsor.firm"
                      required
                      plaseholder="Orient group"
                      class="
                        appearance-none
                        block
                        w-full
                        px-3
                        py-2
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        placeholder-gray-400
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="
                      w-full
                      flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      rounded-md
                      shadow-sm
                      text-sm
                      font-medium
                      text-white
                      bg-blue-600
                      hover:bg-blue-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-blue-500
                    "
                  >
                    Yuborish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div v-else>
          <div>
            <div
              class="
                mx-auto
                flex
                items-center
                justify-center
                h-40
                w-40
                rounded-full
                border border-green-600
              "
            >
              <!-- Heroicon name: outline/check -->
              <svg
                class="text-green-600 h-40 w-40"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div
              class="
                mt-3
                text-center
                sm:mt-5
                text-base text-gray-700
                font-medium
              "
            >
              Ma'lumotlar tekshirish uchun yuborildi
            </div>
            <div class="text-center text-gray-500 font-medium text-xs">
              Tez orada siz bilan operatorimiz bog’lanib, barcha ma’lumotlarni
              aniqlashtiradi.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-5 px-2 py-1 mt-6">
      <div>
        Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni
        oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib qoʻymaslik kerak.
      </div>
      <div class="flex mt-2">
        <div class="mr-4 flex-shrink-0">
          <img
            class="inline-block h-14 w-14 rounded-md"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Shavkat_Mirziyoyev.jpg"
            alt=""
          />
        </div>
        <div>
          <h4 class="text-lg font-bold">Shavkat Mirziyoyev</h4>
          <p class="mt-1">O‘zbekiston Respublikasi Prezidenti</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue';
import tools from '@/utils/tools'
export default {
  setup() {
    let data = reactive({
      sponsor: {
        fullname: '',
        phone: '',
        sum: null,
        firm: ''
      },
      isActive: 'physical',
      sums: [
        { price: 1000000, checked: false },
        { price: 5000000, checked: false },
        { price: 7000000, checked: false },
        { price: 10000000, checked: false },
        { price: 30000000, checked: false }
      ],
      isOtherPrice: false,
      isSended: false
    })

    onMounted(() => {})

    function changeNav(status) {
      data.isActive = status
    }

    function selectSum(sum) {
      data.sums.forEach((e) => {
        if (e.price === sum.price) {
          data.sponsor.sum = sum.price
          e.checked = true
        } else {
          e.checked = false
        }
      })
    }

    function selectOtherPrice() {
      data.sums.forEach((e) => {
        e.checked = false
      })
      data.sponsor.sum = null
      data.isOtherPrice = true
    }

    function onSubmit() {
      console.log('Submitted')
    }

    return {
      data,
      tools,

      changeNav,
      selectSum,
      selectOtherPrice,
      onSubmit
    }
  },
};
</script>
