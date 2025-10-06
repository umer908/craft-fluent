// src/App.tsx
import { Editor, Frame, Element } from '@craftjs/core';
import { Toolbox } from './components/Toolbox';
import { Container } from './components/craft/Container';
import { Text } from './components/craft/Text';
import { Btn } from './components/craft/Btn';
import './app.css';

export default function App() {
  return (
    <Editor resolver={{ Container, Text, Btn }}>
      <div className="app-shell">
        <aside className="rail">
          <h3>Toolbox</h3>
          <Toolbox /> {/* ✅ Now inside <Editor> */}
        </aside>

        <main className="canvas-wrap">
          <Frame>
            <Element is={Container} canvas padding={24} background="#f8f8f8">
              <Text text="Hello Craft.js 👋" fontSize={20} />
              <Btn label="Click me" />
            </Element>
          </Frame>
        </main>
      </div>
    </Editor>
  );
}
