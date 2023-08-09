import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app2-el')
export default class App extends LitElement {
  static override styles = css`
    .app__container {
      display: grid;
      justify-content: center;
      align-content: center;
      background: var(--gr-lime-blue);
      width: 100%;
      height: 100%;
    }
    .app__title {
      display: flex;
      > h1 {
        font-size: var(--font-size-h1);
        width: max-content;
        text-transform: uppercase;
        background: var(--teal);
        background: var(--gr-teal-blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  `;
  override render() {
    return html`
      <div class="app__container">
        <div class="app__title">
          <h1>App 2</h1>
        </div>
      </div>
  `;
  }
}
