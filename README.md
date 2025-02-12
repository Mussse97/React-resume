# GitHub Portfolio

## Beskrivning
Detta projekt är en personlig portfölj byggd med **React**, **Redux**, **React-router** och **Framer-motion** där jag visar upp mina GitHub-projekt och tekniska färdigheter. Sidan inkluderar även ljus/mörkt tema, filtrering av projekt baserat på programmeringsspråk och en "Om mig"-sektion där jag presenterar mina kompetenser i procent.
Med det så kan man också ladda ner mitt CV för extra information om min utbildning och kontaktinformation.
**ThemeContext** från useContext gör att vi kan hantera mörkt och ljust läge globalt. Detta betyder att vi kan ändra temat från vilken komponent som helst utan att behöva skicka props.  Vi fördefinerar vad ljus och mörkt läge är i "App.css" themeContext håller koll på om sidan är light eller dark. Sidan som vi vill ska ha funktionen behöver ta **"theme"** som parameter samt knappen som anropar **"toggleTheme"** Med den informationen kan den byta till respektive mode.

## Funktioner
- **Projektvisning** – Hämtar och visar mina GitHub-repos automatiskt via GitHub API.
- **Språkanalys** – Visar en procentuell fördelning av programmeringsspråk som används i mina projekt.
- **Filtrering** – Möjlighet att filtrera projekt baserat på programmeringsspråk.
- **Ljus/Mörkt läge** – Användaren kan växla mellan ljus och mörk bakgrund.
- **Om mig-sektion** – Presenterar mina tekniska färdigheter i procent.
- **Ladda ner CV** – En knapp för att ladda ner mitt CV direkt från sidan.

## Teknologier
- **React** – För att bygga komponentbaserad UI.
- **Redux Toolkit** – För global state management.
- **React Router** – För navigering mellan sidor.
- **GitHub API** – För att hämta projektdata.
- **Framer-motion** – För att hantera animationer för start sidan.
- **ThemeContext** – För att hantera Ljus/mört tema.
- **CSS (Flexbox & Media Queries)** – För responsiv design.

## Installation och Körning
### Förkrav
- **Node.js** måste vara installerat på datorn.

### Installera projektet
1. Klona detta repo:
   git clone https://github.com/Mussse97/github-portfolio.git
   
2. Gå till projektmappen:
   cd github-portfolio
   
3. Installera Redux, Router och Motion beroenden:
   ```
    npm install @reduxjs/toolkit react-redux 
    npm install react-router 
    npm install motion 
   ```

### Starta projektet
Starta utvecklingsservern:
```
npm run dev
```

## Användning
1. **Navigera** mellan sidorna via menyn.
2. **Se mina projekt** och klicka på dem för att besöka deras GitHub-repositorier.
3. **Filtrera projekt** baserat på programmeringsspråk.
4. **Byt tema** mellan ljus och mörkt via knappen i hörnet.
5. **Ladda ner mitt CV** från "start sidan"

