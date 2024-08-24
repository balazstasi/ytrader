import { create } from 'zustand';

import { Card, ID } from '@/store/types';

export interface YugiStore {
  cards: Map<ID, Card>;
  addCard: (card: Card) => void;
  removeCard: (id: ID) => void;
  getCard: (id: ID) => Card | undefined;
  getCards: () => Map<ID, Card>;
}

const useYugiStore = create<YugiStore>((set, get) => ({
  cards: new Map<ID, Card>(),
  addCard: (card: Card) =>
    set((state: YugiStore) => ({
      cards: new Map(state.cards).set(card.id, card),
    })),
  removeCard: (id: ID) =>
    set((state) => {
      const newCards = new Map(state.cards);
      newCards.delete(id);
      return { cards: newCards };
    }),
  getCard: (id: ID) => get().cards.get(id),
  getCards: () => get().cards,
}));

export { useYugiStore };
