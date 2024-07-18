import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-message',
  templateUrl: './mini-message.component.html',
  styleUrl: './mini-message.component.css'
})
export class MiniMessageComponent {

    public personne : any = 
    [
      { nom: "Luc", message: "Salut, ça va ?" },
      { nom: "Marie", message: "Bonjour ! Comment vas-tu ?" },
      { nom: "Pierre", message: "Coucou ! J'espère que tu vas bien ?" },
      { nom: "Camille", message: "Salut ! Quoi de neuf ?" },
      { nom: "Antoine", message: "Bonjour ! Comment se passe ta journée ?" },
      { nom: "Sophie", message: "Coucou ! J'espère que tu passes un bon moment ?" },
      { nom: "Alex", message: "Salut ! Quoi de prévu pour ce soir ?" },
      { nom: "Nathalie", message: "Bonjour ! Comment vas-tu aujourd'hui ?" },
      { nom: "Julien", message: "Coucou ! J'espère que tu vas bien ?" },
      { nom: "Aurélie", message: "Salut ! Quoi de neuf ?" },
      { nom: "Maxime", message: "Bonjour ! Comment se passe ta journée ?" },
      { nom: "Chloé", message: "Coucou ! J'espère que tu passes un bon moment ?" },
      { nom: "Benjamin", message: "Salut ! Quoi de prévu pour ce soir ?" },
      { nom: "Morgane", message: "Bonjour ! Comment vas-tu aujourd'hui ?" },
      { nom: "Thomas", message: "Coucou ! J'espère que tu vas bien ?" },
      { nom: "Léa", message: "Salut ! Quoi de neuf ?" },
      { nom: "Romain", message: "Bonjour ! Comment se passe ta journée ?" },
      { nom: "Pauline", message: "Coucou ! J'espère que tu passes un bon moment ?" },
      { nom: "Lucas", message: "Salut ! Quoi de prévu pour ce soir ?" },
      { nom: "Eva", message: "Bonjour ! Comment vas-tu aujourd'hui ?" },
      { nom: "Quentin", message: "Coucou ! J'espère que tu vas bien ?" },
      { nom: "Manon", message: "Salut ! Quoi de neuf ?" },
      { nom: "Hugo", message: "Bonjour ! Comment se passe ta journée ?" },
      { nom: "Clara", message: "Coucou ! J'espère que tu passes un bon moment ?" },
      { nom: "Gabriel", message: "Salut ! Quoi de prévu pour ce soir ?" },
      { nom: "Anaïs", message: "Bonjour ! Comment vas-tu aujourd'hui ?" },
      { nom: "Arthur", message: "Coucou ! J'espère que tu vas bien ?" },
      { nom: "Lisa", message: "Salut ! Quoi de neuf ?" },
      { nom: "Mathis", message: "Bonjour ! Comment se passe ta journée ?" },
      { nom: "Emma", message: "Coucou ! J'espère que tu passes un bon moment ?" },
    ]
    fonction()
    {
      console.log("whu ts metu");
    }
}
