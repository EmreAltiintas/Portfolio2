import React from 'react';
import ContactForm from './ContactForm'; // Importér ContactForm-komponenten
import Accordion from "./Accordion"; // Import your Accordion component
import './App.css'; // Your custom CSS files
import './index.css'; 



function App() {
  return (
    <div className="App">
      <header>
      <div className="icon-container">
          <img 
            src="./images/coding.png"
            alt="Kodeikon"
            id="coding-icon"
          />
        </div>


        <img 
          src="/images/profilbillede.jpg" 
          alt="Mit Billede" 
          id="header-image" 
          onClick={() => window.location.hash = '#kontakt'}  // Naviger til #om-mig sektionen ved klik
        />
        <h1 className="heading">Emre Altintas</h1>
        <p className="subheading">Datamatikerstuderende</p>
        <div className="button-container">
          <button onClick={() => window.location.hash = '#profil'}>Profil</button>
          <button onClick={() => window.location.hash = '#valgfag'}>Valgfag</button>
          <button onClick={() => window.location.hash = '#proces'}>Proces</button>
          <button onClick={() => window.location.hash = '#laeringsmaal'}>Læringsmål</button>
          <button onClick={() => window.location.hash = '#kontakt'}>Kontakt</button>
        </div>
      </header>

      <section id="profil">
        <h1>Profil</h1>
        <p>
          I mit tidligere virke har jeg gjort en forskel for mennesker gennem pædagogik. 
          Nu vil jeg gøre en forskel for mennesker gennem IT og udvikling. 
          Som person ser jeg <strong>muligheder</strong>  fremfor begrænsninger.
          Ledere og kolleger betegner mig som en, der tør at have flere bolde i luften på samme tid, samtidig med at kunne holde overblikket og være struktureret i sit arbejde.
          Jeg er en tydelig, autentisk og engageret person, der brænder for det jeg laver og yder mit absolut bedste - hver gang. 
          <br />
          Hensigten med denne portefølje er at dokumentere min læringsproces, herunder refleksioner, overvejelser og delmål, som sammen viser opnåelsen af de overordnede læringsmål for semestret.
        </p>
      </section>

      <section id="valgfag">
        <h1>Valgfag</h1>
        <p>
          På 4. semester har jeg valgt at fordybe mig i Webudvikling og IT-sikkerhed, hvilket er mine to valgfag. 
          Valgfagene har jeg jf. samtale med undervisere delt op i hhv. 20 ECTS og 10 ECTS. <br />
          Herunder opdaterer jeg løbende mine "progress-bars", som afspejler hvor langt jeg er i opfyldelsen af de tilknyttelsen læringsmål.
        </p>

        <div className="progress-bars">
          <div className="progress-bar">
            <div className="progress-bar-title">
              <span>Webudvikling </span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: '70%' }}></div> 
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-bar-title">
              <span>IT-Sikkerhed</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: '60%' }}></div> 
            </div>
          </div>
        </div>
      </section>

      <section id="proces">
        <h1>Læringsproces</h1>  
        <p>
  Som en del af min læringsproces på fjerde semester har jeg anvendt Kolb’s Læringscyklus til at fremme min viden og færdigheder inden for Webudvikling og IT-sikkerhed. 
  <br /> Cyklussen har givet mig mulighed for at kombinere erfaring, refleksion, konceptualisering og eksperimentering, hvilket har styrket min forståelse af fagene.
  <br /> Jeg har delt min proces op i tre faser: <strong>"Mål for ugen"</strong> (erfaring og handling), <strong>"Hvad har jeg opnået"</strong> (refleksion og evaluering), og <strong>"Refleksioner"</strong> (konceptualisering og videreudvikling), som hver bidrager til at opnå de overordnede læringsmål.
