import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TaxiJeddah() {
  return (
    <>
      <Helmet>
        <title>تكسي جدة – توصيل من مطار جدة ولمكة والمدينة والطائف</title>
        <meta name="description" content="تكسي جدة للتوصيل من مطار الملك عبدالعزيز الدولي إلى مكة المكرمة، المدينة المنورة، والطائف. سيارات مريحة للعائلات وأسعار ثابتة." />
        <link rel="canonical" href="https://mazarat-sa.online/taxi-jeddah" />
        <meta property="og:title" content="تكسي جدة – توصيل من مطار جدة ولمكة والمدينة والطائف" />
        <meta property="og:description" content="تكسي جدة للتوصيل من مطار الملك عبدالعزيز الدولي إلى مكة المكرمة، المدينة المنورة، والطائف. أسعار ثابتة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/taxi-jeddah" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:image" content="https://mazarat-sa.online/opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mazarat-sa.online/opengraph.jpg" />
      </Helmet>

      {/* Header */}
      <div className="bg-muted/30 py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 data-testid="main-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              تكسي جدة – توصيل من مطار جدة ولمكة والمدينة والطائف
            </h1>
            <p className="text-xl text-muted-foreground">
              استقبال من مطار الملك عبدالعزيز وتوصيل آمن ومريح لكافة المدن المقدسة.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg bg-green-600 hover:bg-green-700 text-white" asChild data-testid="cta-button">
                <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  احجز تكسي جدة الآن
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 prose prose-lg prose-headings:text-foreground prose-a:text-primary max-w-none">
            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي من مطار جدة للحرم</h2>
              <p>
                نوفر خدمة الاستقبال في مطار الملك عبدالعزيز الدولي بجدة والتوصيل المباشر إلى الحرم المكي الشريف أو إلى فندقك في مكة المكرمة. سائقونا ينتظرونك في صالة الوصول لمساعدتك في الأمتعة والانطلاق فوراً نحو وجهتك.
              </p>
              <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
                <h3 className="text-xl font-bold mt-0 text-foreground">كم سعر التكسي من مطار جدة للحرم المكي؟</h3>
                <p className="mb-0">
                  يتراوح سعر التوصيل من مطار جدة للحرم المكي بين 200 و 500 ريال سعودي. السعر يختلف بناءً على نوع السيارة (سيدان أم سيارة عائلية كبيرة) ووقت الرحلة. جميع أسعارنا ثابتة ولا تتغير بعد الاتفاق.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي جدة لمكة</h2>
              <p>
                خدمة التوصيل من أي مكان في جدة (فنادق، منازل، أسواق) إلى مكة المكرمة. رحلة مريحة وآمنة تستغرق حوالي ساعة إلى ساعة ونصف حسب موقع الانطلاق والزحام المروري.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي جدة للمدينة</h2>
              <p>
                رحلات مباشرة من مطار جدة أو مدينة جدة إلى المدينة المنورة. يمكنك الاسترخاء في سياراتنا الواسعة والمكيفة طوال الرحلة التي تقدر مسافتها بحوالي 400 كيلومتر (حوالي 4 ساعات).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي جدة للطائف</h2>
              <p>
                توصيل آمن من جدة إلى مدينة الطائف الجبلية الجميلة. استمتع بالمناظر الطبيعية الخلابة خلال الرحلة عبر طريق الهدا أو السيل الكبير مع سائقين ذوي خبرة في الطرق الجبلية.
              </p>
            </section>

            <section className="bg-muted p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">كيف تحجز تكسي من مطار جدة؟</h3>
              <p className="mb-4">عملية الحجز سهلة ومباشرة:</p>
              <ol className="list-decimal pl-6 space-y-2 marker:text-primary font-bold">
                <li>تواصل معنا عبر زر الواتساب في الموقع.</li>
                <li>أرسل تفاصيل رحلتك: الموعد، رقم الرحلة، عدد الأشخاص والأمتعة.</li>
                <li>سنتفق على السعر الثابت للرحلة.</li>
                <li>سيكون السائق بانتظارك في المطار في الوقت المحدد.</li>
              </ol>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold mb-4 border-b pb-4 text-primary">مزايا تكسي المطار</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>استقبال بلوحة الاسم في المطار</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>متابعة مواعيد وصول الرحلات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>مساعدة في حمل ونقل الأمتعة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>سيارات واسعة تناسب العائلات</span>
                </li>
              </ul>
              
              <h4 className="font-bold mb-4 text-foreground">روابط ذات صلة:</h4>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="justify-start w-full" asChild>
                  <Link to="/airport-jeddah">
                    قائمة أسعار مطار جدة
                    <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start w-full" asChild>
                  <Link to="/taxi-makkah">
                    تكسي مكة المكرمة
                    <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}