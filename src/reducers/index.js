// three possible actions, submit guess, click new game, click what?

export const setGuess = guess =>({
    type: 'SET_GUESS',
    guess
})

export const setNewGame = () =>({
    type: 'SET_NEWGAME',
    guess
})

export const submitGuess = () =>({
    type: 'SET_WHAT',
    guess
})

