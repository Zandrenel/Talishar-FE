// Generated by https://quicktype.io

export interface FabCard {
  unique_id: string;
  name: string;
  pitch: string;
  cost: string;
  power: string;
  defense: string;
  health: string;
  intelligence: string;
  types: string[];
  card_keywords: string[];
  abilities_and_effects: AbilitiesAndEffect[];
  ability_and_effect_keywords: AbilityAndEffectKeyword[];
  granted_keywords: string[];
  functional_text: string;
  functional_text_plain: string;
  flavor_text: string;
  flavor_text_plain: string;
  type_text: string;
  played_horizontally: boolean;
  blitz_legal: boolean;
  cc_legal: boolean;
  commoner_legal: boolean;
  blitz_living_legend: boolean;
  cc_living_legend: boolean;
  blitz_banned: boolean;
  cc_banned: boolean;
  commoner_banned: boolean;
  upf_banned: boolean;
  blitz_suspended: boolean;
  cc_suspended: boolean;
  commoner_suspended: boolean;
  printings: Printing[];
  upf_banned_start?: string;
  blitz_banned_start?: string;
  cc_banned_start?: string;
  blitz_living_legend_start?: string;
  cc_suspended_start?: string;
  cc_suspended_end?: string;
  cc_living_legend_start?: string;
  blitz_suspended_start?: string;
  blitz_suspended_end?: string;
  commoner_banned_start?: string;
}

export enum AbilitiesAndEffect {
  AbilitiesAndEffectOncePerTurnAction = 'Once per turn Action',
  AbilitiesAndEffectOncePerTurnEffect = 'Once per turn Effect',
  Action = 'Action',
  Attack = 'Attack',
  AttackReaction = 'Attack Reaction',
  DefenseReaction = 'Defense Reaction',
  Instant = 'Instant',
  OncePerTurnAction = 'Once per Turn Action',
  OncePerTurnAttackReaction = 'Once per Turn Attack Reaction',
  OncePerTurnDefenseReaction = 'Once per Turn Defense Reaction',
  OncePerTurnEffect = 'Once per Turn Effect',
  OncePerTurnInstant = 'Once per Turn Instant',
  PurpleOncePerTurnAction = 'Once Per Turn Action',
  TwicePerTurnInstant = 'Twice per Turn Instant'
}

export enum AbilityAndEffectKeyword {
  ArcaneBarrier2 = 'Arcane Barrier 2',
  Attack = 'Attack',
  Freeze = 'Freeze',
  GoAgain = 'Go again',
  Opt1 = 'Opt 1',
  Opt2 = 'Opt 2',
  Transform = 'Transform'
}

export interface Printing {
  unique_id: string;
  set_edition_unique_id: SetEditionUniqueID;
  id: string;
  set_id: SetID;
  edition: Edition;
  foilings: Rarity[];
  rarity: Rarity;
  artist: string;
  art_variation: ArtVariation | null;
  image_url: null | string;
  double_sided_card_info?: DoubleSidedCardInfo[];
}

export enum ArtVariation {
  Aa = 'AA',
  Ab = 'AB',
  At = 'AT',
  Ds = 'DS',
  Ea = 'EA',
  Fa = 'FA'
}

export interface DoubleSidedCardInfo {
  other_face_unique_id: string;
  is_front: boolean;
  is_DFC: boolean;
}

export enum Edition {
  A = 'A',
  F = 'F',
  N = 'N',
  U = 'U'
}

export enum Rarity {
  C = 'C',
  F = 'F',
  G = 'G',
  L = 'L',
  M = 'M',
  P = 'P',
  R = 'R',
  RarityM = 'M ',
  S = 'S',
  T = 'T',
  V = 'V'
}

