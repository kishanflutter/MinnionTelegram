const __vite__fileDeps=["assets/index-D0PPArRc.js","assets/index-CF0-yBFB.js","assets/index-B3v4hkOG.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{i as C,b as k,M as r,C as h,O as v,aN as S,A as f,E,x as A,R as c,aO as b,U as _,j as x,S as O,aP as g,aQ as N,d as w,c as L,aR as I}from"./index-CF0-yBFB.js";const R=C`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var d=function(u,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(u,e,t,i);else for(var a=u.length-1;a>=0;a--)(n=u[a])&&(s=(o<3?n(s):o>3?n(e,t,s):n(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};const y="scroll-lock";let l=class extends k{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=r.state.open,this.caipAddress=h.state.activeCaipAddress,this.caipNetwork=h.state.activeCaipNetwork,this.isSiweEnabled=v.state.isSiweEnabled,this.shake=r.state.shake,this.initializeTheming(),S.prefetch(),this.unsubscribe.push(r.subscribeKey("open",e=>e?this.onOpen():this.onClose()),r.subscribeKey("shake",e=>this.shake=e),f.subscribeKey("siweStatus",e=>this.onSiweStatusChange(e),"eip155"),h.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),h.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),v.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),E.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?A`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
              <w3m-alertbar></w3m-alertbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){const e=c.state.view==="ConnectingSiwe",t=c.state.view==="ApproveTransaction";if(this.isSiweEnabled){const{SIWEController:i}=await b(async()=>{const{SIWEController:s}=await import("./index-D0PPArRc.js");return{SIWEController:s}},__vite__mapDeps([0,1,2]));i.state.status!=="success"&&(e||t)?r.shake():r.close()}else r.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=I.state,i=_.getColorTheme(t);x(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),O.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=y,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${y}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",i=>{if(i.key==="Escape")this.handleClose();else if(i.key==="Tab"){const{tagName:o}=i.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}onSiweStatusChange(e){e==="success"&&r.close()}async onNewAddress(e){var n;const t=this.caipAddress,i=t?g.getPlainAddress(t):void 0,o=e?g.getPlainAddress(e):void 0,s=i===o;if(this.caipAddress=e,o&&!s&&this.isSiweEnabled)try{const{SIWEController:a}=await b(async()=>{const{SIWEController:p}=await import("./index-D0PPArRc.js");return{SIWEController:p}},__vite__mapDeps([0,1,2])),m=f.state.siweStatus==="success";!i&&o?this.onSiweNavigation():m&&i&&o&&i!==o&&(n=a.state._client)!=null&&n.options.signOutOnAccountChange&&(await a.signOut(),this.onSiweNavigation())}catch(a){throw this.caipAddress=t,a}o||r.close()}async onNewNetwork(e){var o,s,n,a;if(!this.caipAddress){this.caipNetwork=e,c.goBack();return}const t=(s=(o=this.caipNetwork)==null?void 0:o.caipNetworkId)==null?void 0:s.toString(),i=(n=e==null?void 0:e.caipNetworkId)==null?void 0:n.toString();if(t&&i&&t!==i)if(this.isSiweEnabled){const{SIWEController:m}=await b(async()=>{const{SIWEController:p}=await import("./index-D0PPArRc.js");return{SIWEController:p}},__vite__mapDeps([0,1,2]));(a=m.state._client)!=null&&a.options.signOutOnNetworkChange?(await m.signOut(),this.onSiweNavigation()):c.goBack()}else c.goBack();this.caipNetwork=e}onSiweNavigation(){const e=h.state.activeChain===N.CHAIN.EVM;!(f.state.siweStatus==="success")&&e?this.open?c.replace("ConnectingSiwe"):r.open({view:"ConnectingSiwe"}):c.goBack()}};l.styles=R;d([w()],l.prototype,"open",void 0);d([w()],l.prototype,"caipAddress",void 0);d([w()],l.prototype,"caipNetwork",void 0);d([w()],l.prototype,"isSiweEnabled",void 0);d([w()],l.prototype,"shake",void 0);l=d([L("w3m-modal")],l);export{l as W3mModal};
