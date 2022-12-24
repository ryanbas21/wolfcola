import { env } from 'process';
const { ODDS_API } = env;

type API_KEY = typeof ODDS_API;

// GET /v4/sports/{sport}/odds/?apiKey={apiKey}&regions={regions}&markets={markets}
export type ODDS_BASE =
  `/v4/sports/${Sport}/odds/?apiKey=${API_KEY}&bookmakers=${Bookmakers}{string}&markets=${Market}?oddsFormat = ${OddsFormat}& EventIds=${EventIds}& Market=${Market}& ${ } `;

export type OddsFormat = 'decimal' | 'american';
export type EventIds = `${number} `;
export type Bookmakers = 'williamhill_us' | 'fanduel' | 'draftkings' | 'barstool' | 'betrivers' |
  'betonlineag' | 'pointsbetus' | 'wynnbet' | 'betmgm' | 'bovoda' | 'betus' | 'betfair'
export type Region = 'us' | 'uk' | 'eu' | 'au';
export type Market = 'h2h' | 'totals' | 'spreads' | 'moneyline';
export type Sport =
  | 'americanfootball_ncaaf'
  | 'americanfootball_nfl'
  | 'americanfootball_nfl_super_bowl_winner'
  | 'aussierules_afl'
  | 'baseball_mlb_world_series_winner'
  | 'basketball_euroleague'
  | 'basketball_nba'
  | 'basketball_nba_championship_winner'
  | 'basketball_ncaab'
  | 'cricket_big_bash'
  | 'cricket_test_match'
  | 'golf_masters_tournament_winner'
  | 'golf_pga_championship_winner'
  | 'golf_the_open_championship_winner'
  | 'golf_us_open_winner'
  | 'icehockey_nhl'
  | 'icehockey_nhl_championship_winner'
  | 'icehockey_sweden_allsvenskan'
  | 'icehockey_sweden_hockey_league'
  | 'mma_mixed_martial_arts'
  | 'rugbyleague_nrl'
  | 'soccer_australia_aleague'
  | 'soccer_belgium_first_div'
  | 'soccer_denmark_superliga'
  | 'soccer_efl_champ'
  | 'soccer_england_league1'
  | 'soccer_england_league2'
  | 'soccer_epl'
  | 'soccer_fa_cup'
  | 'soccer_france_ligue_one'
  | 'soccer_france_ligue_two'
  | 'soccer_germany_bundesliga'
  | 'soccer_germany_bundesliga2'
  | 'soccer_italy_serie_a'
  | 'soccer_italy_serie_b'
  | 'soccer_mexico_ligamx'
  | 'soccer_netherlands_eredivisie'
  | 'soccer_norway_eliteserien'
  | 'soccer_poland_ekstraklasa'
  | 'soccer_portugal_primeira_liga'
  | 'soccer_spain_la_liga'
  | 'soccer_spain_segunda_division'
  | 'soccer_spl'
  | 'soccer_sweden_allsvenskan'
  | 'soccer_sweden_superettan'
  | 'soccer_switzerland_superleague'
  | 'soccer_turkey_super_league'
  | 'soccer_uefa_champs_league'
  | 'soccer_uefa_europa_conference_league'
  | 'soccer_uefa_europa_league';
