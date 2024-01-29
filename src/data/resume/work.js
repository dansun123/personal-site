/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */

const work = [
  {
    name: 'Breez',
    position: 'CEO and Co-Founder',
    url: 'https://breez.live',
    startDate: '2024-01-01',
    summary: `Breez is the best personalized-learning platform for math.
    We generate mastery trees so that you understand exactly what you understand and what you should work on next.
    We use AI and knowledgeable tutors to create cool videos. https://www.youtube.com/watch?v=3pbe9LqXtnM`,
    highlights: [
      'Backed by YCombinator',
    ],
  },
  {
    name: 'Jane Street',
    position: 'Quantitative Trader',
    url: 'https://janestreet.com',
    startDate: '2022-08-29',
    summary: `Jane Street is a research-driven trading firm where curious people work together on deep problems.
    As a market maker and liquidity provider, Jane Street stands ready to buy and sell a wide range of assets at competitive prices, including equities, bonds, options, ETFs, commodities, and cryptocurrencies.`,
    highlights: [
      'Built a new trading strategy for options',
      'Coached hundreds of interns and new grads on trading strategies and quantitative finance',
    ],
  },
  {
    name: 'Kalshi',
    position: 'Kalshi Trading Tech Lead',
    url: 'https://kalshi.com',
    startDate: '2021-06-01',
    summary: `Jane Street is a research-driven trading firm where curious people work together on deep problems.
    As a market maker and liquidity provider, Jane Street stands ready to buy and sell a wide range of assets at competitive prices, including equities, bonds, options, ETFs, commodities, and cryptocurrencies.`,
    highlights: [
      'Built the liquidity providing engine to bootstrap liquidity for the exchange',
      'Helped start customer trading incentive program for growth',
    ],
  },
];

export default work;
