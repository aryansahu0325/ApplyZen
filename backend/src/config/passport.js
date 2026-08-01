/**
 * Passport.js Configuration.
 *
 * Registers the Google OAuth 2.0 authentication strategy.
 * Passport is responsible ONLY for authenticating users via Google.
 * All user lookup, creation, and linking logic is delegated to AuthService
 * to preserve Clean Architecture and avoid duplicated business logic.
 */

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import config from './index.js';
import authService from '../services/auth.service.js';

/**
 * Configure Google OAuth 2.0 Strategy.
 *
 * The verify callback receives the Google profile after successful OAuth handshake.
 * It delegates all user resolution logic to authService.handleGoogleAuth().
 */

console.log("CLIENT ID:", config.auth.oauth.google.clientId);
console.log("CLIENT SECRET:", config.auth.oauth.google.clientSecret);
console.log("CALLBACK:", config.auth.oauth.google.callbackUrl);

passport.use(
  new GoogleStrategy(
    {
      clientID: config.auth.oauth.google.clientId,
      clientSecret: config.auth.oauth.google.clientSecret,
      callbackURL: config.auth.oauth.google.callbackUrl,
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Delegate all user lookup, linking, creation, and token generation to AuthService
        const authData = await authService.handleGoogleAuth(profile);

        // Pass resolved authData (user and tokens) to Passport — done(error, authData)
        return done(null, authData);
      } catch (error) {
        // Pass error to Passport — triggers failureRedirect or next(err)
        return done(error, null);
      }
    }
  )
);

export default passport;
console.log("CLIENT ID:", config.auth.oauth.google.clientId);
console.log("CLIENT SECRET:", config.auth.oauth.google.clientSecret);
console.log("CALLBACK:", config.auth.oauth.google.callbackUrl);