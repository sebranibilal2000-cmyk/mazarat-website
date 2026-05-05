import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle2, PhoneCall, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MakkahMadinah() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "توصيل من مكة المكرمة إلى المدينة المنورة",
    "provider": {
      "@type": "LocalBusiness",
      "name": "تاكسي العمرة والمزارات",
      "telephone": "+966544546558",
      "url": "https://mazarat-sa.online"
    },
    "areaServed": ["مكة المكرمة", "المدينة المنورة"],
    "description": "خدمة توصيل مريحة وآمنة من مكة المكرمة إلى المدينة المنورة. أسعار ثابتة وسائق محترف.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "SAR",
      "price": "400",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "400",
        "maxPrice": "1000",
        "priceCurrency": "SAR"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "كم سعر التكسي من مكة إلى المدينة المنورة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "يتراوح سعر التكسي من مكة المكرمة إلى المدينة المنورة بين 400 و 1000 ريال سعودي حسب نوع السيارة وعدد الركاب."
        }
      },
      {
        "@type": "Question",
        "name": "كم تستغرق الرحلة من مكة إلى المدينة المنورة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تستغرق الرحلة من مكة المكرمة إلى المدينة المنورة ما بين 4 إلى 5 ساعات بالسيارة عبر الطريق السريع."
        }
      },
      {
        "@type": "Question",
        "name": "هل الرحلة من مكة إلى المدينة آمنة بالتكسي الخاص؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، سياراتنا حديثة ومعتمدة وسائقونا ذوو خبرة في قطع هذا الطريق بشكل يومي، مع توقف للراحة عند الطلب."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>توصيل من مكة إلى المدينة المنورة | تكسي مكة المدينة 2025</title>
        <meta name="description" content="خدمة توصيل مريحة من مكة المكرمة إلى المدينة المنورة. أسعار تبدأ من 400 ريال. رحلة آمنة للمسجد النبوي مع سائق محترف. احجز الآن عبر واتساب." />
        <link rel="canonical" href="https://mazarat-sa.online/makkah-madinah" />
        <meta property="og:title" content="توصيل من مكة إلى المدينة المنورة | تاكسي العمرة" />
        <meta property="og:description" content="توصيل مريح من مكة إلى المدينة المنورة. أسعار تبدأ من 400 ريال، سائق محترف، خدمة 24 ساعة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/makkah-madinah" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:image" content="https://mazarat-sa.online/opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mazarat-sa.online/opengraph.jpg" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 py-14 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center gap-2 text-white/70 text-sm mb-2">
              <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <span>/</span>
              <Link to="/taxi-makkah" className="hover:text-white transition-colors">تكسي مكة</Link>
              <span>/</span>
              <span className="text-white">مكة إلى المدينة</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              توصيل من مكة المكرمة إلى المدينة المنورة
            </h1>
            <p className="text-xl text-white/90">
              رحلة آمنة ومريحة إلى المسجد النبوي الشريف – أسعار ثابتة من 400 ريال
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button size="lg" className="text-lg bg-green-600 hover:bg-green-700 text-white px-8 h-14" asChild>
                <a href="https://wa.me/966544546558?text=أريد%20حجز%20توصيل%20من%20مكة%20إلى%20المدينة%20المنورة" target="_blank" rel="noopener noreferrer">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  احجز الآن عبر واتساب
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white/30 hover:bg-white/20 h-14" asChild>
                <a href="tel:+966544546558">اتصل بنا مباشرة</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Clock className="h-8 w-8 text-primary" />, title: "4-5 ساعات", desc: "مدة الرحلة من مكة إلى المدينة المنورة" },
              { icon: <MapPin className="h-8 w-8 text-primary" />, title: "430 كم", desc: "المسافة بين مكة المكرمة والمدينة المنورة" },
              { icon: <CheckCircle2 className="h-8 w-8 text-primary" />, title: "توقف للراحة", desc: "نتوقف لاستراحة في منتصف الطريق عند الطلب" },
            ].map((item, i) => (
              <Card key={i} className="border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">

              <section>
                <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">أسعار التوصيل من مكة إلى المدينة</h2>
                <div className="bg-card rounded-xl border overflow-hidden shadow-sm">
                  <table className="w-full text-right">
                    <thead>
                      <tr className="bg-secondary text-secondary-foreground">
                        <th className="p-4 font-bold border-b border-secondary-foreground/20">نوع السيارة</th>
                        <th className="p-4 font-bold border-b border-secondary-foreground/20">عدد الركاب</th>
                        <th className="p-4 font-bold border-b border-secondary-foreground/20">السعر</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/50">
                        <td className="p-4">سيارة سيدان</td>
                        <td className="p-4 text-muted-foreground">1-4 أشخاص</td>
                        <td className="p-4 font-bold text-primary">400 – 600 ريال</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="p-4">SUV / عائلية متوسطة</td>
                        <td className="p-4 text-muted-foreground">1-6 أشخاص</td>
                        <td className="p-4 font-bold text-primary">600 – 800 ريال</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="p-4">فان / عائلية كبيرة</td>
                        <td className="p-4 text-muted-foreground">1-12 شخص</td>
                        <td className="p-4 font-bold text-primary">800 – 1000 ريال</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-3">* الأسعار تقريبية وقابلة للتفاوض. تواصل معنا للحصول على السعر النهائي.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">مميزات رحلة مكة – المدينة معنا</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "سيارات مكيفة ومريحة لقطع المسافات الطويلة",
                    "سائقون ملتزمون بأوقات الصلاة",
                    "توقف للراحة واستراحة الطريق",
                    "توصيل مباشر لأي فندق في المدينة",
                    "الدفع عند الوصول نقداً أو تحويل",
                    "خدمة 24 ساعة طوال أيام الأسبوع",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-muted/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">أسئلة شائعة – مكة إلى المدينة</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg text-primary">كم سعر التكسي من مكة إلى المدينة المنورة؟</h3>
                    <p className="text-muted-foreground mt-1">يتراوح السعر بين 400 و 1000 ريال حسب نوع السيارة وعدد الأشخاص.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">كم ساعة من مكة إلى المدينة بالسيارة؟</h3>
                    <p className="text-muted-foreground mt-1">تستغرق الرحلة من 4 إلى 5 ساعات عبر طريق مكة–المدينة السريع (طريق الهجرة).</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">هل يمكن الحجز المسبق لرحلة مكة–المدينة؟</h3>
                    <p className="text-muted-foreground mt-1">نعم، يُنصح بالحجز المسبق خاصة في موسم الحج والعمرة. تواصل معنا عبر واتساب لتثبيت موعدك.</p>
                  </div>
                </div>
              </section>

            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border rounded-xl p-6 shadow-sm sticky top-24 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary border-b pb-3">احجز رحلتك الآن</h3>
                  <a
                    href="https://wa.me/966544546558?text=أريد%20حجز%20توصيل%20من%20مكة%20إلى%20المدينة%20المنورة"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    واتساب – تواصل الآن
                  </a>
                  <a
                    href="tel:+966544546558"
                    className="block w-full text-center mt-3 border border-primary text-primary hover:bg-primary/5 font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    اتصل: 966544546558+
                  </a>
                </div>

                <div>
                  <h4 className="font-bold mb-3 text-foreground">صفحات ذات صلة:</h4>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="justify-start" asChild>
                      <Link to="/taxi-makkah">
                        <ArrowLeft className="ml-2 h-4 w-4" />
                        تكسي مكة المكرمة
                      </Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link to="/taxi-madinah">
                        <ArrowLeft className="ml-2 h-4 w-4" />
                        تكسي المدينة المنورة
                      </Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link to="/airport-jeddah-makkah">
                        <ArrowLeft className="ml-2 h-4 w-4" />
                        مطار جدة إلى مكة
                      </Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link to="/hotels-madinah">
                        <ArrowLeft className="ml-2 h-4 w-4" />
                        فنادق المدينة المنورة
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
