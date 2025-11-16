import { ref } from 'vue';

const imageSrc = ref<string | null>(null);

export function useSelectedImage() {
  function setImage(src: string | null) {
    imageSrc.value = src;
  }

  return {
    imageSrc,
    setImage,
  };
}
