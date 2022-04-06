<script>
  import { time } from '../store';
</script>

<video src="./sources/ending.mp4" autoplay muted />

<div class="credits-container" class:show={$time > 219}>
  <h2>Credits</h2>
  <p>Chris Chan - Big C - Producer</p>
  <p>Dylan Rances - Lil D - Rapper</p>
  <p>Ronak Badhe - r2 - video editor</p>
  <p>David Wang - Wangy - hot boi</p>
  <p>Nate Flesner - Nathan - the other hot boi</p>
</div>

<style>
  .credits-container {
    position: absolute;
    top: 0;
    width: 100vw;
    text-align: center;
    transition: 20s linear;
    transform: translateY(100vh);
  }

  .credits-container.show {
    transform: translateY(-150vh);
  }

  h2, p {
    color: red;
    -webkit-text-stroke: 2px white;
  }

  h2 {
    font-weight: 1000;
    font-size: 5rem;
  }

  p {
    font-weight: 700;
    font-size: 4rem;
  }
</style>
