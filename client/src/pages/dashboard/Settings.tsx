
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SettingsPage = ({ role }: { role: 'government' | 'advertising_company' | 'end_user' }) => {
    return (
        <DashboardLayout userRole={role} userName={role === 'government' ? 'المكتب الحكومي' : (role === 'advertising_company' ? 'شركة الدعاية' : 'المستخدم النهائي')}>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">الإعدادات</h1>
                    <p className="text-gray-500 mt-2">إدارة إعدادات الحساب والتفضيلات.</p>
                </div>

                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
                        <TabsTrigger value="account">الحساب</TabsTrigger>
                        <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
                        <TabsTrigger value="security">الأمان</TabsTrigger>
                    </TabsList>

                    <div className="mt-6">
                        <TabsContent value="account">
                            <Card>
                                <CardHeader>
                                    <CardTitle>معلومات الملف الشخصي</CardTitle>
                                    <CardDescription>قم بتحديث معلومات حسابك هنا.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>الاسم الكامل</Label>
                                            <Input defaultValue="المسؤول الرئيسي" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>البريد الإلكتروني</Label>
                                            <Input defaultValue="admin@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>رقم الهاتف</Label>
                                            <Input defaultValue="777-000-000" />
                                        </div>
                                    </div>
                                    <Button className="mt-4">حفظ التغييرات</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="notifications">
                            <Card>
                                <CardHeader>
                                    <CardTitle>تفضيلات الإشعارات</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-500">تم تفعيل جميع الإشعارات افتراضياً.</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="security">
                            <Card>
                                <CardHeader>
                                    <CardTitle>كلمة المرور والأمان</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Button variant="outline">تغيير كلمة المرور</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </DashboardLayout>
    );
};

export default SettingsPage;
