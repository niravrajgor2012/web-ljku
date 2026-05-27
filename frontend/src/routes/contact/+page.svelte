<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';

  let form = { name: '', email: '', phone: '', subject: '', message: '' };
  let submitted = false;
  let loading = false;

  async function handleSubmit() {
    loading = true;
    await new Promise(r => setTimeout(r, 1000));
    submitted = true;
    loading = false;
  }
</script>

<SEOHead meta={{
  title: 'Contact Us',
  description: 'Get in touch with LJ University for admissions, information, or any queries.',
}} />

<PageHero
  title="Contact Us"
  subtitle="We're here to help. Reach out to us for admissions, information, or any queries."
  breadcrumbs={[{ label: 'Contact' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Info column -->
      <div class="space-y-6">
        <div>
          <h2 class="font-display text-2xl font-bold text-navy-900 mb-6">Get In Touch</h2>
          {#each [
            { icon: '&#x1F4CD;', title: 'Campus Address', lines: ['LJ Campus, LJ University Road,', 'Off. S.G. Road, Ahmedabad – 382210'] },
            { icon: '&#x1F4DE;', title: 'Phone', lines: ['+91-79-7169-0000', '+91-79-7169-0001'] },
            { icon: '&#x2709;&#xFE0F;', title: 'Email', lines: ['admissions@ljku.edu.in', 'info@ljku.edu.in'] },
            { icon: '&#x23F0;', title: 'Office Hours', lines: ['Monday – Saturday', '9:00 AM – 5:00 PM'] },
          ] as item}
            <div class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div class="text-2xl">{@html item.icon}</div>
              <div>
                <h3 class="font-semibold text-navy-900 text-sm mb-1">{item.title}</h3>
                {#each item.lines as line}
                  <p class="text-gray-500 text-sm">{line}</p>
                {/each}
              </div>
            </div>
          {/each}
        </div>

        <!-- Map placeholder -->
        <div class="rounded-2xl overflow-hidden h-48">
          <iframe
            title="LJ University Location"
            src="https://www.google.com/maps?q=LJ+Campus,+LJ+University+Road,+Off+S.G.+Road,+Ahmedabad+382210&output=embed"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Contact form -->
      <div class="lg:col-span-2">
        <div class="card p-8">
          <h2 class="font-display text-2xl font-bold text-navy-900 mb-6">Send us a Message</h2>
          {#if submitted}
            <div class="text-center py-10">
              <div class="text-6xl mb-4">&#x2705;</div>
              <h3 class="font-display text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
              <p class="text-gray-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button class="btn-primary mt-6" on:click={() => { submitted = false; form = { name: '', email: '', phone: '', subject: '', message: '' }; }}>
                Send Another
              </button>
            </div>
          {:else}
            <form on:submit|preventDefault={handleSubmit} class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5" for="name">Full Name *</label>
                  <input id="name" type="text" bind:value={form.name} required placeholder="Your full name" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5" for="email">Email Address *</label>
                  <input id="email" type="email" bind:value={form.email} required placeholder="your@email.com" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm" />
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5" for="phone">Phone Number</label>
                  <input id="phone" type="tel" bind:value={form.phone} placeholder="+91 98765 43210" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5" for="subject">Subject *</label>
                  <select id="subject" bind:value={form.subject} required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm bg-white">
                    <option value="">Select Subject</option>
                    <option>Admissions Inquiry</option>
                    <option>Program Information</option>
                    <option>Fee Structure</option>
                    <option>Scholarship</option>
                    <option>Campus Visit</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5" for="message">Message *</label>
                <textarea id="message" bind:value={form.message} required rows="5" placeholder="Write your message here..." class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm resize-none"></textarea>
              </div>
              <button type="submit" class="btn-primary w-full justify-center py-3.5" disabled={loading}>
                {#if loading}
                  <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Sending...
                {:else}
                  Send Message
                {/if}
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
