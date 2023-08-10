import React, { ReactElement } from 'react';
import { TAccordionItemProps } from '@/components/accordion/components/AccordionItem';

export type AccordionDataItem = Omit<TAccordionItemProps, 'children'> & { content: string | ReactElement };

export const ACCORDION_DATA: AccordionDataItem[] = [
  {
    title: 'What is Rust Cup?',
    details: '0 rules',
    content:
      'The Rust Cup Game is an indirectly controlled racing rally. The player purchases racing cars in the form of NFT tokens. In paid races for 4 competitors, the player can win the 1st or the 2nd place, recoup the cost of the car and start earning.',
  },
  {
    title: 'How was the game created?',
    details: '0 rules',
    content:
      'The game was created in honor of the seven-month validation competition on the Everscale network. The testnet set a world record of blockchain transaction speed and in honor of this, the itgold.io and grandbazar.io teams launched the first game on the Everscale blockchain. ',
  },
  {
    title: 'How to play Rust Cup?',
    details: '0 rules',
    content: (
      <>
        The user buys NFT models of &apos;cars&apos; and through a Debot smart contract participates in races, winning
        prizes in native Everscale blockchain tokens (EVER). The cars, tracks and winner&apos;s table are based on the
        blockchain and all calculations are made by smart contracts. For more information, check{' '}
        <a
          href="https://rustcupgame.com/how-to-play"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          this
        </a>
        .
      </>
    ),
  },
];
