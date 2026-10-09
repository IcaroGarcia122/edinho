/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Header } from './components/Header';
import { ContactLinks } from './components/ContactLinks';
import { VitrineModal } from './components/VitrineModal';
import { StoreInfoModal } from './components/StoreInfoModal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Toast } from './components/Toast';

export default function App() {
  const [isVitrineOpen, setIsVitrineOpen] = useState(false);
  const [isStoreInfoOpen, setIsStoreInfoOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-between selection:bg-cyan-500 selection:text-white">
      {/* Background Ambient Layers with custom Storefront Photo */}
      <BackgroundEffects />

      {/* Main Container - Mobile-first optimized max-w-md matching the clone target */}
      <main className="w-full max-w-md flex flex-col items-center flex-1 z-10">
        {/* Brand Header with Transparent Logo */}
        <Header 
          onOpenStoreInfo={() => setIsStoreInfoOpen(true)}
          onShowToast={showToast}
        />

        {/* Action Link Buttons */}
        <ContactLinks 
          onOpenVitrine={() => setIsVitrineOpen(true)}
          onOpenStoreInfo={() => setIsStoreInfoOpen(true)}
        />

        {/* Footer */}
        <Footer />
      </main>

      {/* Floating Sticky Quick WhatsApp */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <VitrineModal 
        isOpen={isVitrineOpen} 
        onClose={() => setIsVitrineOpen(false)} 
      />

      <StoreInfoModal 
        isOpen={isStoreInfoOpen} 
        onClose={() => setIsStoreInfoOpen(false)}
        onShowToast={showToast} 
      />

      {/* Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}
