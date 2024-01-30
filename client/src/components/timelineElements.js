
const timelineElements = [
    {
        id:1,
        date: "May 2008",
        title: "Foundation",
        icon:"Foundation",
        description: "Studio founded by Hervé Bonin, Aleksi Briclot, Alain Damasio, Oskar Guilbert and Jean-Maxime Moris."
    },
    {
        id:2,
        date:"August 2012",
        title: "Remember Me",
        description:"Remember Me is officially presented at the Cologne Gamescom!",
        path:"/games/remember-me",
        buttonText: "Discover Remember Me"
    },
    {
        id:3,
        date:"April 2013",
        title:"WHAT IF?",
        description:"Start of the concept phase for the project WHAT IF? later renamed Life is Strange",
    },
    {
        id:4,
        date:"June 2013",
        title:"Remember Me Released",
        description:"Remember Me released on PlayStation 3, Xbox 360 and PC",
        path:"/games/remember-me",
        buttonText: "Discover Remember Me"
    },
    {
        id:5,
        date:"August 2014",
        title:"Life is Strange Announced",
        description:"Life is Strange announced for almost all consoles and PC at the Cologne Gamescom",
        path:"/games/life-is-strange",
        buttonText:"Discover Life is Strange"
    }, 
    {
        id:6,
        date:"December 2014",
        title:"Focus Home Interactive",
        description:"DON’T NOD signs a publishing contract with Focus Home Interactive for Vampyr",
        path:"/games/vampyr",
        buttonText:"Discover Vampyr"
    },
    {
        id:7,
        date:"January 2015",
        title:"Life is Strange Episode 1:Chrysalis",
        description:"Life is Strange Episode 1: Chrysalis released in digital form on PC, PlayStation 3, PlayStation 4, Xbox 360 and Xbox One",
        path:"/games/life-is-strange",
        buttonText:"Discover Life is Strange"
    },
    {
        id:8,
        date:"June 2015",
        title:"Vampyr",
        description:"Vampyr Announced",
        path:"/games/vampyr",
        buttonText:"Discover Vampyr"
    },
    {
        id:9,
        date:"June 2015",
        title:"Life is Strange Record",
        description:"Life is Strange reaches the one million sales mark!",
    },
    {
        id:10,
        date:"July 2015",
        title:"Develop Awards 2015",
        description:"Develop Awards 2015 DON’T NOD wins 2 awards: New Game IP and Use of Narrative"
    },
    {
        id:11,
        date:"October 2015",
        title:"Life is Strange Episode 5: Polarized",
        description:"Life is Strange’s finale, Episode 5: Polarized released",
        path:"/games/life-is-strange",
        buttonText:"Discover Life is Strange"
    },
    {
        id:12,
        date:"October 2015",
        title:"PING Awards",
        description:"PING Awards Life is Strange wins the Grand Prix du Jury and the Prix du Meilleur Scénario (Best Story Award)",

    },
    {
        id:13,
        date:"October 2015",
        title:"Golden Joystick",
        description:"Golden Joystick awards Life is Strange wins Best Gaming Performance Award",
    },
    {
        id:14,
        date:"November 2015",
        title:"Life is Strange Limited Edition",
        description:"Announcement of the limited edition version of Life is Strange",
    },
    {
        id:15,
        date:"December 2015",
        title:"Life is Strange Awards",
        description:"Life is Strange has won over 60 awards",
    },
    {
        id:16,
        date:"January 2016",
        title:"Life is Strange Boxed Version",
        description:"Life is Strange standard and limited editions released in boxed version (PC, Xbox One and PlayStation 4) — the team uses the occasion to include various upgrades in each episode, five new languages, and a one-hour video commentary",
    },
    {
        id:17,
        date:"February 2016",
        title:"Media of Vampyr",
        description:"First in-game demonstration to the media of Vampyr during Focus Home Interactive’s `What’s Next` 2016 press event"
    },
    {
        id:18,
        date:"March 2016",
        title:"Life is Strange and the Japan",
        description:"Life is Strange released in Japan (PlayStation 3, PlayStation 4, PC), fully dubbed"
    },
    {
        id:19,
        date:"March 2016",
        title:"Life is Strange win the Audience Award",
        description:"Life is Strange wins the Audience Award at the Game Developers Choice Awards in San Francisco!",
    },
    {
        id:20,
        date:"April 2016",
        title:"Life is Strange win the BAFTA Award",
        description:"Life is Strange wins the BAFTA for Best Story at the British Academy Games Awards"
    },
    {
        id:21,
        date:"June 2017",
        title:"Closed-door presentation of Vampyr",
        description:"For 3 days, the Vampyr team gave exclusive closed-door presentations and interviews at the Focus Home Interactive booth, at E3 2017 in Los Angeles",
    },
    {
        id:22,
        date:"August 2017",
        title:"DON'T NOD & BANDAI NAMCO",
        description:"DON’T NOD signs a publishing contract with BANDAI NAMCO for the creation of a new IP based on a brand new narrative adventure experience"
    },
    {
        id:23,
        date:"June 2018",
        title:"Vampyr Release",
        description:"Vampyr releases on PlayStation 4, Xbox One and PC!",
        path:"/games/vampyr",
        buttonText:"Discover Vampyr"
    },
    {
        id:24,
        date:"June 2018",
        title:"Twin Mirror Announcement",
        description:"Twin Mirror, a story-driven investigation game published by Bandai Namco Entertainment, is announced during Sony’s E3 Countdown",
        path:"/games/twin-mirror",
        buttonText:"Discover Twin Mirror"
    },
    {
        id:25,
        date:"June 2018",
        title:"The Awesome Adventures of Captain Spirit Announcement",
        description:"The Awesome Adventures of Captain Spirit announced during the Microsoft Conference at E3 2018",
        path:"/games/captain-spirit",
        buttonText:"Discover Captain Spirit"
    },
    {
        id:26,
        date:"June 2018",
        title:"Life is Strange 2",
        description:"The release date of the first episode of Life is Strange 2 revealed",
        path:"/games/life-is-strange-2",
        buttonText:"Discover Life is Strange 2"
    },
    {
        id:27,
        date:"June 2018",
        title:"The Awesome Adventures of Captain Spirit Release",
        description:"The Awesome Adventures of Captain Spirit releases on Xbox One, PlayStation 4 and PC",
        path:"/games/captain-spirit",
        buttonText:"Discover Captain Spirit"
    },
    {
        id:28,
        date:"June 2018",
        title:"DONT'NOD Anniversary",
        description:"DON’T NOD celebrates its 10 year anniversary!",
        icon:"Foundation",
    },
    {
        id:29,
        date:"September 2018",
        title:"Life is Strange 2 Episode 1 Release",
        description:"Life is Strange 2 Episode 1 releases on Xbox One, PlayStation 4 and PC",
        path:"/games/life-is-strange-2",
        buttonText:"Discover Life is Strange 2"
    },
    {
        id:30,
        date:"January 2019",
        title:"Life is Strange 2 Episode 2 Release",
        description:"Episode 2 of Life is Strange 2 releases on Xbox One, PlayStation 4 and PC",
        path:"/games/life-is-strange-2",
        buttonText:"Discover Life is Strange 2"
    },
    {
        id:31,
        date:"April 2019",
        title:"FOCUS Home Interactive",
        description:"DON’T NOD Entertainment and Focus Home Interactive announce the renewal of their strong partnership for a new project",
        icon:"Foundation",
    },
    {
        id:32,
        date:"May 2019",
        title:"Life is Strange 2 Episode 3 Release",
        description:"Episode 3 of Life is Strange 2 releases on Xbox One, PlayStation 4 and PC",
        path:"/games/life-is-strange-2",
        buttonText:"Discover Life is Strange 2"
    },
    {
        id:33,
        date:"August 2019",
        title:"Life is Strange 2 Episode 4 Release",
        description:"Episode 4 of Life is Strange 2 releases on Xbox One, PlayStation 4 and PC",
        path:"/games/life-is-strange-2",
        buttonText:"Discover Life is Strange 2"
    },
    {
        id:34,
        date:"October 2019",
        title:"Vampyr and the Nintendo Switch",
        description:"Vampyr releases on Nintendo Switch!",
        path:"/games/vampyr",
        buttonText:"Discover Vampyr"
    },
    {
        id:35,
        date:"November 2019",
        title:"Tell Me Why Unveiled",
        description:"Tell Me Why, our new narrative adventure game published by Microsoft, is unveiled during X019 in London",
        path:"/games/tell-me-why",
        buttonText:"Discover Tell Me Why"
    },
    {
        id:36,
        date:"December 2019",
        title:"Life is Strange 2 Episode 5 Release",
        description:"Episode 5 of Life is Strange 2 releases on Xbox One, PlayStation 4 and PC",
        path:"/games/life-is-strange-2",
        buttonText:"Discover Life is Strange 2"
    },
    {
        id:37,
        date:"February 2020",
        title:"The Awesome Adventures of Captain Spirit Release and Japan",
        description:"The Awesome Adventures of Captain Spirit releases in Japan on Xbox One, PlayStation 4 and PC!",
        path:"/games/captain-spirit",
        buttonText:"Discover Captain Spirit"
    },
    {
        id:38,
        date:"June 2020",
        title:"DON'T NOD Montreal Studio",
        description:"Creation of DON'T NOD Montreal Studio",
        icon:"Foundation"
    },
    {
        id:39,
        date:"December 2020",
        title:"Twin Mirror Releases",
        description:"Twin Mirror releases on Xbox One, Playstation 4 and Epic Games Store!",
        path:"/games/twin-mirror",
        buttonText:"Discover Twin Mirror"
    },
    {
        id:40,
        date:"January 2021",
        title:"Capital Increase",
        description:"DON’T NOD announces a successful capital increase of €50M to finance its development towards more self-published games",
        icon:"Foundation"
    },
    {
        id:41,
        date:"April 2021",
        title:"PortaPlay",
        description:"DON’T NOD enters into third-party game publishing with Danish studio, PortaPlay",
        icon:"Foundation"
    },
    {
        id:42,
        date:"September 2021",
        title:"FROG Programme",
        description:"DON’T NOD presents its FROG programme: a new organisation designed for teleworking. Dontnodians can now choose to work from home or on the premises, with the opening of new offices in Paris and Montreal",
        icon:"Foundation"
    },
    {
        id:43,
        date:"December 2021",
        title:"Gerda Unveiled",
        description:"Gerda: A Flame in Winter unveiled at Nintendo Indie World, a brand new narrative game developed by Danish studio PortaPlay"
    },
    {
        id:44,
        date:"January 2022",
        title:"TOLIMA",
        description:"DON’T NOD pursues its external publishing strategy through a new co-production with studio TOLIMA.",
        icon:"Foundation"
    },
    {
        id:45,
        date:"September 2022",
        title:"Gerda: A Flame on Winter",
        description:"Gerda: A Flame on Winter, a new narrative game developed by PortaPlay and published by DON’T NOD, releases on Steam & Nintendo Switch."
    },
    {
        id:46,
        date:"September 2022",
        title:"Tiny Bull Studios",
        description:"DON’T NOD expands its line-up with a new co-production in the growing action-RPG segment with Tiny Bull Studios.",
        icon:"Foundation"
    },
    {
        id:47,
        date:"December 2022",
        title:"Banishers",
        description:"Banishers, a new action-RPG developed by DON’T NOD and co-produced by Focus Entertainment, is unveiled during the Game Awards ceremony."
    },
    {
        id:48,
        date:"June 2023",
        title: "Jusant",
        description: "Jusant, a new action-puzzle developed by DON'T NOD, is unveiled during the Xbox Games Showcase.",
        path: "/games/jusant",
        buttonText: "Discover Jusant"
    }

]

export default timelineElements