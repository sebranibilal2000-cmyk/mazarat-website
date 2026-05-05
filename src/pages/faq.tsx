import { Helmet } from "react-helmet-async";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "كيف يمكنني حجز تكسي من مكة للطائف؟",
      a: "يمكنك التواصل معنا عبر واتساب أو الاتصال المباشر على الرقم +966544546558 وسنرتب رحلتك فوراً بسعر ثابت مع سائق محترف."
    },
    {
      q: "هل تتوفر خدمة التكسي 24 ساعة؟",
      a: "نعم، نوفر خدمة التوصيل 24 ساعة طوال أيام الأسبوع بما في ذلك أوقات رحلات العمرة المبكرة والمتأخرة."
    },
    {
      q: "ما هي طريقة الدفع المتاحة؟",
      a: "نقبل الدفع النقدي وكذلك التحويل البنكي والدفع الإلكتروني."
    },
    {
      q: "هل الأسعار ثابتة أم تتغير؟",
      a: "نوفر أسعاراً ثابتة لجميع الرحلات بدون مفاجآت، ويمكن الاتفاق على السعر مسبقاً عند الحجز."
    },
    {
      q: "كم سعر التكسي من مطار جدة للحرم المكي؟",
      a: "يتراوح سعر التوصيل من مطار جدة للحرم المكي بين 200 و500 ريال سعودي حسب نوع السيارة وعدد الركاب."
    },
    {
      q: "هل يمكن الحجز للمجموعات والعائلات؟",
      a: "نعم، لدينا سيارات مناسبة للعائلات والمجموعات الكبيرة، تواصل معنا لمعرفة الخيارات المتاحة."
    },
    {
      q: "هل تتوفر خدمة توصيل للمزارات والزيارات الدينية؟",
      a: "نعم، نوفر رحلات زيارة متكاملة في مكة المكرمة والمدينة المنورة وبأسعار معقولة."
    },
    {
      q: "كم تستغرق الرحلة من مكة للمدينة المنورة؟",
      a: "تستغرق الرحلة من مكة المكرمة إلى المدينة المنورة حوالي 4 إلى 5 ساعات بالسيارة."
    }
  ];

  return (
    <>
      <Helmet>
        <title>الأسئلة الشائعة عن تاكسي العمرة والمزارات</title>
        <meta name="description" content="إجابات على الأسئلة الشائعة حول أسعار التكاسي، أوقات العمل، طرق الحجز، والرحلات بين مكة وجدة والمدينة والطائف." />
        <link rel="canonical" href="https://mazarat-sa.online/faq" />
        <meta property="og:title" content="الأسئلة الشائعة عن تاكسي العمرة والمزارات" />
        <meta property="og:description" content="إجابات على الأسئلة الشائعة حول أسعار التكاسي، أوقات العمل، طرق الحجز بين مكة وجدة والمدينة والطائف." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/faq" />
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
              الأسئلة الشائعة عن تاكسي العمرة والمزارات
            </h1>
            <p className="text-xl text-muted-foreground">
              كل ما تحتاج معرفته عن خدماتنا، أسعارنا، وطريقة الحجز.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg bg-green-600 hover:bg-green-700 text-white" asChild data-testid="cta-button">
                <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  لم تجد إجابتك؟ تواصل معنا
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border px-6 rounded-lg data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-right text-lg font-bold hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-right text-base text-muted-foreground leading-relaxed pb-6 pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </>
  );
}