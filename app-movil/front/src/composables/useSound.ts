import clickSound from '@/assets/sfx/soundbutton.mp3';

const audio = new Audio(clickSound);
audio.volume = 0.6; // volumen 60%, ajustable

export function useSound() {
  function playClick() {
    audio.currentTime = 0;
    audio.play();
  }

  return {
    playClick,
  };
}
