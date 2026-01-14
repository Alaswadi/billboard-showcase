import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Building2,
  FileCheck,
  Shield,
  Users,
  MapPin,
  CreditCard,
  Clock,
  CheckCircle2,
  Moon,
  Sun,
  Sparkles,
  BarChart3,
  Lock,
  Zap,
  Globe,
  ArrowDown,
  Play,
  Upload,
  Search,
  Bell,
  Calendar,
  AlertCircle,
  FileText,
  Image as ImageIcon,
  Eye,
  Workflow
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl animated-gradient flex items-center justify-center">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl">نظام إدارة اللوحات الإعلانية</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button size="sm" className="animated-gradient border-0 text-white hover:opacity-90">
                تسجيل الدخول
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb w-[600px] h-[600px] bg-[oklch(0.55_0.25_270/0.3)] top-[-200px] right-[-100px] animate-float" />
          <div className="orb w-[400px] h-[400px] bg-[oklch(0.50_0.22_240/0.25)] bottom-[10%] left-[-100px] animate-float-delayed" />
          <div className="orb w-[300px] h-[300px] bg-[oklch(0.55_0.20_200/0.2)] top-[40%] right-[20%] animate-pulse-glow" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border animate-fade-up">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">منصة تنظيمية حكومية</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
                نظام حديث لإدارة
                <span className="gradient-text block mt-2">اللوحات الإعلانية</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
                تطبيق ويب شامل مصمم لتبسيط مراقبة وموافقة الإعلانات على اللوحات الإعلانية للمكاتب الحكومية. مبني بتقنيات حديثة لضمان الامتثال والكفاءة والشفافية.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Link href="/login">
                  <Button size="lg" className="animated-gradient border-0 text-white gap-2 hover:opacity-90 glow-sm">
                    <Play className="h-4 w-4" />
                    ابدأ الآن
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Card className="glass hover-lift border-2 border-transparent hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-4xl font-bold gradient-text">3</CardTitle>
                  <CardDescription className="text-base">أدوار المستخدمين</CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass hover-lift border-2 border-transparent hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-4xl font-bold gradient-text">100%</CardTitle>
                  <CardDescription className="text-base">الامتثال</CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass hover-lift border-2 border-transparent hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-4xl font-bold gradient-text">24 ساعة</CardTitle>
                  <CardDescription className="text-base">الموافقة التلقائية</CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass hover-lift border-2 border-transparent hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-4xl font-bold gradient-text">فوري</CardTitle>
                  <CardDescription className="text-base">تتبع الحالة</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              القدرات الأساسية
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              مجموعة مميزات <span className="gradient-text">شاملة</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              مصمم لمعالجة كل جانب من جوانب تنظيم وإدارة اللوحات الإعلانية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "إدارة المواقع", desc: "تتبع شامل لمواقع اللوحات الإعلانية مع أرقام تعريف فريدة وإحداثيات GPS وصور الموقع" },
              { icon: FileCheck, title: "الموافقات الرقمية", desc: "سير عمل موافقة مبسط مع قاعدة الموافقة التلقائية خلال 24 ساعة للمعالجة الفعالة" },
              { icon: CreditCard, title: "إدارة التراخيص", desc: "تتبع التراخيص السنوية مع التجديدات التلقائية ومعالجة الدفع ومراقبة الامتثال" },
              { icon: Users, title: "وصول متعدد الأدوار", desc: "أذونات قائمة على الأدوار للمكاتب الحكومية وشركات الإعلان والشركات المستخدمة النهائية" },
              { icon: Shield, title: "تطبيق الامتثال", desc: "التحقق المدمج يضمن أن جميع المواد تلبي قواعد ولوائح المكتب الحكومي" },
              { icon: BarChart3, title: "التحليلات والتقارير", desc: "أدوات تقارير شاملة للإشراف ومراقبة الامتثال واتخاذ القرارات" },
            ].map((feature, i) => (
              <Card key={i} className="group hover-lift glass border-2 border-transparent hover:border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative">
                  <div className="w-14 h-14 rounded-2xl animated-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features with Tabs */}
      <section className="py-32 relative">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Sparkles className="h-3 w-3 ml-1" />
              تفاصيل المميزات
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              استكشف <span className="gradient-text">كل الإمكانيات</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              يوفر نظام إدارة اللوحات الإعلانية مجموعة كاملة من الأدوات لإدارة تنظيم الإعلانات الخارجية، من الموافقة على الموقع إلى إدارة التراخيص ومراقبة الامتثال.
            </p>
          </div>

          <Tabs defaultValue="billboard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 glass">
              <TabsTrigger value="billboard">إدارة اللوحات</TabsTrigger>
              <TabsTrigger value="advertisement">موافقة الإعلانات</TabsTrigger>
              <TabsTrigger value="license">إدارة التراخيص</TabsTrigger>
              <TabsTrigger value="system">مميزات النظام</TabsTrigger>
            </TabsList>

            {/* Billboard Management Tab */}
            <TabsContent value="billboard" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: MapPin, title: "تتبع المواقع",
                    desc: "تتبع شامل لجميع مواقع اللوحات الإعلانية مع أرقام تعريف فريدة يتم تعيينها تلقائياً بواسطة النظام",
                    features: ["أرقام تعريف فريدة يتم إنشاؤها تلقائياً", "إحداثيات GPS ومعلومات العنوان", "صور الموقع والمواصفات الفنية", "تفاصيل الملكية والاتصال"]
                  },
                  {
                    icon: Upload, title: "تقديم المواقع",
                    desc: "يمكن للشركات تقديم مقترحات مواقع لوحات إعلانية جديدة مع توثيق كامل للمراجعة الحكومية",
                    features: ["رفع صور متعددة لتوثيق الموقع", "نماذج المواصفات الفنية", "توثيق تقسيم المناطق والامتثال", "تتبع حالة التقديم في الوقت الفعلي"]
                  },
                  {
                    icon: FileCheck, title: "سير عمل الموافقة",
                    desc: "عملية موافقة مبسطة للمكاتب الحكومية لمراجعة والموافقة على مواقع اللوحات الإعلانية",
                    features: ["واجهة مراجعة تفصيلية مع كل التوثيق", "الموافقة أو الرفض مع ملاحظات تفصيلية", "فحص الامتثال مقابل اللوائح", "مسار تدقيق كامل لجميع القرارات"]
                  },
                  {
                    icon: Search, title: "البحث والتصفية المتقدمة",
                    desc: "قدرات بحث وتصفية قوية للعثور بسرعة على مواقع اللوحات الإعلانية وإدارتها",
                    features: ["التصفية حسب الحالة (قيد الانتظار، موافق عليه، مرفوض)", "البحث حسب الموقع أو المالك أو رقم التعريف", "الترتيب حسب التاريخ أو الحالة أو الموقع", "تصدير النتائج المصفاة للتقارير"]
                  }
                ].map((item, i) => (
                  <Card key={i} className="glass hover-lift border-2 border-transparent hover:border-primary/20">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl animated-gradient flex items-center justify-center mb-3">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {item.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Advertisement Approval Tab */}
            <TabsContent value="advertisement" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Clock, title: "الموافقة التلقائية خلال 24 ساعة",
                    desc: "نظام الموافقة التلقائي يضمن المعالجة الفعالة مع الحفاظ على الرقابة التنظيمية",
                    features: ["نافذة مراجعة 24 ساعة للمكاتب الحكومية", "موافقة تلقائية إذا لم تتم المراجعة في الوقت المحدد", "مؤقت العد التنازلي للمراجعات المعلقة", "إشعارات البريد الإلكتروني للمواعيد النهائية القريبة"]
                  },
                  {
                    icon: ImageIcon, title: "رفع المحتوى",
                    desc: "نظام رفع ملفات شامل يدعم تنسيقات متعددة لمواد الإعلانات",
                    features: ["دعم الصور وملفات PDF والمستندات", "معالجة ملفات عالية الدقة", "واجهة السحب والإفلات", "التحقق من حجم الملف والتنسيق"]
                  },
                  {
                    icon: Shield, title: "فحص الامتثال",
                    desc: "التحقق التلقائي يضمن أن جميع مواد الإعلانات تتوافق مع اللوائح الحكومية",
                    features: ["التحقق من الامتثال قبل التقديم", "تطبيق سياسة المحتوى", "ملاحظات تفصيلية حول الانتهاكات", "تتبع الامتثال التاريخي"]
                  },
                  {
                    icon: Eye, title: "واجهة المراجعة",
                    desc: "واجهة مراجعة بديهية للمكاتب الحكومية لفحص والموافقة على محتوى الإعلانات",
                    features: ["معاينة المحتوى بملء الشاشة", "أدوات المقارنة جنباً إلى جنب", "إجراءات الموافقة أو الرفض بنقرة واحدة", "ملاحظات وتعليقات تفصيلية"]
                  }
                ].map((item, i) => (
                  <Card key={i} className="glass hover-lift border-2 border-transparent hover:border-primary/20">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl animated-gradient flex items-center justify-center mb-3">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {item.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* License Management Tab */}
            <TabsContent value="license" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: CreditCard, title: "إصدار التراخيص",
                    desc: "يمكن للمكاتب الحكومية إصدار تراخيص سنوية لمواقع اللوحات الإعلانية المعتمدة",
                    features: ["إنشاء تراخيص تلقائي", "فترات ورسوم تراخيص قابلة للتكوين", "شهادات تراخيص رقمية", "إصدار تراخيص دفعة واحدة"]
                  },
                  {
                    icon: Calendar, title: "إدارة التجديد",
                    desc: "التتبع التلقائي وتذكيرات التجديد لتراخيص اللوحات الإعلانية السنوية",
                    features: ["إشعارات التجديد المسبقة بـ 30 يوماً", "تتبع انتهاء الصلاحية التلقائي", "معالجة التجديد بنقرة واحدة", "إدارة فترة السماح"]
                  },
                  {
                    icon: Bell, title: "تتبع الدفع",
                    desc: "مراقبة ومعالجة شاملة للدفع لرسوم التراخيص",
                    features: ["تحديثات حالة الدفع في الوقت الفعلي", "سجل الدفع والإيصالات", "تنبيهات الدفع المتأخر", "تقارير الإيرادات والتحليلات"]
                  },
                  {
                    icon: AlertCircle, title: "مراقبة الامتثال",
                    desc: "تتبع امتثال التراخيص وتحديد اللوحات الإعلانية التي تعمل بدون تراخيص سارية",
                    features: ["تحديد التراخيص منتهية الصلاحية", "لوحات معلومات حالة الامتثال", "تتبع الانتهاكات والتنفيذ", "تقارير الامتثال التلقائية"]
                  }
                ].map((item, i) => (
                  <Card key={i} className="glass hover-lift border-2 border-transparent hover:border-primary/20">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl animated-gradient flex items-center justify-center mb-3">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {item.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* System Features Tab */}
            <TabsContent value="system" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Users, title: "التحكم في الوصول القائم على الأدوار",
                    desc: "مصادقة آمنة مع أذونات وقدرات خاصة بالدور",
                    features: ["ثلاثة أدوار مستخدم مميزة", "إدارة أذونات دقيقة", "تشفير كلمات المرور الآمن مع bcrypt", "إدارة الجلسة ومهلة الوقت"]
                  },
                  {
                    icon: BarChart3, title: "التحليلات والتقارير",
                    desc: "أدوات تحليلات وتقارير شاملة لاتخاذ القرارات المبنية على البيانات",
                    features: ["إحصائيات لوحة المعلومات في الوقت الفعلي", "إنشاء تقارير مخصصة", "معدل الموافقة ومقاييس وقت المعالجة", "تحليلات الإيرادات والامتثال"]
                  },
                  {
                    icon: FileText, title: "مسار التدقيق",
                    desc: "تسجيل نشاط كامل للامتثال التنظيمي والمساءلة",
                    features: ["تسجيل نشاط شامل", "تتبع إجراءات المستخدم", "الطابع الزمني وإسناد المستخدم", "سجل التدقيق القابل للبحث"]
                  },
                  {
                    icon: Workflow, title: "أتمتة سير العمل",
                    desc: "سير العمل التلقائي يقلل من العمل اليدوي ويحسن الكفاءة",
                    features: ["إشعارات الموافقة التلقائية", "محفزات تحديث الحالة", "نظام إشعارات البريد الإلكتروني", "تنفيذ المهام المجدولة"]
                  }
                ].map((item, i) => (
                  <Card key={i} className="glass hover-lift border-2 border-transparent hover:border-primary/20">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl animated-gradient flex items-center justify-center mb-3">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {item.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* User Roles */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              أصحاب المصلحة
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              مصمم لأنواع <span className="gradient-text">متعددة</span> من المستخدمين
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              واجهات وسير عمل مخصصة لكل مجموعة من أصحاب المصلحة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "المكتب الحكومي",
                features: [
                  "الموافقة والرفض على طلبات مواقع اللوحات الإعلانية",
                  "مراجعة والموافقة على محتوى الإعلانات",
                  "إصدار التراخيص وتتبع الامتثال",
                  "إنشاء تقارير شاملة",
                ],
              },
              {
                icon: Building2,
                title: "شركة الإعلان",
                features: [
                  "تقديم مقترحات مواقع لوحات إعلانية جديدة",
                  "رفع محتوى الإعلانات للعملاء",
                  "تتبع حالة الموافقة في الوقت الفعلي",
                  "إدارة مدفوعات التراخيص والتجديدات",
                ],
              },
              {
                icon: Globe,
                title: "الشركة المستخدمة النهائية",
                features: [
                  "تقديم محتوى الإعلانات للموافقة",
                  "مراقبة حالة الموافقة والامتثال",
                  "إدارة الحملات الإعلانية",
                  "الوصول إلى بيانات أداء الحملة",
                ],
              },
            ].map((role, i) => (
              <Card key={i} className="group hover-lift glass border-2 border-transparent hover:border-primary/30 overflow-hidden">
                <div className="h-2 animated-gradient" />
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <role.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {role.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Zap className="h-3 w-3 ml-1" />
              الفوائد
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              لماذا تختار <span className="gradient-text">هذا النظام؟</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              تحقيق تحسينات قابلة للقياس في الكفاءة والامتثال والشفافية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "سير عمل مبسط", desc: "عمليات الموافقة التلقائية تقلل من العمل اليدوي ووقت المعالجة بنسبة تصل إلى 70٪", metric: "70%" },
              { icon: Shield, title: "امتثال محسّن", desc: "التحقق المدمج ومسارات التدقيق تضمن امتثالاً تنظيمياً بنسبة 100٪", metric: "100%" },
              { icon: Clock, title: "تتبع في الوقت الفعلي", desc: "تحديثات الحالة المباشرة تبقي جميع أصحاب المصلحة على اطلاع طوال عملية الموافقة", metric: "24/7" },
              { icon: BarChart3, title: "رؤى مبنية على البيانات", desc: "التحليلات الشاملة تمكن من اتخاذ قرارات أفضل وتخصيص الموارد", metric: "∞" },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl glass hover-lift border-2 border-transparent hover:border-primary/20">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl animated-gradient flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <span className="text-2xl font-bold gradient-text">{benefit.metric}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-90" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb w-[400px] h-[400px] bg-white/10 top-[-100px] right-[-50px] animate-float" />
          <div className="orb w-[300px] h-[300px] bg-white/10 bottom-[-50px] left-[-50px] animate-float-delayed" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">هل أنت مستعد للبدء؟</h2>
            <p className="text-xl mb-10 opacity-90">
              ابدأ الآن في إدارة اللوحات الإعلانية بطريقة حديثة وفعالة
            </p>
            <Link href="/login">
              <Button size="lg" variant="secondary" className="gap-2 hover:scale-105 transition-transform">
                <Play className="h-4 w-4" />
                تسجيل الدخول
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-muted/30 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl animated-gradient flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">إدارة اللوحات الإعلانية</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Manus AI. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
