//@ts-ignore
import HandHoldingMoneyIllustration from '../../../assets/illustrations/handHoldingMoney.svg';
//@ts-ignore

import KnowWhereYourMoneyGoesIllustration from '../../../assets/illustrations/knowWhereYourMoneyGoes.svg';
//@ts-ignore
import PlanningAheadIllustration from '../../../assets/illustrations/planningAhead.svg';

export interface SliderData {
  title: string;
  description: string;
  image: string;
}

export const sliderData: SliderData[] = [
  {
    title: 'Gain total control of your money',
    description: 'Become your own money manager and make every cent count',
    image: HandHoldingMoneyIllustration,
  },
  {
    title: 'Know where your money goes',
    description:
      'Track your transaction easily, with categories and financial report ',
    image: KnowWhereYourMoneyGoesIllustration,
  },
  {
    title: 'Planning ahead',
    description: 'Setup your budget for each category so you in control',
    image: PlanningAheadIllustration,
  },
];
