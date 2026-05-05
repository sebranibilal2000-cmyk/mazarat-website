import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PhoneCall, MessageCircle, Clock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    tripDetails: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const text = `مرحباً، أود الاستفسار/الحجز:%0a
الاسم: ${formData.name}%0a
رقم الهاتف: ${formData.phone}%0a
تفاصيل الرحلة (من وإلى): ${formData.tripDetails}%0a
ملاحظات إضافية: ${formData.message}`;

    // Open WhatsApp URL
    window.open(`https://wa.me/966544546558?text=${text}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>تواصل معنا – تاكسي العمرة والمزارات</title>
        <meta name="description" content="تواصل معنا لحجز سيارة توصيل بين مكة، جدة، المدينة، والطائف. نحن متواجدون 24 ساعة ونرد في أقل من 30 دقيقة." />
        <link rel="canonical" href="https://mazarat-sa.online/contact" />
        <meta property="og:title" content="تواصل معنا – تاكسي العمرة والمزارات" />
        <meta property="og:description" content="تواصل معنا لحجز سيارة توصيل بين مكة، جدة، المدينة، والطائف. نحن متواجدون 24 ساعة ونرد في أقل من 30 دقيقة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazarat-sa.online/contact" />
        <meta property="og:image" content="https://mazarat-sa.online/opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mazarat-sa.online/opengraph.jpg" />
      </Helmet>

      {/* Header */}
      <div className="bg-muted/30 py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 data-testid="main-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              تواصل معنا – تاكسي العمرة والمزارات
            </h1>
            <p className="text-xl text-muted-foreground">
              نحن هنا لخدمتك. تواصل معنا للحجز أو لأي استفسار.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-primary">معلومات التواصل المباشر</h2>
              
              <Card className="border-none shadow-md bg-card">
                <CardContent className="p-6 space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">واتساب (الأسرع)</h3>
                      <a href="https://wa.me/966544546558" dir="ltr" className="text-lg text-green-600 hover:underline font-bold inline-block">
                        +966 54 454 6558
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <PhoneCall className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">اتصال هاتفي</h3>
                      <a href="tel:+966544546558" dir="ltr" className="text-lg text-primary hover:underline font-bold inline-block">
                        +966 54 454 6558
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">أوقات العمل</h3>
                      <p className="text-muted-foreground">خدمة 24 ساعة طوال أيام الأسبوع</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">مناطق التغطية</h3>
                      <p className="text-muted-foreground">مكة المكرمة، جدة، المدينة المنورة، الطائف</p>
                    </div>
                  </div>
                  
                </CardContent>
              </Card>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50 p-6 rounded-xl text-center">
                <p className="text-green-800 dark:text-green-400 font-bold text-lg">
                  نرد على جميع رسائل الواتساب في أقل من 30 دقيقة!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold mb-6">أرسل تفاصيل رحلتك</h2>
                <p className="text-muted-foreground mb-8">
                  قم بتعبئة النموذج التالي وسيقوم بتحويلك مباشرة إلى الواتساب مع رسالة جاهزة بكل التفاصيل.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكريم</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="أدخل اسمك" 
                        required 
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف للتواصل</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="رقم الجوال" 
                        required 
                        dir="ltr"
                        className="text-right"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tripDetails">تفاصيل الرحلة (من وإلى)</Label>
                    <Input 
                      id="tripDetails" 
                      name="tripDetails" 
                      value={formData.tripDetails} 
                      onChange={handleChange} 
                      placeholder="مثال: من مطار جدة إلى فندق ساعة مكة" 
                      required 
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">ملاحظات إضافية (عدد الأشخاص، نوع السيارة المفضل، الخ)</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="أي تفاصيل أخرى تود إضافتها..." 
                      className="min-h-[120px] text-right"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg bg-green-600 hover:bg-green-700 text-white" data-testid="cta-button">
                    <Send className="mr-2 h-5 w-5" />
                    إرسال الطلب عبر واتساب
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}