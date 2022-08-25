import React from 'react';
import { Player } from '../interface/player';
import { FeetEqZone } from './zones/feetEqZone';

export function BottomRow(props: Player) {
  const displayRow = props.isPlayer ? 'bottomRow' : 'topRow';
  return (
    <>
      <FeetEqZone DisplayRow={displayRow} isPlayer={props.isPlayer} />
      <div className={'beforeArsenal ' + displayRow}></div>
      <div className={'arsenalZone cardStackZone ' + displayRow}>Arsenal</div>
      <div className={'afterArsenal ' + displayRow}></div>
      <div className={'banishedZone cardStackZone ' + displayRow}>Banish</div>
    </>
  );
}
