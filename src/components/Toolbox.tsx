import { useEditor, Element } from "@craftjs/core";
import { Button } from "@fluentui/react-components";
import { Container } from "./craft/Container";
import { Text } from "./craft/Text";
import { Btn } from "./craft/Btn";

export function Toolbox() {
  const { connectors } = useEditor();

  return (
    <div className="toolbox">
      <Button
        ref={(ref) => {
          if (ref) connectors.create(ref, <Text text="New text" />);
        }}
      >
        ➕ Text
      </Button>

      <Button
        ref={(ref) => {
          if (ref) connectors.create(ref, <Btn label="New button" />);
        }}
      >
        ➕ Button
      </Button>

      <Button
        ref={(ref) => {
          if (ref)
            connectors.create(
              ref,
              <Element is={Container} canvas padding={16} background="#fff">
                <Text text="Inside container" />
              </Element>
            );
        }}
      >
        ➕ Container
      </Button>
    </div>
  );
}
