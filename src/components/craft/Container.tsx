import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Element, useNode } from '@craftjs/core';

type Props = {
  padding?: number;
  background?: string;
  children?: ReactNode;
};

export function Container({ padding = 16, background = '#ffffff', children }: Props) {
  const {
    connectors: { connect, drag },
    selected
  } = useNode((node) => ({ selected: node.events.selected }));
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={(r) => {
        ref.current = r;
        if (r) {
          connect(drag(r)); // return void
        }
      }}
      className="container"
      style={{ padding, background, outline: selected ? '2px solid #4c9ffe' : 'none' }}
    >
      {children}
    </div>
  );
}

(Container as any).craft = {
  rules: {
    canMoveIn: () => true
  }
};

export const ContainerCanvas = (props: Props) => (
  <Element is={Container} canvas {...props} />
);
