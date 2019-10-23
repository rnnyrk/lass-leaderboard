export type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;

export type Player = {
  character: string;
  name: string;
  score: string;
};
