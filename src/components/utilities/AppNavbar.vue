<template>
  <nav :class="{'scrolled': isScrolled, 'about-page': isAboutPage, 'contact-page': isContactPage, 'services-page': isServicesPage}">
    <div class="navbar-container">
      <div :class="{'logo': true, 'scrolled': isScrolled}">
        <router-link to="/">
          <img src="@/assets/logo-alezia.png" alt="Logo" />
        </router-link>
      </div>
      <ul :class="{'nav-links': true, 'open': isMenuOpen, 'about-page': isAboutPage && !isScrolled, 'contact-page': isContactPage && !isScrolled, 'services-page': isServicesPage && !isScrolled}">
        <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
        <li><router-link to="/services" @click="toggleMenu">Services</router-link></li>
        <li><router-link to="/about" @click="toggleMenu">About</router-link></li>
        <li><router-link to="/contact" class="contact-button" @click="toggleMenu">Contact</router-link></li>
      </ul>
      <div class="burger" @click="toggleMenu">
        <div :class="{'line1': true, 'toggle': isMenuOpen}"></div>
        <div :class="{'line2': true, 'toggle': isMenuOpen}"></div>
        <div :class="{'line3': true, 'toggle': isMenuOpen}"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false
    };
  },
  computed: {
    isAboutPage() {
      return this.$route.path === '/about';
    },
    isContactPage() {
      return this.$route.path === '/contact';
    },
    isServicesPage() {
      return this.$route.path === '/services';
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 2em;
  transition: padding 0.3s, background-color 0.3s, height 0.3s;
  z-index: 1000;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  height: 120px; /* Initial height */
}
nav.scrolled {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1em 2em; /* Reduced padding on scroll */
  height: 90px; /* Reduced height on scroll */
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
}
.logo img {
  height: 120px; /* Larger initial logo size */
  width: auto; /* Maintain aspect ratio */
  transition: height 0.3s, transform 0.3s;
  transform: scale(1.1); /* Slight zoom */
}
nav.scrolled .logo img {
  height: 90px; /* Smaller logo size on scroll */
  transform: scale(1.0); /* Reset zoom */
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1em;
  margin: 0;
  padding: 0;
  margin-left: auto;
  font-size: 1.1em;
  box-sizing: border-box;
}
.nav-links li {
  color: white;
}
.nav-links a {
  color: white;
  text-decoration: none;
  margin: 25px;
  transition: color 0.3s;
}
nav.scrolled .nav-links a {
  color: black;
}
nav.about-page .nav-links a,
nav.contact-page .nav-links a,
nav.services-page .nav-links a {
  color: black;
}
.contact-button {
  padding: 0.5em 2em;
  border: 2px solid #1e90ff;
  border-radius: 50px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background-color: #1e90ff;
  transition: background-color 0.3s, color 0.3s;
  font-size: 1.2em;
  font-family: 'Poppins', sans-serif;
}
.contact-button:hover {
  background-color: transparent;
  color: #1e90ff;
}
.burger {
  display: none;
  cursor: pointer;
  z-index: 1001;
  position: absolute;
  right: 20px; /* Positioning the burger menu to the right */
}
.burger div {
  width: 25px;
  height: 3px;
  background-color: black; /* Change burger color to black */
  margin: 5px;
  transition: all 0.3s ease;
}
.burger .toggle.line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.burger .toggle.line2 {
  opacity: 0;
}
.burger .toggle.line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
@media (max-width: 768px) {
  nav {
    padding: 1em;
  }
  .nav-links {
    position: fixed;
    right: 0;
    height: 100vh;
    top: 0;
    background-color: rgba(255, 255, 255, 0.9); /* Change background to a semi-transparent white */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw; /* Make the menu take the full viewport width */
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
    box-sizing: border-box;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
  .nav-links.open {
    transform: translateX(0%);
  }
  .nav-links a {
    color: black; /* Black text color for the links */
    margin: 15px 0; /* Adjust margin for better spacing */
  }
  .burger {
    display: block;
  }
}
</style>
