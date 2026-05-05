import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle2, PhoneCall, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AirportJeddahMakkah() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "توصيل من مطار جدة إلى مكة المكرمة",
    "provider": {
      "@type": "LocalBusiness",
      "name": "تاكسي العمرة والمزارات",
      "telephone": "+966544546558",
      "url": "https://mazarat-sa.online"
    },
    "areaServed": ["مطار الملك عبدالعزيز", "مكة المكرمة"],
    "description": "خدمة توصيل مباشر من مطار الملك عبدالعزيز الدولي بجدة إلى مكة المكرمة. أسعار ثابتة وسائق محترف.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "SAR",
      "price": "200",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "200",
        "maxPrice": "500",
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
        "name": "كم سعر التوصيل من مطار جدة إلى مكة المكرمة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "يتراوح سعر التوصيل من مطار جدة إلى مكة المكرمة بين 200 و 500 ريال سعودي حسب نوع السيارة وعدد الركاب."
        }
      },
      {
        "@type": "Question",
        "name": "كم تستغرق الرحلة من مطار جدة إلى مكة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تستغرق الرحلة من مطار الملك عبدالعزيز إلى مكة المكرمة ما بين 60 إلى 90 دقيقة حسب حركة المرور."
        }
      },
      {
        "@type": "Question",
        "name": "هل تتوفر خدمة الاستقبال من المطار؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نوفر خدمة الاستقبال بلافتة باسمك داخل صالة الوصول في مطار جدة على مدار 24 ساعة."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>توصيل من مطار جدة إلى مكة المكرمة | أسعار ثابتة 2025</title>
        <meta name="description" content="خدمة توصيل مباشر من مطار الملك عبدالعزيز الدولي بجدة إلى مكة المكرمة. أسعار تبدأ من 200 ريال. استقبال فور الوصول، سائق محترف، خدمة 24 ساعة." />
        <link rel="canonical" href="https://mazarat-sa.online/airport-jeddah-makkah" />
        <meta property="og:title" content="توصيل من مطار جدة إلى مكة المكرمة | تاكسي العمرة" />
        <meta property="og:description" content="توصيل مباشر من مطار جدة إلى مكة. أسعار تبدأ من 200 ريال، استقبال 24 ساعة، سائق محترف." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/airport-jeddah-makkah" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:image" content="https://mazarat-sa.online/opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mazarat-sa.online/opengraph.jpg" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-gradient-to-br from-green-900 via-green-800 to-yellow-900 py-14 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center gap-2 text-white/70 text-sm mb-2">
              <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <span>/</span>
              <Link to="/airport-jeddah" className="hover:text-white transition-colors">مطار جدة</Link>
              <span>/</span>
              <span className="text-white">مطار جدة إلى مكة</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              توصيل من مطار جدة إلى مكة المكرمة
            </h1>
            <p className="text-xl text-white/90">
              استقبال فور وصولك بلافتة باسمك – أسعار ثابتة من 200 ريال – خدمة 24 ساعة
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button size="lg" className="text-lg bg-green-600 hover:bg-green-700 text-white px-8 h-14" asChild>
                <a href="https://wa.me/966544546558?text=أريد%20حجز%20توصيل%20من%20مطار%20جدة%20إلى%20مكة" target="_blank" rel="noopener noreferrer">
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
              { icon: <Clock className="h-8 w-8 text-primary" />, title: "60-90 دقيقة", desc: "مدة الرحلة من المطار إلى مكة" },
              { icon: <MapPin className="h-8 w-8 text-primary" />, title: "85 كم", desc: "المسافة من مطار جدة إلى مكة المكرمة" },
              { icon: <CheckCircle2 className="h-8 w-8 text-primary" />, title: "استقبال فوري", desc: "السائق ينتظرك فور خروجك من الجمارك" },
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
                <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">أسعار التوصيل من مطار جدة إلى مكة</h2>
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
                        <td className="p-4 font-bold text-primary">200 – 300 ريال</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="p-4">SUV / عائلية متوسطة</td>
                        <td className="p-4 text-muted-foreground">1-6 أشخاص</td>
                        <td className="p-4 font-bold text-primary">300 – 400 ريال</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="p-4">فان / عائلية كبيرة</td>
                        <td className="p-4 text-muted-foreground">1-12 شخص</td>
                        <td className="p-4 font-bold text-primary">400 – 500 ريال</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-3">* الأسعار تقريبية وقابلة للتفاوض. تواصل معنا للحصول على السعر النهائي.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">كيف نعمل؟</h2>
                <ol className="space-y-4">
                  {[
                    "تواصل معنا عبر واتساب وأخبرنا برقم رحلتك وتاريخ الوصول",
                    "يتواجد السائق في صالة الوصول بلافتة تحمل اسمك",
                    "ينقل السائق حقائبك ويوصلك مباشرة إلى وجهتك في مكة",
                    "الدفع عند الوصول نقداً أو عبر التحويل البنكي",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                      <p className="text-foreground pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="bg-muted/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">أسئلة شائعة – توصيل مطار جدة إلى مكة</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg text-primary">كم سعر التوصيل من مطار جدة إلى مكة المكرمة؟</h3>
                    <p className="text-muted-foreground mt-1">يتراوح السعر بين 200 و 500 ريال سعودي حسب نوع السيارة وعدد الركاب.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">كم تستغرق الرحلة من مطار جدة إلى مكة؟</h3>
                    <p className="text-muted-foreground mt-1">تستغرق الرحلة بين 60 و 90 دقيقة حسب حركة المرور وطريق السفر.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">هل تتوفر خدمة الاستقبال من مطار جدة في منتصف الليل؟</h3>
                    <p className="text-muted-foreground mt-1">نعم، خدمتنا متاحة 24 ساعة طوال أيام الأسبوع بما في ذلك الرحلات الليلية.</p>
                  </div>
                </div>
              </section>

            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border rounded-xl p-6 shadow-sm sticky top-24 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary border-b pb-3">احجز توصيلك الآن</h3>
                  <a
                    href="https://wa.me/966544546558?text=أريد%20حجز%20توصيل%20من%20مطار%20جدة%20إلى%20مكة"
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
                      <Link to="/airport-jeddah">
                        <ArrowLeft className="ml-2 h-4 w-4" />
                        جميع رحلات مطار جدة
                      </Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link to="/makkah-madinah">
                        <ArrowLeft className="ml-2 h-4 w-4" />
                        توصيل مكة إلى المدينة
                      </Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link to="/taxi-makkah">
                        <ArrowLeft className="ml-2 h-4 w-4" />
                        تكسي مكة المكرمة
                      </Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link to="/hotels-makkah">
                        <ArrowLeft className="ml-2 h-4 w-4" />
                        فنادق مكة المكرمة
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
