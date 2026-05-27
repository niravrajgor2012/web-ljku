<script lang="ts">
  import type { PageData } from './$types';
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import { getImageUrl } from '$lib/services/api';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  export let data: PageData;
  const { department } = data;
  const a = department.attributes;
</script>

<SEOHead meta={{
  title: a.seo?.metaTitle ?? a.title,
  description: a.seo?.metaDescription ?? a.shortDescription ?? '',
  keywords: a.seo?.keywords,
  ogImage: a.seo?.ogImage ? getImageUrl(a.seo.ogImage.url) : undefined,
}} />

<PageHero
  title={a.title}
  subtitle={a.shortDescription ?? ''}
  image={a.bannerImage?.data ? getImageUrl(a.bannerImage.data.attributes.url) : ''}
  breadcrumbs={[{ label: 'Departments', href: '/departments' }, { label: a.title }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Main content -->
      <div class="lg:col-span-2">
        {#if a.fullDescription}
          <div class="prose prose-lg max-w-none mb-10">
            {@html a.fullDescription}
          </div>
        {:else}
          <div class="prose prose-lg max-w-none mb-10">
            <p class="text-gray-600 leading-relaxed text-lg">
              The {a.title} at LJ University provides a rigorous, industry-aligned curriculum designed to
              develop technical expertise, analytical thinking, and professional skills. Our faculty, state-of-the-art
              labs, and strong industry partnerships ensure that every student graduates ready for the real world.
            </p>
          </div>
        {/if}

        <!-- Programs -->
        {#if a.programs?.data?.length}
          <div class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-6">Programs Offered</h2>
            <div class="space-y-3">
              {#each a.programs.data as prog}
                <a href="/programs/{prog.attributes.slug}" class="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all group">
                  <div>
                    <span class="font-semibold text-navy-900 group-hover:text-primary-600">{prog.attributes.title}</span>
                    <div class="text-sm text-gray-500 mt-0.5">{prog.attributes.degreeType} · {prog.attributes.duration ?? ''}</div>
                  </div>
                  <svg class="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              {/each}
            </div>
          </div>
        {/if}

        <!-- Gallery -->
        {#if a.galleryImages?.data?.length}
          <div>
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-6">Gallery</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              {#each a.galleryImages.data as img}
                <div class="aspect-video rounded-xl overflow-hidden">
                  <img src={getImageUrl(img.attributes.formats?.small?.url ?? img.attributes.url)} alt="" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>

      <!-- Sidebar -->
      <aside class="space-y-6">
        <!-- Quick info -->
        <div class="card p-6">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-4">Quick Info</h3>
          <dl class="space-y-3 text-sm">
            {#if a.established}
              <div class="flex justify-between"><dt class="text-gray-500">Established</dt><dd class="font-semibold text-navy-900">{a.established}</dd></div>
            {/if}
            {#if a.totalStudents}
              <div class="flex justify-between"><dt class="text-gray-500">Students</dt><dd class="font-semibold text-navy-900">{a.totalStudents.toLocaleString()}+</dd></div>
            {/if}
            {#if a.totalFaculty}
              <div class="flex justify-between"><dt class="text-gray-500">Faculty</dt><dd class="font-semibold text-navy-900">{a.totalFaculty}+</dd></div>
            {/if}
          </dl>
        </div>

        <!-- Faculty highlights -->
        {#if a.faculty?.data?.length}
          <div class="card p-6">
            <h3 class="font-display font-bold text-navy-900 text-lg mb-4">Faculty</h3>
            <div class="space-y-3">
              {#each a.faculty.data.slice(0, 4) as f}
                {@const fa = f.attributes}
                <div class="flex items-center gap-3">
                  {#if fa.image?.data}
                    <img src={getImageUrl(fa.image.data.attributes.url)} alt={fa.name} class="w-10 h-10 rounded-full object-cover" loading="lazy" />
                  {:else}
                    <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">{fa.name.charAt(0)}</div>
                  {/if}
                  <div>
                    <div class="text-sm font-semibold text-navy-900">{fa.name}</div>
                    <div class="text-xs text-gray-500">{fa.designation ?? ''}</div>
                  </div>
                </div>
              {/each}
            </div>
            <a href="/faculty" class="btn-ghost mt-4 text-sm px-0">View All Faculty →</a>
          </div>
        {/if}

        <!-- CTA -->
        <div class="card p-6 bg-gradient-to-br from-primary-600 to-navy-800 text-white">
          <h3 class="font-display font-bold text-xl mb-2">Ready to Apply?</h3>
          <p class="text-primary-100 text-sm mb-4">Admissions are open for 2025–26. Secure your seat today.</p>
          <a href="/admissions" class="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-4 py-2.5 rounded-xl text-sm hover:bg-gray-50 transition-colors">
            Apply Now →
          </a>
        </div>
      </aside>
    </div>
  </div>
</section>

<CTABanner />
