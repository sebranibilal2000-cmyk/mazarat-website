import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PhoneCall, ShieldCheck, Clock, CheckCircle2, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <>
      <Helmet>
        <title>تاكسي العمرة والمزارات – من نحن | رفيقكم الموثوق</title>
        <meta name="description" content="تعرف على تاكسي العمرة والمزارات، الشركة الرائدة في تقديم خدمات النقل الموثوقة للمعتمرين والزوار في السعودية منذ سنوات." />
        <link rel="canonical" href="https://mazarat-sa.online/about" />
        <meta property="og:title" content="تاكسي العمرة والمزارات – من نحن" />
        <meta property="og:description" content="تعرف على تاكسي العمرة والمزارات، الشركة الرائدة في خدمات النقل الموثوقة للمعتمرين والزوار في السعودية." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/about" />
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
              تاكسي العمرة والمزارات – من نحن
            </h1>
            <p className="text-xl text-muted-foreground">
              نحن لسنا مجرد وسيلة نقل، بل رفقاء في رحلتكم الروحانية.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div className="prose prose-lg prose-headings:text-foreground prose-a:text-primary max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground border-r-4 border-primary pr-6 mb-12">
              منذ سنوات، كرسنا جهودنا في "تاكسي العمرة والمزارات" لخدمة ضيوف الرحمن وزوار الأماكن المقدسة في المملكة العربية السعودية. نحن نفهم أهمية الرحلة وروحانيتها، ولذلك نحرص على تقديم تجربة تنقل آمنة، مريحة، وخالية من المتاعب لعملائنا.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">رؤيتنا ورسالتنا</h2>
                <p className="mb-4">
                  <strong>رؤيتنا:</strong> أن نكون الخيار الأول والموثوق لكل معتمر وزائر يبحث عن وسيلة نقل آمنة ومريحة بين مدن الحجاز (مكة المكرمة، المدينة المنورة، جدة، والطائف).
                </p>
                <p>
                  <strong>رسالتنا:</strong> تقديم خدمة نقل احترافية تعتمد على السائقين ذوي الكفاءة، والسيارات الحديثة، والالتزام المطلق بالمواعيد، لتمكين ضيوف الرحمن من التفرغ لعبادتهم وزياراتهم بطمأنينة.
                </p>
              </div>
              <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20 flex items-center justify-center">
                <HeartHandshake className="h-32 w-32 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-8 text-center mt-16">قيمنا الأساسية</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex gap-4 items-start">
                <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">الأمانة</h3>
                  <p className="text-muted-foreground">نلتزم بالصدق والشفافية في تعاملنا وأسعارنا. ما نتفق عليه هو ما نلتزم به بدون أي تكاليف خفية.</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex gap-4 items-start">
                <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">الاحترافية</h3>
                  <p className="text-muted-foreground">سائقونا مدربون ومؤهلون ويعرفون الطرق والمزارات بدقة لضمان أفضل تجربة لك.</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex gap-4 items-start">
                <Clock className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">الدقة في المواعيد</h3>
                  <p className="text-muted-foreground">وقتك ثمين، خاصة في مواعيد الطيران وأوقات الصلاة. نحن نحترم مواعيدنا بدقة متناهية.</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex gap-4 items-start">
                <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">السلامة أولاً</h3>
                  <p className="text-muted-foreground">صيانة دورية للسيارات وقيادة متأنية ومسؤولة لضمان وصولك ووصول عائلتك بأمان.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">هل أنت مستعد لحجز رحلتك؟</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              فريقنا متواجد 24 ساعة للرد على استفساراتك وتلبية طلبات الحجز الخاصة بك، سواء كانت فورية أو مجدولة مسبقاً.
            </p>
            <Button size="lg" variant="secondary" className="text-lg bg-white text-primary hover:bg-white/90" asChild data-testid="cta-button">
              <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
                <PhoneCall className="mr-2 h-5 w-5" />
                تواصل معنا الآن
              </a>
            </Button>
          </div>

        </div>
      </div>
    </>
  );
}