</p>


        <div className="week-card">
          <h2 className="weeks-h2">Uge 34</h2>
          <strong>Mål for ugen:</strong>
          <p>Kontakte virksomhed ift. muligt samarbejde vedr. projekt, med udgangspunkt i vores respektive valgfag.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Kontaktet andre virksomheder, i tilfælde af at samarbejdet med første virksomhed mislykkedes.</p>
        </div>

        <div className="week-card">
          <h2 className="weeks-h2">Uge 35</h2>
          <strong>Mål for ugen:</strong>
          <p>Finde en ny virksomhed, da virksomheden ikke havde mulighed for et samarbejde omkring vores projekt.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Fandt en ny virksomhed, Guldsmed Majus Smykker, som vi fik lavet en samarbejdsaftale med.</p>
        </div>

        <div className="week-card">
          <h2 className="weeks-h2">Uge 36</h2>
          <strong>Mål for ugen:</strong>
          <p>Første møde med Product Owner, for at afklare kundens ønsker og behov, således vi kan udlede vores HLD og LLD artefakter.
          Klargøre kvalitetskriterier for de kommende kort- og langsigtede læringsmål.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Udarbejdet HLD artefakter og lavet kvalitetskriterier for de kort- og langsigtede læringsmål for semestret.</p>
        </div>

        <div className="week-card">
          <h2 className="weeks-h2">Uge 37</h2>
          <strong>Mål for ugen:</strong>
          <p>At udarbejde LLD artefakter for projektet.
          Udarbejde kort- og langsigtede læringsmål for semestret.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Udarbejdet LLD artefakter til vores videre arbejde med projektet.
          Derudover har jeg udarbejdet kort- og langsigtede læringsmål for semestret.</p>
        </div>

        <div className="week-card">
          <h2 className="weeks-h2">Uge 38</h2>
          <strong>Mål for ugen:</strong>
          <p>Fremfinde relevante læringsressourcer/forløb, hvorigennem jeg kan opnå de fastsatte læringsmål for semestret.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Fundet læringsressourcer, herunder købt adgang til LearnJavaScript.online (herefter LearnJS), hvor jeg kan lære grundlæggende programmering med JavaScript, som jeg skal bruge til at udvikle front-end delen i vores webapplikation med.</p>
        </div>

        <div className="week-card">
          <h2 className="weeks-h2">Uge 39</h2>
          <strong>Mål for ugen:</strong>
          <p>Komme igennem de første 10 kapitler, ud af de samlede 83 kapitler i LearnJS kurset.
          Deltage i et IT-sikkerhedskursus udbudt af PROSA.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Første 15 kapitler i kurset blev gennemført.
          Jeg fik fulgt en tutorial på YouTube, hvor jeg lærte om, hvordan jeg kunne bruge ReactJS frameworket til at bygge en simpel side. (Ressource: Build an App and Master React - LINK: https://www.youtube.com/watch?v=b9eMGE7QtTk).
          Deltog jeg i et 3 timer langt kursus om IT-sikkerhed, udbudt af PROSA.</p>
        </div>

        <div className="week-card">
          <h2 className="weeks-h2">Uge 40</h2>
          <strong>Mål for ugen:</strong>
          <p>Komme igennem de næste 10 kapitler (11-20) i LearnJS kurset.
          Finde ressourcer til at lære ReactJS med, da det skal bruges som framework til vores webapp.
          Møde med PO angående designvalg, kalenderfunktion og OTP.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Nået til kapitel 31 i LearnJS kurset og fundet et "Scrimba" kursus om ReactJS, som jeg skal følge, når jeg er nået forbi 'Fetch API' delen i LearnJS kurset.</p>
        </div>

        <div className="week-card">
          <h2 className="weeks-h2">Uge 41</h2>
          <strong>Mål for ugen:</strong>
          <p>Komme igennem de næste 10 kapitler (31-40) i LearnJS kurset.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Nået til kapitel 41 i LearnJS kurset og planlagt implementering af IT-sikkerheds funktioner, hvor vi forinden har lavet risikoanalyse og trusselsmodellering.</p>
        </div>

        <div className="week-card">
          <h2 className="weeks-h2">Uge 43</h2>
          <strong>Mål for ugen:</strong>
          <p>Komme igennem de næste 10 kapitler (41-50) i LearnJS kurset, hvor jeg endelig lærer om DOM og DOM-manipulation, som vi skal bruge til udviklingen af vores web-app. Derudover forberede til implementering af IT-sikkerhedsfunktioner om fredagen.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Nået til kapitel 62 i LearnJS kurset, hvilket betyder at jeg er færdig med at lære om DOM og DOM-manipulation, hvilket jeg har tænkt mig at bruge i næste uge, uge 44, hvor vi går igang med at udvikle front-end i vores web-app. Derudover har jeg været med til at implementere og teste vores login-system til web-appen, hvori vi har implementeret autentificering via JWT tokens og andre IT-sikkerheds funktioner som f.eks. HSTS.</p>
        </div>

        <div className="week-card">
          <h2 className="weeks-h2">Uge 44</h2>
          <strong>Mål for ugen:</strong>
          <p>At komme igang med et Scrimba kursus, hvor jeg lærer om ReactJS frameworket, som jeg skal benytte til at udvikle en del af vores front-end i. Derudover vil jeg gerne komme i mål med at færdigimplementere vores login system, hvor man både kan registrere sig som ny kunde og logge ind på sin konto.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Jeg er nået igennem Scrimba kurset, hvor jeg har lært at lave et info-site med ReactJS framworket. Derudover er vi kommet i mål med vores login system og har implementeret en OTP funktion som VIRKER!</p>
        </div>

        <div className="week-card">
          <h2 className="weeks-h2">Uge 45</h2>
          <strong>Mål for ugen:</strong>
          <p>At færdigimplementere OTP og sikre, at URL adresser ikke kan tilgås uden login (JWT token). At man kan oprette en kunde i databasen.</p>
          <strong>Hvad har jeg opnået:</strong>
          <p>Implementeret OTP via en gratis tilgængelig API. Implementeret "Create" og "Read" funktionalitet i appen, så vi er et skridt tættere på fuld CRUD funktionalitet. Forsøgt at injicere scripts i inputfelter, for at penteste for XSS sårbarheder. Implementeret input-validering samt sanitering i både back-end og front-end.</p>
        </div>
      </section>

      <section id="laeringsmaal">
        <h1>Læringsmål</h1>

        <Accordion title={<span style={{ color: 'white' }}>Webudvikling (JS/ReactJS)</span>}>
          <div className="goals">
            <strong>Viden:</strong>
            <ul>
              <li>Udviklingsbaseret viden om grundlæggende JavaScript-programmering, herunder brugen af variabler, funktioner, loops og objektorienteret programmering.</li>
              <li>Forståelse for asynkron programmering i JavaScript, især brugen af async/await og fetch til at hente og manipulere data fra API'er uden at blokere brugerinteraktionen.</li>
              <li>Kendskab til ReactJS-frameworket og dets komponentstruktur, tilstandshåndtering og hvordan man bygger interaktive brugergrænseflader ved hjælp af React.</li>
              <li>Forståelse for DOM-manipulation i JavaScript, hvor HTML- og CSS-indhold ændres dynamisk for at skabe responsive og interaktive webapplikationer.</li>
            </ul>

            <strong>Færdigheder:</strong>
            <ul>
              <li>Udvikle responsive webapplikationer, der tilpasser sig forskellige skærmstørrelser og enheder ved hjælp af ReactJS, hvilket sikrer en optimal brugeroplevelse.</li>
              <li>Anvende fetch og async/await til at hente data fra API'er og integrere dem effektivt i applikationen, hvilket sikrer en dynamisk opdatering af brugergrænsefladen uden at genindlæse hele siden.</li>
              <li>Designe og implementere interaktive brugergrænseflader med ReactJS, hvor komponenter og tilstandshåndtering skaber en engagerende og effektiv brugeroplevelse.</li>
              <li>Implementere funktioner som login med JWT tokens og OTP (One-Time Password) for at sikre applikationens sikkerhed og brugerautentifikation.</li>
            </ul>

            <strong>Kompetencer:</strong>
            <ul>
              <li>Håndtere udviklingsforløb af ReactJS-applikationer ved at skrive struktureret kode og implementere effektive løsninger til datahåndtering og opdatering af brugergrænseflader.</li>
              <li>Deltage i tværfaglige projekter, hvor webapplikationen udvikles og tilpasses kundens behov ved hjælp af moderne JavaScript og ReactJS-teknologier.</li>
              <li>Løse praksisnære problemer ved at fokusere på at optimere performance, herunder hurtigere indlæsningstider, samtidig med at koden forbliver effektiv, ren og nem at vedligeholde.</li>
            </ul>
          </div>
        </Accordion>

        <Accordion title={<span style={{ color: 'white' }}>IT-Sikkerhed</span>}>
          <div className="goals">
            <strong>Viden:</strong>
            <ul>
              <li>Udviklingsbaseret viden om grundlæggende JavaScript-programmering, herunder brugen af variabler, funktioner, loops og objektorienteret programmering.</li>
              <li>Forståelse for asynkron programmering i JavaScript, især brugen af async/await og fetch til at hente og manipulere data fra API'er uden at blokere brugerinteraktionen.</li>
              <li>Kendskab til ReactJS-frameworket og dets komponentstruktur, tilstandshåndtering og hvordan man bygger interaktive brugergrænseflader ved hjælp af React.</li>
              <li>Forståelse for DOM-manipulation i JavaScript, hvor HTML- og CSS-indhold ændres dynamisk for at skabe responsive og interaktive webapplikationer.</li>
            </ul>

            <strong>Færdigheder:</strong>
            <ul>
              <li>Udvikle responsive webapplikationer, der tilpasser sig forskellige skærmstørrelser og enheder ved hjælp af ReactJS, hvilket sikrer en optimal brugeroplevelse.</li>
              <li>Anvende fetch og async/await til at hente data fra API'er og integrere dem effektivt i applikationen, hvilket sikrer en dynamisk opdatering af brugergrænsefladen uden at genindlæse hele siden.</li>
              <li>Designe og implementere interaktive brugergrænseflader med ReactJS, hvor komponenter og tilstandshåndtering skaber en engagerende og effektiv brugeroplevelse.</li>
              <li>Implementere funktioner som login med JWT tokens og OTP (One-Time Password) for at sikre applikationens sikkerhed og brugerautentifikation.</li>
            </ul>

            <strong>Kompetencer:</strong>
            <ul>
              <li>Håndtere udviklingsforløb af ReactJS-applikationer ved at skrive struktureret kode og implementere effektive løsninger til datahåndtering og opdatering af brugergrænseflader.</li>
              <li>Deltage i tværfaglige projekter, hvor webapplikationen udvikles og tilpasses kundens behov ved hjælp af moderne JavaScript og ReactJS-teknologier.</li>
              <li>Løse praksisnære problemer ved at fokusere på at optimere performance, herunder hurtigere indlæsningstider, samtidig med at koden forbliver effektiv, ren og nem at vedligeholde.</li>
            </ul>
          </div>
        </Accordion>
      </section>

      <section id="kontakt">
        <h1>Kontakt</h1>
           <p> 
          <strong>Vil du sende mig en besked?</strong>
           </p>
        <ContactForm /> {/* Her viser vi formularen */}
        <br />
        <p>
          <strong>Vil du vide mere om mig? </strong>

        <br /><br />

        Klik <a href="https://drive.google.com/file/d/1Pu58evxOAeqXnPNdhYeGxiH0rj2zrg8K/view?usp=sharing"><strong>her</strong></a> for mit CV. 
       
        <br />
        </p>
        
        <a href="https://www.linkedin.com/in/emre-altintas/" target="_blank">
           <img 
            src="./images/LinkedIn.png" 
            alt="LinkedIn Ikon" 
            id="linkedin-icon" 
            />
        </a>

      </section>
    </div>
  );
}

export default App;