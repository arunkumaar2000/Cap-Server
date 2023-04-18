const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "1034645036633-46p7u1cmgkll3dcesv8h37n4k58j44mj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "d46cb8246c9a6c557551";
GITHUB_CLIENT_SECRET = "ca5b46b9e80c943e5c922e7f997daee8b2cc2dd7";

FACEBOOK_APP_ID = "your id";
FACEBOOK_APP_SECRET = "your id";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
