<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Flashcards App - Grupo 10</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
  <img src="/flashcard.jpg" alt="Matemática" />
</ion-card>

      <h2>📚 Selecciona una categoría</h2>

      <ion-list>
        <ion-item button router-link="/flashcards/matematica">
          Matemática
        </ion-item>
        <ion-item button router-link="/flashcards/informatica">
          Informática
        </ion-item>
        <ion-item button router-link="/flashcards/fisica">
          Física
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, img } from '@ionic/vue'
</script>

