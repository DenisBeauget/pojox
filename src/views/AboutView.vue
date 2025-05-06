<template>
  <section
    class="py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col items-center text-center space-y-4">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          About Pojox
        </h1>
        <p class="max-w-[700px] text-gray-600 md:text-xl">
          Pojox is a powerful tool designed to simplify the process of
          converting JSON to code in various programming languages.
        </p>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl font-bold tracking-tighter mb-6">
            What is <span class="text-emerald-300">POJO?</span>
          </h2>
          <p class="text-gray-600 mb-4">
            POJO stands for Plain Old Java Object. This acronym is mainly used
            to designate the ease of use of an object.
          </p>
          <p class="text-gray-600 mb-4">
            A POJO is an ordinary Java object, not bound by any special
            restriction. It's not required to extend or implement some
            predefined interfaces or classes.
          </p>
          <p class="text-gray-600">
            With Pojox, you can directly convert your JSON object or JSON schema
            into the language of your choice in a matter of seconds.
          </p>
        </div>
        <div class="bg-emerald-50 p-8 rounded-lg">
          <pre class="text-sm overflow-auto">
                  <code class="text-gray-800">{{ pojoExample }}</code>
                </pre>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid gap-12 md:grid-cols-2 items-center">
        <div class="bg-emerald-50 p-8 rounded-lg">
          <pre class="text-sm overflow-auto">
                  <code class="text-gray-800">{{ jsonExample }}</code>
                </pre>
        </div>
        <div>
          <h2 class="text-3xl font-bold tracking-tighter mb-6">
            What is <span class="text-emerald-300">JSON?</span>
          </h2>
          <p class="text-gray-600 mb-4">
            Since we have other options like YAML XML, etc., why choose
            <span class="text-gray-600 font-bold">JSON</span>?
          </p>
          <p class="text-gray-600 mb-4">
            The answer lies in the
            <span class="italic">history of client-server communication</span>
            itself. Until a few decades ago, the communication between client
            and server was inefficient, as the server was overburdened with a
            heavy workload.
          </p>

          <p class="text-gray-600 mb-4">
            For example, your web browser was only supposed to render outcomes
            like:
          </p>
          <ul class="list-disc pl-5 text-gray-600 mb-4">
            <li>Web page search results</li>
            <li>Query outcomes</li>
            <li>Dynamic content</li>
          </ul>
          <p class="text-gray-600">
            The rest of the work-from processing requests to forwarding them-was
            weighed on the server. Thus, a
            <span class="font-semibold text-emerald-300">lightweight</span>
            and
            <span class="font-semibold text-emerald-300">text-based</span>
            structure like JSON format was needed to solve all these problems.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-emerald-50">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">
          Our Mission
        </h2>
        <p class="mt-4 text-gray-600 max-w-3xl mx-auto">
          We aim to simplify the development process by providing tools that
          save time and reduce errors.
        </p>
      </div>
      <div class="grid gap-8 md:grid-cols-3">
        <div
          class="rounded-lg border-2 border-emerald-100 transition-all hover:border-emerald-200 hover:shadow-md bg-white"
        >
          <div class="flex flex-col space-y-1.5 p-6">
            <div
              class="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4"
            >
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
                class="h-6 w-6 text-emerald-600"
              >
                <path d="M16 18 22 12 16 6"></path>
                <path d="M8 6 2 12 8 18"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold leading-none tracking-tight">
              Simplify Development
            </h3>
          </div>
          <div class="p-6 pt-0">
            <p class="text-base text-gray-500">
              Our tools are designed to make the development process faster and
              more efficient, allowing developers to focus on what matters.
            </p>
          </div>
        </div>
        <div
          class="rounded-lg border-2 border-emerald-100 transition-all hover:border-emerald-200 hover:shadow-md bg-white"
        >
          <div class="flex flex-col space-y-1.5 p-6">
            <div
              class="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4"
            >
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
                class="h-6 w-6 text-emerald-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path
                  d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                ></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold leading-none tracking-tight">
              Support All Languages
            </h3>
          </div>
          <div class="p-6 pt-0">
            <p class="text-base text-gray-500">
              We're committed to supporting a wide range of programming
              languages to accommodate developers from all backgrounds.
            </p>
          </div>
        </div>
        <div
          class="rounded-lg border-2 border-emerald-100 transition-all hover:border-emerald-200 hover:shadow-md bg-white"
        >
          <div class="flex flex-col space-y-1.5 p-6">
            <div
              class="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4"
            >
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
                class="h-6 w-6 text-emerald-600"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold leading-none tracking-tight">
              Community Driven
            </h3>
          </div>
          <div class="p-6 pt-0">
            <p class="text-base text-gray-500">
              We value feedback from our users and continuously improve our
              tools based on the needs of the developer community.
            </p>
          </div>
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
          Ready to Try Pojox?
        </h2>
        <p class="max-w-[600px] text-emerald-50 md:text-xl">
          Start using our tool today and experience the fastest way to convert
          JSON to code.
        </p>
        <router-link
          to="/convert"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-emerald-600 hover:bg-gray-100 h-11 px-8 mt-6"
          :class="
            $route.path === '/convert' ? 'text-emerald-500' : 'text-gray-700'
          "
        >
          Start Converting Now
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

<script setup lang="ts">
import { ref } from "vue";

const pojoExample = ref(`
public class User {
    private String name;
    private int age;
    private String email;
    
    // Getters and Setters
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
}`);

const jsonExample = ref(`
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`);
</script>
