import heroImage from './assets/hero-web.jpg'
import logoImage from './assets/kinz-logo-nfc.png'
import brochurePdf from './assets/kinz-brochure.pdf'
import './NfcCard.css'

const WHATSAPP_BASE = 'https://wa.me/963983888184'
const INSTAGRAM_URL = 'https://www.instagram.com/kinz.platform?igsh=amI0bHJxNHU2c3R4'
const WEBSITE_URL = 'https://kinz-ed.com'

const MSG = {
  greeting: encodeURIComponent('مرحباً، وصلت عبر بطاقة كينز'),
  advisor: encodeURIComponent('مرحباً، أريد التواصل مع مستشاري الأكاديمي'),
  discount: encodeURIComponent(
    'مرحباً، أنا حامل بطاقة NFC من كينز ولدي خصم خاص بحملة البطاقة',
  ),
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="5 13 10 18 19 7" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  )
}

/**
 * NFC tap landing UI for Kinz gift cards.
 *
 * Drop into kinz-ed as a page/route component. Styles are scoped under `.nfc-kinz`
 * so they do not leak into the rest of the site.
 *
 * @param {object} [props]
 * @param {string} [props.websiteUrl]
 * @param {string} [props.whatsappUrl]
 * @param {string} [props.instagramUrl]
 * @param {string} [props.brochureUrl] - override brochure download (defaults to bundled PDF)
 * @param {string} [props.className]
 */
export default function NfcCard({
  websiteUrl = WEBSITE_URL,
  whatsappUrl = `${WHATSAPP_BASE}?text=${MSG.greeting}`,
  instagramUrl = INSTAGRAM_URL,
  brochureUrl = brochurePdf,
  className = '',
} = {}) {
  return (
    <div className={`nfc-kinz ${className}`.trim()} lang="ar" dir="rtl">
      <div className="nfc-kinz__bg" aria-hidden="true">
        <img src={heroImage} alt="" className="nfc-kinz__bg-photo" />
        <div className="nfc-kinz__bg-veil" />
      </div>

      <div className="nfc-kinz__shell">
        <main className="nfc-kinz__card">
          <div className="nfc-kinz__status nfc-kinz__reveal">
            <span className="nfc-kinz__status-ring" aria-hidden="true">
              <CheckIcon />
            </span>
            <p className="nfc-kinz__status-label">تم الاتصال</p>
          </div>

          <img
            src={logoImage}
            alt="KINZ"
            className="nfc-kinz__logo nfc-kinz__reveal nfc-kinz__reveal--delay-1"
            width={120}
            height={48}
          />

          <div className="nfc-kinz__welcome nfc-kinz__reveal nfc-kinz__reveal--delay-2">
            <p className="nfc-kinz__hello">مرحباً في KINZ</p>
            <p className="nfc-kinz__hint">اختر الخدمة التي ترغب بها</p>
          </div>

          <div
            className="nfc-kinz__socials nfc-kinz__reveal nfc-kinz__reveal--delay-2"
            aria-label="تواصل اجتماعي"
          >
            <a
              className="nfc-kinz__social nfc-kinz__social--whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساب"
            >
              <WhatsAppIcon />
            </a>
            <a
              className="nfc-kinz__social nfc-kinz__social--instagram"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="إنستغرام"
            >
              <InstagramIcon />
            </a>
          </div>

          <nav
            className="nfc-kinz__actions nfc-kinz__reveal nfc-kinz__reveal--delay-3"
            aria-label="الخدمات"
          >
            <a
              className="nfc-kinz__cta"
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              الموقع الإلكتروني
            </a>
            <a
              className="nfc-kinz__cta"
              href={`${WHATSAPP_BASE}?text=${MSG.advisor}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              تواصل مع مستشارك الأكاديمي
            </a>
            <a
              className="nfc-kinz__cta"
              href={brochureUrl}
              download="Kinz-Brochure.pdf"
            >
              خدماتنا
            </a>
            <a
              className="nfc-kinz__cta nfc-kinz__cta--flash"
              href={`${WHATSAPP_BASE}?text=${MSG.discount}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="nfc-kinz__cta-badge">خصم</span>
              <span className="nfc-kinz__cta-flash-text">خصم خاص لحاملي البطاقة</span>
            </a>
          </nav>
        </main>
      </div>
    </div>
  )
}
