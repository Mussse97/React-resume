
// Vi skapar en global komponent som heter Section som tar emot två props: title och content.
// Med props kan vi skicka data med title och content till komponenten.
const Section = ({ title, content }) => (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
  
  export default Section;
  