import{p as _,s as x,a as v,r as E,C as c,O as C,i as I,c as m,b as y,A as u,x as A,d as b,E as d,W as p,S as h,e as T,M as N,R as O}from"./index-CF0-yBFB.js";import{f as P,V as z,Y as D}from"./index-CF0-yBFB.js";const i=_({status:"uninitialized"}),g={state:i,subscribeKey(t,e){return x(i,t,e)},subscribe(t){return v(i,()=>t(i))},_getClient(){if(!i._client)throw new Error("SIWEController client not set");return i._client},async getNonce(t){const n=await this._getClient().getNonce(t);return this.setNonce(n),n},async getSession(){try{const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e||void 0}catch{return}},createMessage(t){const n=this._getClient().createMessage(t);return this.setMessage(n),n},async verifyMessage(t){return await this._getClient().verifyMessage(t)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const t=this._getClient();await t.signOut(),this.setStatus("ready"),this.setSession(void 0),(e=t.onSignOut)==null||e.call(t)},onSignIn(t){var n;const e=this._getClient();(n=e.onSignIn)==null||n.call(e,t)},onSignOut(){var e;const t=this._getClient();(e=t.onSignOut)==null||e.call(t)},async setSIWEClient(t){i._client=E(t),i.session=await this.getSession(),i.status=i.session?"success":"ready",c.setAccountProp("siweStatus",i.status,"eip155"),C.setIsSiweEnabled(t.options.enabled)},setNonce(t){i.nonce=t},setStatus(t){i.status=t,c.setAccountProp("siweStatus",i.status,"eip155")},setMessage(t){i.message=t},setSession(t){i.session=t,i.status=t?"success":"ready",c.setAccountProp("siweStatus",i.status,"eip155")}},R=I`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var U=function(t,e,n,a){var r=arguments.length,s=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,a);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s};let f=class extends y{constructor(){var e,n;super(...arguments),this.dappImageUrl=(e=C.state.metadata)==null?void 0:e.icons,this.walletImageUrl=(n=u.state.connectedWalletInfo)==null?void 0:n.icon}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return A`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,n){e.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};f.styles=R;f=U([m("w3m-connecting-siwe")],f);var S=function(t,e,n,a){var r=arguments.length,s=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,a);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s};let w=class extends y{constructor(){var e;super(...arguments),this.dappName=(e=C.state.metadata)==null?void 0:e.name,this.isSigning=!1,this.isCancelling=!1}render(){return A`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){var e,n,a;this.isSigning=!0,d.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:((e=c.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)||"",isSmartAccount:u.state.preferredAccountType===p.ACCOUNT_TYPES.SMART_ACCOUNT}});try{g.setStatus("loading");const r=await g.signIn();return g.setStatus("success"),d.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:((n=c.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)||"",isSmartAccount:u.state.preferredAccountType===p.ACCOUNT_TYPES.SMART_ACCOUNT}}),r}catch{const o=u.state.preferredAccountType===p.ACCOUNT_TYPES.SMART_ACCOUNT;return o?h.showError("This application might not support Smart Accounts"):h.showError("Signature declined"),g.setStatus("error"),d.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:((a=c.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)||"",isSmartAccount:o}})}finally{this.isSigning=!1}}async onCancel(){var n;this.isCancelling=!0,c.state.activeCaipAddress?(await T.disconnect(),N.close()):O.push("Connect"),this.isCancelling=!1,d.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:((n=c.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)||"",isSmartAccount:u.state.preferredAccountType===p.ACCOUNT_TYPES.SMART_ACCOUNT}})}};S([b()],w.prototype,"isSigning",void 0);S([b()],w.prototype,"isCancelling",void 0);w=S([m("w3m-connecting-siwe-view")],w);export{g as SIWEController,f as W3mConnectingSiwe,w as W3mConnectingSiweView,P as formatMessage,z as getDidAddress,D as getDidChainId};
