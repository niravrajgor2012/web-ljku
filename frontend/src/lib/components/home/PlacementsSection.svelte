<script lang="ts">
  import type { StrapiItem, Placement } from '$lib/types';
  import { getImageUrl } from '$lib/services/api';

  export let placements: StrapiItem<Placement>[] = [];

  const companies = [
    { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/200px-Tata_Consultancy_Services_Logo.svg.png' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/200px-Wipro_Primary_Logo_Color_RGB.svg.png' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/200px-Accenture.svg.png' },
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/200px-Deloitte.svg.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png' },
  ];

  const placementStats = [
    { value: '95%', label: 'Overall Placement Rate' },
    { value: '₹8.5 LPA', label: 'Average Package' },
    { value: '₹42 LPA', label: 'Highest Package' },
    { value: '150+', label: 'Recruiting Companies' },
  ];
</script>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="text-center mb-12">
      <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Career Success</p>
      <h2 class="section-title">Placements & Recruiters</h2>
      <p class="section-subtitle mt-3 max-w-2xl mx-auto">
        Our students are placed at India's top companies with exceptional packages.
        Industry-aligned curriculum ensures every graduate is job-ready.
      </p>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
      {#each placementStats as stat}
        <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-navy-50 border border-primary-100">
          <div class="font-display text-3xl font-bold text-primary-700 mb-1">{stat.value}</div>
          <div class="text-sm text-gray-600 font-medium">{stat.label}</div>
        </div>
      {/each}
    </div>

    <!-- Company logos -->
    <div>
      <p class="text-center text-sm text-gray-500 font-semibold uppercase tracking-wider mb-6">Top Recruiters</p>
      <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
        {#each companies as company}
          <div class="flex items-center justify-center p-3 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all duration-200 h-14">
            <img
              src={company.logo}
              alt={company.name}
              class="max-h-7 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        {/each}
      </div>
    </div>

    <div class="text-center mt-10">
      <a href="/placements" class="btn-primary">View Placement Details</a>
    </div>
  </div>
</section>
