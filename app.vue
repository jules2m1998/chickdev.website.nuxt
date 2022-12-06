<template>
  <div class="main">
    <div class="left-side">
      <img src="/img/logo_mini.png" alt="Chickdev mini logo">
    </div>
    <div class="right-side">
      <div class="right-side-text">
        <img src="/img/logo.png" alt="Chickdev logo">
        <div class="right-side-text-desc">
          <h1>
            <span>Site en</span>
            <span>Maintenance</span>
          </h1>
          <span class="separator" />
          <p>Quelque soit la taille ou encore la complexité de votre besoin nous sommes le choix idéal, vous
            garantissant expertise, efficacité et professionalisme.</p>
        </div>
      </div>
      <div class="right-side-social">

      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo&family=Libre+Franklin:ital@1&display=swap');

* {
  box-sizing: border-box;
}

body {
  --move: 149px;
  --color-green: #71AB82;
  --color-blue: #311B92;
  --color-white: #FAFAFA;

  background-image: url(/img/bg.png);
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: 50% 100%;

  .main {
    display: grid;
    grid-template-columns: 344px 1fr;
    height: 100vh;
  }

  .left-side {
    display: flex;
    align-items: flex-end;
    padding-bottom: 36px;
    justify-content: center;
    background: rgba(49, 27, 146, 0.87);

    img {
      width: 100px;
    }
  }

  .right-side {
    margin: 10px;

    &-text {
      display: flex;
      flex-direction: column;

      img {
        align-self: flex-end;
        margin-bottom: 10px;
      }

      &-desc {
        display: flex;
        gap: 14px;
        flex-direction: column;
        transform: translateX(-160px);

        h1 {
          font-family: 'Exo', sans-serif;
          font-style: normal;
          font-weight: 900;
          font-size: 64px;
          line-height: 85px;
          color: #FAFAFA;

          display: flex;
          flex-direction: column;

          span {
            background: linear-gradient(-90deg, #311B92 82.4%, #FAFAFA 50%);
            background: linear-gradient(90deg, var(--color-white) var(--move), var(--color-white) var(--move),var(--color-white) calc(var(--move) + 1px), var(--color-blue) calc(var(--move) + 1px), var(--color-blue) 100%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          }
        }

        .separator {
          // background: linear-gradient(-90deg, #311B92 82.4%, #71AB82 50%);
          background: linear-gradient(90deg, var(--color-green) var(--move), var(--color-green) var(--move),var(--color-green) calc(var(--move) + 1px), var(--color-blue) calc(var(--move) + 1px), var(--color-blue) 100%);
          height: 6px;
        }

        p {
          font-family: 'Libre Franklin';
          font-style: italic;
          font-weight: 400;
          font-size: 18px;
          line-height: 32px;
          /* or 178% */


          color: #FFFFFF;
          text-shadow: 0px 0px 6px #83838325;
        }
      }

    }
  }
}
</style>
