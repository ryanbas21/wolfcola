declare namespace NodeJS {
  interface ProcessEnv {
    ODDS_API: string;
  }
}

export function getOdds(): string {
  return '';
}
