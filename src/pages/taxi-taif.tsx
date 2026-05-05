import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TaxiTaif() {
  return (
    <>
      <Helmet>
        <title>تكسي الطائف – توصيل من وإلى الطائف | تاكسي العمرة والمزارات</title>
        <meta name="description" content="تكسي الطائف للتوصيل من وإلى مكة المكرمة، جدة، والمدينة المنورة. سيارات قوية ومريحة للرحلات الجبلية. أسعار ثابتة." />
        <link rel="canonical" href="https://mazarat-sa.online/taxi-taif" />
        <meta property="og:title" content="تكسي الطائف – توصيل من وإلى الطائف" />
        <meta property="og:description" content="تكسي الطائف للتوصيل من وإلى مكة المكرمة، جدة، والمدينة المنورة. سيارات قوية للرحلات الجبلية. أسعار ثابتة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/taxi-taif" />
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
              تكسي الطائف – توصيل من وإلى الطائف
            </h1>
            <p className="text-xl text-muted-foreground">
              توصيل آمن ومريح في طرق الطائف الجبلية وإلى كافة مدن ومطارات المنطقة.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg bg-green-600 hover:bg-green-700 text-white" asChild data-testid="cta-button">
                <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  احجز تكسي الطائف الآن
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
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي الطائف لمكة</h2>
              <p>
                رحلات آمنة ومريحة عبر طريق الهدا أو طريق السيل من الطائف إلى مكة المكرمة. نوفر سائقين ذوي كفاءة عالية للتعامل مع الطرق الجبلية بأمان لضمان راحتكم في الرحلة.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي الطائف لجدة</h2>
              <p>
                توصيل مباشر من مدينة الطائف إلى مدينة جدة أو مطار الملك عبدالعزيز الدولي. خدماتنا متوفرة للعائلات والمجموعات بأسعار ثابتة ومناسبة لنقلكم براحة وأمان تام.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي الطائف للعمرة</h2>
              <p>
                للقادمين من الطائف أو عبر مطارها، نوفر خدمات التوصيل للعمرة مع التوقف عند ميقات قرن المنازل (السيل الكبير) أو وادي محرم للإحرام، ثم التوجه مباشرة إلى فنادق مكة المكرمة أو الحرم المكي.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي الطائف للمدينة</h2>
              <p>
                رحلات طويلة ومريحة من الطائف إلى المدينة المنورة لزيارة المسجد النبوي. نوفر سيارات حديثة ومجهزة بأعلى سبل الراحة للمسافات الطويلة.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold mb-4 border-b pb-4 text-primary">لماذا نحن في الطائف؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>سائقون محترفون في القيادة الجبلية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>سيارات قوية وحديثة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>التوقف في مواقيت الإحرام مجاناً</span>
                </li>
              </ul>
              
              <h4 className="font-bold mb-4 text-foreground">روابط ذات صلة:</h4>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="justify-start w-full" asChild>
                  <Link to="/taxi-makkah">
                    تكسي مكة
                    <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start w-full" asChild>
                  <Link to="/airport-jeddah">
                    توصيل مطار جدة
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