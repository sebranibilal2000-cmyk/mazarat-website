import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MessageCircle, Phone, MapPin, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function TaxiLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const iconSize = size === "sm" ? "h-5 w-5" : "h-7 w-7";
  const textSize = size === "sm" ? "text-base" : "text-xl";
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
          <Car className={`${iconSize} text-primary-foreground`} />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${textSize} font-extrabold text-foreground tracking-tight`}>مزارات</span>
        <span className="text-[10px] text-primary font-medium tracking-widest uppercase">MAZARAT</span>
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname: location } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/taxi-makkah", label: "تكسي مكة" },
    { to: "/taxi-jeddah", label: "تكسي جدة" },
    { to: "/taxi-madinah", label: "تكسي المدينة" },
    { to: "/airport-jeddah", label: "مطار جدة" },
    { to: "/makkah-madinah", label: "مكة-المدينة" },
    { to: "/faq", label: "الأسئلة الشائعة" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <TaxiLogo />
          </Link>

          <nav className="hidden lg:flex items-center gap-5">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.to ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+966544546558" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span dir="ltr">+966 54 454 6558</span>
            </a>
            <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-green-600 hover:bg-green-700 text-white rounded-full">
                <MessageCircle className="h-4 w-4" />
                احجز الآن
              </Button>
            </a>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="فتح القائمة الرئيسية">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[380px]">
              <div className="flex flex-col gap-6 py-6">
                <Link to="/" className="mb-2" onClick={() => setIsOpen(false)}>
                  <TaxiLogo />
                </Link>
                <nav className="flex flex-col gap-1">
                  {[
                    { to: "/", label: "الرئيسية" },
                    { to: "/taxi-makkah", label: "تكسي مكة المكرمة" },
                    { to: "/taxi-jeddah", label: "تكسي جدة" },
                    { to: "/taxi-madinah", label: "تكسي المدينة المنورة" },
                    { to: "/taxi-taif", label: "تكسي الطائف" },
                    { to: "/airport-jeddah", label: "مطار الملك عبدالعزيز جدة" },
                    { to: "/airport-jeddah-makkah", label: "مطار جدة → مكة" },
                    { to: "/makkah-madinah", label: "مكة → المدينة المنورة" },
                    { to: "/hotels-makkah", label: "فنادق مكة" },
                    { to: "/hotels-madinah", label: "فنادق المدينة" },
                    { to: "/ziyarat", label: "المزارات الدينية" },
                    { to: "/train-stations", label: "محطات القطار" },
                    { to: "/faq", label: "الأسئلة الشائعة" },
                    { to: "/about", label: "من نحن" },
                    { to: "/contact", label: "اتصل بنا" },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                        location === link.to
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 mt-2">
                  <a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white rounded-full">
                      <MessageCircle className="h-4 w-4" />
                      احجز عبر واتساب
                    </Button>
                  </a>
                  <a href="tel:+966544546558">
                    <Button variant="outline" className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      اتصل بنا
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <TaxiLogo size="sm" />
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-4">
              رفيقك الموثوق في رحلتك الروحانية. خدمة توصيل احترافية وآمنة بين مكة، جدة، المدينة المنورة، والطائف.
            </p>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Phone className="h-4 w-4" />
              <a href="tel:+966544546558" dir="ltr" className="hover:underline">+966 54 454 6558</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">الوجهات الرئيسية</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link to="/taxi-makkah" className="hover:text-primary transition-colors">تكسي مكة المكرمة</Link></li>
              <li><Link to="/taxi-jeddah" className="hover:text-primary transition-colors">تكسي جدة والمطار</Link></li>
              <li><Link to="/taxi-madinah" className="hover:text-primary transition-colors">تكسي المدينة المنورة</Link></li>
              <li><Link to="/taxi-taif" className="hover:text-primary transition-colors">تكسي الطائف</Link></li>
              <li><Link to="/makkah-madinah" className="hover:text-primary transition-colors">توصيل مكة إلى المدينة</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">خدمات أخرى</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link to="/airport-jeddah" className="hover:text-primary transition-colors">توصيل مطار جدة</Link></li>
              <li><Link to="/airport-jeddah-makkah" className="hover:text-primary transition-colors">مطار جدة إلى مكة</Link></li>
              <li><Link to="/hotels-makkah" className="hover:text-primary transition-colors">توصيل فنادق مكة</Link></li>
              <li><Link to="/ziyarat" className="hover:text-primary transition-colors">المزارات الدينية</Link></li>
              <li><Link to="/train-stations" className="hover:text-primary transition-colors">محطات القطار</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link to="/faq" className="hover:text-primary transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">من نحن</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">اتصل بنا</Link></li>
              <li><a href="https://wa.me/966544546558" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">واتساب</a></li>
            </ul>
            <div className="mt-6 p-4 bg-secondary-foreground/5 rounded-lg">
              <p className="text-xs text-secondary-foreground/60 mb-1">نطاق الخدمة:</p>
              <div className="flex flex-wrap gap-1">
                {["مكة", "جدة", "المدينة", "الطائف"].map((city) => (
                  <span key={city} className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
                    <MapPin className="h-2.5 w-2.5" />{city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} تاكسي العمرة والمزارات – mazarat-sa.online – جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/966544546558"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#128C7E] transition-all flex items-center justify-center hover:scale-110 active:scale-95 duration-200"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
