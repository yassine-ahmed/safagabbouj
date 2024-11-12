
import './App.css';

const projets = [
    {
        titre: "Application Web de Gestion Scolaire",
        lien: "https://github.com/safagabbouja/REACTJs-SpringBoot-School-Mangement-web-app"
    },
   
    {
        titre: "Stage Développeur Full Stack chez Tanit-IT",
        lien: "https://github.com/safagabbouja/Communication-and-Document-Management-using-ReactJs-and-ExpressJs-MongoDB" // Remplacez par le lien réel si disponible
    },
    {
        titre: "Stage Développeur Full Stack chez IT Guest",
        lien: "https://github.com/votre-repo-it-guest" // Remplacez par le lien réel si disponible
    },
    {
        titre: "Stage Développeur IA au Laboratoire d’Électronique et Microélectronique",
        lien: "https://github.com/safagabbouja/traffic-sign-recognation-in-real-time-using-DeepLearning-CNN-and-openCv-Raspberry-pi-4-" // Remplacez par le lien réel si disponible
    }
];

function App() {
    return (
        <div className="App">
            <header className="bg-blue-600 text-white text-center p-4">
                <h1 className="text-3xl">Bienvenue sur mon Portfolio safff</h1>
                <p>FullStack and IA Developer</p>
            </header>

            <section className="container mx-auto mt-5"> 
                <h2 className="text-2xl mb-4">Mes Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projets.map((projet, index) => (
                        <div className="bg-white shadow-md rounded-lg p-4" key={index}>
                            <h5 className="font-bold">{projet.titre}</h5>
                           
                            <a href={projet.lien} className="text-blue-500 hover:underline">Voir le projet</a>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="text-center mt-5 p-4 bg-gray-200">
                <p>Contactez-moi : safagabb01@gmail.com / +216 23 039 994</p>
            </footer>
        </div>
    );
}

export default App;