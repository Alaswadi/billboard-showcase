
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const EndUserAds = () => {
    return (
        <DashboardLayout userRole="end_user" userName="شركة مجموعة هائل">
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">إعلاناتي</h1>
                        <p className="text-gray-500 mt-2">إدارة محتوى الإعلانات وطلبات الموافقة.</p>
                    </div>
                    <Button>رفع إعلان جديد</Button>
                </div>

                <div className="space-y-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg">إعلان منتج جديد - موسم الصيف</CardTitle>
                            <Badge className="bg-yellow-500">قيد المراجعة</Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-2">تاريخ الرفع: 2025-01-12</p>
                            <div className="h-2 bg-gray-100 rounded-full w-full max-w-md overflow-hidden">
                                <div className="h-full bg-yellow-500 w-1/3"></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">اكتمال المراجعة: 30%</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default EndUserAds;
