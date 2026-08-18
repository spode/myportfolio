
  <style>
       /* body {
      margin: 0;
      height: 100vh;
      overflow: hidden;
      background: radial-gradient(circle at center, #223355, #0a0f1a);
    } */

    .snowflake {
      position: absolute;
      top: -10px;
      color: white;
      font-size: 24px;
      opacity: 0.9;
      user-select: none;
      animation: fall linear infinite, sway ease-in-out infinite;
    }

    /* Fall down */
    @keyframes fall {
      0% { top: -10px; opacity: 1; }
      100% { top: 100vh; opacity: 0.6; }
    }

    /* Sway left to right */
    @keyframes sway {
      0% { transform: translateX(0); }
      25% { transform: translateX(20px); }
      50% { transform: translateX(0); }
      75% { transform: translateX(-20px); }
      100% { transform: translateX(0); }
    }

    /* Randomize positions and speeds */
    .snowflake:nth-child(1) {
      left: 5%;
      font-size: 20px;
      animation-duration: 8s, 3s;
      animation-delay: 0s, 0s;
    }

    .snowflake:nth-child(2) {
      left: 20%;
      font-size: 28px;
      animation-duration: 9s, 4s;
      animation-delay: 1s, 1s;
    }

    .snowflake:nth-child(3) {
      left: 40%;
      font-size: 18px;
      animation-duration: 7s, 3.5s;
      animation-delay: 2s, 0.5s;
    }

    .snowflake:nth-child(4) {
      left: 60%;
      font-size: 32px;
      animation-duration: 10s, 5s;
      animation-delay: 0s, 2s;
    }

    .snowflake:nth-child(5) {
      left: 80%;
      font-size: 24px;
      animation-duration: 9s, 4s;
      animation-delay: 3s, 1s;
    }
  </style>

<div class="flex flex-row gap-4">
  <!-- Create multiple snowflakes -->
  <div class="snowflake">❅</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❅</div>
  </div>
