import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ParseGameState } from '../../app/parseGameState';
import { Player } from './player';
import { Card } from '../cardSlice';

export interface GameInfo {
  gameID: number;
  playerID: number;
  authKey: string;
  turnNo?: number;
  lastPlayed?: Card;
}

export interface CombatChainLink {
  attackingCard?: Card;
  reactionCards?: Card[];
  totalAttack?: number;
  totalDefence?: number;
  didItHit?: boolean;
}

export interface GameState {
  gameInfo: GameInfo;
  playerOne: Player;
  playerTwo: Player;
  activeCombatChain?: CombatChainLink;
  oldCombatChain?: CombatChainLink[];
  activePlayer?: number; // 1 is us 2 is them
}

const initialState: GameState = {
  activePlayer: 1,
  oldCombatChain: [
    {
      attackingCard: {
        cardNumber: 'WTR069'
      },
      reactionCards: [
        {
          cardNumber: 'CRU073'
        },
        {
          cardNumber: 'ARC044'
        }
      ],
      totalAttack: 88,
      totalDefence: 44,
      didItHit: true
    },
    {
      attackingCard: {
        cardNumber: 'WTR069'
      },
      reactionCards: [
        {
          cardNumber: 'CRU073'
        },
        {
          cardNumber: 'ARC044'
        }
      ],
      totalAttack: 88,
      totalDefence: 44,
      didItHit: true
    },

    {
      attackingCard: {
        cardNumber: 'WTR069'
      },
      reactionCards: [
        {
          cardNumber: 'CRU073'
        },
        {
          cardNumber: 'ARC044'
        }
      ],
      totalAttack: 88,
      totalDefence: 44,
      didItHit: true
    }
  ],
  activeCombatChain: {
    attackingCard: {
      cardNumber: 'CRU048'
    },
    reactionCards: [
      {
        cardNumber: 'CRU073'
      },
      {
        cardNumber: 'ARC044'
      }
    ],
    totalAttack: 88,
    totalDefence: 44,
    didItHit: true
  },
  gameInfo: {
    gameID: 663,
    playerID: 3,
    authKey: '28df413b665604299807c461a7f3cae71c4176cb2b96afad04b84cf96d016258'
  },
  playerOne: {
    // human player
    Name: 'LaustinSpayce',
    IsVerified: true,
    HeadEq: { cardNumber: 'WTR079' },
    ChestEq: { cardNumber: 'WTR150' },
    GlovesEq: { cardNumber: 'UPR158' },
    FeetEq: { cardNumber: 'WTR154' },
    WeaponLEq: { cardNumber: 'CRU048' },
    Hero: { cardNumber: 'CRU046' },
    WeaponREq: { cardNumber: 'CRU049' },
    Health: 20,
    ActionPoints: 0,
    PitchRemaining: 0,
    Graveyard: [
      {
        cardNumber: 'ARC003'
      },
      {
        cardNumber: 'WTR069'
      }
    ],
    Pitch: [
      {
        cardNumber: 'ARC003'
      },
      {
        cardNumber: 'WTR069'
      }
    ],
    Hand: [
      {
        cardNumber: 'WTR101'
      },
      {
        cardNumber: 'WTR100'
      },
      {
        cardNumber: 'WTR104'
      },
      {
        cardNumber: 'CRU073'
      }
    ],
    Arsenal: [
      {
        cardNumber: 'UPR161'
      }
    ],
    Effects: [
      {
        cardNumber: 'ARC044'
      }
    ]
  },
  playerTwo: {
    // AI or opposing player
    Name: 'BigDumDum',
    HeadEq: { cardNumber: 'CRU006' },
    ChestEq: { cardNumber: 'WTR005' },
    GlovesEq: { cardNumber: 'WTR153' },
    FeetEq: { cardNumber: 'WTR004' },
    WeaponLEq: { cardNumber: '' },
    Hero: { cardNumber: 'WTR002' },
    WeaponREq: { cardNumber: 'WTR003' },
    Health: 20,
    ActionPoints: 0,
    PitchRemaining: 0,
    Hand: [
      {
        cardNumber: 'CBBlack'
      },
      {
        cardNumber: 'CBBlack'
      },
      {
        cardNumber: 'CBBlack'
      },
      {
        cardNumber: 'CBBlack'
      }
    ],
    Arsenal: [
      {
        cardNumber: 'CBBlack'
      }
    ],
    Banish: [
      {
        cardNumber: 'WTR104'
      },
      {
        cardNumber: 'CRU073'
      }
    ]
  }
};

export const nextTurn = createAsyncThunk(
  'game/nextTurn',
  async (params: GameInfo) => {
    const queryURL =
      'http://localhost/FaBOnline/GetNextTurn3.php?gameName=' +
      params.gameID +
      '&playerID=' +
      params.playerID +
      '&authKey=' +
      params.authKey;
    const response = await fetch(queryURL, {
      method: 'GET',
      headers: {}
    });
    const data = await response.text();
    // console.log(data);
    const gameState: GameState = ParseGameState(data);
    // console.log(gameState);
    return gameState;
  }
);

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder.addCase(nextTurn.fulfilled, (state, action) => {
      state.playerOne = action.payload.playerOne;
      state.playerTwo = action.payload.playerTwo;
    });
  }
});

// export const {} = gameSlice.actions;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default gameSlice.reducer;
