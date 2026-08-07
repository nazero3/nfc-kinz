/**
 * Example for kinz-ed — copy into your pages/routes folder.
 *
 * React Router:
 *   <Route path="/card" element={<NfcCardPage />} />
 *
 * Inertia:
 *   Route::get('/card', fn () => Inertia::render('Nfc/Card'));
 */
import { NfcCard } from '../components/NfcCard'

export default function NfcCardPage() {
  return <NfcCard />
}
