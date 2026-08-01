#!/usr/bin/env python3
"""Generate assets/kinz-brochure.pdf with Kinz branding."""
from pathlib import Path

from arabic_reshaper import reshape
from bidi.algorithm import get_display
from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]


def ar(text: str) -> str:
    return get_display(reshape(text))


def main() -> None:
    arabic_bold = "/usr/share/fonts/truetype/noto/NotoNaskhArabic-Bold.ttf"
    arabic_reg = "/usr/share/fonts/truetype/noto/NotoNaskhArabic-Regular.ttf"
    if not Path(arabic_reg).exists():
        arabic_reg = "/usr/share/fonts/truetype/noto/NotoSansArabic-Regular.ttf"
    latin = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
    latin_bold = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_page()
    pdf.add_font("Ar", "", arabic_reg)
    pdf.add_font("Ar", "B", arabic_bold)
    pdf.add_font("Lat", "", latin)
    pdf.add_font("Lat", "B", latin_bold)

    pdf.set_fill_color(26, 38, 86)
    pdf.rect(0, 0, 210, 70, "F")
    pdf.set_fill_color(11, 16, 36)
    pdf.rect(0, 70, 210, 8, "F")

    logo = ROOT / "images" / "kinz-logo-web.png"
    if logo.exists():
        pdf.image(str(logo), x=70, y=14, w=70)

    pdf.set_y(85)
    pdf.set_text_color(26, 38, 86)
    pdf.set_font("Ar", "B", 22)
    pdf.cell(0, 12, ar("كُتيّب كينز التعليمي"), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Ar", "", 13)
    pdf.set_text_color(91, 100, 122)
    pdf.cell(0, 8, ar("حيث يتحول التعلّم إلى شغف"), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)

    pdf.set_draw_color(251, 176, 59)
    pdf.set_line_width(1.2)
    pdf.line(85, pdf.get_y(), 125, pdf.get_y())
    pdf.ln(8)

    pdf.set_text_color(26, 38, 86)
    pdf.set_font("Ar", "B", 15)
    pdf.cell(0, 10, ar("خدماتنا"), align="R", new_x="LMARGIN", new_y="NEXT")

    services = [
        ("تقوية المناهج الدراسية", "شرح مبسّط للمواد العلمية والأدبية مع تركيز على نقاط الامتحان."),
        ("كورس الإنجليزية الشامل", "من التأسيس إلى المحادثة بطلاقة للدراسة والحياة اليومية."),
        
    ]

    for title, desc in services:
        pdf.set_fill_color(247, 248, 251)
        y = pdf.get_y()
        pdf.rect(15, y, 180, 22, "F")
        pdf.set_draw_color(251, 176, 59)
        pdf.set_line_width(1.5)
        pdf.line(193, y + 2, 193, y + 20)
        pdf.set_xy(20, y + 3)
        pdf.set_font("Ar", "B", 12)
        pdf.set_text_color(26, 38, 86)
        pdf.cell(165, 7, ar(title), align="R", new_x="LMARGIN", new_y="NEXT")
        pdf.set_x(20)
        pdf.set_font("Ar", "", 10)
        pdf.set_text_color(91, 100, 122)
        pdf.cell(165, 7, ar(desc), align="R", new_x="LMARGIN", new_y="NEXT")
        pdf.ln(4)

    pdf.ln(2)
    pdf.set_font("Ar", "B", 15)
    pdf.set_text_color(26, 38, 86)
    pdf.cell(0, 10, ar("لماذا كينز؟"), align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Ar", "", 11)
    pdf.set_text_color(91, 100, 122)
    for line in [
        "لا للملل: أساليب شرح حديثة تركز على الفهم والمتعة.",
        "وقتك ملكك: دروس مرنة تناسب جدولك من أي مكان.",
        "دعم حقيقي: فريقنا معك خطوة بخطوة.",
    ]:
        pdf.cell(0, 8, ar(line), align="R", new_x="LMARGIN", new_y="NEXT")

    pdf.ln(8)
    y = pdf.get_y()
    pdf.set_fill_color(26, 38, 86)
    pdf.rect(15, y, 180, 48, "F")
    pdf.set_xy(20, y + 6)
    pdf.set_font("Ar", "B", 13)
    pdf.set_text_color(251, 176, 59)
    pdf.cell(170, 8, ar("المعرفة هي الكنز الحقيقي"), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(20)
    pdf.set_font("Ar", "", 11)
    pdf.set_text_color(255, 255, 255)
    pdf.cell(170, 7, ar("واتساب"), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(20)
    pdf.set_font("Lat", "", 12)
    pdf.cell(170, 7, "+963 983 888 184", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_x(20)
    pdf.set_font("Lat", "B", 12)
    pdf.set_text_color(251, 176, 59)
    pdf.cell(170, 7, "kinz-ed.com", align="C", new_x="LMARGIN", new_y="NEXT")

    pdf.set_y(275)
    pdf.set_font("Ar", "", 9)
    pdf.set_text_color(138, 144, 163)
    pdf.cell(0, 6, ar("جميع الحقوق محفوظة"), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Lat", "", 9)
    pdf.cell(0, 5, "2026 KINZ", align="C")

    out = ROOT / "assets" / "kinz-brochure.pdf"
    out.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(out))
    print(f"Wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
