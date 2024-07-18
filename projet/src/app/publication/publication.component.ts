import { Component } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.css'
})
export class PublicationComponent {
  public gamingPublications : any = [
    { author: "Gamer123", content: "J'ai adoré la dernière mise à jour de ce jeu ! Le nouveau contenu est génial." },
    { author: "ProPlayerX", content: "J'ai enfin réussi à battre le boss final ! C'était un combat épique." },
    { author: "NoobMaster", content: "Je suis bloqué sur ce niveau depuis des heures... quelqu'un peut m'aider ?" },
    { author: "SpeedrunnerGirl", content: "J'ai terminé le jeu en moins de 10 heures ! Nouveau record personnel !", },
    { author: "CasualGamer4Life", content: "Je me détends vraiment en jouant à ce jeu après une longue journée." },
    { author: "GraphisDesignFan", "content": "Les graphismes de ce jeu sont incroyables ! C'est un vrai régal pour les yeux." },
    { author: "StoryLover", content: "L'histoire de ce jeu est tellement captivante ! Je suis impatient de connaître la suite." },
    { author: "MusicEnthusiast", content: "La bande-son de ce jeu est magnifique ! Elle correspond parfaitement à l'ambiance du jeu." },
    { author: "OnlineGamerAddict", content: "J'adore jouer à ce jeu avec mes amis en ligne ! C'est tellement amusant de partager l'expérience." },
    { author: "CompetitiveSpirit", content: "J'ai tellement envie de gagner ce tournoi ! Je m'entraîne dur pour être le meilleur." },
    { author: "AchievementHunter", content: "J'ai débloqué tous les trophées du jeu ! C'était un vrai défi, mais j'y suis arrivé." },
    { author: "BugReporter", content: "J'ai trouvé un bug dans le jeu. J'espère qu'il sera corrigé bientôt." },
    { author: "FeatureSuggestion", content: "J'aimerais bien voir cette fonctionnalité ajoutée au jeu. Je pense que ce serait génial." },
    { author: "BalanceFeedback", content: "Je pense que certaines classes du jeu sont trop puissantes et d'autres pas assez. Un équilibrage serait nécessaire." },
    { author: "LoreExpert", content: "Avez-vous remarqué ce détail caché dans le jeu ? C'est un clin d'œil vraiment cool à l'histoire." },
    { author: "SpeedrunCommunity", content: "J'ai hâte de voir les nouvelles stratégies de speedrun pour ce jeu ! C'est toujours fascinant de voir comment les joueurs optimisent le gameplay." },
    { author: "E-sportFan", content: "Je suis tellement fan de cette équipe d'e-sport ! Ils sont incroyablement talentueux." },
    { author: "GameDeveloperAppreciation", content: "Merci aux développeurs de ce jeu pour ce chef-d'œuvre ! J'ai tellement passé de bons moments à y jouer." },
    { author: "NostalgiaGamer", content: "Ce jeu me rappelle tellement de mon enfance ! J'adore y rejouer de temps en temps." },
    { author: "CrossPlatformGamer", content: "J'ai tellement hâte que ce jeu arrive sur d'autres plateformes ! Je veux pouvoir y jouer partout." },
    { author: "VRGamer", content: "C'est un jeu incroyable en réalité virtuelle ! L'immersion est totale." },
    { author: "ARGamer", content: "J'ai adoré découvrir ce jeu en réalité augmentée ! C'est une façon vraiment unique de jouer." },
    { author: "MobileGamer", content: "Ce jeu est parfait pour jouer sur mon smartphone pendant mes déplacements." },
    { author: "RetroGamer", content: "Je collectionne les jeux rétro et celui-ci est l'un de mes préférés." },
    { author: "IndieGameLover", content: "J'adore soutenir les jeux indépendants. Ce jeu est une vraie pépite." },
    { author: "BoardGameEnthusiast", content: "J'ai hâte de tester l'adaptation en jeu de société de ce jeu ! Ce sera sûrement très amusant." },
    { author: "MovieFan", content: "J'ai entendu dire qu'un film basé sur ce jeu était en cours de production. J'ai hâte de le voir !" },
  ];

  public liker : boolean[] = [];
  toLike(ind : number)
  {
      this.liker[ind] = !this.liker[ind];
  }

}
