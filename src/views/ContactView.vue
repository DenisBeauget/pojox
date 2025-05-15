<template>
  <section
    class="py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col items-center text-center space-y-4">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Contact Us
        </h1>
        <p class="max-w-[700px] text-gray-600 md:text-xl">
          Have questions about Pojox? Our team is here to help you with any
          inquiries or feedback.
        </p>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl font-bold tracking-tighter mb-6">
            Get in <span class="text-emerald-300">Touch</span>
          </h2>
          <p class="text-gray-600 mb-8">
            We value your feedback and questions. Feel free to reach out to us
            using the contact form.
          </p>
        </div>

        <div class="bg-emerald-50 p-8 rounded-lg">
          <h3 class="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <form class="space-y-6">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >First Name</label
                >
                <input
                  type="text"
                  id="first-name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Last Name</label
                >
                <input
                  type="text"
                  id="last-name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Email</label
              >
              <input
                type="email"
                id="email"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Subject</label
              >
              <select
                id="subject"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="" disabled selected>Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="feature">Feature Request</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Message</label
              >
              <textarea
                id="message"
                rows="6"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div class="flex items-center">
              <input
                type="checkbox"
                id="privacy-policy"
                class="rounded border-gray-300 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50"
              />
              <label
                for="privacy-policy"
                class="ml-2 block text-sm text-gray-700"
              >
                I agree to the

                <router-link
                  to="/privacy"
                  class="text-emerald-600 hover:underline"
                >
                  Privacy Policy
                </router-link>
              </label>
            </div>

            <button
              type="submit"
              class="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Send Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2 h-4 w-4"
              >
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section
    class="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col items-center text-center space-y-6">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Start with Pojox?
        </h2>
        <p class="max-w-[600px] text-emerald-50 md:text-xl">
          Join thousands of developers who are already using Pojox to streamline
          their workflow.
        </p>
        <router-link
          to="/convert"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-emerald-600 hover:bg-gray-100 h-11 px-8 mt-6"
          :class="
            $route.path === '/convert' ? 'text-emerald-500' : 'text-gray-700'
          "
        >
          Try Pojox for Free
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-2 h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
