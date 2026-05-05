import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PhoneCall, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrainStations() {
  return (
    <>
      <Helmet>
        <title>توصيل من وإلى محطات قطار الحرمين | تاكسي العمرة والمزارات</title>
        <meta name="description" content="توصيل من وإلى محطة قطار الحرمين السريع في مكة المكرمة والمدينة المنورة. أسعار ثابتة وسيارات مريحة متوفرة دائماً." />
        <link rel="canonical" href="https://mazarat-sa.online/train-stations" />
        <meta property="og:title" content="توصيل من وإلى محطات قطار الحرمين | تاكسي العمرة والمزارات" />
        <meta property="og:description" content="توصيل من وإلى محطة قطار الحرمين السريع في مكة المكرمة والمدينة المنورة. أسعار ثابتة وسيارات مريحة متوفرة دائماً." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/train-stations" />
        <meta property="og:image" content="https://mazarat-sa.online/opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mazarat-sa.online/opengraph.jpg" />
      </Helmet>

      {/* Header */}
      <div className="bg-muted/30 py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 data-testid="main-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              توصيل من وإلى محطات قطار الحرمين
            </h1>
            <p className="text-xl text-muted-foreground">
              نرافقك فور وصولك لمحطة القطار لإيصالك لفندقك بكل سرعة وراحة.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg bg-green-600 hover:bg-green-700 text-white" asChild data-testid="cta-button">
                <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  احجز توصيل من المحطة
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">أسعار التوصيل من وإلى المحطات</h2>
          
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-secondary text-secondary-foreground">
                    <th className="p-4 font-bold border-b border-secondary-foreground/20">الرحلة</th>
                    <th className="p-4 font-bold border-b border-secondary-foreground/20 w-48">السعر المتوقع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4">التوصيل من محطة قطار مكة إلى فندق في مكة</td>
                    <td className="p-4 font-bold text-primary" dir="rtl">100 – 300 ريال</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4">التوصيل من فندق في مكة إلى محطة قطار مكة</td>
                    <td className="p-4 font-bold text-primary" dir="rtl">100 – 300 ريال</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td colSpan={2} className="p-3 font-bold text-sm text-center text-muted-foreground">محطة المدينة المنورة</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4">التوصيل من محطة قطار المدينة إلى فندق في المدينة</td>
                    <td className="p-4 font-bold text-primary" dir="rtl">100 – 300 ريال</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4">التوصيل من فندق في المدينة إلى محطة قطار المدينة</td>
                    <td className="p-4 font-bold text-primary" dir="rtl">100 – 300 ريال</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-100 dark:border-blue-900">
            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5" /> ملاحظة هامة:
            </h3>
            <p className="text-blue-700 dark:text-blue-400">
              ننصح بحجز السيارة مسبقاً قبل وصول القطار، حيث سيقوم السائق بانتظارك عند مخرج المحطة لتجنب الانتظار والازدحام. الأسعار تعتمد على قرب أو بعد الفندق عن المحطة ونوع السيارة.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/">
                العودة للصفحة الرئيسية
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
        </div>
      </div>
    </>
  );
}