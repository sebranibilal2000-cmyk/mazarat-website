import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TaxiMadinah() {
  return (
    <>
      <Helmet>
        <title>تكسي المدينة المنورة – توصيل من وإلى المدينة | تاكسي العمرة والمزارات</title>
        <meta name="description" content="تكسي المدينة المنورة للتوصيل من وإلى مكة، مطار المدينة، جدة، والمزارات الدينية. خدمة مريحة وأسعار ثابتة للمعتمرين والزوار." />
        <link rel="canonical" href="https://mazarat-sa.online/taxi-madinah" />
        <meta property="og:title" content="تكسي المدينة المنورة – توصيل من وإلى المدينة" />
        <meta property="og:description" content="تكسي المدينة المنورة للتوصيل من وإلى مكة، مطار المدينة، جدة، والمزارات الدينية. أسعار ثابتة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/taxi-madinah" />
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
              تكسي المدينة المنورة – توصيل من وإلى المدينة
            </h1>
            <p className="text-xl text-muted-foreground">
              رحلات مريحة وآمنة في مدينة رسول الله، ومن وإلى مكة المكرمة والمطارات.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg bg-green-600 hover:bg-green-700 text-white" asChild data-testid="cta-button">
                <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  احجز تكسي المدينة الآن
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
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي المدينة لمكة</h2>
              <p>
                رحلات تنقل مريحة من المدينة المنورة إلى مكة المكرمة لأداء مناسك العمرة. سياراتنا مجهزة للمسافات الطويلة لتوفير رحلة هادئة ومريحة تمتد لقرابة الأربع ساعات، مع إمكانية التوقف في الميقات (ذي الحليفة / آبار علي) للإحرام.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي المدينة للمطار</h2>
              <p>
                خدمة النقل من وإلى مطار الأمير محمد بن عبدالعزيز الدولي بالمدينة المنورة. نوفر سيارات واسعة لاستيعاب الأمتعة الكبيرة والعائلات، لضمان وصولك إلى المطار أو الفندق في الوقت المناسب وبكل أريحية.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي المدينة للزيارات</h2>
              <p>
                جولات سياحية دينية لزيارة أهم المعالم والمزارات في المدينة المنورة. يتضمن ذلك مسجد قباء، جبل أحد ومقبرة الشهداء، مسجد القبلتين، ومساجد الخندق وغيرها من الأماكن المباركة بسيارات مريحة وأسعار مناسبة.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي المدينة لجدة</h2>
              <p>
                توصيل آمن ومباشر من المدينة المنورة إلى مطار الملك عبدالعزيز بجدة أو إلى فنادق وأحياء مدينة جدة. نلتزم بالمواعيد المحددة لضمان لحاقك برحلات الطيران بكل طمأنينة.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold mb-4 border-b pb-4 text-primary">الراحة في طيبة الطيبة</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>رحلات هادئة ومريحة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>معرفة كاملة بمزارات المدينة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>توقف عند الميقات للإحرام</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>أسعار مدروسة وثابتة</span>
                </li>
              </ul>
              
              <h4 className="font-bold mb-4 text-foreground">روابط ذات صلة:</h4>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="justify-start w-full" asChild>
                  <Link to="/hotels-madinah">
                    أسعار فنادق المدينة المنورة
                    <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start w-full" asChild>
                  <Link to="/ziyarat">
                    المزارات في المدينة
                    <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start w-full" asChild>
                  <Link to="/train-stations">
                    محطة قطار المدينة
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