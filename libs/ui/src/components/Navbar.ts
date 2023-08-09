import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('navbar-el')
export default class Navbar extends LitElement {
  static override styles = css`
    .navbar__container {
      position: absolute;
      width: 100%;
    }
    .navbar__menu {
      display: flex;
      justify-content: center;
      padding: 1rem;
      gap: 1rem;     
      ::slotted(a) {
        color: var(--white);
        font-weight: 700;
        text-decoration: none;
        transition: 1s;
        text-transform: uppercase;
      }
      ::slotted(a:hover) {
        color: var(--purple);
      }
      ::slotted(input), ::slotted(textarea), ::slotted(select) {
        padding: .45rem .5rem;
        border-color: transparent;
        border-radius: 0.5rem;
        font-size: 0.8rem;
        line-height: 0.5rem;
        height: min-content;
        color: var(--black);
      }
      ::slotted(input) {
        width: 100%;
      }
    }
  `;
  override render() {
    return html`
      <nav class="navbar__container">
        <div class="navbar__menu">
          <slot></slot>
        </div>
      </nav>
  `;
  }
}