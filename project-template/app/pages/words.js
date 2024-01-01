


let wordlist = ["Coluche", "Pierre Dac", "Jamel Debbouze", "Pierre Desproges",
"Raymond Devos", "Gad Elmaleh", "Florence Foresti", "Thierry Le Luron",
"Dieudonné M'bala M'bala", "Elie Semoun", "Cabu", "Stef and Jim","Zinédine Zidane", "Omar Sy", "Walt Disney", "Edith Piaf", "Leonardo Di Caprio", "Emmanuel Macron", "Stéphane Bern",
"Charlie Chaplin", "Mimie Mathy", "Louis De Funes", "François Hollande", "Nicolas Sarcozy", "Brigitte Bardot", "Alain Delon",
"Gérard Depardieu", "Jean Dujardin", "Nicolat Hulot", "Johnny Hallyday", "Frank Dubosc", "Nicolas Cantelou", "Marion Cotillard",
"Patrick Sébastien", "Vanessa Paradis", "Michel Cymes", "Donald Trump", "Shakira", "Céline Dion", "Bill Gates", "Steve Jobs", "Elvis Presley",
"Beyoncé", "Johnny Depp", "Madonna", "Brad Pitt", "Angelina Jolie", "Jennifer Aniston", "Paul McCartney", "Tom Hanks", "Barack Obama", "George Clooney",
"Marilyn Monroe", "Mariah Carey", "Tom Cruise", "Julia Roberts", "Steven Spielberg", "Grace Kelly", "Bruce Willis", "Matt Damon", "Greta Thunberg", "Elizabeth II", "Kate Middleton",
"Jules César", "Christophe Colomb", "Winston Chirchill", "Louis XIV", "Albert Einstein", "Charles de Gaulle", "Vincent Van Gogh", "Jeanne d’Arc", "Martin Luther King", "Nelson Mandela", "Mozart", "J.F Kennedy", "Victor Hugo", "Molière", "Picasso", "William Shakespeare", "Pasteur", "Al Capone", "Gutenberg", "Gustave Eiffel", "Robespierre", "Charlemagne", "La reine Victoria", "Abraham Lincoln", "Leonard De Vinci", "Cléopatre", "Marie Antoinette", "Neil Armstrong",
"Amélie Poulain", "Anakin Skywalker", "Hannibal Lecter", "James Bond", "Jack Sparrow", "Indiana Jones", "Kylo Ren", "Gollum", "Sarah Connor", "Harry Potter", "Gandalf", "Chucky", "Marty McFly", "Dr Emmett Brown", "Katniss Everdeen", "Rocky", "Rambo", "Loki", "Forrest Gump", "E.T", "Jack dans Titanic", "Le Joker", "Batman",
"fleur", "lime à ongles", "livre", "trottinette", "guitare", "table", "trombone", "piscine", "balançoire", "barbecue", "puzzle", "bateau", "bouchon", "tondeuse", "sceau", "cartable", "slip / culotte", "hand-spiner", "ours en peluche", "montre", "parapluie", "balle de tennis", "manette de console de jeu", "stéthoscope", "allumette", "coton tige", "brosse à dent", "bouteille", "ordinateur", "DVD", "baignoire", "voiture", "pop-it"
]

export const randomWord = () => {
    const random = Math.floor(Math.random() * wordlist.length)
    let temp=wordlist[random];
    wordlist.splice(random, 1);
    return temp;
    }
    export default function page () {
        return (
            <div>
                <h1>test</h1>
            </div>
        )
    }
