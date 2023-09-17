<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <router-link to="/">
          <div class="header__logo-content">
            <h1 class="header__logo-text-title"><span id="logo-text-1">Art</span> Galery</h1>
            <p class="header__logo-text-sub">SanFrancisco</p>
            <img src="../assets/logo-border.png" alt="logo-border" class="header__logo-border">
            <img src="../assets/logo-line.png" alt="logo-border" class="header__logo-line">
            <img src="../assets/logo-yellow.png" alt="logo-yellow" class="header__logo-yellow">
          </div>
        </router-link>
      </div>
      <router-link class="header__favorite-link" to="/favorite">
        <img src="../assets/favorite-icon.png" alt="favorite-icon" class="header__favorite-icon">
        <span class="header__favorite-title">Избранное</span>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: #000;
}

.header__container {
  display: flex;
  min-height: 148px;
  justify-content: space-between;
  align-items: center;
}
.header__logo-content {
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  color: #FFF;
  font-weight: 500;
}
.header__logo-text-title {
  font-size: 20px;
  letter-spacing: 5px;
  margin-bottom: 12px;
  padding-left: 10px;
  position: relative;
  z-index: 2;
}
#logo-text-1 {
  color: #3E3F41;
}
.header__logo-text-sub {
  color: #FFF;
  font-size: 10px;
  letter-spacing: 2.8px;
}
.header__logo-border {
  position: absolute;
  top: -17px;
  left: 0;
  z-index: 2;
}
.header__logo-line {
  position: absolute;
  bottom: -9px;
  left: 70px;
}
.header__logo-yellow {
  position: absolute;
  top: -20px;
  left: 7px;
}
.header__favorite-icon {
  margin-right: 10px;
}
.header__favorite-link {
  display: flex;
}
.header__favorite-title {
  color: #FFF;
}

@media (max-width: 376px) { 
  .header__container {
  min-height: 80px;
  padding: 0 20px;
  }
  .header__logo-text-title {
  font-size: 9px;
  letter-spacing: 2.1px;
  margin-bottom: 5.5px;
  padding-left: 6px;
}
.header__logo-text-sub {
  font-size: 5px;
  letter-spacing: 0.9px;
}
.header__logo-border {
  width: 84px;
  height: 24px;
  top: -7px;
  left: 0;
}
.header__logo-line {
  width: 4.5px;
  height: 0.5px;
  bottom: -4px;
  left: 33px;
}
.header__logo-yellow {
  width: 26px;
  height: 24px;
  top: -9px;
  left: 3px;
}
.header__favorite-icon {
  width: 25px;
  height: 23px;
}
.header__favorite-title {
  display: none;
}
}
</style>