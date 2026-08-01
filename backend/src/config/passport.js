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

const { clientId, clientSecret, callbackUrl } = config.auth.oauth.google;

if (clientId && clientSecret && !clientId.includes('your_google_client_id')) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: callbackUrl,
        scope: ['profile', 'email'],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const authData = await authService.handleGoogleAuth(profile);
          return done(null, authData);
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );
  console.log('[INFO] Google OAuth strategy registered successfully.');
} else {
  console.warn('[WARN] Google OAuth Client ID/Secret not configured or using placeholders. Google OAuth strategy disabled.');
}

export default passport;