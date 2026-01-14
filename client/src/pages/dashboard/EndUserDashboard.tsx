
import DashboardLayout from '@/components/Layout/DashboardLayout';
import MapComponent from '@/components/MapComponent';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const EndUserDashboard = () => {
    return (
        <DashboardLayout userRole="end_user" userName="مجموعة هائل سعيد">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">مرحباً، مجموعة هائل</h1>
                        <p className="text-gray-500 mt-2">إدارة لوحات متجرك ومرافقك الخاصة.</p>
                    </div>
                    <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700">
                        <MapPin className="h-4 w-4" />
                        تسجيل موقع جديد
                    </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>اللوحات المملوكة</CardDescription>
                            <CardTitle className="text-3xl">5</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">على واجهات الفروع</div>
                        </CardContent>
                    </Card>

                    <Card className="col-span-2">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">حالة التراخيص</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-4">
                                <div className="flex-1 bg-green-50 p-3 rounded border border-green-100 text-center">
                                    <span className="block text-2xl font-bold text-green-700">5</span>
                                    <span className="text-xs text-green-600">سارية المفعول</span>
                                </div>
                                <div className="flex-1 bg-gray-50 p-3 rounded border border-gray-100 text-center">
                                    <span className="block text-2xl font-bold text-gray-700">0</span>
                                    <span className="text-xs text-gray-500">منتهية</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>خريطة الفروع واللوحات</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <MapComponent
                            height="350px"
                            markers={[
                                { id: 1, position: [15.3400, 44.2100], title: 'الفرع الرئيسي', description: 'شارع تعز' },
                            ]}
                        />                </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default EndUserDashboard;
