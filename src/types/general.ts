export type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;

export type Player = {
  character: string;
  id: string;
  name: string;
};

export type Game = {
  id: string;
  player1: string;
  player2: string;
  outcome: string;
};
