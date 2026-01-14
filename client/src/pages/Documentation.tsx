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
  Book,
  Code2,
  Terminal,
  FileText,
  HelpCircle,
  Workflow,
  CheckCircle2
} from "lucide-react";
import { Link } from "wouter";

export default function Documentation() {
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
          <Book className="h-3 w-3 ml-1" />
          التوثيق الفني
        </Badge>
        <h1 className="text-5xl font-bold mb-4">دليل التوثيق الشامل</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          كل ما تحتاجه لفهم ونشر واستخدام نظام إدارة اللوحات الإعلانية بفعالية.
        </p>
      </section>

      {/* Documentation Content */}
      <section className="container pb-24">
        <Tabs defaultValue="installation" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="installation">دليل التثبيت</TabsTrigger>
            <TabsTrigger value="api">مرجع API</TabsTrigger>
            <TabsTrigger value="faq">الأسئلة الشائعة</TabsTrigger>
          </TabsList>

          <TabsContent value="installation" className="space-y-6">
            <Card>
              <CardHeader>
                <Terminal className="h-10 w-10 text-primary mb-3" />
                <CardTitle>التثبيت والإعداد</CardTitle>
                <CardDescription>تعليمات خطوة بخطوة لإعداد النظام</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">المتطلبات الأساسية</h3>
                  <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Python 3.8 أو أحدث</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Node.js 18 أو أحدث</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>npm أو pnpm لإدارة الحزم</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">إعداد الخلفية (Backend)</h3>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2 text-left" dir="ltr">
                    <div># استنساخ المستودع</div>
                    <div>git clone https://github.com/your-org/billboard-management.git</div>
                    <div className="mt-4"># الانتقال إلى دليل الخلفية</div>
                    <div>cd billboard_management_backend</div>
                    <div className="mt-4"># إنشاء بيئة افتراضية</div>
                    <div>python -m venv venv</div>
                    <div>source venv/bin/activate</div>
                    <div className="mt-4"># تثبيت التبعيات</div>
                    <div>pip install -r requirements.txt</div>
                    <div className="mt-4"># تشغيل الخادم</div>
                    <div>python src/main.py</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">إعداد الواجهة الأمامية (Frontend)</h3>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2 text-left" dir="ltr">
                    <div># الانتقال إلى دليل الواجهة الأمامية</div>
                    <div>cd billboard-frontend</div>
                    <div className="mt-4"># تثبيت التبعيات</div>
                    <div>pnpm install</div>
                    <div className="mt-4"># تشغيل خادم التطوير</div>
                    <div>pnpm run dev</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <Code2 className="h-10 w-10 text-primary mb-3" />
                <CardTitle>نقاط نهاية API الرئيسية</CardTitle>
                <CardDescription>مرجع واجهة برمجة التطبيقات</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">المصادقة</h3>
                  <div className="space-y-3">
                    <div className="border-r-4 border-primary pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>POST</Badge>
                        <code className="text-sm">/api/register</code>
                      </div>
                      <p className="text-sm text-muted-foreground">تسجيل مستخدم جديد</p>
                    </div>
                    <div className="border-r-4 border-primary pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>POST</Badge>
                        <code className="text-sm">/api/login</code>
                      </div>
                      <p className="text-sm text-muted-foreground">تسجيل الدخول</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">اللوحات الإعلانية</h3>
                  <div className="space-y-3">
                    <div className="border-r-4 border-primary pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>GET</Badge>
                        <code className="text-sm">/api/billboards</code>
                      </div>
                      <p className="text-sm text-muted-foreground">الحصول على جميع اللوحات</p>
                    </div>
                    <div className="border-r-4 border-primary pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>POST</Badge>
                        <code className="text-sm">/api/billboards</code>
                      </div>
                      <p className="text-sm text-muted-foreground">إنشاء لوحة إعلانية جديدة</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">الإعلانات</h3>
                  <div className="space-y-3">
                    <div className="border-r-4 border-primary pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>GET</Badge>
                        <code className="text-sm">/api/advertisements</code>
                      </div>
                      <p className="text-sm text-muted-foreground">الحصول على جميع الإعلانات</p>
                    </div>
                    <div className="border-r-4 border-primary pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>POST</Badge>
                        <code className="text-sm">/api/advertisements</code>
                      </div>
                      <p className="text-sm text-muted-foreground">تقديم إعلان جديد</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <Card>
              <CardHeader>
                <HelpCircle className="h-10 w-10 text-primary mb-3" />
                <CardTitle>الأسئلة الشائعة</CardTitle>
                <CardDescription>إجابات على الأسئلة الأكثر شيوعاً</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">كيف يتم تعيين أرقام اللوحات الإعلانية؟</h4>
                  <p className="text-sm text-muted-foreground">
                    يقوم النظام تلقائياً بإنشاء رقم تعريف فريد لكل موقع لوحة إعلانية معتمد.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">ماذا يحدث بعد 24 ساعة من تقديم الإعلان؟</h4>
                  <p className="text-sm text-muted-foreground">
                    إذا لم تتم المراجعة خلال 24 ساعة، يتم الموافقة على الإعلان تلقائياً.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">هل يمكن لشركة واحدة إدارة عدة لوحات؟</h4>
                  <p className="text-sm text-muted-foreground">
                    نعم، يمكن لشركة واحدة امتلاك وإدارة عدة مواقع لوحات إعلانية.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">كيف تتم عملية التجديد السنوي؟</h4>
                  <p className="text-sm text-muted-foreground">
                    يرسل النظام تذكيرات تلقائية قبل 30 يوماً من انتهاء صلاحية الترخيص.
                  </p>
                </div>
              </CardContent>
            </Card>
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
