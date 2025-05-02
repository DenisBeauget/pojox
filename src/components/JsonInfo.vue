<template>
  <div class="py-12 w-full px-6 min-h-screen">
    <div
      class="flex flex-col md:flex-row justify-center gap-6 w-full max-w-full mx-auto"
    >
      <div class="flex flex-col flex-1 gap-6">
        <div
          class="bg-gradient-to-br from-[#e3d5b5] to-[#e3d5b5] rounded-2xl shadow-xl border border-[#e3d5b5] overflow-hidden flex flex-col"
        >
          <div class="p-6">
            <h2
              class="font-bold text-xl text-[#1a1a1a] mb-4 border-b border-[#677d68] pb-2"
            >
              Why use <span class="text-[#2ea66e]">JSON</span> format?
            </h2>
            <div>
              <p class="text-[#1a1a1a] mb-4">
                Since we have other options like
                <span class="font-semibold text-[#677d68]">YAML</span>,
                <span class="font-semibold text-[#677d68]">XML</span>, etc., why
                choose
                <span
                  class="font-semibold bg-[#e3d5b5] px-2 py-0.5 rounded text-[#2ea66e]"
                  >JSON</span
                >?
              </p>
              <p class="text-[#1a1a1a] mb-4">
                The answer lies in the
                <span class="italic"
                  >history of client-server communication</span
                >
                itself. Until a few decades ago, the communication between
                client and server was inefficient, as the server was
                overburdened with a heavy workload.
              </p>
              <p class="text-[#1a1a1a] mb-4">
                For example, your web browser was only supposed to render
                outcomes like:
              </p>
              <ul class="list-disc pl-5 text-[#1a1a1a] mb-4">
                <li>Web page search results</li>
                <li>Query outcomes</li>
                <li>Dynamic content</li>
              </ul>
              <p class="text-[#1a1a1a]">
                The rest of the work-from processing requests to forwarding
                them-was weighed on the server. Thus, a
                <span class="font-semibold text-[#2ea66e]">lightweight</span>
                and
                <span class="font-semibold text-[#2ea66e]">text-based</span>
                structure like JSON format was needed to solve all these
                problems.
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-[#e3d5b5] to-[#e3d5b5] rounded-xl shadow-md border border-[#e3d5b5] overflow-hidden flex flex-col"
        >
          <div class="p-6">
            <h3 class="font-semibold text-[#1a1a1a] mb-4">
              Key elements of JSON format:
            </h3>
            <ul class="list-disc pl-5 text-[#1a1a1a] space-y-2">
              <li>
                <span class="text-[#2ea66e] font-semibold"
                  >Key-value pairs</span
                >
                - Each data item is represented as a key and its corresponding
                value
              </li>
              <li>
                <span class="text-[#2ea66e] font-semibold">Data types</span> -
                Supports strings, numbers, booleans, null, arrays, and objects
              </li>
              <li>
                <span class="text-[#2ea66e] font-semibold">Nesting</span> -
                Objects and arrays can be nested within each other
              </li>
              <li>
                <span class="text-[#2ea66e] font-semibold">Human-readable</span>
                - Text-based format that's easy to read and write
              </li>
              <li>
                <span class="text-[#2ea66e] font-semibold"
                  >Language-independent</span
                >
                - Can be used with virtually any programming language
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex-1 w-full flex flex-col">
        <div
          class="bg-gradient-to-br from-[#e3d5b5] to-[#e3d5b5] rounded-2xl shadow-xl border border-[#e3d5b5] overflow-hidden flex flex-col flex-grow"
        >
          <div class="p-6">
            <h2
              class="font-bold text-xl text-[#1a1a1a] mb-4 border-b border-[#677d68] pb-2"
            >
              Why use <span class="text-[#2ea66e]">POJO</span>?
            </h2>
            <div>
              <p class="text-[#1a1a1a] mb-4">
                Originally coined in the Java ecosystem, the term
                <span
                  class="font-semibold bg-[#e3d5b5] px-2 py-0.5 rounded text-[#2ea66e]"
                  >POJO</span
                >
                (Plain Old Java Object) refers to a simple, lightweight object
                not bound to any specific framework or technology.
              </p>
              <p class="text-[#1a1a1a] mb-4">
                While the name is Java-specific, the concept extends across many
                programming languages:
              </p>
              <ul class="list-disc pl-5 text-[#1a1a1a] mb-4">
                <li>
                  <span class="font-semibold text-[#677d68]">Data classes</span>
                  in Kotlin
                </li>
                <li>
                  <span class="font-semibold text-[#677d68]">Structs</span> in
                  Go
                </li>
                <li>
                  <span class="font-semibold text-[#677d68]">Records</span> in
                  Python (using dataclasses)
                </li>
                <li>
                  <span class="font-semibold text-[#677d68]"
                    >Plain objects</span
                  >
                  in JavaScript
                </li>
              </ul>
              <p class="text-[#1a1a1a] mb-4">
                These objects typically model data with
                <span class="italic">minimal behavior</span>:
              </p>
              <ul class="list-disc pl-5 text-[#1a1a1a] mb-4">
                <li>Basic fields/properties</li>
                <li>Getters/setters (if applicable)</li>
                <li>
                  Utility methods (equality checks, string representations)
                </li>
              </ul>
              <p class="text-[#1a1a1a]">
                <span class="font-semibold text-[#2ea66e]"
                  >Benefits include</span
                >: improved code clarity, isolated data from business logic, and
                reduced coupling with frameworks-making the code easier to test,
                maintain, and adapt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-stretch w-full">
    <div class="mx-4 flex-1 flex flex-col justify-end">
      <h2 class="font-bold text-xl text-[#1a1a1a] mb-4">
        <span class="text-[#2ea66e] border-b">JSON</span> Example:
      </h2>
      <div
        class="bg-[#1a1a1a]/95 rounded-xl overflow-hidden shadow-lg mb-4 border border-[#2ea66e]/30"
      >
        <div
          class="bg-[#1a1a1a] text-[#f0ead6] px-4 py-2 border-b border-[#2ea66e]/30 flex justify-between items-center"
        >
          <span class="font-mono text-sm">example.json</span>
          <span
            class="bg-[#2ea66e]/20 text-[#2ea66e] px-2 py-0.5 rounded text-xs"
            >JSON</span
          >
        </div>

        <pre class="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
<span class="text-[#e3d5b5]">{</span>
  <span class="text-[#2ea66e]">"person"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">{</span>
    <span class="text-[#2ea66e]">"firstName"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"John"</span><span class="text-[#e3d5b5]">,</span>
    <span class="text-[#2ea66e]">"lastName"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"Doe"</span><span class="text-[#e3d5b5]">,</span>
    <span class="text-[#2ea66e]">"age"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#677d68]">30</span><span class="text-[#e3d5b5]">,</span>
    <span class="text-[#2ea66e]">"isEmployed"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#2ea66e]">true</span><span class="text-[#e3d5b5]">,</span>
    <span class="text-[#2ea66e]">"address"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">{</span>
      <span class="text-[#2ea66e]">"street"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"123 JSON St"</span><span class="text-[#e3d5b5]">,</span>
      <span class="text-[#2ea66e]">"city"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"Data City"</span><span class="text-[#e3d5b5]">,</span>
      <span class="text-[#2ea66e]">"zipCode"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#677d68]">10101</span>
    <span class="text-[#e3d5b5]">}</span><span class="text-[#e3d5b5]">,</span>
    <span class="text-[#2ea66e]">"skills"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">[</span>
      <span class="text-[#f0ead6]">"JavaScript"</span><span class="text-[#e3d5b5]">,</span>
      <span class="text-[#f0ead6]">"TypeScript"</span><span class="text-[#e3d5b5]">,</span>
      <span class="text-[#f0ead6]">"React"</span>
    <span class="text-[#e3d5b5]">]</span><span class="text-[#e3d5b5]">,</span>
    <span class="text-[#2ea66e]">"projects"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">[</span>
      <span class="text-[#e3d5b5]">{</span>
        <span class="text-[#2ea66e]">"name"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"POJO Mapper"</span><span class="text-[#e3d5b5]">,</span>
        <span class="text-[#2ea66e]">"year"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#677d68]">2023</span><span class="text-[#e3d5b5]">,</span>
        <span class="text-[#2ea66e]">"isActive"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#2ea66e]">true</span>
      <span class="text-[#e3d5b5]">}</span><span class="text-[#e3d5b5]">,</span>
      <span class="text-[#e3d5b5]">{</span>
        <span class="text-[#2ea66e]">"name"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"JSON Validator"</span><span class="text-[#e3d5b5]">,</span>
        <span class="text-[#2ea66e]">"year"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#677d68]">2022</span><span class="text-[#e3d5b5]">,</span>
        <span class="text-[#2ea66e]">"isActive"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#2ea66e]">false</span><span class="text-[#e3d5b5]">,</span>
        <span class="text-[#2ea66e]">"contributors"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#677d68]">12</span>
      <span class="text-[#e3d5b5]">}</span>
    <span class="text-[#e3d5b5]">]</span>
  <span class="text-[#e3d5b5]">}</span>
