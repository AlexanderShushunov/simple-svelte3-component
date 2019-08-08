import React, { PureComponent } from "react";

import SvelteOptions from "../../component/src/Options.svelte";

export default class extends PureComponent {
  componentDidMount() {
    const { options, onSelect } = this.props;

    this.svelteOptions = new SvelteOptions({
      target: this.el,
      props: { options }
    });
    this.svelteOptions.$on("select", ({ detail }) => onSelect(detail));
  }

  componentWillUnmount() {
    this.svelteOptions.destroy();
  }

  render() {
    return <div ref={el => (this.el = el)} />;
  }
}
