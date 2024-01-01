import Link from 'next/link'
import Layout from '../components/Layout.js'
import { useContext } from 'react';
import UserContext from '../components/UserContext';
import { useState, useEffect } from 'react';
import { randomWord } from './words.js';





export default function Page() {

  const { profile } = useContext(UserContext)
  const [timerSetting, setTimerSetting] = useState(20);
  const [timer, setTimer] = useState(timerSetting);
  const [currentEquipe, setCurrentEquipe] = useState(1);
  const [motIndex, setMotIndex] = useState(0);
  const [WordQuantity, setWordQuantity] = useState(20);

  const [team, setteam] = useState([
    { equipe: 1, score: 0 },
    { equipe: 2, score: 0 },
  ]);
  const [start, setstart] = useState(0)
  const [names, setNames] = useState([
    "Coluche", "Pierre Dac", "Jamel Debbouze", "Pierre Desproges",
    "Raymond Devos", "Gad Elmaleh", "Florence Foresti", "Thierry Le Luron",
    "Dieudonné M'bala M'bala", "Elie Semoun", "Cabu", "Stef and Jim"
  ]);

  const handleSliderChange = (event) => {
    if (start == 0) {
      setTimerSetting(Number(event.target.value));
    }
  };

  const handleSliderWordsChange = (event) => {
    if (start == 0) {
      setWordQuantity(Number(event.target.value));
    }
  };

  // Function to update the timer with the slider's value
  const updateTimer = () => {
    if (start == 0) {
      setTimer(timerSetting);
    }
  };

  useEffect(() => {
    setNames(currentNames => [...currentNames].sort(() => Math.random() - 0.5));
  }, []);

  const handleNextClick = () => {
    if (timer >= timerSetting) {
    }
    else {
      setMotIndex((motIndex + 1) % names.length);
    }
  };

  const scorer = () => {
    if (timer >= timerSetting || names.length == 0) {

    }
    else {
      names.splice(motIndex, 1);
      setMotIndex((motIndex) % names.length);
      if (names.length == 0) {

      }
      setteam(team.map(item => {
        if (item.equipe === currentEquipe) {
          return { ...item, score: item.score + 1 };
        }
        return item;
      }));
    }
  };

  const nextequipe = () => {
    setCurrentEquipe((currentEquipe) % team.length + 1);
  };

  const Start = () => {
    if (timer == timerSetting) {
      setMotIndex((motIndex + 1) % names.length);
    }
    setstart(1)
  }

  function countDown() {
    if (start == 0) {
      setTimer(timerSetting)
      nextequipe()
    }
    else {
      setTimer(timer - 1);
    }

    if (timer <= 0) {
      setstart(0)
      setTimer(timerSetting)
      nextequipe()

    }
  }

  if (start == 1) {
    setTimeout(countDown, 1000)
  }
  const currentTeamDetails = team.find(item => item.equipe === currentEquipe);

  //boutons pour changer de liste de mots
  const Liste1 = () => {
    if (start == 0) {
      setNames([
        "Coluche", "Pierre Dac", "Jamel Debbouze", "Pierre Desproges",
        "Raymond Devos", "Gad Elmaleh", "Florence Foresti", "Thierry Le Luron",
        "Dieudonné M'bala M'bala", "Elie Semoun", "Cabu", "Stef and Jim"
      ])
      setNames(currentNames => [...currentNames].sort(() => Math.random() - 0.5));
      setMotIndex(0)
    }

  }
  const Liste2 = () => {
    if (start == 0) {

      setNames([
        "Zinédine Zidane", "Omar Sy", "Walt Disney", "Edith Piaf", "Leonardo Di Caprio", "Emmanuel Macron", "Stéphane Bern",
        "Charlie Chaplin", "Mimie Mathy", "Louis De Funes", "François Hollande", "Nicolas Sarcozy", "Brigitte Bardot", "Alain Delon",
        "Gérard Depardieu", "Jean Dujardin", "Nicolat Hulot", "Johnny Hallyday", "Frank Dubosc", "Nicolas Cantelou", "Marion Cotillard",
        "Patrick Sébastien", "Vanessa Paradis", "Michel Cymes", "Donald Trump", "Shakira", "Céline Dion", "Bill Gates", "Steve Jobs", "Elvis Presley",
        "Beyoncé", "Johnny Depp", "Madonna", "Brad Pitt", "Angelina Jolie", "Jennifer Aniston", "Paul McCartney", "Tom Hanks", "Barack Obama", "George Clooney",
        "Marilyn Monroe", "Mariah Carey", "Tom Cruise", "Julia Roberts", "Steven Spielberg", "Grace Kelly", "Bruce Willis", "Matt Damon", "Greta Thunberg", "Elizabeth II", "Kate Middleton"
      ])
      setNames(currentNames => [...currentNames].sort(() => Math.random() - 0.5));
      setMotIndex(0)
    }
  }
  const Liste3 = () => {
    if (start == 0) {
      setNames([
        "Jules César", "Christophe Colomb", "Winston Chirchill", "Louis XIV", "Albert Einstein", "Charles de Gaulle", "Vincent Van Gogh", "Jeanne d’Arc", "Martin Luther King", "Nelson Mandela", "Mozart", "J.F Kennedy", "Victor Hugo", "Molière", "Picasso", "William Shakespeare", "Pasteur", "Al Capone", "Gutenberg", "Gustave Eiffel", "Robespierre", "Charlemagne", "La reine Victoria", "Abraham Lincoln", "Leonard De Vinci", "Cléopatre", "Marie Antoinette", "Neil Armstrong"
      ])
      setNames(currentNames => [...currentNames].sort(() => Math.random() - 0.5));

      setMotIndex(0)
    }
  }
  const Liste4 = () => {
    if (start == 0) {
      setNames(["Amélie Poulain", "Anakin Skywalker", "Hannibal Lecter", "James Bond", "Jack Sparrow", "Indiana Jones", "Kylo Ren", "Gollum", "Sarah Connor", "Harry Potter", "Gandalf", "Chucky", "Marty McFly", "Dr Emmett Brown", "Katniss Everdeen", "Rocky", "Rambo", "Loki", "Forrest Gump", "E.T", "Jack dans Titanic", "Le Joker", "Batman"])
      setNames(currentNames => [...currentNames].sort(() => Math.random() - 0.5));
      setMotIndex(0)
    }
  }

  const Liste5 = () => {
    if (start == 0) {
      setNames(["fleur", "lime à ongles", "livre", "trottinette", "guitare", "table", "trombone", "piscine", "balançoire", "barbecue", "puzzle", "bateau", "bouchon", "tondeuse", "sceau", "cartable", "slip / culotte", "hand-spiner", "ours en peluche", "montre", "parapluie", "balle de tennis", "manette de console de jeu", "stéthoscope", "allumette", "coton tige", "brosse à dent", "bouteille", "ordinateur", "DVD", "baignoire", "voiture", "pop-it"])
      setNames(currentNames => [...currentNames].sort(() => Math.random() - 0.5));
      setMotIndex(0)
    }
  }

  const Liste6 = () => {
    if (start == 0) {
      setNames([
        "Coluche", "Gad Elmaleh", "Florence Foresti", "Thierry Le Luron",
        "Dieudonné M'bala M'bala",
        "Zinédine Zidane", "Omar Sy", "Walt Disney", "Edith Piaf", "Leonardo Di Caprio", "Emmanuel Macron", "Stéphane Bern",
        "Charlie Chaplin", "Mimie Mathy", "Louis De Funes", "François Hollande", "Nicolas Sarcozy", "Brigitte Bardot", "Alain Delon",
        "Gérard Depardieu", "Jean Dujardin", "Nicolat Hulot", "Johnny Hallyday", "Frank Dubosc", "Nicolas Cantelou", "Marion Cotillard",
        "Patrick Sébastien", "Vanessa Paradis", "Michel Cymes", "Donald Trump", "Shakira", "Céline Dion", "Bill Gates", "Steve Jobs", "Elvis Presley",
        "Beyoncé", "Johnny Depp", "Madonna", "Brad Pitt", "Angelina Jolie", "Jennifer Aniston", "Paul McCartney", "Tom Hanks", "Barack Obama", "George Clooney",
        "Marilyn Monroe", "Mariah Carey", "Tom Cruise", "Julia Roberts", "Steven Spielberg", "Grace Kelly", "Bruce Willis", "Matt Damon", "Greta Thunberg", "Elizabeth II", "Kate Middleton",
        "Jules César", "Christophe Colomb", "Winston Chirchill", "Louis XIV", "Albert Einstein", "Charles de Gaulle", "Vincent Van Gogh", "Jeanne d’Arc",
        "Martin Luther King", "Nelson Mandela", "Mozart", "J.F Kennedy", "Victor Hugo", "Molière", "Picasso",
        "William Shakespeare", "Pasteur", "Al Capone", "Gutenberg", "Gustave Eiffel", "Robespierre", "Charlemagne", "La reine Victoria"])
      console.log(names.length);
      setNames(currentNames => [...currentNames].sort(() => Math.random() - 0.5));
      setMotIndex(0)
    }
  }

  const Liste7 = () => {
    if (start == 0) {
      let newWords = [];
      for (let i = 0; i < WordQuantity; i++) {
        newWords.push(randomWord())
      }
      setNames(newWords)
      setNames(currentNames => [...currentNames].sort(() => Math.random() - 0.5));
      setMotIndex(0)
      console.log(names.length);
    }
  }

  return (
    <Layout title="" description="Generated by create next app">
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        {/* Static Sidebar for Buttons and Slider */}
        <div className="flex flex-col space-y-3 p-2 bg-white shadow-xl rounded-lg lg:w-48 w-full lg:fixed lg:top-16 lg:left-0 z-10">
          <button onClick={Liste1} className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition duration-300">Humoriste</button>
          <button onClick={Liste2} className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition duration-300">célébrité</button>
          <button onClick={Liste3} className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition duration-300">personnage historique</button>
          <button onClick={Liste4} className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition duration-300">Personnages de films célèbres</button>
          <button onClick={Liste5} className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition duration-300">Objets</button>
          <button onClick={Liste6} className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition duration-300">Mixte</button>

          <input type="range" min="1" max="90" value={timerSetting} onChange={handleSliderChange} className="w-full" />
          <button onClick={updateTimer} className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300">Set Timer</button>

          <input type="range" min="1" max="90" value={WordQuantity} onChange={handleSliderWordsChange} className="w-full" />
          <button onClick={Liste7} className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition duration-300">Random {WordQuantity}</button>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col justify-center items-center p-8 lg:ml-48 mt-4 lg:mt-0">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-700">Equipe: {currentEquipe}</h1>
            <h1 className="text-6xl font-bold text-red-500">{timer}</h1>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-4 w-full max-w-4xl">
            {currentTeamDetails ? (
              <p className="text-4xl font-bold text-gray-800 mb-3">Team {currentTeamDetails.equipe}: {currentTeamDetails.score}</p>
            ) : (
              <p>No team found.</p>
            )}
            <h2 className="text-3xl font-bold text-gray-800">{names[motIndex]}</h2>
            <div className="flex space-x-4 justify-center mt-6">
              <button onClick={handleNextClick} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">Pass/Next</button>
              <button onClick={scorer} className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300">Validé</button>
              <button onClick={Start} className="px-6 py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300">Start</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  )
}
