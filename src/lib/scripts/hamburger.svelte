<script>
    // import '$lib/styles/hamburger.css'
    import { onMount } from 'svelte';

    export function hamburger() {
        onMount(
            () => {
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
            $navbarBurgers.forEach(
                el => {
                    el.addEventListener(
                        'click', () => {
                            const target = el.dataset.target;
                            const $target = document.getElementById(target);
                            el.classList.toggle('is-active');
                            if ($target) {
                                $target.classList.toggle('is-active');
                            }
                        }
                    );
                }
            );
            }
        );
    }
</script>