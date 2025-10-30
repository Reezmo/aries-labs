// Stack integration removed. Export a minimal stub that provides the
// `urls` object used by the landing page. This avoids importing and
// constructing the real `@stackframe/stack` server app.
export const stackServerApp = {
  urls: {
    afterSignIn: "/",
    signUp: "/",
    signIn: "/",
  },
} as const;
