<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex flex-col min-h-screen">
      <ModulesMainHeader />
      <main class="container p-4 grow">
        <ModulesAlertInfo title="Information" message="Ce site est actuellement disponible en version beta. Il est donc  susceptible d'évoluer régulièrement au niveau de son architecture ou de ses fonctionalités." />
        <slot />
      </main>

      <ModulesMainFooter />
    </div>

    <!-- Alerts -->
    <section class="fixed w-full top-8 left-0 z-[99]">
      <div class="container mx-auto">
        <ModulesAlertError title="Un titre" message="Un message" />
      </div>
    </section>
    <!-- Modales -->
    <ModulesModalAuth />
  </div>
</template>
