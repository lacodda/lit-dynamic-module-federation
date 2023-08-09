import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app1-el')
export default class App extends LitElement {
  static override styles = css`
    .app__container {
      display: grid;
      justify-content: center;
      align-content: center;
      background: var(--gr-pink-violet);
      width: 100%;
      height: 100%;
    }
    .app__title {
      display: flex;
      > h1 {
        font-size: var(--font-size-h1);
        width: max-content;
        text-transform: uppercase;
        background: var(--purple);
        background: var(--gr-violet-purple);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  `;
  override render() {
    return html`
      <div class="app__container">
        <div class="app__title">
          <h1>App 1</h1>
        </div>
      </div>
  `;
  }
}