export enum SetEditionUniqueID {
  B8Nwc79RrDqgRrqPCczFb = 'B8Nwc79RrDqgRrqPCczFb',
  BWRn6KwrjpdP6WqjtGFGW = 'bWRn6KwrjpdP6wqjtGFGW',
  C9DGnhCMDWQdD7RC7QbHj = 'C9dGnhCMDWQdD7rC7QbHj',
  CGFtfkdRwHbdCMKz8KMRC = 'CgFtfkdRwHbdCmKz8kmRC',
  Cbc6MFhKFNdqtCTJ9WwGJ = 'Cbc6mFhKFNdqtCTJ9wwGJ',
  CwPRBwgWTjRL9KPchD6G7 = 'CwPrBwgWTjRL9kPchD6G7',
  Dbdr7LtkJqHKPRthwCfhq = 'dbdr7LtkJqHKPRthwCfhq',
  Dm7Fg7BbmhtWN7TFPKb6F = 'dm7Fg7BbmhtWN7TFPKb6f',
  FJhkbkJH6WPtr8ZtNTcp9 = 'fJhkbkJH6WPtr8ztNTcp9',
  FmdGdJjn7HFBDHdqhPm8Z = 'fmdGdJjn7hfBDHdqhPm8z',
  GHqcKjPKKMFfjqMqWqDmW = 'gHqcKjPKKmFfjqMqWqDmW',
  GbmNLthWjCHFML9ThPbbt = 'GbmNLthWjCHfML9thPbbt',
  GgnCRPfFT8F88Mn9QK9Pq = 'ggnCrPfFT8F88mn9qK9pq',
  HqBm7CNKjCWzKBQcph89T = 'hqBm7CnKjCWzKBQcph89t',
  HzWkt9H79FgkLqC6WqctH = 'hzWkt9H79fgkLqC6wqctH',
  J76QTFctqc8Krqh9GKGmT = 'j76qTFctqc8krqh9GKGmT',
  JFWLRtB7MjFFLBNFRCLcT = 'jFWLRtB7MjFFLbNFRCLcT',
  JGhkz7DKNTQd9CzpFhhhr = 'JGhkz7dKNtQd9czpFhhhr',
  K6WwtbnmnfkfBp9WfBjfN = 'K6wwtbnmnfkfBp9WfBjfN',
  KQGqrFhCNDmkNFCBLBNhp = 'KQGqrFhCnDmkNFcbLBNhp',
  KtkCBTLJGWMPm9CWz77NK = 'ktkCBtLJGWMPm9cWz77NK',
  L8TtnhCRGPchHjbJqNj86 = 'L8TtnhCrGPchHjbJqNj86',
  LWc9GCNhcGWHCP6KcGzbj = 'LWc9gCNhcGWHCP6KcGzbj',
  LdhWCQdJmzHn9GChmWRPG = 'LdhWCQdJmzHn9gChmWRPG',
  MFC8QR7K8T9WM8HHm9PPm = 'mFC8QR7k8T9WM8HHm9PPm',
  N6WkdLnFDWKc8CHmdRWfP = 'n6wkdLnFDWKc8CHmdRWfP',
  NTPBR6Gq8FMwbrc7ND8Nz = 'ntpBR6gq8FMwbrc7nD8Nz',
  NhgmFkNBHjCqB6RBzFp8W = 'NhgmFkNBHjCqB6rBzFp8W',
  NrpJFBQQGpNM8D9W8BBfG = 'NrpJFBQQGpNM8D9w8BBfG',
  RFJzQMnLBzFNqjL7BdJgj = 'RFJzQMnLBzFNqjL7BdJgj',
  RW8HnzQk9DFq89T6Gm9CH = 'rW8hnzQk9DFq89t6Gm9cH',
  RcrF8H6DTHwQd9QR6GRnD = 'rcrF8h6dTHwQd9qR6gRnD',
  The6CntKBGMhcBqqnHmgGM99 = '6CntKbGMhcBqqnHmgGM99',
  The7BHMKdmh9WJkpqH6Hk7RM = '7bHMKdmh9wJkpqH6Hk7rM',
  The7WJDkL9JR77QmTdfPmt9W = '7WJDkL9JR77QmTdfPmt9w',
  The8HQ7RQjcwMTrHcBcjwdQL = '8hQ7rQjcwMTrHcBcjwdQL',
  The9Crgw7PnFN69Zb9DKzFTB = '9Crgw7PnFN69zb9DKzFTb',
  TntFbKJjRFwMWQpLGnQR8 = 'TntFbKJjRFwMWQpLGnQR8',
  Zd6WBL7ZcQR7ZrJhwCjrh = 'zd6wBL7zcQR7zrJhwCjrh'
}

export enum SetID {
  Arc = 'ARC',
  Bol = 'BOL',
  Bri = 'BRI',
  Bvo = 'BVO',
  Chn = 'CHN',
  Cru = 'CRU',
  DVR = 'DVR',
  Dro = 'DRO',
  Dyn = 'DYN',
  Ele = 'ELE',
  Evr = 'EVR',
  Fab = 'FAB',
  Fai = 'FAI',
  Her = 'HER',
  Ira = 'IRA',
  Jdg = 'JDG',
  Ksu = 'KSU',
  Lev = 'LEV',
  Lgs = 'LGS',
  Lss = 'LSS',
  Lxi = 'LXI',
  Mon = 'MON',
  Old = 'OLD',
  Out = 'OUT',
  Oxo = 'OXO',
  PSM = 'PSM',
  Rnr = 'RNR',
  Rvd = 'RVD',
  Tea = 'TEA',
  The1HP = '1HP',
  Upr = 'UPR',
  Win = 'WIN',
  Wtr = 'WTR',
  Xxx = 'XXX'
}
