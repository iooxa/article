import { html } from 'lit-element';
import { types } from '@iooxa/ink-store';
import { BaseComponent, withInk } from './base';

export const InkVisibleSpec = {
  name: 'visible',
  description: 'Component that reacts to visibility',
  properties: {
    visible: { type: types.PropTypes.boolean, default: true, has: { value: false, func: true } },
  },
  events: {},
};

@withInk(InkVisibleSpec, { bind: { type: String, reflect: true } })
class InkVisible extends BaseComponent<typeof InkVisibleSpec> {
  render() {
    const { visible } = this.ink!.state;
    return html`<div ?hidden=${!visible}><slot></slot></div>`;
  }
}

export default InkVisible;