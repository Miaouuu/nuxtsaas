<template>
  <section
    id="bundle"
    class="relative mx-auto w-full max-w-7xl items-center px-8 py-24 md:px-12 lg:px-16"
    aria-label="bundle"
  >
    <div class="mx-auto overflow-hidden rounded-3xl bg-black">
      <div class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-4">
        <div class="grid items-end text-center">
          <div>
            <span class="text-white"> Lexington Themes</span>
            <h2 class="font-display mt-4 w-full text-4xl font-semibold tracking-tight text-white lg:text-5xl">
              UI Kit's &amp; <span class="lg:block">Tailwind themes.</span>
            </h2>
            <p class="mx-auto mt-8 max-w-xl text-white/80 lg:text-xl">
              For designers, developers, businesses &amp; personal use — Beautifully designed HTML, Nuxt and Tailwind
              templates! Save months of time and build your startup landing page in minutes.
            </p>
          </div>
          <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <NuxtLink
              class="inline-flex w-full items-center justify-center rounded-xl border-2 border-white bg-white px-6 py-3 text-center font-medium text-black duration-200 hover:border-white hover:bg-transparent hover:text-white focus:outline-none focus-visible:outline-white focus-visible:ring-black lg:w-auto"
              href="https://lexingtonthemes.com/"
            >
              Browse templates
            </NuxtLink>
            <NuxtLink
              class="inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-center font-medium text-white text-white/80 duration-200 focus:outline-none focus-visible:outline-white lg:w-auto"
              href="https://lexingtonthemes.com/pricing"
              >Get the bundle for $199
            </NuxtLink>
          </div>
        </div>
      </div>
      <img class="" src="/lexington.png" alt="" />
    </div>
  </section>
</template>
