import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LoadRemoteModule } from '@libs/utils';

@customElement('app-el')
export default class App extends LitElement {
  static override styles = css`
    .app__container {
      display: grid;
      justify-content: center;
      align-content: center;
      background: var(--gr-azure-pink);
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

  @property() private dynamicComponent: any = null;
  @property() private host: string = process.env.APPS_URL ?? "";
  @property() private apps: string[] = [];
  @property() private selected: string = "";
  private loadRemoteModule = new LoadRemoteModule();

  private setHost(event: Event): void {
    this.host = (event.target as HTMLInputElement).value;
  }

  private async setComponent(event: Event): Promise<void> {
    this.selected = (event.target as HTMLSelectElement).value;
    if (!this.selected) {
      this.dynamicComponent = null;
      return;
    }
    this.dynamicComponent = (
      await this.loadRemoteModule.loadComponent(this.selected, "./Module")
    ).default;
  }

  private async loadServers(): Promise<void> {
    await this.loadRemoteModule.setHost(this.host).loadServers();
    this.apps = this.loadRemoteModule.apps;
  }

  override render() {
    let app;
    if(this.dynamicComponent) {
      app = new this.dynamicComponent;
    } else {
      app = html`
        <div class="app__container">
          <div class="app__title">
            <h1>Host</h1>
          </div>
        </div>
      `;      
    }
    return html`
      <navbar-el>
        <input value=${this.host} style="width: 100%" @input=${this.setHost} />
        <button-el @click=${this.loadServers}>Download</button-el>
        <select value=${this.selected} @change=${this.setComponent}>
          <option value="">Please select one</option>
          ${this.apps.map((app) =>
            html`<option value=${app}>${app}</option>`
          )}
        </select>
      </navbar-el>
      ${app}
  `;
  }
}