<template>
  <footer aria-labelledby="footer-heading" class="bg-black">
    <h2 id="footer-heading " class="sr-only">Footer</h2>
    <div class="gh:py-24 mx-auto items-center px-8 py-12 md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="text-white xl:col-span-3">
          <span class="text-lg font-semibold italic lg:text-2xl">Nuxt SaaS</span>
          <p class="mt-2 text-sm text-slate-400 lg:w-1/4">
            <span class="mt-6 font-normal">
              Digital resources for digital designers and web developers by Michael Andreuzza
            </span>
          </p>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 lg:mt-24 xl:col-span-3">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-xl text-white">All pages</h3>
              <ul role="list" class="mt-4 space-y-2">
                <li>
                  <NuxtLink href="/h" class="text-sm text-slate-400 hover:text-white"> Home </NuxtLink>
                </li>

                <li>
                  <NuxtLink href="/faq" class="text-sm text-slate-400 hover:text-white"> FAQ </NuxtLink>
                </li>
                <li>
                  <NuxtLink href="/terms" class="text-sm text-slate-400 hover:text-white"> Terms </NuxtLink>
                </li>
                <li>
                  <NuxtLink href="/privacy" class="text-sm text-slate-400 hover:text-white"> Privacy </NuxtLink>
                </li>
                <li>
                  <NuxtLink href="/signup" class="text-sm text-slate-400 hover:text-white"> Sign up </NuxtLink>
                </li>
                <li>
                  <NuxtLink href="/signup" class="text-sm text-slate-400 hover:text-white"> Sign In </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-xl text-white">Resources</h3>
              <ul role="list" class="mt-4 space-y-2">
                <li>
                  <NuxtLink href="https://www.unwrapped.design" class="text-sm text-slate-400 hover:text-white">
                    Unwrapped
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink href="https://github.com/miaouuu/nuxtsaas" class="text-sm text-slate-400 hover:text-white">
                    GitHub repo
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-xl text-white">More themes</h3>
              <ul role="list" class="mt-4 space-y-2">
                <li>
                  <NuxtLink href="https://lexingtonthemes.com/" class="text-sm text-slate-400 hover:text-white">
                    Lexington Themes
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-xl text-white">Socials</h3>
              <ul role="list" class="mt-4 space-y-2">
                <li>
                  <NuxtLink href="https://twitter.com/unwrappedHQ" class="text-sm text-slate-400 hover:text-white">
                    @unwrappedHQ
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink href="https://twitter.com/Mike_Andreuzza" class="text-sm text-slate-400 hover:text-white">
                    @Mike_Andreuzza
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    href="https://dribbble.com/MichaelAndreuzza.html"
                    class="text-sm text-slate-400 hover:text-white"
                  >
                    Dribbble
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer class="border-t border-white/5 bg-black">
    <div class="mx-auto items-center px-8 py-6 md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex justify-center space-x-6 md:order-2">
          <NuxtLink
            href="https://twitter.com/mike_andreuzza"
            class="transform p-3 text-sm text-slate-400 transition duration-500 ease-in-out hover:text-white"
          >
            <span class=""> @Mike_Andreuzza</span>
          </NuxtLink>
        </div>
        <div class="mt-8 md:order-1 md:mt-0">
          <p class="text-center">
            <span class="mx-auto mt-2 text-sm text-slate-400"> By Michael Anddeuzza </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
