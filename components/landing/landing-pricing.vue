<template>
  <section id="pricing" aria-labelledby="pricing-section">
    <div class="mx-auto max-w-7xl scroll-mt-12 px-8 py-24 md:px-12 lg:px-16">
      <div class="text-center">
        <h2 class="text-4xl font-extrabold tracking-tighter text-black lg:text-5xl">
          Always know what you’ll pay,

          <span class="lg:block"> transparent pricing for everyone.</span>
        </h2>
      </div>
    </div>
    <div class="mx-auto max-w-7xl items-center px-8 pb-24 lg:px-16 lg:pt-12">
      <div
        class="-mx-4 grid max-w-2xl grid-cols-1 gap-y-10 border-slate-500/10 py-4 sm:mx-auto sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:rounded-3xl lg:border lg:bg-slate-50 xl:gap-x-4"
      >
        <section class="flex flex-col rounded-3xl px-6 lg:py-8">
          <h3 class="font-display mt-5 text-lg text-black">Greedy</h3>
          <p class="mt-2 text-sm text-slate-500">Amazing for those attached to money with glue</p>
          <p class="font-display order-first text-5xl font-light tracking-tight text-black">$0</p>
          <ul role="list" class="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-600">
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Connect 1 websites</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
              >
                1 bank accounts</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Track up to 1 credit cards</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Analytics support</span
              >
            </li>
          </ul>
          <NuxtLink
            class="mt-8 inline-flex w-full transform items-center justify-center rounded-xl border-2 border-black px-6 py-3 text-center text-black transition duration-200 ease-in-out hover:border-black/50 hover:bg-transparent focus:outline-none"
            aria-label="Wannabe tier"
            href="/register"
            >Get started</NuxtLink
          >
        </section>
        <section class="flex flex-col rounded-3xl px-6 lg:py-8">
          <h3 class="font-display mt-5 text-lg text-black">Wannabe</h3>
          <p class="mt-2 text-sm text-slate-500">Good for those trying to get there, but are too far from it.</p>
          <p class="font-display order-first text-5xl font-light tracking-tight text-black">$2</p>
          <ul role="list" class="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-600">
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Connect 1 websites</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
              >
                2 bank accounts</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Track up to 15 credit cards</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Analytics support</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
              >
                3 months data</span
              >
            </li>
          </ul>
          <NuxtLink
            class="mt-8 inline-flex w-full transform items-center justify-center rounded-xl border-2 border-black px-6 py-3 text-center text-black transition duration-200 ease-in-out hover:border-black/50 hover:bg-transparent focus:outline-none"
            aria-label="Wannabe tier"
            href="/register"
            >Get started</NuxtLink
          >
        </section>
        <section class="order-first flex flex-col rounded-3xl bg-black px-6 py-8 sm:px-8 lg:order-none lg:-mt-24">
          <h3 class="font-display mt-5 text-lg text-white">Indie Hacker</h3>
          <p class="mt-2 text-sm text-accent-100">Perfect for those leaving 9-5 and working 24/7.</p>
          <p class="font-display order-first text-5xl font-light tracking-tight text-white">$29</p>
          <ul role="list" class="order-last mt-10 flex flex-col gap-y-3 text-sm text-white">
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Connect 80 websites</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
              >
                5 bank accounts</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Track up to 50 credit cards</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Analytics support</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
              >
                12 months data</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Cloud service 24/7</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Track in multiple users</span
              >
            </li>
          </ul>
          <NuxtLink
            class="mt-8 inline-flex w-full transform items-center justify-center rounded-xl border-2 border-white bg-white px-6 py-3 text-center text-black transition duration-200 ease-in-out hover:border-white hover:bg-transparent hover:text-white focus:outline-none"
            aria-label="Indie hacker tier"
            href="/register"
            >Get started</NuxtLink
          >
        </section>
        <section class="flex flex-col rounded-3xl px-6 lg:py-8">
          <h3 class="font-display mt-5 text-lg text-black">Big fish</h3>
          <p class="mt-2 text-sm text-slate-500">For even the biggest enterprise companies.</p>
          <p class="font-display order-first text-5xl font-light tracking-tight text-black">$99</p>
          <ul role="list" class="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-600">
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Connect unlimited websites</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
              >
                15 bank accounts</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Track up to 200 credit cards</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
                >Analytics support</span
              >
            </li>
            <li class="flex items-center">
              <Icon class="md h-4 w-4" name="ion:checkmark-outline" role="img" aria-label="checkmark outline" /><span
                class="ml-4"
              >
                24 months data</span
              >
            </li>
          </ul>
          <NuxtLink
            class="mt-8 inline-flex w-full transform items-center justify-center rounded-xl border-2 border-black px-6 py-3 text-center text-black transition duration-200 ease-in-out hover:border-black/50 hover:bg-transparent focus:outline-none"
            aria-label="Big fish tier"
            href="/register"
            >Get started</NuxtLink
          >
        </section>
      </div>
      <div class="mx-auto pt-12 lg:py-16">
        <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-6 lg:mt-8">
          <div class="col-span-1 flex justify-center px-8">
            <img alt="logo" class="max-h-12" src="/Figma.svg" />
          </div>
          <div class="col-span-1 flex justify-center px-8">
            <img alt="logo" class="max-h-12" src="/Canva.svg" />
          </div>
          <div class="col-span-1 flex justify-center px-8">
            <img alt="logo" class="max-h-12" src="/Stripe.svg" />
          </div>
          <div class="col-span-1 flex justify-center px-8">
            <img alt="logo" class="max-h-12" src="/Gitlab.svg" />
          </div>
          <div class="col-span-1 flex justify-center px-8">
            <img alt="logo" class="max-h-12" src="/Linear.svg" />
          </div>
          <div class="col-span-1 flex justify-center px-8">
            <img alt="logo" class="max-h-12" src="/Gumroad.svg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
