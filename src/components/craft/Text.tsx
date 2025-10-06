import { useEffect, useRef } from 'react';
import { useNode } from '@craftjs/core';

type Props = {
  text?: string;
  fontSize?: number;
};

export function Text({ text = 'Text', fontSize = 16 }: Props) {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp }
  } = useNode((node) => ({ selected: node.events.selected }));

  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // simple inline edit on double-click
    const el = ref.current;
    if (!el) return;
    const onDbl = () => {
      const next = prompt('Edit text', el.textContent ?? text);
      if (next != null) setProp((p: Props) => (p.text = next));
    };
    el.addEventListener('dblclick', onDbl);
    return () => el.removeEventListener('dblclick', onDbl);
  }, [setProp, text]);

  return (
    <span
      ref={(r) => {
        ref.current = r;
        if (r) connect(drag(r));
      }}
      className="text"
      style={{
        fontSize,
        outline: selected ? '1px dashed #4c9ffe' : 'none'
      }}
    >
      {text}
    </span>
  );
}

(Text as any).craft = {
  displayName: 'Text',
  props: { text: 'Text', fontSize: 16 }
};
