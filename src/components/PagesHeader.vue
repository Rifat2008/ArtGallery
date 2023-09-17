<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <router-link to="/" class="header__logo-content">
          <h1 class="header__logo-text-title"><span id="logo-text-1">Art</span> Galery</h1>
          <p class="header__logo-text-sub">SanFrancisco</p>
          <img src="../assets/logo-border-small.png" alt="logo-border" class="header__logo-border">
          <img src="../assets/logo-line-small.png" alt="logo-border" class="header__logo-line">
          <img src="../assets/logo-yellow-small.png" alt="logo-yellow" class="header__logo-yellow">
        </router-link>
      </div>
      <div class="header__right">
        <router-link to="/" class="header__search">
          <img src="../assets/search-icon-white.svg" alt="search-icon" class="header__right-icon">
          <p class="header__right-title">Поиск</p>
        </router-link>
        
        <router-link class="header__favorite-link" to="/favorite">
          <img src="../assets/favorite-icon.png" alt="favorite-icon" class="header__right-icon">
          <p class="header__right-title">Избранное</p>
        </router-link>
      </div>
      
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
  min-height: 81px;
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
  font-size: 12px;
  letter-spacing: 3px;
  margin-bottom: 7.5px;
  padding-left: 8px;
  position: relative;
  z-index: 2;
}
#logo-text-1 {
  color: #3E3F41;
}
.header__logo-text-sub {
  color: #FFF;
  font-size: 6px;
  letter-spacing: 1.5px;
}
.header__logo-border {
  position: absolute;
  top: -11px;
  left: 0;
  z-index: 2;
}
.header__logo-line {
  position: absolute;
  bottom: -5px;
  left: 46px;
}
.header__logo-yellow {
  position: absolute;
  top: -12px;
  left: 5px;
}
.header__right-icon {
  margin-right: 10px;
}
.header__search {
  margin-right: 38px;
  cursor: pointer;
}
.header__search, .header__favorite-link {
  display: flex;
  align-items: center;
}
.header__right-title {
  color: #FFF;
}
.header__right {
  display: flex;
  align-items: center;
}
@media (max-width: 376px) { 
  .header__container {
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
  .header__right-title {
    display: none;
  }
  .header__search {
    margin-right: 21px;
  }
  .header__right-icon {
    margin-right: 0;
  }
}
</style>