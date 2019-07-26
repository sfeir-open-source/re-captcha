/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ReCaptcha {
    /**
    * re-captcha API URL
    */
    'href': string;
    /**
    * The language attribute
    */
    'language': string;
    /**
    * Your sitekey  (Provided on registration -- see https://developers.google.com/re-captcha/intro)
    */
    'sitekey': string;
    /**
    * The tabidx of the widget and challenge  If other elements in your page use tabidx, this should be set to make user navigation easier.
    */
    'tabidx': number;
    /**
    * The color theme of the widget (`dark` or `light`)
    */
    'theme': string;
    /**
    * The total time (in milliseconds) to wait for API loading
    */
    'timeout': number;
    /**
    * The type of re-captcha to serve (`image` or `audio`)
    */
    'type': string;
  }
}

declare global {


  interface HTMLReCaptchaElement extends Components.ReCaptcha, HTMLStencilElement {}
  var HTMLReCaptchaElement: {
    prototype: HTMLReCaptchaElement;
    new (): HTMLReCaptchaElement;
  };
  interface HTMLElementTagNameMap {
    're-captcha': HTMLReCaptchaElement;
  }
}

declare namespace LocalJSX {
  interface ReCaptcha extends JSXBase.HTMLAttributes<HTMLReCaptchaElement> {
    /**
    * re-captcha API URL
    */
    'href'?: string;
    /**
    * The language attribute
    */
    'language'?: string;
    /**
    * Captcha expiration
    */
    'onOnExpire'?: (event: CustomEvent<any>) => void;
    /**
    * Captcha response
    */
    'onOnResponse'?: (event: CustomEvent<any>) => void;
    /**
    * Your sitekey  (Provided on registration -- see https://developers.google.com/re-captcha/intro)
    */
    'sitekey'?: string;
    /**
    * The tabidx of the widget and challenge  If other elements in your page use tabidx, this should be set to make user navigation easier.
    */
    'tabidx'?: number;
    /**
    * The color theme of the widget (`dark` or `light`)
    */
    'theme'?: string;
    /**
    * The total time (in milliseconds) to wait for API loading
    */
    'timeout'?: number;
    /**
    * The type of re-captcha to serve (`image` or `audio`)
    */
    'type'?: string;
  }

  interface IntrinsicElements {
    're-captcha': ReCaptcha;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

