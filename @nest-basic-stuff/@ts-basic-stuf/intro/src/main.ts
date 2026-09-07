import "./style.css";
import heroImg from "./assets/hero.png";
import typescriptLogo from "./assets/typescript.svg";
import viteLogo from "./assets/vite.svg";
import { setupCounter } from "./counter.ts";
//types
import { name, age } from "./bases/types.ts";
//objects
import { pokemonIds, rapArtists, kanye } from "./bases/objects.ts";
//classes
import { lilWayne } from "./bases/classes.ts";

// injection dependencies
import { charmander, bulbasaur } from "./bases/injection.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>


  <div>
    <h1>Get ${name}</h1>
    <h1>It's ${age}</h1>

    <h2>It's ts Objects ${pokemonIds.join(", ")}</h2>

    <h2>It's ts Interface ${rapArtists.map((artist) => artist.name).join(", ")}</h2>
    <h2>It's ts Class ${lilWayne.name} ${lilWayne.id}</h2>

    <h2>It's ts Class by Injection Dependency ${charmander.name} ${charmander.id}</h2>


  </div>


  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
