import { useNode } from '@craftjs/core';
import { Button } from "@fluentui/react-components";


type Props = { label?: string };

export function Btn({ label = "Button" }: Props) {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((node) => ({ selected: node.events.selected }));

  return (
    <div
      ref={(r) => {
        if (r) connect(drag(r));
      }}
      style={{ outline: selected ? "1px dashed #4c9ffe" : "none" }}
    >
      <Button appearance="primary">{label}</Button>
    </div>
  );
}

(Btn as any).craft = {
  displayName: "Btn",
  props: { label: "Button" },
};
