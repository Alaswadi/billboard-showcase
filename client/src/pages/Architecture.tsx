import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Building2,
  ArrowLeft,
  Moon,
  Sun,
  Server,
  Database,
  Layout,
  Lock,
  Code2,
  Layers,
  GitBranch,
  Shield,
  Zap,
  Cloud,
  FileCode,
  Workflow,
  CheckCircle2
} from "lucide-react";
import { Link } from "wouter";

export default function Architecture() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5 rotate-180" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">نظام إدارة اللوحات الإعلانية</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/features">
              <Button variant="ghost">المميزات</Button>
            </Link>
            <Link href="/architecture">
              <Button variant="ghost">البنية التقنية</Button>
            </Link>
            <Link href="/documentation">
              <Button variant="ghost">التوثيق</Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container py-16">
        <Badge variant="secondary" className="mb-4">
          <Code2 className="h-3 w-3 ml-1" />
          البنية التقنية
        </Badge>
        <h1 className="text-5xl font-bold mb-4">بنية النظام</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          بنية حديثة وقابلة للتوسع مبنية بتقنيات معيارية في الصناعة وأفضل الممارسات للموثوقية والأمان والأداء.
        </p>
      </section>

      {/* Architecture Overview */}
      <section className="container pb-16">
        <Card className="bg-muted/30 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">بنية Full-Stack</CardTitle>
            <CardDescription>
              يتبع النظام بنية عميل-خادم تقليدية مع فصل واضح للمسؤوليات
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 mt-4">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Layout className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">الواجهة الأمامية</h3>
                  <p className="text-sm text-muted-foreground">
                    React 18 مع مكونات واجهة مستخدم حديثة وتصميم متجاوب وتحديثات في الوقت الفعلي
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">الخلفية</h3>
                  <p className="text-sm text-muted-foreground">
                    واجهة برمجة تطبيقات Flask RESTful مع مصادقة آمنة ونقاط نهاية شاملة
                  </p>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">قاعدة البيانات</h3>
                  <p className="text-sm text-muted-foreground">
                    SQLite مع SQLAlchemy ORM لاستمرارية البيانات الموثوقة والعلاقات
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Technology Stack */}
      <section className="container pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">المجموعة التقنية</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            مبني بتقنيات مثبتة تم اختيارها لموثوقيتها وأدائها وتجربة المطور
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="frontend">الواجهة الأمامية</TabsTrigger>
            <TabsTrigger value="backend">الخلفية</TabsTrigger>
            <TabsTrigger value="infrastructure">البنية التحتية</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Layout className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>React 18</CardTitle>
                  <CardDescription>إطار عمل واجهة مستخدم حديث</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>بنية قائمة على المكونات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>DOM افتراضي للأداء الأمثل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Hooks لإدارة الحالة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>قدرات العرض المتزامن</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Layers className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Tailwind CSS + shadcn/ui</CardTitle>
                  <CardDescription>نظام تصميم حديث</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>إطار عمل CSS يعتمد على الأدوات المساعدة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>مكونات متاحة مسبقاً</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>رموز تصميم متسقة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>دعم الوضع المظلم</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Vite</CardTitle>
                  <CardDescription>أداة البناء وخادم التطوير</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>استبدال وحدة ساخنة سريع البرق</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>بناءات إنتاج محسّنة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>دعم ESM الأصلي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>نظام إضافات بيئي</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <GitBranch className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>React Query</CardTitle>
                  <CardDescription>جلب البيانات وإدارة الحالة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>التخزين المؤقت التلقائي والإبطال</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>مزامنة البيانات في الخلفية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>التحديثات المتفائلة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>حالات التحميل والخطأ</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="backend" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Server className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Flask</CardTitle>
                  <CardDescription>إطار عمل ويب بايثون</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>خفيف الوزن ومرن</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>تصميم واجهة برمجة تطبيقات RESTful</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>نظام بيئي واسع</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>سهل الاختبار والصيانة</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>SQLAlchemy</CardTitle>
                  <CardDescription>ORM ومجموعة أدوات قاعدة البيانات</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>تعيين علائقي للكائنات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>استعلامات مستقلة عن قاعدة البيانات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>إدارة العلاقات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>دعم الترحيل</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Bcrypt</CardTitle>
                  <CardDescription>تشفير كلمات المرور</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>تشفير معياري في الصناعة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>إنشاء وتخزين الملح</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>عامل عمل قابل للتكوين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>حماية ضد جداول قوس قزح</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Flask-CORS</CardTitle>
                  <CardDescription>مشاركة الموارد عبر الأصول</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>طلبات آمنة عبر الأصول</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>قائمة بيضاء قابلة للتكوين للأصل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>دعم بيانات الاعتماد</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>معالجة طلب الاختبار المسبق</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="infrastructure" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Cloud className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>النشر السحابي</CardTitle>
                  <CardDescription>بنية تحتية قابلة للتوسع</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>قدرات التوسع التلقائي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>موازنة الحمل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>تشفير SSL/TLS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>تكامل CDN</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>قاعدة بيانات SQLite</CardTitle>
                  <CardDescription>تخزين بيانات موثوق</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>إعداد بدون تكوين</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>امتثال ACID</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>دعم المعاملات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>خفيف الوزن ومحمول</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileCode className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>التحكم في الإصدار</CardTitle>
                  <CardDescription>سير عمل قائم على Git</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>سجل المشروع الكامل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>تطوير قائم على الفروع</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>عملية مراجعة الكود</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>عمليات نشر تلقائية</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Workflow className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>خط أنابيب CI/CD</CardTitle>
                  <CardDescription>النشر التلقائي</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>اختبار تلقائي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>تحسين البناء</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>عمليات نشر بدون توقف</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>قدرات التراجع</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Database Schema */}
      <section className="container pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">مخطط قاعدة البيانات</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تصميم قاعدة بيانات علائقية مع التطبيع المناسب والعلاقات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                المستخدمون
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm font-mono">
              <div className="text-primary">id (PK)</div>
              <div>email</div>
              <div>password_hash</div>
              <div>role</div>
              <div className="text-muted-foreground">company_id (FK)</div>
              <div>created_at</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                الشركات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm font-mono">
              <div className="text-primary">id (PK)</div>
              <div>name</div>
              <div>type</div>
              <div>contact_info</div>
              <div>created_at</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                اللوحات الإعلانية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm font-mono">
              <div className="text-primary">id (PK)</div>
              <div>unique_number</div>
              <div>location</div>
              <div>owner_type</div>
              <div className="text-muted-foreground">owner_id (FK)</div>
              <div>status</div>
              <div>image_path</div>
              <div>created_at</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                الإعلانات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm font-mono">
              <div className="text-primary">id (PK)</div>
              <div className="text-muted-foreground">billboard_id (FK)</div>
              <div className="text-muted-foreground">company_id (FK)</div>
              <div>content_path</div>
              <div>status</div>
              <div>submission_date</div>
              <div>approval_date</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                التراخيص
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm font-mono">
              <div className="text-primary">id (PK)</div>
              <div className="text-muted-foreground">billboard_id (FK)</div>
              <div>start_date</div>
              <div>end_date</div>
              <div>amount</div>
              <div>is_paid</div>
              <div>payment_date</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Features */}
      <section className="container pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">الأمان وأفضل الممارسات</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            مبني بمبادئ الأمان أولاً وأفضل الممارسات في الصناعة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lock className="h-10 w-10 text-primary mb-3" />
              <CardTitle>المصادقة والترخيص</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>تشفير كلمات المرور Bcrypt مع الملح</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>مصادقة قائمة على الجلسة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>التحكم في الوصول القائم على الأدوار (RBAC)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>مهلة الجلسة التلقائية</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-3" />
              <CardTitle>حماية البيانات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>منع حقن SQL عبر ORM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>حماية XSS مع تعقيم الإدخال</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>التحقق من رمز CSRF</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>التحقق من رفع الملفات الآمن</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Cloud className="h-10 w-10 text-primary mb-3" />
              <CardTitle>أمان البنية التحتية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>تشفير HTTPS/TLS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>متغيرات البيئة الآمنة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>تحديثات أمنية منتظمة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>نسخ احتياطية تلقائية</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileCode className="h-10 w-10 text-primary mb-3" />
              <CardTitle>جودة الكود</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>TypeScript لأمان النوع</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>تكوين ESLint و Prettier</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>معالجة أخطاء شاملة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>التسجيل والمراقبة</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="font-semibold">نظام إدارة اللوحات الإعلانية</span>
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
