<script lang="ts">
import { onMount } from 'svelte';
import { Router, Route } from 'svelte-routing';
import { navigate } from 'svelte-routing';
import Index from '../pages/web/Index.svelte';
import Contact from '../pages/web/Contact.svelte';
import About from '../pages/web/About.svelte';
export let basepath = '/';
import { getSession } from '../../services/user_service.js';
import Logo from '../svgs/Logo.svelte';

let logged = false;

onMount(() => {
  getSession().then((resp) => {
    console.log(resp)
    logged = true;
  }).catch((resp) =>  {
    console.error(resp.status)
    console.error(resp)
  })
});

const signOut = (e) => {
  let name = 'authToken';
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; secure; samesite=strict`;
  window.location.replace('/user/sign-out');
}
</script>

<style></style>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="/" on:click|preventDefault={() => {navigate('/')}}>
      <Logo size={24} color='#0000002d'/>
      ULima Journey
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <button class="nav-link active btn-link" aria-current="page" on:click|preventDefault={() => {navigate('/')}}>Home</button>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about" on:click|preventDefault={() => {navigate('/about')}}>Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact" on:click|preventDefault={() => {navigate('/contact')}}>Contacto</a>
        </li>
        <li class="nav-item">
          {#if logged}
            <a class="nav-link" on:click|preventDefault={signOut} href="/user/sign-out">Salir</a>
          {:else}
            <a class="nav-link" href="/login">Acceder</a>
          {/if}
        </li>
      </ul>
    </div>
  </div>
</nav>


<Router basepath="{basepath}">
  <Route path="/" component={Index} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
</Router>

<footer class="bg-dark text-white pt-4">
  <div class="container">
    <div class="row">
      <!-- About Section -->
      <div class="col-md-4 mb-3">
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
      </div>
      <!-- Quick Links Section -->
      <div class="col-md-4 mb-3">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li>
            <a href="/" on:click|preventDefault={() => {navigate('/')}} class="text-white">Home</a>
          </li>
          <li>
            <a href="/about" on:click|preventDefault={() => {navigate('/about')}} class="text-white">Nosotros</a>
          </li>
          <li>
            <a href="/contact" on:click|preventDefault={() => {navigate('/contact')}} class="text-white">Contacto</a>
          </li>
        </ul>
      </div>
      <!-- Contact Section -->
      <div class="col-md-4 mb-3">
        <h5>Contact Us</h5>
        <ul class="list-unstyled">
          <li><i class="bi bi-geo-alt-fill"></i> 1234 Street Name, City, State, 56789</li>
          <li><i class="bi bi-envelope-fill"></i> email@example.com</li>
          <li><i class="bi bi-phone-fill"></i> (123) 456-7890</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <a href="/" class="text-white me-3"><i class="bi bi-facebook"></i></a>
        <a href="/" class="text-white me-3"><i class="bi bi-twitter"></i></a>
        <a href="/" class="text-white me-3"><i class="bi bi-instagram"></i></a>
        <a href="/" class="text-white"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>
  <div class="bg-light text-dark text-center py-3">
    <p class="mb-0">© 2024 Your Brand. All rights reserved.</p>
  </div>
</footer>
