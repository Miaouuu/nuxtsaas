<template>
  <section>
    <div class="mx-auto w-full max-w-7xl items-center px-8 py-24 md:px-12 lg:px-24">
      <div>
        <div class="mx-auto max-w-4xl text-center">
          <div class="sm:flex sm:justify-center">
            <div
              class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              <NuxtLink href="https://lexingtonthemes.com/free-templates/" class="font-semibold text-indigo-600">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <span class="block lg:inline">
                  More free & Premium templates <span aria-hidden="true">&rarr;</span>
                </span>
              </NuxtLink>
            </div>
          </div>
          <p class="mt-8 text-4xl font-extrabold tracking-tight text-black lg:text-5xl">
            A starter template built with Nuxt and Tailwind CSS for your next project
          </p>
          <p class="mx-auto mt-4 max-w-2xl text-base text-slate-500 lg:text-xl">
            Putting together a directory website was a challenge. Superstash lets you focus on the content and makes the
            entire process effortless.
          </p>
        </div>
        <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <NuxtLink
            class="inline-flex w-full items-center justify-center rounded-xl border px-6 py-3 text-center font-medium text-black text-black/80 duration-200 focus:outline-none focus-visible:outline-black lg:w-auto"
            href="https://github.com/miaouuu/nuxtsaas"
            >GitHub</NuxtLink
          >
          <NuxtLink
            class="inline-flex w-full items-center justify-center rounded-xl border-2 border-black bg-black px-6 py-3 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
            href="https://lexingtonthemes.com"
            >Lexington Themes &nbsp; &rarr;
          </NuxtLink>
        </div>
        <dl
          class="mx-auto mt-8 max-w-4xl items-start space-y-6 text-center text-sm sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          <div class="text-slate-500">
            <strong class="text-slate-700">Nuxt and Tailwind CSS</strong> ━ This are the popular technologies behind
            Nuxtsaas.
          </div>
          <div class="text-slate-500">
            <strong class="text-slate-700">Includes 6 pages</strong> ━ You will find this landing, faq, terms, privacy,
            sign up and sign in pages.
          </div>
          <div class="text-slate-500">
            <strong class="text-slate-700">Different section</strong> ━ The starter includes different feature sections,
            a pricing table, testimonial, CTA and full forms. more.
          </div>
        </dl>
      </div>
      <div class="relative mx-auto w-full max-w-7xl items-center py-12 pb-12">
        <div class="rounded-3xl bg-slate-100 p-8" style="">
          <img
            alt=""
            class="relative w-full rounded border object-cover shadow-2xl lg:rounded-2xl"
            src="https://linear.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero%404x.15e3a396.jpg&w=3840&q=75"
          />
        </div>
      </div>
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
  </section>
</template>
