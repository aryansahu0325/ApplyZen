import React from 'react';
import ProfileSection from '../components/settings/sections/ProfileSection';
import ConnectedAccountsSection from '../components/settings/sections/ConnectedAccountsSection';
import AutomationPreferencesSection from '../components/settings/sections/AutomationPreferencesSection';
import AISettingsSection from '../components/settings/sections/AISettingsSection';
import ThemeStorageSection from '../components/settings/sections/ThemeStorageSection';
import SecurityPrivacySection from '../components/settings/sections/SecurityPrivacySection';

export default function Settings() {
  return (
    <div className="animate-fadeIn max-w-5xl mx-auto">
      <div className="p-8 max-w-5xl mx-auto space-y-8 pb-32">
        <ProfileSection />
        <ConnectedAccountsSection />
        <AutomationPreferencesSection />
        <AISettingsSection />
        <ThemeStorageSection />
        <SecurityPrivacySection />
      </div>
    </div>
  );
}
