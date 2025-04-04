import{i as a}from"./lit-element.CuGozQnE.js";import{f as l,S as c,_ as i,e as u,r as d,g as b,h}from"./chunk.AJ3ENQ5C.BFgs73bB.js";import{i as n,u as p}from"./static.C0deb9nV.js";import{o as e}from"./if-defined._SvckkjQ.js";import{n as s}from"./property.BHALj7b8.js";var f=a`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,t=class extends b{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(o){this.disabled&&(o.preventDefault(),o.stopPropagation())}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}render(){const o=!!this.href,r=o?n`a`:n`button`;return p`
      <${r}
        part="base"
        class=${h({"icon-button":!0,"icon-button--disabled":!o&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${e(o?void 0:this.disabled)}
        type=${e(o?void 0:"button")}
        href=${e(o?this.href:void 0)}
        target=${e(o?this.target:void 0)}
        download=${e(o?this.download:void 0)}
        rel=${e(o&&this.target?"noreferrer noopener":void 0)}
        role=${e(o?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${e(this.name)}
          library=${e(this.library)}
          src=${e(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${r}>
    `}};t.styles=[l,f];t.dependencies={"sl-icon":c};i([u(".icon-button")],t.prototype,"button",2);i([d()],t.prototype,"hasFocus",2);i([s()],t.prototype,"name",2);i([s()],t.prototype,"library",2);i([s()],t.prototype,"src",2);i([s()],t.prototype,"href",2);i([s()],t.prototype,"target",2);i([s()],t.prototype,"download",2);i([s()],t.prototype,"label",2);i([s({type:Boolean,reflect:!0})],t.prototype,"disabled",2);export{t as S};
