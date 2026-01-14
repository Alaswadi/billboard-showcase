
import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Lock, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Login = () => {
    const [, setLocation] = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate login logic
        setTimeout(() => {
            setLoading(false);

            // Simple routing based on email domain or specific emails
            if (email.includes('gov')) {
                setLocation('/dashboard/government');
            } else if (email.includes('media') || email.includes('ad')) {
                setLocation('/dashboard/ad-company');
            } else {
                setLocation('/dashboard/end-user');
            }
        }, 800);
    };

    const fillCredentials = (role: 'gov' | 'ad' | 'user') => {
        switch (role) {
            case 'gov':
                setEmail('admin@gov.yemen.ye');
                setPassword('gov123456');
                break;
            case 'ad':
                setEmail('contact@alnoor-media.com');
                setPassword('ad123456');
                break;
            case 'user':
                setEmail('info@hayel-group.com');
                setPassword('user123456');
                break;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-cairo" dir="rtl">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                        <MapPin className="h-8 w-8" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">نظام إدارة اللوحات الإعلانية</h1>
                    <p className="text-gray-500">سجل دخولك للوصول إلى لوحة التحكم</p>
                </div>

                <Card className="border-gray-200 shadow-xl shadow-gray-200/50">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-xl text-center">تسجيل الدخول</CardTitle>
                        <CardDescription className="text-center">أدخل بريدك الإلكتروني وكلمة المرور</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">البريد الإلكتروني</Label>
                                <div className="relative">
                                    <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="email"
                                        placeholder="example@domain.com"
                                        type="email"
                                        className="pr-10 text-right"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">كلمة المرور</Label>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="password"
                                        type="password"
                                        className="pr-10 text-right"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <a href="#" className="text-primary hover:underline font-medium">إنشاء حساب جديد</a>
                                <a href="#" className="text-gray-500 hover:text-gray-900">نسيت كلمة المرور؟</a>
                            </div>

                            <Button type="submit" className="w-full h-11 text-base" disabled={loading}>
                                {loading ? 'جاري التحقق...' : 'تسجيل الدخول'}
                            </Button>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-gray-200" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white px-2 text-gray-500">تسجيل دخول سريع للتجربة</span>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-3">
                                <Button variant="outline" className="w-full justify-center h-11" onClick={() => fillCredentials('gov')}>
                                    مكتب حكومي
                                </Button>
                                <Button variant="outline" className="w-full justify-center h-11" onClick={() => fillCredentials('ad')}>
                                    شركة إعلانات
                                </Button>
                                <Button variant="outline" className="w-full justify-center h-11" onClick={() => fillCredentials('user')}>
                                    شركة مستخدم نهائي
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="text-center">
                    <Link href="/">
                        <a className="text-sm text-gray-500 hover:text-gray-900">العودة للصفحة الرئيسية</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