<span class="text-[#e3d5b5]">}</span></pre>
      </div>
    </div>
    <div class="mx-4 flex-1 flex flex-col justify-end">
      <h2 class="font-bold text-xl text-[#1a1a1a] mb-4">
        <span class="text-[#2ea66e] border-b">JSON Schema</span> Example:
      </h2>
      <div
        class="bg-[#1a1a1a]/95 rounded-xl overflow-hidden shadow-lg mb-4 border border-[#2ea66e]/30"
      >
        <div
          class="bg-[#1a1a1a] text-[#f0ead6] px-4 py-2 border-b border-[#2ea66e]/30 flex justify-between items-center"
        >
          <span class="font-mono text-sm">schema.json</span>
          <span
            class="bg-[#2ea66e]/20 text-[#2ea66e] px-2 py-0.5 rounded text-xs"
            >JSON Schema</span
          >
        </div>

        <pre class="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
<span class="text-[#e3d5b5]">{</span>
  <span class="text-[#2ea66e]">"$schema"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"http://json-schema.org/draft-07/schema#"</span><span class="text-[#e3d5b5]">,</span>
  <span class="text-[#2ea66e]">"title"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"Person"</span><span class="text-[#e3d5b5]">,</span>
  <span class="text-[#2ea66e]">"description"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"Schema for a person object"</span><span class="text-[#e3d5b5]">,</span>
  <span class="text-[#2ea66e]">"type"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"object"</span><span class="text-[#e3d5b5]">,</span>
  <span class="text-[#2ea66e]">"properties"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">{</span>
    <span class="text-[#2ea66e]">"person"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">{</span>
      <span class="text-[#2ea66e]">"type"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"object"</span><span class="text-[#e3d5b5]">,</span>
      <span class="text-[#2ea66e]">"properties"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">{</span>
        <span class="text-[#2ea66e]">"firstName"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">{</span>
          <span class="text-[#2ea66e]">"type"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"string"</span><span class="text-[#e3d5b5]">,</span>
          <span class="text-[#2ea66e]">"description"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"The first name of the person"</span>
        <span class="text-[#e3d5b5]">}</span><span class="text-[#e3d5b5]">,</span>
        <span class="text-[#2ea66e]">"lastName"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">{</span>
          <span class="text-[#2ea66e]">"type"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"string"</span><span class="text-[#e3d5b5]">,</span>
          <span class="text-[#2ea66e]">"description"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"The last name of the person"</span>
        <span class="text-[#e3d5b5]">}</span><span class="text-[#e3d5b5]">,</span>
        <span class="text-[#2ea66e]">"age"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">{</span>
          <span class="text-[#2ea66e]">"type"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"integer"</span><span class="text-[#e3d5b5]">,</span>
          <span class="text-[#2ea66e]">"description"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"The age of the person"</span><span class="text-[#e3d5b5]">,</span>
          <span class="text-[#2ea66e]">"minimum"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#677d68]">0</span>
        <span class="text-[#e3d5b5]">}</span><span class="text-[#e3d5b5]">,</span>
        <span class="text-[#2ea66e]">"isEmployed"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#e3d5b5]">{</span>
          <span class="text-[#2ea66e]">"type"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"boolean"</span><span class="text-[#e3d5b5]">,</span>
          <span class="text-[#2ea66e]">"description"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"Whether the person is employed"</span>
          <span class="text-[#2ea66e]">"date"</span><span class="text-[#e3d5b5]">:</span> <span class="text-[#f0ead6]">"Date until the person is employed"</span>
          <span class="text-[#e3d5b5]">}</span>
          <span class="text-[#e3d5b5]">}</span>
    <span class="text-[#e3d5b5]">}</span>
  <span class="text-[#e3d5b5]">}</span>
<span class="text-[#e3d5b5]">}</span></pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
