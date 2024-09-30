import { forwardRef } from 'react';
import ActionsInCombat from '../tables/actions-in-combat';
import CombatResources from '../tables/combat-resources';
import CombatSmallNotes from '../tables/combat-small-notes';
import CoverInCombat from '../tables/cover-in-combat';
import DescribingDamage from '../tables/describing-the-effects-of-damage';
import TwoWeaponFighting from '../tables/two-weapon-fighting';
import UnseenAttackers from '../tables/unseen-attackers';

const Combat = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className='flex flex-col items-center p-4 gap-4 font-sans'>
    <h1 className='text-3xl font-bold'>Combat</h1>
    <div className='flex flex-col gap-4 max-w-screen-md' id='page'>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-4 w-1/2'>
          <ActionsInCombat />
        </div>
        <div className='flex flex-col gap-4 w-1/2'>
          <CombatResources />
          <CombatSmallNotes />
          <CoverInCombat />
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4 w-1/2'>
            <TwoWeaponFighting />
          </div>
          <div className='flex flex-col gap-4 w-1/2'>
            <DescribingDamage />
          </div>
        </div>
        <div className='flex'>
          <UnseenAttackers />
        </div>
      </div>
    </div>
  </div>
));

export default Combat;
