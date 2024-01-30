import { useParams} from "react-router-dom"; // Importo la funzione useParams 
import { useState } from "react"; // Importo la funzione useState
import ReactPlayer from 'react-player' 

import './SingleGame.css'

import RememberMeWall from '../../assets/RememberMeWall.png' // Importo il wallpaper di ogni singolo videogioco
import LifeIsStrangeWall from '../../assets/LifeIsStrangeWall.png' // Importo il wallpaper di ogni singolo videogioco
import VampyrWall from '../../assets/VampyrWall.png' // Importo il wallpaper di ogni singolo videogioco
import CaptainSpiritWall from '../../assets/CaptainSpiritWall.png' // Importo il wallpaper di ogni singolo videogioco
import LifeIsStrange2Wall from '../../assets/LifeIsStrange2Wall.png' // Importo il wallpaper di ogni singolo videogioco
import TellMeWhyWall from '../../assets/TellMeWhyWall.png' // Importo il wallpaper di ogni singolo videogioco
import TwinMirrorWall from '../../assets/TwinMirrorWall.png' // Importo il wallpaper di ogni singolo videogioco
import GerdaWall from '../../assets/GerdaWall.png' // Importo il wallpaper di ogni singolo videogioco
import BanishersWall from '../../assets/BanishersWall.png' // Importo il wallpaper di ogni singolo videogioco
import HarmonyWall from '../../assets/HarmonyWall.png' // Importo il wallpaper di ogni singolo videogioco
import JusantWall from '../../assets/JusantWall.png' // Importo il wallpaper di ogni singolo videogioco

import RememberMeLogo from '../../assets/RememberMe-Logo.png' // Importo il logo di ogni singolo videogioco
import LifeIsStrangeLogo from '../../assets/LifeIsStrange-Logo.png' // Importo il logo di ogni singolo videogioco
import VampyrLogo from '../../assets/Vampyr-Logo.png' // Importo il logo di ogni singolo videogioco
import CaptainSpiritLogo from '../../assets/CaptainSpirit-Logo.png' // Importo il logo di ogni singolo videogioco
import LifeIsStrange2Logo from '../../assets/LifeIsStrange2-Logo.png' // Importo il logo di ogni singolo videogioco
import TellMweWhyLogo from '../../assets/TellMeWhy-Logo.png' // Importo il logo di ogni singolo videogioco
import TwinMirrorLogo from '../../assets/TwinMirror-Logo.png' // Importo il logo di ogni singolo videogioco
import GerdaLogo from '../../assets/Gerda-Logo.png' // Importo il logo di ogni singolo videogioco
import BanishersLogo from '../../assets/Banishers-Logo.png' // Importo il logo di ogni singolo videogioco
import HarmonyLogo from '../../assets/Harmony-Logo.png' // Importo il logo di ogni singolo videogioco
import JusantLogo from '../../assets/Jusant-Logo.png' // Importo il logo di ogni singolo videogioco

import Steam from '../../assets/Steam.svg' // Importo il logo di ogni singola piattaforma
import Switch from '../../assets/Switch.svg' // Importo il logo di ogni singola piattaforma
import Xbox360 from '../../assets/Xbox360.svg' // Importo il logo di ogni singola piattaforma
import PS4 from '../../assets/PS4.svg' // Importo il logo di ogni singola piattaforma
import XboxOne from '../../assets/XboxOne.svg' // Importo il logo di ogni singola piattaforma
import EpicGames from '../../assets/EpicGames.svg' // Importo il logo di ogni singola piattaforma
import PS5 from '../../assets/PS5.svg' // Importo il logo di ogni singola piattaforma
import XboxSX from '../../assets/XboxSX.svg' // Importo il logo di ogni singola piattaforma

