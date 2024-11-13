export interface IObservableElementProps {
  onIntersect: () => void;
  children: React.ReactNode;
  animateAlways?: boolean;
}
