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
  </div>
</template>
