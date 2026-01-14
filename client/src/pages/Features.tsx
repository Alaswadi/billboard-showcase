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
  ArrowLeft,
  Moon,
  Sun,
  Bell,
  Search,
  Filter,
  Upload,
  Download,
  BarChart3,
  Lock,
  Eye,
  Calendar,
  AlertCircle,
  FileText,
  Image as ImageIcon,
  MapPinned,
  Workflow
} from "lucide-react";
import { Link } from "wouter";

export default function Features() {
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
          نظرة عامة على المميزات
        </Badge>
        <h1 className="text-5xl font-bold mb-4">مجموعة مميزات شاملة</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          يوفر نظام إدارة اللوحات الإعلانية مجموعة كاملة من الأدوات لإدارة تنظيم الإعلانات الخارجية، من الموافقة على الموقع إلى إدارة التراخيص ومراقبة الامتثال.
        </p>
      </section>

      {/* Feature Categories */}
      <section className="container pb-24">
        <Tabs defaultValue="billboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="billboard">إدارة اللوحات</TabsTrigger>
            <TabsTrigger value="advertisement">موافقة الإعلانات</TabsTrigger>
            <TabsTrigger value="license">إدارة التراخيص</TabsTrigger>
            <TabsTrigger value="system">مميزات النظام</TabsTrigger>
          </TabsList>

          {/* Billboard Management Tab */}
          <TabsContent value="billboard" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>تتبع المواقع</CardTitle>
                  <CardDescription>
                    تتبع شامل لجميع مواقع اللوحات الإعلانية مع أرقام تعريف فريدة يتم تعيينها تلقائياً بواسطة النظام
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>أرقام تعريف فريدة يتم إنشاؤها تلقائياً</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إحداثيات GPS ومعلومات العنوان</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>صور الموقع والمواصفات الفنية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تفاصيل الملكية والاتصال</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Upload className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>تقديم المواقع</CardTitle>
                  <CardDescription>
                    يمكن للشركات تقديم مقترحات مواقع لوحات إعلانية جديدة مع توثيق كامل للمراجعة الحكومية
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>رفع صور متعددة لتوثيق الموقع</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>نماذج المواصفات الفنية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>توثيق تقسيم المناطق والامتثال</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تتبع حالة التقديم في الوقت الفعلي</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileCheck className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>سير عمل الموافقة</CardTitle>
                  <CardDescription>
                    عملية موافقة مبسطة للمكاتب الحكومية لمراجعة والموافقة على مواقع اللوحات الإعلانية
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>واجهة مراجعة تفصيلية مع كل التوثيق</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>الموافقة أو الرفض مع ملاحظات تفصيلية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>فحص الامتثال مقابل اللوائح</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>مسار تدقيق كامل لجميع القرارات</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Search className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>البحث والتصفية المتقدمة</CardTitle>
                  <CardDescription>
                    قدرات بحث وتصفية قوية للعثور بسرعة على مواقع اللوحات الإعلانية وإدارتها
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>التصفية حسب الحالة (قيد الانتظار، موافق عليه، مرفوض)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>البحث حسب الموقع أو المالك أو رقم التعريف</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>الترتيب حسب التاريخ أو الحالة أو الموقع</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تصدير النتائج المصفاة للتقارير</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Advertisement Approval Tab */}
          <TabsContent value="advertisement" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>الموافقة التلقائية خلال 24 ساعة</CardTitle>
                  <CardDescription>
                    نظام الموافقة التلقائي يضمن المعالجة الفعالة مع الحفاظ على الرقابة التنظيمية
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>نافذة مراجعة 24 ساعة للمكاتب الحكومية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>موافقة تلقائية إذا لم تتم المراجعة في الوقت المحدد</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>مؤقت العد التنازلي للمراجعات المعلقة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إشعارات البريد الإلكتروني للمواعيد النهائية القريبة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ImageIcon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>رفع المحتوى</CardTitle>
                  <CardDescription>
                    نظام رفع ملفات شامل يدعم تنسيقات متعددة لمواد الإعلانات
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>دعم الصور وملفات PDF والمستندات</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>معالجة ملفات عالية الدقة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>واجهة السحب والإفلات</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>التحقق من حجم الملف والتنسيق</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>فحص الامتثال</CardTitle>
                  <CardDescription>
                    التحقق التلقائي يضمن أن جميع مواد الإعلانات تتوافق مع اللوائح الحكومية
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>التحقق من الامتثال قبل التقديم</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تطبيق سياسة المحتوى</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>ملاحظات تفصيلية حول الانتهاكات</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تتبع الامتثال التاريخي</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Eye className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>واجهة المراجعة</CardTitle>
                  <CardDescription>
                    واجهة مراجعة بديهية للمكاتب الحكومية لفحص والموافقة على محتوى الإعلانات
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>معاينة المحتوى بملء الشاشة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>أدوات المقارنة جنباً إلى جنب</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إجراءات الموافقة أو الرفض بنقرة واحدة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>ملاحظات وتعليقات تفصيلية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* License Management Tab */}
          <TabsContent value="license" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CreditCard className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>إصدار التراخيص</CardTitle>
                  <CardDescription>
                    يمكن للمكاتب الحكومية إصدار تراخيص سنوية لمواقع اللوحات الإعلانية المعتمدة
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إنشاء تراخيص تلقائي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>فترات ورسوم تراخيص قابلة للتكوين</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>شهادات تراخيص رقمية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إصدار تراخيص دفعة واحدة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>إدارة التجديد</CardTitle>
                  <CardDescription>
                    التتبع التلقائي وتذكيرات التجديد لتراخيص اللوحات الإعلانية السنوية
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إشعارات التجديد المسبقة بـ 30 يوماً</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تتبع انتهاء الصلاحية التلقائي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>معالجة التجديد بنقرة واحدة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إدارة فترة السماح</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Bell className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>تتبع الدفع</CardTitle>
                  <CardDescription>
                    مراقبة ومعالجة شاملة للدفع لرسوم التراخيص
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تحديثات حالة الدفع في الوقت الفعلي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>سجل الدفع والإيصالات</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تنبيهات الدفع المتأخر</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تقارير الإيرادات والتحليلات</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <AlertCircle className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>مراقبة الامتثال</CardTitle>
                  <CardDescription>
                    تتبع امتثال التراخيص وتحديد اللوحات الإعلانية التي تعمل بدون تراخيص سارية
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تحديد التراخيص منتهية الصلاحية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>لوحات معلومات حالة الامتثال</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تتبع الانتهاكات والتنفيذ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تقارير الامتثال التلقائية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Features Tab */}
          <TabsContent value="system" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>التحكم في الوصول القائم على الأدوار</CardTitle>
                  <CardDescription>
                    مصادقة آمنة مع أذونات وقدرات خاصة بالدور
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>ثلاثة أدوار مستخدم مميزة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إدارة أذونات دقيقة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تشفير كلمات المرور الآمن مع bcrypt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إدارة الجلسة ومهلة الوقت</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>التحليلات والتقارير</CardTitle>
                  <CardDescription>
                    أدوات تحليلات وتقارير شاملة لاتخاذ القرارات المبنية على البيانات
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إحصائيات لوحة المعلومات في الوقت الفعلي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إنشاء تقارير مخصصة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>معدل الموافقة ومقاييس وقت المعالجة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تحليلات الإيرادات والامتثال</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>مسار التدقيق</CardTitle>
                  <CardDescription>
                    تسجيل نشاط كامل للامتثال التنظيمي والمساءلة
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تسجيل نشاط شامل</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تتبع إجراءات المستخدم</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>الطابع الزمني وإسناد المستخدم</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>سجل التدقيق القابل للبحث</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Workflow className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>أتمتة سير العمل</CardTitle>
                  <CardDescription>
                    سير العمل التلقائي يقلل من العمل اليدوي ويحسن الكفاءة
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>إشعارات الموافقة التلقائية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>محفزات تحديث الحالة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>نظام إشعارات البريد الإلكتروني</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>تنفيذ المهام المجدولة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
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