import BritishAcademy from '../../assets/BritishAcademy.png' // Importo il logo dei premi
import HallOfFame from '../../assets/HallOfFame.png' // Importo il logo dei premi
import PingAwards from '../../assets/PingAwards.png' // Importo il logo dei premi
import Recommended from '../../assets/Recommended.png' // Importo il logo dei premi
import PingAwards2 from '../../assets/PingAwards2.png' // Importo il logo dei premi
import GoldenJoystick from '../../assets/GoldenJoystick.png' // Importo il logo dei premi
import BestInteractive from '../../assets/BestInteractive.png' // Importo il logo dei premi
import GoldenJoystick2 from '../../assets/GoldenJoystick2.png' // Importo il logo dei premi
import BestAdventure from '../../assets/BestAdventure.png' // Importo il logo dei premi
import BaftaWinner from '../../assets/BaftaWinner.png' // Importo il logo dei premi
import Pegases2021 from '../../assets/Pegases2021.png' // Importo il logo dei premi
import GamesCom2020 from '../../assets/GamesCom2020.png' // Importo il logo dei premi
import GaymingAward from '../../assets/GaymingAward.png' // Importo il logo dei premi
import GamesForImpact from '../../assets/GamesForImpact.jpg' // Importo il logo dei premi

import {BsYoutube} from 'react-icons/bs' // Importo l'icona dalla libreria React Icons
import {AiOutlineClose} from 'react-icons/ai' // Importo l'icona dalla libreria React Icons

