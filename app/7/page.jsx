import FormatToCode from "../components/FormatToCode";

const Lesson = () => {

  return (
    <div id="1" className="py-5">
      <h1>Les liens</h1>
      <div>
        <h2>La balise {`<a>`}</h2>
        <p>
          La balise <mark>{`<a>`}</mark> est une balise HTML standard pour créer des liens. Dans une application Next.js, vous l'utiliseriez pour les liens externes, c'est-à-dire les liens qui pointent vers un autre domaine.
        </p>
      </div>
      <div id="2">
        <h2>La balise {`<Link>`}</h2>
        <p>
          Le composant <mark>{`<Link>`}</mark> est spécifique à Next.js. Il permet une navigation entre les pages de votre application Next.js sans recharger la page. Cela donne une expérience utilisateur très fluide et rapide, car <u>seule la partie de la page qui change est mise à jour</u>. La route de la page est spécifié dans l'attribut <mark>href</mark> de la balise <mark>Link</mark>, elle correspond au nom du dossier qui contient le fichier <mark>page</mark>. <u>N'oubliez pas d'importer cette fonctionnalité.</u>
        </p>
      </div>
      <FormatToCode language="jsx">
        {`import Link from 'next/link';
export default function Home() {
  return (
    <nav>
      <Link href="/">Accueil</Link>
      <Link href="/about">À propos</Link>
    </nav>
  );
}`}
      </FormatToCode>
    </div>
  );
}

export default Lesson;