import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PhoneCall, ArrowLeft, Star, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Ziyarat() {
  return (
    <>
      <Helmet>
        <title>خدمة توصيل للزيارات الدينية في مكة والمدينة | تاكسي العمرة والمزارات</title>
        <meta name="description" content="توصيل شامل للزيارات والمزارات الدينية في مكة المكرمة والمدينة المنورة مع سائقين على دراية بالمعالم التاريخية. جولات بأسعار مميزة." />
        <link rel="canonical" href="https://mazarat-sa.online/ziyarat" />
        <meta property="og:title" content="خدمة توصيل للزيارات الدينية في مكة والمدينة | تاكسي العمرة والمزارات" />
        <meta property="og:description" content="توصيل شامل للزيارات والمزارات الدينية في مكة المكرمة والمدينة المنورة مع سائقين على دراية بالمعالم التاريخية. جولات بأسعار مميزة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/ziyarat" />
        <meta property="og:image" content="https://mazarat-sa.online/opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mazarat-sa.online/opengraph.jpg" />
      </Helmet>

      {/* Header */}
      <div className="bg-muted/30 py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 data-testid="main-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              خدمة توصيل للزيارات الدينية في مكة والمدينة
            </h1>
            <p className="text-xl text-muted-foreground">
              استكشف المعالم الإسلامية والأماكن التاريخية براحة تامة مع سائقينا الخبراء.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg bg-green-600 hover:bg-green-700 text-white" asChild data-testid="cta-button">
                <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  احجز جولة زيارات الآن
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Pricing */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">أسعار الزيارات والجولات</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">التوصيل لزيارات مكة</h3>
                <p className="text-2xl font-bold text-primary mb-2" dir="rtl">150 – 1000 ريال</p>
                <p className="text-sm text-muted-foreground">تختلف حسب عدد المزارات ونوع السيارة</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">التوصيل لزيارات المدينة</h3>
                <p className="text-2xl font-bold text-primary mb-2" dir="rtl">150 – 300 ريال</p>
                <p className="text-sm text-muted-foreground">لجولة المزارات النبوية المعتادة</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sites */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6 border-b pb-4">
              <Star className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">أهم مزارات مكة المكرمة</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">جبل النور (غار حراء)</h4>
                  <p className="text-muted-foreground">المكان الذي نزل فيه الوحي لأول مرة على النبي ﷺ.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">جبل ثور (غار ثور)</h4>
                  <p className="text-muted-foreground">الغار الذي اختبأ فيه النبي ﷺ وأبو بكر الصديق في الهجرة.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">صعيد عرفات</h4>
                  <p className="text-muted-foreground">أهم المشاعر المقدسة ومكان الوقوف في الحج (جبل الرحمة).</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">منى ومزدلفة</h4>
                  <p className="text-muted-foreground">المشاعر المقدسة التي يمر بها الحجاج، والجمرات.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">معرض عمارة الحرمين</h4>
                  <p className="text-muted-foreground">متحف يضم مقتنيات أثرية وتاريخية للحرمين الشريفين.</p>
                </div>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link to="/taxi-makkah">العودة إلى خدمات مكة</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6 border-b pb-4">
              <Star className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">أهم مزارات المدينة المنورة</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">مسجد قباء</h4>
                  <p className="text-muted-foreground">أول مسجد بني في الإسلام، والصلاة فيه كأجر عمرة.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">جبل أحد ومقبرة الشهداء</h4>
                  <p className="text-muted-foreground">ساحة معركة أحد، ومقابر شهداء المسلمين ومنهم حمزة بن عبدالمطلب.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">مسجد القبلتين</h4>
                  <p className="text-muted-foreground">المسجد الذي نزل فيه الأمر بتحويل القبلة إلى الكعبة.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">المساجد السبعة (موقع الخندق)</h4>
                  <p className="text-muted-foreground">موقع غزوة الخندق التاريخية والمساجد المرتبطة بها.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">مجمع الملك فهد لطباعة المصحف</h4>
                  <p className="text-muted-foreground">أكبر مطبعة للمصحف الشريف في العالم (حسب أوقات الزيارة).</p>
                </div>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link to="/taxi-madinah">العودة إلى خدمات المدينة</Link>
            </Button>
          </div>

        </div>
      </div>
    </>
  );
}