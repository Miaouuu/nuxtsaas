<template>
  <section>
    <div class="relative flex max-h-full justify-center overflow-hidden md:px-12 lg:px-0">
      <div
        class="relative z-10 flex h-screen flex-1 flex-col bg-white px-4 py-10 sm:justify-center md:flex-none md:px-28 lg:py-24 xl:py-36"
      >
        <div class="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0 lg:h-full">
          <div class="flex flex-col">
            <div>
              <h2 class="font-display text-xl font-medium leading-tight text-black">Log in to NuxtSaaS</h2>
              <div class="py-3">
                <span class="relative z-0 mt-3 inline-flex w-full">
                  <button
                    class="relative inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    type="button"
                  >
                    <span>Register with</span>
                    <span class="ml-3"
                      ><svg fill="none" height="24" viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z"
                          fill="#EB4335"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </span>
                <div class="relative py-3">
                  <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-slate-300"></div>
                  </div>
                  <div class="relative flex justify-center">
                    <span class="bg-white px-2 text-sm text-slate-500">Or continue with</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form action="https://submit-form.com/r4PIGvAB">
            <input name="hidden" autocomplete="false" style="display: none" />
            <input name="_redirect" type="hidden" value="#" />
            <div class="space-y-6">
              <div>
                <label class="sr-only" name="name">User name or email Adress</label>
                <input
                  class="block w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-accent-500 placeholder-slate-400 focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-accent-500 sm:text-sm"
                  placeholder="Type here..."
                />
              </div>
              <div class="col-span-full">
                <label class="sr-only" name="company">Password</label>
                <input
                  class="block w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-accent-500 placeholder-slate-400 focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-accent-500 sm:text-sm"
                  placeholder="Type password here..."
                  type="password"
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    class="h-4 w-4 rounded border-accent-500 text-accent-500 focus:ring-accent-500"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label class="ml-2 block text-sm font-medium leading-tight text-black" for="remember-me"
                    >Remember me</label
                  >
                </div>
                <div class="text-sm">
                  <NuxtLink class="font-medium text-accent-500 hover:text-accent-500" href="#"
                    >Forgot your password?</NuxtLink
                  >
                </div>
              </div>
              <div class="col-span-full">
                <button
                  class="inline-flex w-full items-center justify-center rounded-xl border-2 border-black bg-black px-6 py-3 text-center text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black"
                  type="submit"
                >
                  Submit your request
                </button>
              </div>
              <div>
                <p class="text-sm font-medium leading-tight text-black">
                  Not a member?
                  <NuxtLink class="ml-3 text-accent-500 hover:text-accent-400" href="/signup">Sign up now</NuxtLink>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
