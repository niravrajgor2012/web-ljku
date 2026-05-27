<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="min-h-screen bg-gray-50 flex items-center justify-center pt-[72px]">
  <div class="text-center px-4">
    <div class="font-display text-9xl font-bold text-primary-100 select-none">{$page.status}</div>
    <h1 class="font-display text-3xl font-bold text-navy-900 mt-4 mb-3">
      {$page.status === 404 ? 'Page Not Found' : 'Something Went Wrong'}
    </h1>
    <p class="text-gray-500 max-w-md mx-auto mb-8">
      {$page.error?.message ?? 'The page you\'re looking for doesn\'t exist or has been moved.'}
    </p>
    <div class="flex gap-4 justify-center">
      <a href="/" class="btn-primary">Back to Home</a>
      <a href="/contact" class="btn-outline">Contact Support</a>
    </div>
  </div>
</div>
