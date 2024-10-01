import { forwardRef } from 'react';
import SkillChecks from '../tables/skill-checks';
import AdvantageDisadvantage from '../tables/advantage-disadvantage';
import DifficultyChecks from '../tables/difficulty-checks';
import PassiveChecks from '../tables/passive-checks';
import Jumping from '../tables/jumping';
import ProficiencyBonus from '../tables/proficiency-bonus';
import MagicItemSelling from '../tables/magic-item-selling';
import MagicItemOffers from '../tables/magic-item-offers';

const General = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className='flex flex-col items-center p-4 gap-4 font-sans'>
    <h1 className='text-3xl font-bold'>General</h1>
    <div className='flex gap-4 max-w-screen-md p-4' id='page'>
      <div className='flex flex-col gap-4'>
        <SkillChecks />
      </div>
      <div className='flex flex-col gap-4'>
        <DifficultyChecks />
        <PassiveChecks />
        <AdvantageDisadvantage />
        <ProficiencyBonus />
      </div>
      <div className='flex flex-col gap-4'>
        <Jumping />
        <MagicItemSelling />
        <MagicItemOffers />
      </div>
    </div>
  </div>
));

export default General;
