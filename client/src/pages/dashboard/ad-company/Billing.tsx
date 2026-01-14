
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, CreditCard } from 'lucide-react';

const AdCompanyBilling = () => {
    return (
        <DashboardLayout userRole="advertising_company" userName="شركة النور للدعاية">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">المدفوعات والفواتير</h1>
                    <p className="text-gray-500 mt-2">إدارة مدفوعات التراخيص والفواتير المستحقة.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-primary text-white">
                        <CardHeader>
                            <CardTitle className="text-lg opacity-90">الرصيد المستحق</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">250,000 ر.ي</div>
                            <Button variant="secondary" className="w-full mt-4">
                                <CreditCard className="mr-2 h-4 w-4" />
                                دفع الآن
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>سجل الفواتير</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-gray-100 rounded">
                                            <Download className="h-6 w-6 text-gray-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold">فاتورة ترخيص #{202400 + i}</p>
                                            <p className="text-sm text-gray-500">يناير {10 + i}, 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold">120,000 ر.ي</p>
                                        <p className="text-xs text-green-600 font-medium">تم الدفع</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default AdCompanyBilling;
