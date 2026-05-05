import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TaxiMakkah() {
  return (
    <>
      <Helmet>
        <title>تاكسي مكة المكرمة – تكسي مكة للعمرة والحرام | خدمة 24 ساعة</title>
        <meta name="description" content="تكسي مكة المكرمة للتوصيل من وإلى الحرم، المطار، الطائف، والمدينة المنورة. سيارات مريحة وأسعار ثابتة لتوصيل المعتمرين والزوار. احجز الآن." />
        <link rel="canonical" href="https://mazarat-sa.online/taxi-makkah" />
        <meta property="og:title" content="تاكسي مكة المكرمة – تكسي مكة للعمرة والحرام" />
        <meta property="og:description" content="تكسي مكة المكرمة للتوصيل من وإلى الحرم، المطار، الطائف، والمدينة المنورة. أسعار ثابتة وخدمة 24 ساعة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/taxi-makkah" />
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
              تاكسي مكة المكرمة – تكسي مكة للعمرة والحرام
            </h1>
            <p className="text-xl text-muted-foreground">
              خدمة توصيل احترافية داخل مكة المكرمة ومن وإلى المدن والمطارات الأخرى.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg bg-green-600 hover:bg-green-700 text-white" asChild data-testid="cta-button">
                <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  احجز تكسي مكة الآن
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
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي من مكة للحرام</h2>
              <p>
                نوفر خدمة توصيل سريعة وآمنة من كافة فنادق مكة المكرمة ومناطقها إلى الحرم المكي الشريف. نضمن لك سيارات نظيفة ومريحة وسائقين يعرفون أفضل الطرق لتجنب الازدحام المروري خاصة في مواسم الذروة.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي مكة للطائف</h2>
              <p>
                رحلات يومية ومريحة من مكة المكرمة إلى مدينة الطائف والعكس. سواء كنت ترغب في زيارة الطائف للسياحة والتمتع بأجوائها المعتدلة أو للذهاب إلى ميقات قرن المنازل (السيل الكبير)، نحن نوفر لك أفضل السيارات.
              </p>
              <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
                <h3 className="text-xl font-bold mt-0 text-foreground">كم سعر التكسي من مكة للطائف؟</h3>
                <p className="mb-0">
                  يتراوح سعر التاكسي من مكة المكرمة إلى الطائف بين 300 و 800 ريال سعودي، ويعتمد السعر الدقيق على نوع السيارة (صغيرة أم عائلية) والوجهة المحددة داخل الطائف، وما إذا كانت الرحلة ذهاباً فقط أم ذهاباً وعودة.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي مكة للمدينة</h2>
              <p>
                انتقل براحة وطمأنينة من مكة المكرمة إلى المدينة المنورة لزيارة المسجد النبوي الشريف. سياراتنا مجهزة لقطع المسافات الطويلة وتوفير أقصى درجات الراحة لك ولعائلتك طوال الرحلة التي تستغرق حوالي 4 إلى 5 ساعات.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary border-b pb-4 mb-6">تكسي مكة المطار</h2>
              <p>
                خدمة النقل من مكة المكرمة إلى مطار الملك عبدالعزيز الدولي بجدة (مطار جدة) ومطار الأمير محمد بن عبدالعزيز بالمدينة المنورة. نحرص على دقة المواعيد لضمان وصولك لرحلتك في الوقت المحدد.
              </p>
            </section>

            <section className="bg-muted p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">أسئلة شائعة عن تكسي مكة</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-primary">هل تتوفر تكاسي مكة للعمرة 24 ساعة؟</h4>
                  <p>نعم، خدماتنا متاحة على مدار 24 ساعة طوال أيام الأسبوع لخدمة المعتمرين في أي وقت من اليوم أو الليل.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg text-primary">تكسي مكة للعمرة بسعر ثابت؟</h4>
                  <p>بالتأكيد. نحن نعتمد نظام الأسعار الثابتة للرحلات، يتم الاتفاق على السعر مسبقاً ولا توجد أي رسوم خفية أو مفاجآت عند الوصول.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold mb-4 border-b pb-4 text-primary">لماذا تختارنا في مكة؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>معرفة تامة بشوارع مكة وفنادقها</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>سيارات حديثة ومكيفة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>دقة في المواعيد والموثوقية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                  <span>أسعار معقولة وثابتة</span>
                </li>
              </ul>
              
              <h4 className="font-bold mb-4 text-foreground">وجهات ذات صلة:</h4>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="justify-start w-full" asChild>
                  <Link to="/hotels-makkah">
                    توصيل فنادق مكة
                    <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start w-full" asChild>
                  <Link to="/ziyarat">
                    مزارات مكة المكرمة
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