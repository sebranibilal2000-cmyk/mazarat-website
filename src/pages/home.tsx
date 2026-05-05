import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, ThumbsUp, Car, ArrowLeft, HeartHandshake, Star, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/star-rating";

function CityCard({ title, path, desc, gradient, img, imgAlt }: { title: string; path: string; desc: string; gradient: string; img: string; imgAlt: string }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
      <Link to={path}>
        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all group cursor-pointer h-full">
          <div className={`relative h-44 sm:h-56 bg-gradient-to-br ${gradient} overflow-hidden flex items-end`}>
            <img
              src={img}
              alt={imgAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />
            <div className="relative z-10 p-5 w-full">
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-white/80 text-sm">{desc}</p>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": "https://mazarat-sa.online/#localbusiness",
    "name": "تاكسي المزارات التوصيل من مطار جدة الى مكة و المدينة",
    "alternateName": "مزارات للتوصيل",
    "telephone": "+966544546558",
    "url": "https://mazarat-sa.online",
    "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMDCkm01svePifIZ3DVJ3aF8UQSUdPjSzGilXRANR4KA47uyMZryl36GdT-M7I-NZ7qRLNiNFwNgBkMYxfcE8SMn5ttlcJl4iTn55RYfgux4YVzDAcURaVpXr7coi9KaMUa7Qmd0duxLMuvYpWtqDgOe4MCnAnl_TzTf5vJJQAnVyt1_7MmZOpkBjOe7vc/s320/Gemini_Generated_Image_cne8bdcne8bdcne8.webp",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMDCkm01svePifIZ3DVJ3aF8UQSUdPjSzGilXRANR4KA47uyMZryl36GdT-M7I-NZ7qRLNiNFwNgBkMYxfcE8SMn5ttlcJl4iTn55RYfgux4YVzDAcURaVpXr7coi9KaMUa7Qmd0duxLMuvYpWtqDgOe4MCnAnl_TzTf5vJJQAnVyt1_7MmZOpkBjOe7vc/s320/Gemini_Generated_Image_cne8bdcne8bdcne8.webp",
    "areaServed": [
      { "@type": "City", "name": "مكة المكرمة" },
      { "@type": "City", "name": "جدة" },
      { "@type": "City", "name": "المدينة المنورة" },
      { "@type": "City", "name": "الطائف" }
    ],
    "priceRange": "200 SAR - 1500 SAR",
    "openingHours": "Mo-Su 00:00-23:59",
    "description": "توصيل من جدة إلى مكة والمدينة والطائف | سائق خاص | نقل من المطار للحجز عبر واتساب 966544546558",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "284",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "كم سعر التكسي من مطار جدة إلى مكة؟",
        "acceptedAnswer": { "@type": "Answer", "text": "يتراوح سعر التوصيل من مطار جدة إلى مكة بين 200 و 500 ريال حسب نوع السيارة." }
      },
      {
        "@type": "Question",
        "name": "هل الخدمة متاحة 24 ساعة؟",
        "acceptedAnswer": { "@type": "Answer", "text": "نعم، خدمتنا متاحة على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك المواسم والأعياد." }
      },
      {
        "@type": "Question",
        "name": "كم سعر التكسي من مكة إلى المدينة؟",
        "acceptedAnswer": { "@type": "Answer", "text": "يتراوح سعر التوصيل من مكة المكرمة إلى المدينة المنورة بين 400 و 1000 ريال حسب نوع السيارة." }
      },
      {
        "@type": "Question",
        "name": "هل الأسعار ثابتة ومحددة مسبقاً؟",
        "acceptedAnswer": { "@type": "Answer", "text": "نعم، نعتمد نظام الأسعار الثابتة المتفق عليها مسبقاً دون أي رسوم خفية." }
      }
    ]
  };

  const destinations = [
    {
      title: "مكة المكرمة",
      path: "/taxi-makkah",
      desc: "توصيل من وإلى الحرم، فنادق مكة، ومزارات العمرة",
      gradient: "from-green-900 via-green-800 to-yellow-900",
      img: "/makkah-taxi.webp",
      imgAlt: "تاكسي مكة",
    },
    {
      title: "جدة ومطارها",
      path: "/taxi-jeddah",
      desc: "توصيل مطار الملك عبدالعزيز ورحلات جدة",
      gradient: "from-blue-900 via-blue-800 to-teal-900",
      img: "/jeddah-taxi.webp",
      imgAlt: "تاكسي جدة",
    },
    {
      title: "المدينة المنورة",
      path: "/taxi-madinah",
      desc: "رحلات آمنة للمسجد النبوي والمزارات",
      gradient: "from-emerald-900 via-emerald-800 to-green-900",
      img: "/madinah-taxi.webp",
      imgAlt: "تاكسي المدينة المنورة",
    },
    {
      title: "الطائف",
      path: "/taxi-taif",
      desc: "توصيل الطائف، الهدا، وميقات قرن المنازل",
      gradient: "from-purple-900 via-purple-800 to-rose-900",
      img: "/taif-taxi.webp",
      imgAlt: "تاكسي طائف",
    },
    {
      title: "مطار جدة → مكة",
      path: "/airport-jeddah-makkah",
      desc: "توصيل مباشر من المطار إلى مكة المكرمة",
      gradient: "from-orange-900 via-orange-800 to-yellow-900",
      img: "/airport-makkah-taxi.webp",
      imgAlt: "تاكسي مكة",
    },
    {
      title: "مكة → المدينة",
      path: "/makkah-madinah",
      desc: "رحلة مريحة للمسجد النبوي الشريف",
      gradient: "from-teal-900 via-teal-800 to-cyan-900",
      img: "/makkah-madinah-taxi.webp",
      imgAlt: "تاكسي مكة المدينة",
    },
  ];

  const features = [
    { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "أسعار ثابتة", desc: "يتم الاتفاق على السعر مسبقاً ولا توجد أي رسوم مخفية عند الوصول." },
    { icon: <Clock className="h-8 w-8 text-primary" />, title: "خدمة 24 ساعة", desc: "متواجدون على مدار الساعة طوال أيام الأسبوع لخدمتكم." },
    { icon: <Car className="h-8 w-8 text-primary" />, title: "سيارات مريحة", desc: "أسطول حديث ومكيف من السيارات السيدان والعائلية والفانات." },
    { icon: <ThumbsUp className="h-8 w-8 text-primary" />, title: "سائقون محترفون", desc: "فريق من السائقين ذوي الخبرة والأخلاق العالية بمعرفة تامة بالطرق." },
  ];

  const routes = [
    { route: "مطار جدة → مكة", price: "200–500 ريال", link: "/airport-jeddah-makkah", time: "60–90 دقيقة" },
    { route: "مكة → المدينة المنورة", price: "400–1000 ريال", link: "/makkah-madinah", time: "4–5 ساعات" },
    { route: "مكة → الطائف", price: "300–800 ريال", link: "/taxi-makkah", time: "90–120 دقيقة" },
    { route: "مطار جدة → المدينة", price: "500–1000 ريال", link: "/airport-jeddah", time: "5–6 ساعات" },
    { route: "مكة → فنادق مكة", price: "50–200 ريال", link: "/hotels-makkah", time: "10–30 دقيقة" },
    { route: "المدينة → المطار", price: "400–800 ريال", link: "/taxi-madinah", time: "4–5 ساعات" },
  ];

  return (
    <>
      <Helmet>
        <title>تاكسي العمرة والمزارات – تكسي مكة جدة المدينة الطائف | خدمة 24 ساعة</title>
        <meta name="description" content="تاكسي العمرة والمزارات – أفضل خدمة تكسي لمكة المكرمة، جدة، المدينة المنورة، والطائف. توصيل من مطار جدة، فنادق مكة، والمدينة. أسعار ثابتة وخدمة 24 ساعة. احجز الآن عبر واتساب." />
        <link rel="canonical" href="https://mazarat-sa.online/" />
        <meta property="og:title" content="تاكسي العمرة والمزارات – تكسي مكة جدة المدينة الطائف" />
        <meta property="og:description" content="خدمة تكسي احترافية لمكة المكرمة، جدة، المدينة المنورة، والطائف. أسعار ثابتة وخدمة 24 ساعة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:image" content="https://mazarat-sa.online/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="تاكسي العمرة والمزارات" />
        <meta name="twitter:description" content="خدمة تكسي احترافية لمكة المكرمة، جدة، المدينة المنورة، والطائف. أسعار ثابتة وخدمة 24 ساعة." />
        <meta name="twitter:image" content="https://mazarat-sa.online/opengraph.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-yellow-900 opacity-95" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,white,transparent_60%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="text-white/80 text-sm">4.9 من 5 – أكثر من 284 تقييم</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              تاكسي العمرة والمزارات – تكسي مكة، جدة، المدينة، الطائف
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-white/90">
              رفيقك الموثوق في رحلتك الروحانية. أسعار ثابتة، سيارات مريحة، وخدمة على مدار الساعة لتوصيلك بأمان بين المدن المقدسة.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
                  احجز رحلتك الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                <a href="tel:+966544546558">
                  <Phone className="mr-2 h-5 w-5" />
                  اتصل الآن
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="border-none shadow-md bg-card hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-5 flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-primary/10 rounded-full">{feat.icon}</div>
                    <h3 className="text-lg font-bold text-foreground">{feat.title}</h3>
                    <p className="text-muted-foreground text-sm">{feat.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">وجهاتنا الرئيسية</h2>
            <p className="text-muted-foreground">نوفر خدمة التوصيل من وإلى أهم المدن والوجهات الدينية في المملكة.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <CityCard key={dest.path} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Routes & Prices */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">أسعار أبرز المسارات</h2>
            <p className="text-muted-foreground">أسعار تقريبية ثابتة للرحلات الأكثر طلباً.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {routes.map((item, i) => (
              <Card key={i} className="border-primary/20 hover:border-primary/50 transition-colors hover:shadow-md">
                <CardContent className="p-5 flex flex-col items-center text-center gap-2">
                  <MapPin className="h-7 w-7 text-primary" />
                  <h3 className="text-lg font-bold">{item.route}</h3>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                  <p className="text-xs text-muted-foreground">⏱ {item.time}</p>
                  <Button variant="outline" asChild className="w-full mt-1">
                    <Link to={item.link}>عرض التفاصيل</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About / Trust */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">لماذا تختار تاكسي العمرة والمزارات؟</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                نحن شركة متخصصة في خدمات نقل المعتمرين والزوار في مكة المكرمة، جدة، المدينة المنورة، والطائف منذ سنوات. ندرك أهمية رحلتك الروحانية، لذا نضمن لك أعلى مستويات الراحة والأمان.
              </p>
              <ul className="space-y-3">
                {[
                  "سيارات حديثة ومعقمة ومجهزة للمسافات الطويلة",
                  "سائقون ملتزمون بالمواعيد وبأوقات الصلاة",
                  "خبرة بجميع فنادق مكة والمدينة والمزارات",
                  "أسعار شفافة متفق عليها مسبقاً بلا مفاجآت",
                  "خدمة استقبال في المطار بلافتة باسمك",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <ShieldCheck className="h-5 w-5 text-green-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <Button asChild>
                  <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">احجز الآن</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/about">تعرف علينا</Link>
                </Button>
              </div>
            </div>
            <div className="bg-card border rounded-2xl p-8 shadow-sm text-center">
              <div className="flex justify-center mb-2">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-8 w-8 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-5xl font-bold text-primary mb-1">4.9</p>
              <p className="text-muted-foreground mb-6">من 5 – بناءً على 284 تقييم</p>
              <div className="border-t pt-6">
                <p className="font-semibold mb-4">قيّمنا أنت أيضاً!</p>
                <StarRating />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">أسئلة شائعة</h2>
          <div className="space-y-4">
            {[
              { q: "كم سعر التكسي من مطار جدة إلى مكة؟", a: "يتراوح السعر بين 200 و 500 ريال سعودي حسب نوع السيارة وعدد الركاب. تواصل معنا للحصول على السعر النهائي." },
              { q: "هل الخدمة متاحة 24 ساعة؟", a: "نعم، خدمتنا متاحة على مدار 24 ساعة طوال أيام الأسبوع بما في ذلك المواسم والأعياد والرحلات الليلية." },
              { q: "كم سعر التكسي من مكة إلى المدينة المنورة؟", a: "يتراوح السعر بين 400 و 1000 ريال للرحلة الكاملة حسب نوع السيارة. الرحلة تستغرق 4-5 ساعات." },
              { q: "هل يمكن الحجز المسبق؟", a: "نعم، ويُنصح بالحجز المسبق خاصة في مواسم الحج والعمرة. تواصل معنا عبر واتساب لتثبيت موعدك." },
            ].map((item, i) => (
              <Card key={i} className="border-primary/10">
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/faq">عرض جميع الأسئلة الشائعة</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <HeartHandshake className="h-14 w-14 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">نرافقك في رحلتك الإيمانية</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            ندرك أهمية رحلتك وقيمتها الروحية. سياراتنا معقمة ومريحة، وسائقونا على دراية بكافة الطرق والفنادق والمزارات.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">احجز عبر واتساب</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white/30 hover:bg-white/10" asChild>
              <a href="tel:+966544546558">اتصل بنا</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
