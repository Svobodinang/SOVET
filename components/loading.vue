<template>
<!-- eslint-disable -->
  <div class="loading" :class="{'done': done}">
  <svg width="144" height="167" viewBox="0 0 144 167" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.15234 42.8365L71.9998 1.95898L142.847 42.8365V124.592L71.9998 165.47L1.15234 124.592V42.8365Z" stroke="#EAE2E2" stroke-width="2"/>
    <path d="M95.7517 131.06V135.017H48.2485V131.06C48.2485 128.881 50.026 127.104 52.2073 127.104H60.1759C60.3856 122.167 63.592 118.045 68.0417 116.467V70.0818C65.9554 68.7645 64.5581 66.4543 64.5581 63.8037H68.0417H75.9585H79.4421C79.4421 66.4543 78.0448 68.7645 75.9585 70.0818V116.462C80.4082 118.041 83.6146 122.163 83.8242 127.1H91.7929C93.9742 127.104 95.7517 128.881 95.7517 131.06Z" fill="#EAE2E2"/>

    <path class="left-part" fill-rule="evenodd" fill="#EAE2E2" clip-rule="evenodd" d="M20.5 95.4999H25L38.5 59.9999C39.5 58 41 58 42 59.9999L55.5 95.4999H60C60 102.5 49 109 40.5 109C32 109 20.5 102.5 20.5 95.4999ZM40.5 66.4999L29.5 95.4999H51.5L40.5 66.4999Z"/>
    <path class="right-part" fill-rule="evenodd" fill="#EAE2E2" clip-rule="evenodd" d="M85 95.9999H89.5L103 60.4999C104 58.5 105.5 58.5 106.5 60.4999L120 95.9999H124.5C124.5 103 113.5 109.5 105 109.5C96.5 109.5 85 103 85 95.9999ZM105 66.9999L94 95.9999H116L105 66.9999Z"/>

    <g fill="#EAE2E2" class="top-part">
      <circle cx="41.5" cy="51.5" r="3.5"/>
      <circle cx="103.5" cy="51.5" r="3.5"/>
      <path d="M72.5 59C69.5 59 65.2514 57.682 65 51C59.9218 46.5862 54.8435 47.8161 44 53L43 49C53.6164 44.0393 59.1642 42.424 66.5 47L70 45C65.1583 42.1219 68.3072 38.4178 72 32.5C72 32.5 75.5001 59 72.5 59Z"/>
      <path d="M72.0747 58.7239C72.396 59.8767 79.2946 57.4445 79.545 50.9582C84.6031 46.6737 89.6614 47.8675 100.462 52.8996L101.458 49.0168C90.8836 44.2014 85.3577 42.6333 78.0509 47.0753L74.5648 45.1339C79.3873 42.3401 75.7528 38.2445 72.0747 32.5C72.0747 32.5 71.7533 57.5711 72.0747 58.7239Z"/>
    </g>
  </svg>
  </div>
</template>

<script>
export default {
  props: ['done']
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: $darkGray;
  background-image: url('~assets/img/bg/preloader.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  opacity: 1;
  visibility: visibility;
  &.done {
    opacity: 0;
    visibility: hidden;
  }

  .top-part {
    animation: top-part 1s linear infinite alternate;
    transform-origin: 50% 35%;
  }
  .right-part {
    animation: parts 1s linear infinite alternate;
  }
  .left-part {
    animation: parts 1s linear infinite alternate-reverse;
  }
}

@keyframes top-part {
  0% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(20deg);
  }
}
@keyframes parts {
  0% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(12px);
  }
}

</style>
