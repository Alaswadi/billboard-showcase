
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';

const EndUserPayments = () => {
    return (
        <DashboardLayout userRole="end_user" userName="شركة مجموعة هائل">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">المدفوعات</h1>
                    <p className="text-gray-500 mt-2">سجل المدفوعات والرسوم المستحقة.</p>
                </div>

                <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0">
                    <CardHeader>
                        <CardTitle className="text-white/90">الرسوم المستحقة</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-3xl font-bold">50,000 ر.ي</p>
                                <p className="text-sm opacity-80 mt-1">تجديد سنوي للوحات</p>
                            </div>
                            <Button variant="secondary" size="lg">
                                <CreditCard className="mr-2 h-4 w-4" />
                                دفع الرسوم
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default EndUserPayments;