const SingleGame = () => {
  const [isOpen, setIsOpen] = useState(false); // Creo la costante utilizzando useState e impostando uno stato iniziale uguale a "false"
  const { title } = useParams(); // Creo la costante utilizzando l'hook useParams

  // Creo il componente "gamesData" caratterizzato da un array di elementi, le cui informazioni sono relativi a ogni singolo videogioco
  const gamesData = [

    {
        title: "remember-me",
        name: "Remember Me",
        logo: RememberMeLogo,
        plot: "Neo-Paris. 2084.Personal memories can now be digitized, bought, sold and traded. The last remnants of privacy and intimacy have been swept away in what appears to be a logical progression of the explosive growth of social networks at the beginning of the 21st century. The citizens themselves have accepted this surveillance society in exchange for the comfort only smart technology can provide. This memory economy gives immense power over society to just a handful of people.",
        cover: RememberMeWall,
        buy: [Steam, Switch, Xbox360],
        link: "https://youtu.be/DcDokdOTaXo",
    }, 
    {
        title: "life-is-strange", 
        name: "Life Is Strange",
        logo: LifeIsStrangeLogo,
        plot:"Follow the story of Max Caulfield, a photography student who, while saving the life of her best friend Chloe Price, realizes she has the extraordinary power to rewind time. While investigating the sudden disappearance of their schoolmate Rachel Amber, the two friends realize that the town of Arcadia Bay has a dark side. Max will soon discover the extent to which changing the past can compromise the future.",
        cover: LifeIsStrangeWall,
        buy: [Steam, PS4, XboxOne],
        link: "https://youtu.be/tDsYnrQwD1c",
        awards: [BritishAcademy, HallOfFame, PingAwards, Recommended, PingAwards2, GoldenJoystick]
    },
    {
        title: "vampyr",
        logo: VampyrLogo,
        plot: "London, 1918. You are Dr. Jonathan Reid and you have just become a vampire. As a doctor, you must find a cure to save citizens, infected with the flu. As a vampire, you are doomed to feed on those you are sworn to heal. Will you accept your inner monster? Survive and fight against vampire hunters, undead skals and other supernatural creatures. Use your terrible powers to manipulate and probe the lives of those around you and choose your next victim. Struggle to live with your choice your actions will save or doom London.",
        cover: VampyrWall,
        buy: [Steam, PS4, XboxOne, Switch],
        link: "https://youtu.be/_0L8LbardIM"
    }, 
    {
      title: "captain-spirit",
      logo: CaptainSpiritLogo,
      plot: "Have you ever dreamed of becoming a superhero? He is Chris, a 9-year-old boy with a wild imagination who escapes reality by going on great adventures as his alter ego, the fantastic Captain Spirit!",
      cover: CaptainSpiritWall,
      buy: [Steam, PS4, XboxOne],
      link: "https://youtu.be/faWhiRLSsnc"
    },
    {
      title: "life-is-strange-2",
      logo: LifeIsStrange2Logo,
      plot:"Sean and Daniel Diaz are forced to run away from home after a tragic accident. Out of fear of the police and Daniel's new telekinetic power, or the ability to move objects with his mind, the brothers decide to go to their father's hometown, Puerto Lobos, Mexico for safety.Suddenly Sean, who is only 16 years old, has to take care of Daniel's safety and security, as well as having to teach him to distinguish between right and wrong. As Daniel grows stronger, it's up to Sean to set the rules that they must follow. Keep the power secret or use it in the most difficult situations? Begging, borrowing or stealing? Turn to the family or stay hidden?",
      cover: LifeIsStrange2Wall,
      buy: [Steam, PS4, XboxOne, Switch],
      link:"https://youtu.be/WgkumWUFqdM",
      awards: [BestInteractive, GoldenJoystick2, BestAdventure, BaftaWinner]
    },
    {
      title: "tell-me-why",
      logo: TellMweWhyLogo,
      plot:"In this deep and mysterious story, twins Tyler and Alyson Ronan reunite and use their supernatural bond to unravel memories of their beautiful but troubled childhoods. Set in a beautiful Alaskan town, Tell Me Why features realistic characters, deep themes, and compelling choices. As you recall memories of the past, your choices will impact the relationship between the twins, determining the strength of their bond and shaping the course of their lives.",
      buy: [Steam, XboxOne],
      link:"https://youtu.be/kqahay6MesU",
      cover: TellMeWhyWall,
      awards: [Pegases2021, GamesCom2020, GaymingAward, GamesForImpact ]
    },
    {
      title: "twin-mirror",
      logo: TwinMirrorLogo,
      plot:"Sam Higgs left his hometown two years ago, cutting ties with all the people closest to him. The sudden death of Nick, his best friend, will force him to face the dark past of the town, as well as his own. Soon he will find himself at the center of a dangerous web of intrigue: nothing is as it seems in the small town of Basswood, West Virginia. Forced to come to terms with himself and with the locals, former investigative journalist Sam struggles to find a balance between the need to reconcile with his world and an investigation destined to turn his existence upside down. He will have to determine what he is willing to risk to unravel the mysteries that lurk in his hometown.",
      buy:[Steam, PS4, XboxOne, EpicGames],
      link:"https://youtu.be/zwFMqsOScKg",
      cover: TwinMirrorWall
    }, 
    {
      title: "gerda",
      logo: GerdaLogo,
      plot:"February 1945. War is winding down, but your fight is about to begin. You are Gerda Larsen, a young nurse torn between loyalty to her community and a desperate attempt to save her husband Anders. Many lives will depend on your choices. Gerda's journey is filled with moral dilemmas, difficult conversations and ambiguous situations. The world is full of dangers and you have to adapt to circumstances, but every decision brings consequences, immediate or future.",
      buy:[Steam, Switch],
      link:"https://youtu.be/ypQAHHIMBAA",
      cover: GerdaWall
    }, 
    {
      title: "banishers",
      logo: BanishersLogo,
      plot:"New Eden, 1695. Antea Duarte and Rosso Mac Raith are a pair of purgers, i.e. ghost hunters who have sworn to protect the living from the threat of ghosts. Following the disaster of the last mission, Antea finds herself seriously injured and becomes one of those ghosts that she hates so much. The couple will then try to free Antea from the pain that afflicts her in the haunted forests of North America. Let yourself be carried away by the powerful and intimate story of these two lovers with doomed fate. As a purger, she enters the lives of the communities of New Eden and solve cases of hauntings in this mystical world, steeped in lore and haunted by supernatural creatures and ancient secrets. He uses his wits or combines the spiritual powers of Antea with Rosso's arsenal to annihilate and purge the souls that torment the living. Difficult decisions await you that will significantly affect the history and fate of the inhabitants of New Eden, whether they are living or wandering souls. Will you be willing to compromise your ghost hunter vow for the sake of your beloved, who has become one of these ghosts?",
      buy:[Steam, PS5, XboxSX],
      link:"https://youtu.be/ch8snvXQT5E",
      cover: BanishersWall
    }, 
    {
      title: "harmony",
      logo: HarmonyLogo,
      plot:"In the very near future Polly, returning home after a few years spent abroad in search of her missing mother, realizes that her city has changed radically. A megacorporation called MK controls the population and threatens the community. Soon Polly will discover that she possesses the gift of clairvoyance, which will put her in contact with Reverie, the realm of human Ambitions: Glory, Happiness, Power, Chaos, Bond and Truth. In this world, Polly transforms into Harmony, the goddess who has the ability to choose which Ambition will end up dominating Reverie and thus restore the delicate balance between the world of the gods and the human one. The fate of humanity is at stake. Which fate will you choose?",
      buy:[Steam, PS5, XboxSX, Switch],
      link:"https://youtu.be/Wv5fBHVk7Pc",
      cover: HarmonyWall
    },
    {
      title: "jusant",
      logo: JusantLogo,
      plot: "Enjoy the meditative vibes of Jusant, a climbing action puzzler. Climb an immensely tall tower and reach uncharted heights together with your watery travel companion. Master climbing tools, traverse different biomes and piece together the tower's past.",
      buy:[Steam, PS5, XboxSX],
      link: "https://youtu.be/u6bhDnLBT4A",
      cover: JusantWall
    }
]
const game = gamesData.find((game) => game.title === title); // Creo il componente "game" facendo riferimento all'array gamesData a cui applico il meoto ".find", che restituisce il primo elemento nella matrice fornita che soddisfa i requisiti. In questo caso viene restituito l'elemento corrispondente alla voce "title" a cui collego il "title" di useParams.

const watchVideo = () => { // Imposto il componente specificando il valore di "setIsOpen" in modo tale da aprire il video
   setIsOpen(true)
}
const closeVideo = () => { // Imposto il componente specificando il valore di "setIsOpen" in modo tale da chiudere il video
  setIsOpen(false)
}

const playerConfig = {controls: ['play', 'progress', 'volume', 'fullscreen']} // Imposto, tramite la costante, quali controlli voglio visualizzare nel player di Youtube

  return (
    <div className="game">
      <img src={game.cover} className="game--cover"/>
      <div className="game--about">
      <div className="game--information">
        <img src={game.logo} alt="Logo Game" />
        <h3>{game.plot}</h3>
      </div>
      <div className="game--watch--video">
      {!isOpen && ( // Se il video non è aperto, viene mostrata l'icona e al click richiamato il componente "watchVideo"
        <button className="game--youtube--button" onClick={watchVideo}><BsYoutube /></button>
      )}
      {isOpen && ( // Se il video è aperto, viene mostrato il plater e al click sull'apposita icona, chiuso il video grazie al richiamo del componente "closeVideo"
        <div className="youtube--video">
        <div className="youtube--video--container">
        <div className="youtube--wrapper">
        {/* Su onClick richiamo il componente "closeVideo" */}
        <button onClick={closeVideo} className="game--close--video"><AiOutlineClose /></button> 
        {/* Specifico le caratteristiche che deve avere il Player di Youtube */}
        <ReactPlayer url={game.link} width="100%" height="100%" controls={playerConfig} /> 
        </div>
        </div>
        </div>
      )}
      </div>
      </div>
      <div className="game--client">
      <h1>Avaible on</h1>
      <div className="game--client--container">
      {game.buy.map((client, clientIndex) => ( // Attraverso il metodo .map, richiamo ogni singolo elemento dell'array
        <button key={clientIndex} className="game--client--container--button"><img src={client} className="single--client" /></button>
      ))}
      </div>
      </div>
      <div className="game--awards"> 
      <div className="game--awards--list">
      {game.awards && game.awards.map((award, awardIndex) => ( // Attraverso il metodo .map, richiamo ogni singolo elemento dell'array
        <img src={award} key={awardIndex} className="game--prize" />
      ))}
      </div>
      </div>

      </div>
  );
};

export default SingleGame;