const deckRevealedIncreasing = (deck) => {
  deck.sort((x,y) => y - x);
  
  const answer=[];
  for (const card of deck) {
      if (answer.length > 1){
        answer.unshift(answer.pop());
      }
      answer.unshift(card);
  }
  return answer;
};