"use client"
import Image from 'next/image';

const Lesson = () => {

    const handleClick = (event) => {
        navigator.clipboard.writeText(event.target.innerText)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    }

    return (
        <div id="1" className="py-5">
            <h1>Installer et lancer un projet de Next.js</h1>
            <div>
                <h2>Installer Next.js (à ne pas réaliser)</h2>
                <p>
                    Les fichiers de l’installation vous sont déjà fournis car l'installation ne fonctionne pas sur les ordinateurs du lycée. Voici tout de même comment l’installer. <u>Attention où vous placez le dossier car Next.js ne supporte pas les espaces dans les chemins.</u> Pour installer un projet Next.js, il faut lancer un terminal, se placer dans un répertoire puis taper cette commande <mark className='cursor-copy' onClick={handleClick}>npx create-next-app@latest nom-du-projet</mark>. Ensuite, plusieurs options vous seront demandées tel que d’utiliser <mark>Tailwind</mark> ou encore <mark>TypeScript</mark>, mais pour ce projet on ne les utilisera pas.
                </p>
                <Image
                    src="/createProject.png"
                    alt="Next.js installation"
                    width={700}
                    height={700}
                    className='m-auto mt-6'
                />

            </div>

            <div id="2">
                <h2>Lancer un projet Next.js</h2>
                <p>
                    Après avoir installé le projet, à partir du terminal, il faut se placer à la racine du projet Next.js avec tous ces dossiers et fichiers, pour taper la commande suivante, qui démarrera le projet <mark className='cursor-copy' onClick={handleClick}>npm run dev</mark>. Le processus de démarrage du serveur de développement de Next.js peut prendre quelques instants. Vous verrez des messages dans votre terminal indiquant que le serveur est en cours de démarrage et la disponibilité de l'application.
                    Une fois que le serveur de développement est démarré avec succès, ouvrez votre navigateur web et accédez à l'URL suivante <mark className='cursor-copy' onClick={handleClick}>http://localhost:3000</mark>.
                    <br /><br />
                    Par défaut, c’est le <mark>port 3000</mark> qui est utilisé. Cependant, si ce port est déjà utilisé par une autre application sur votre machine, il faudra lancer une autre commande <mark className='cursor-copy' onClick={handleClick}>npx next dev -p {'<port>'}</mark>.
                    Pendant que le serveur de développement est en cours d'exécution, toute modification que vous apportez à votre code sera automatiquement détectée et votre application sera rechargée automatiquement dans le navigateur, vous permettant de voir les modifications en direct.
                    Pour arrêter le serveur de développement, revenez dans votre terminal et utilisez la combinaison de touches <mark>Ctrl + C</mark>.

                </p>
            </div>

            <div>
                <h2>Arborescence</h2>
                <p>
                    L'arborescence d'un projet <mark>Next.js</mark> est composée de plusieurs dossiers et fichiers.
                    <br /><br />
                </p>
                <ul className='space-y-2'>
                    <li>
                        <mark>/app</mark> : C'est dans ce dossier où vous aller principalement travailler
                    </li>
                    <li>
                        <mark>/app/page.js</mark> : C'est le fichier par défaut qui sera affiché à la racine de votre site
                    </li>
                    <li>
                        <mark>/app/layout.js</mark> : C'est le fichier qui contiendra la structure de votre site
                    </li>
                    <li>
                        <mark>/app/components</mark> : Contient tous les composants réutilisables
                    </li>
                    <li>
                        <mark>/public</mark> : Ce répertoire est utilisé pour servir des fichiers statiques. Tel que les images et les feuilles de style
                    </li>
                    <li>
                        <mark>package.json</mark> : C'est le fichier de configuration de votre projet. Il contient des informations sur votre projet, telles que les dépendances, les scripts, etc.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Lesson;