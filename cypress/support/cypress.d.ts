// cypress/support/cypress.d.ts
declare namespace Cypress {
    export interface Cookie {
      name: string;                     // Required property
      value: string;                    // Required property
    //   path?: string;                    // Optional property
    //   domain?: string;                  // Optional property
    //   expires?: number;                 // Optional property
    //   secure?: boolean;                 // Optional property
    //   httpOnly?: boolean;               // Optional property
      sameSite?: 'Strict' | 'Lax' | 'None'; // Optional property
    }
  
    interface Cookies {
      defaults: (options: { 
        preserve: (cookie: Cookie) => boolean 
      }) => void;
    }
  }
  